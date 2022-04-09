// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Dao {
    string public  dao_name;
    mapping(address => string) public  contributors;
    IERC20 public  token;

    function init (string memory _dao_name, IERC20 _token, address[] memory _addrs, string[] memory _empid ) public {
        dao_name = _dao_name;
        token = _token;
        uint256 total_supply = _token.totalSupply();
        require(_addrs.length == _empid.length, "Length of addresses and empids must be same");
        require(total_supply >= _addrs.length, "Total supply must be greater than or equal to the number of addresses");
        for (uint i = 0; i < _addrs.length; i++) {
            contributors[_addrs[i]] = _empid[i];
            _token.transferFrom( address(this) ,_addrs[i], 100);
        }
    }

    function verifyContributor(address _addr) public view returns (string memory) {
        return contributors[_addr];
    }

    function tokenBalance() public view returns (uint256) {
        return token.balanceOf(address(this));
    }
}