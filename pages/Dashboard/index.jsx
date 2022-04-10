// import '../bootstrap/css/bootstrap.css'
import styles from './dashboard.module.css';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material/Button';

export default function DashBoard(dao) {
    const options = {
        value: dao.rating,
        readOnly: true,
        precision: 0.5,
      };

    return(
        
<body className={styles.container}>
       <h2> Daos</h2>

      <div className={styles.navbar}>
      </div>

      <div className={styles.profileSection}>
          <div className={styles.coverImage}></div>
          <div className={styles.profileImage}>
               <img src="https://media.glassdoor.com/sql/13461/tata-consultancy-services-squareLogo-1634801936555.png"/>
          </div>
      </div>
      <button className={styles.btns} >Contribute</button>
        <h2> Dao OverViews</h2>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

      <div className={styles.navbar} class='row'>
          <ul className={styles.ul}>
              <li>Dao
                  <ul className={styles.submenu}> 
                      <li>Site</li>
                      <li>Work</li>
                  </ul>
              </li>
          
          <li>Rating
                  <ul className={styles.submenu}> 
                      <li>Reputation</li>
                      <li>Support</li>
                  </ul>
              </li>
          </ul>    
      </div>

       <div>
      <Stack spacing={2} className={styles.button1} >
       {/* <Button class='button' variant="contained">Contributers</Button> */}
       <button variant="outlined">Contributions</button>
    </Stack>
    </div> 
    

        <div className={styles.description}>
            <h2> Description in Detail</h2>
            <ul>
                <li>website</li>
                <li>location</li>
                <li>Domain</li>
                <li>Contributers</li>
                <li>Worth</li>
            </ul>
        </div>
        
        <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    </Stack>
    
        {/* <div className="daoCard">
      <img src={"https://media.glassdoor.com/sql/13461/tata-consultancy-services-squareLogo-1634801936555.png"} alt="User" />
      <p>{dao.name}</p> */}
      {/* <Rating {...options} /> */}
      {/* <span className="daoCardComment">{dao.comment}</span> */}
    {/* </div> */}

</body>
)}