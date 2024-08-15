import React, { useState } from 'react';
import styles from './Register.module.css';
import { useRegister } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
const initialValues = { email: '', password: '', repass: '' }


export default function Register() {
  const [err, setErr] = useState('')
  const register = useRegister()
  const navigate = useNavigate()

  async function registerHandler(values) {

    try {
      let password = values.password.trim()
      let repass = values.repass.trim()
      let email = values.email.trim()

      if (!password || !repass || !email) {
        throw new Error('All fields must be filled ')
      }

      if (password != repass) {
        throw new Error('Password Must Match Repass')
      }

      if (password.length < 3) {
        throw new Error('Password must be at least 3 charachters')
      }
  

      await register(email, password)
      navigate('/')
    } catch (err) {
      setErr(err.message)

    }

  }

  const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler)

  return (
    <div className={styles['form-container']}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2 className={styles['form-title']}>Register</h2>
        <div className={styles['form-group']}>
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Repass</label>
          <input
            type="password"
            id="repass"
            name="repass"
            value={values.repass}
            onChange={changeHandler}
            required
          />
        </div>
        <button type="submit" className={styles['form-button']}>Register</button>
      </form>
      {err && (
        <p className={styles['error-message']}>{err}</p>)}
    </div>

  );
}