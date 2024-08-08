import React from "react";
import styles from "./course.module.css";
import pic from "../../assets/img/musicapp.png";

export default function Course() {
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles.content}>
          <div>
            <img src={pic} className={styles.thumbnail} />
          </div>
          <h3>Full stack Twitter clone</h3>
          <p>Build full stack Twitter clone using latest tech stack</p>
          <div></div>
        </div>
      </div>
    </div>
  );
}
