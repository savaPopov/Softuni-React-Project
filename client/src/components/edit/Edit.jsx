import styles from './Edit.module.css';

import { update } from '../../api/data-api';

import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/AuthContext';
import { useGetOneHike } from '../../hooks/useHikes';
import { useEffect, useState } from 'react';
import { useValidate } from '../../hooks/useValidate';


export default function Edit() {

  const navigate = useNavigate()
  const { hikeId } = useParams()
  const [hike] = useGetOneHike(hikeId)
  const { userId } = useAuthContext()
  const { err, fieldsWithErrors, validate } = useValidate()
  const [apiErr, setApiErr] = useState('')
  const { localLogout } = useAuthContext()


  useEffect(() => {
    if (hike._ownerId == undefined) {
      return
    }

    if (hike._ownerId != userId) {
      navigate('/')
    }

  }, [[hike._ownerId, userId, navigate]])

  async function editHandler(values) {
    const isConfirmed = confirm(`Are you sure you want to update this hike?`)

    if (!isConfirmed) {
      return;
    }

    const trimmedData = validate(values)

    if (!trimmedData) {
      return
    }


    try {
      const updatedHike = await update(hikeId, trimmedData)

      navigate(`/details/${hikeId}`)
    } catch (err) {
      if (err.message == 'Unauthorized') {
        localLogout()
        navigate('/login')
      }
      setApiErr(err.message)
    }

  }

  const { changeHandler, submitHandler, values } = useForm(hike, editHandler, true)
  return (
    <div className={styles['form-container']}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2 className={styles['form-title']}>Edit Hike</h2>
        <div className={styles['form-group']}>
          <label htmlFor="username">Title of the Hija</label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title || ''}
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
            value={values.elavation || ''}
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
            value={values.distance || ''}
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
            value={values.imageUrl || ''}
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
            value={values.mountain || ''}
            onChange={changeHandler}
            className={fieldsWithErrors.mountain ? styles.errorInput : ''}
            required
          />
        </div>

        <div className={styles['form-group']}>
          <label htmlFor="password">Description</label>
          <textarea
            className={fieldsWithErrors.description ? styles.errorInput : ''}
            name="description"
            value={values.description || ''}
            onChange={changeHandler}
            id="description" />

        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Location(coordinates,Google Maps URL,etc...)</label>
          <input
            type="text"
            id="location"
            name="location"
            value={values.location || ''}
            onChange={changeHandler}
            className={fieldsWithErrors.location ? styles.errorInput : ''}
            required
          />
        </div>


        <button type="submit" className={styles['form-button']}>Edit!</button>
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