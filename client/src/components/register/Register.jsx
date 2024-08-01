import React from 'react';
import styles from './Register.module.css';

export default function Register() {
  return (
    <div className={styles['form-container']}>
      <form className={styles.form}>
        <h2 className={styles['form-title']}>Register</h2>
        <div className={styles['form-group']}>
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Repass</label>
          <input
            type="password"
            id="repass"
            name="repass"
            required
          />
        </div>
        <button type="submit" className={styles['form-button']}>Register</button>
      </form>
    </div>
  );
}