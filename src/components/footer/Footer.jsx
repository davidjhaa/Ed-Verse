import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import styles from './Footer.module.css'; 

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div style={{backgroundColor:'pink'}}>
        <div className={styles.container}>  
            <p className={styles.pt2}>
                <strong>Sign up for our newsletter</strong>
            </p>            
            <input type='text' label='Email address' />
            <button>Subscribe</button>
        </div>
      </div>
      <div className={styles.textCenter}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className={styles.textDark} href='https://mdbootstrap.com/'>
          EdPro.com
        </a>
      </div>
    </div>
  );
}
