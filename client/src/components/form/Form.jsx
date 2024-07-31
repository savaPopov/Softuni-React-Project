import React from 'react';
import styles from './Form.module.css';

export default function Form() {
  return (
    <div className={styles['form-container']}>
      <form className={styles.form}>
        <h2 className={styles['form-title']}>Register</h2>
        <div className={styles['form-group']}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <button type="submit" className={styles['form-button']}>Submit</button>
      </form>
    </div>
  );
}