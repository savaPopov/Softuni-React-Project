import { useNavigate } from 'react-router-dom';
import styles from './Create.module.css';
import { useForm } from '../../hooks/useForm';
import { create } from '../../api/data-api';
import { useState } from 'react';
import { useValidate } from '../../hooks/useValidate';

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
  const [apiErr, setApiErr] = useState('')
  const { err, fieldsWithErrors, validate } = useValidate()

  async function createHandler(values) {
    const trimmedData = validate(values)

    if (!trimmedData) {
      return
    }

    try {
      const result = await create(trimmedData)
      navigate('/catalog')
    } catch (err) {
      setApiErr(err.message)
    }
  }

  const { changeHandler, values, submitHandler } = useForm(initialValues, createHandler)


  return (
    <div className={styles['form-container']}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2 className={styles['form-title']}>Create Hike</h2>
        <div className={styles['form-group']}>
          <label htmlFor="username">Title of the Hija</label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={changeHandler}
            className={fieldsWithErrors.title ? styles.errorInput : ''}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="email">Elavation of the Hija</label>
          <input
            type="number"
            min="0"
            id="elavation"
            name="elavation"
            value={values.elavation}
            onChange={changeHandler}
            className={fieldsWithErrors.elavation ? styles.errorInput : ''}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Distance in hours</label>
          <input
            type="number"
            min="0"
            id="distance"
            name="distance"
            value={values.distance}
            onChange={changeHandler}
            className={fieldsWithErrors.distance ? styles.errorInput : ''}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Image Url</label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={values.imageUrl}
            onChange={changeHandler}
            className={fieldsWithErrors.imageUrl ? styles.errorInput : ''}
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
            className={fieldsWithErrors.mountain ? styles.errorInput : ''}
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="password">Description</label>
          <textarea
            name="description"
            value={values.description}
            onChange={changeHandler}
            className={fieldsWithErrors.description ? styles.errorInput : ''}
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
            className={fieldsWithErrors.location ? styles.errorInput : ''}
            required
          />
        </div>

        <button type="submit" className={styles['form-button']}>Create!</button>
      </form>

      {err.length > 0 && (
        <ul>
          {err.map((error, index) => (
            <p key={index} className={styles['error-message']}>{error}</p>
          ))}
        </ul>
      )}
      {apiErr && (
        <p className={styles['error-message']}><b>Api Error:</b>{apiErr}</p>
      )}

    </div>
  )
}