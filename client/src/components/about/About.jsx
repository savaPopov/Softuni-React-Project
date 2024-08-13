import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles['about-container']}>
      <h1 className={styles['about-title']}>About Us</h1>
      <p className={styles['about-text']}>
        Welcome to our website! We are a community of nature enthusiasts who are passionate about exploring the great outdoors. Our mission is to provide you with the best information and resources to help you enjoy your adventures to the fullest.
      </p>
      <p className={styles['about-text']}>
        Whether you're looking for hiking trails, camping tips, or just want to learn more about the natural world, we've got you covered. Join us in our journey to discover the beauty of nature!
      </p>
      <div className={styles['about-image-container']}>
        <img
          src="https://www.sofiadaytours.com/wp-content/uploads/2023/10/Rila-Resized.jpg"
          alt="Nature"
          className={styles['about-image']}
        />
      </div>
    </div>
  );
}