import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles['about-container']}>
      <h1 className={styles['about-title']}>About Us</h1>
      <p className={styles['about-text']}>
        Bulgaria's mountain huts are more than just places to rest: they are essential landmarks in the journey of every hiker exploring the country’s breathtaking wilderness. Tucked away in the remote corners of Bulgaria's majestic ranges, these huts serve as sanctuaries of warmth and comfort amidst the rugged terrain. Each hut is unique, carrying a rich history that echoes the tales of past adventurers and the natural beauty that surrounds it.

        For generations, these huts have been integral to the Bulgarian hiking experience. They offer more than just shelter; they provide an opportunity to immerse oneself in the untouched beauty of Bulgaria's mountains, from the towering peaks of Rila and Pirin to the rolling ridges of the Balkan Range. Whether you're seeking a peaceful retreat or a base for more challenging climbs, the huts are a gateway to the wild and wonderful landscapes that make Bulgaria a hiker's paradise.

        Beyond their practical function, the huts are a testament to Bulgarian hospitality. Many are managed by local hosts who welcome travelers with open arms, offering a taste of traditional Bulgarian cuisine and a glimpse into mountain life. Here, the simplicity of nature is paired with the warmth of human connection, making every stay at a mountain hut a memorable experience.

        These huts also play a crucial role in preserving the natural environment. By providing designated places for overnight stays, they help minimize the impact on the delicate ecosystems that thrive in Bulgaria’s mountains. They are not just places to stay—they are guardians of the wilderness, ensuring that the beauty of these landscapes can be enjoyed by future generations.

        In a world that often moves too fast, Bulgaria’s mountain huts invite you to slow down, to breathe in the crisp mountain air, and to reconnect with the natural world. They are not merely destinations, but part of the journey—a journey that celebrates the timeless allure of Bulgaria's mountains and the enduring spirit of those who explore them.
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