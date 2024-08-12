import styles from './Login.module.css';
import { useLogin } from "../../hooks/useAuth";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import { useState } from 'react';

const initialValues = { email: '', password: '' }

export default function Login() {
  const login = useLogin()
  const navigate = useNavigate()
  const [err, setErr] = useState('')

  const loginHandler = async ({ email, password }) => {
    console.log(email, password)
    try {
      //  email = email.trim()
      //  password = password.trim()


      await login(email, password)
      navigate('/')
    } catch (err) {
      console.log(email, password)
      setErr(err.message)
      console.log(err.message)
    }
  }


  const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler)
  return (
    <div className={styles['form-container']}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2 className={styles['form-title']}>Login</h2>
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
        <button type="submit" className={styles['form-button']}>Login</button>
      </form>
      {err && (
        <p className={styles['error-message']}> {err} </p>)
      }
    </div>


  )
}