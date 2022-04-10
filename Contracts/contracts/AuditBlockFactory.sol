// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./4_Dao.sol";




contract AuditERC20 is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        address _daoAddr
    ) ERC20(name, symbol) {
        // ERC20 tokens have 18 decimals
        // number of tokens minted = n * 10^18
        uint256 n = 1000;
        _mint(_daoAddr, n * 10**uint256(decimals()));
    }
}

contract AuditBlockFactory  {
    address public owner;
    address private masterDaoAddress;
    struct DaoStruct {
        string name;
        IERC20 token_address;
        address dao_address;
    }

   struct Rate {
       uint256 rate;
       address sender;
   }
    struct contributorStruct {
        address contributor_address;
        Rate[] rating;
    }
    mapping(address => contributorStruct) public contributors;
    mapping(address => mapping(address => uint256)) public isRated;
    mapping(address => DaoStruct) public daoDeatails;
    DaoStruct[] public daosArray;

    constructor( address _masterDaoAddress) {
        owner = msg.sender;
        masterDaoAddress = _masterDaoAddress;
    }

    function setMasterContract (address _masterDaoAddress) public {
        require(msg.sender == owner, "Only owner can set master contract");
        masterDaoAddress = _masterDaoAddress;
    }

    function rateContributor (uint256 _rate, address _emp) public {
        require(isRated[_emp][msg.sender] == 0, "You have already rated this employee");
        require(_rate <= 5, "Rating must be less than or equal to 5");
        isRated[_emp][msg.sender] = _rate;
        Rate memory _rateStruct = Rate(_rate, msg.sender);

      contributors[_emp].rating.push(_rateStruct);
    }

    function getRatingOfContributor(address _emp) public view returns (contributorStruct memory) {
        return contributors[_emp];
    }

    function createClone(address target) internal returns (address result) {
        bytes20 targetBytes = bytes20(target);
        assembly {
            let clone := mload(0x40)
            mstore(
                clone,
                0x3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000
            )
            mstore(add(clone, 0x14), targetBytes)
            mstore(
                add(clone, 0x28),
                0x5af43d82803e903d91602b57fd5bf30000000000000000000000000000000000
            )
            result := create(0, clone, 0x37)
        }
    }

    function createDaoWithTokenAddress(
        string memory _dao_name,
        address _token,
        address[] memory _addrs,
        string[] memory _empid
    ) public {
        require(
            _addrs.length == _empid.length,
            "Length of addresses and empids must be same"
        );
         
        address dao_address = createClone(masterDaoAddress);
        _createDao(dao_address, _dao_name, IERC20(_token), _addrs, _empid );
    }

     function createDaoAndToken(
        string memory _dao_name,
        address[] memory _addrs,
        string[] memory _empid,
        string memory tokenname_,
        string memory symbol_
    ) public {
        require(
            _addrs.length == _empid.length,
            "Length of addresses and empids must be same"
        );
         
        address dao_address = createClone(masterDaoAddress);
         AuditERC20 _token = new AuditERC20(tokenname_, symbol_, dao_address);
        
        _createDao(dao_address, _dao_name, _token, _addrs, _empid );
       
    }

    function _createDao (
        address dao_address, 
        string memory _dao_name,
        IERC20 _token,
        address[] memory _addrs,
        string[] memory _empid
     ) internal {

         Dao(dao_address).init(_dao_name, _token, _addrs, _empid);
        
        DaoStruct memory daoStruct = DaoStruct({
            name: _dao_name,
            token_address: _token,
            dao_address: dao_address
         });
        daoDeatails[dao_address] = daoStruct;
       daosArray.push(daoStruct);
    }

    function verifyEmployee(address _dao, address _emp) public view returns (string memory) {
        Dao dao = Dao(_dao);
        string memory id = dao.verifyContributor(_emp);
        return id;
    }

    function getDaoTokenBalance(address _dao) public view returns (uint256) {
        return daoDeatails[_dao].token_address.balanceOf(_dao);
    }

     function getContributorTokenBalance(address _dao, address _contributor) public view returns (uint256) {
        return daoDeatails[_dao].token_address.balanceOf(_contributor);
    }

   
    function getDaoName (address _dao) public view returns (string memory) {
        return Dao(_dao).getDaoName();
    }
    
 }
