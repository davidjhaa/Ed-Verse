// import React from 'react';
// import styles from './ContactForm.module.css';
// import image from '../../assets/contactlogo.jpg'

// const ContactForm = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.innerContainer}>
//         <div style={{position:'relative'}}>
//           <img src={image} style={{width:'700px', height:'580px' }}/>
//           <div className={styles.formWrapper}>
//           <h2 className={styles.heading}>Contact Us</h2>
//           <form>
//             <div className={styles.formGroup}>
//               <label className={styles.label} htmlFor="name">Your Name</label>
//               <input
//                 className={styles.input}
//                 placeholder="Enter your name"
//                 type="text"
//                 id="name"
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <label className={styles.label} htmlFor="email">Your Email</label>
//               <input
//                 className={styles.input}
//                 placeholder="Enter your email"
//                 name="email"
//                 id="email"
//                 type="email"
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <label className={styles.label} htmlFor="message">Your Message</label>
//               <textarea
//                 className={styles.textarea}
//                 rows="4"
//                 placeholder="Enter your message"
//                 name="message"
//                 id="message"
//               ></textarea>
//             </div>
//             <button className={styles.button} type="submit">Send Message</button>
//           </form>
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;

import React from 'react';
import styles from './ContactForm.module.css';
import image from '../../assets/contactlogo.jpg';

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imageContainer}>
          <img src={image} alt="Contact" className={styles.image} />
          <div className={styles.formWrapper}>
            <h2 className={styles.heading}>Contact Us</h2>
            <form>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Your Name</label>
                <input
                  className={styles.input}
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Your Email</label>
                <input
                  className={styles.input}
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  type="email"
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">Your Message</label>
                <textarea
                  className={styles.textarea}
                  rows="8"
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                ></textarea>
              </div>
              <button className={styles.button} type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
