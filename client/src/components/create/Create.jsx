import { useNavigate } from 'react-router-dom';
import styles from './Create.module.css';
import { useForm } from '../../hooks/useForm';
import { create } from '../../api/data-api';
import { useState } from 'react';

let initialValues = {
  title: '',
  elavation: '',
  distance: '',
  imageUrl: '',
  mountain: '',
  description: '',
  location: '',
}


export default function Create() {
  const navigate = useNavigate()
  const [err, setErr] = useState('')

  async function createHandler(values) {
    console.log(values)


    try {
      const result = await create(values)
      navigate('/catalog')
    } catch (err) {
      setErr(err.message)
    }
  }

  const { changeHandler, values, submitHandler } = useForm(initialValues, createHandler)


  return (
    <div className={styles['form-container']}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2 className={styles['form-title']}>Create Hike</h2>
        <div className={styles['form-group']}>
          <label htmlFor="username">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="email">Elavation</label>
          <input
            type="text"
            id="elavation"
            name="elavation"
            value={values.elavation}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Distance</label>
          <input
            type="text"
            id="distance"
            name="distance"
            value={values.distance}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Image Url</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={values.imageUrl}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Mountain</label>
          <input
            type="text"
            id="mountain"
            name="mountain"
            value={values.mountain}
            onChange={changeHandler}
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="password">Description</label>
          <textarea
            name="description"
            value={values.description}
            onChange={changeHandler}
            id="description" />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Location(coordinates,Google Maps URL,etc...)</label>
          <input
            type="text"
            id="location"
            name="location"
            value={values.location}
            onChange={changeHandler}
            required
          />
        </div>

        <button type="submit" className={styles['form-button']}>Create!</button>
      </form>
      {err && (
        <p className={styles['error-message']}>{err}</p>)}
    </div>
  )
}