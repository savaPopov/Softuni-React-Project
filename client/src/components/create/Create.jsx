import { useNavigate } from 'react-router-dom';
import styles from './Create.module.css';
import { useForm } from '../../hooks/useForm';
import { create } from '../../api/data-api';
import { useState } from 'react';
import { extractCoordinates } from '../../util';

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
      let title = values.title.trim()
      let elavation = values.elavation.trim()
      let distance = values.distance.trim()
      let imageUrl = values.imageUrl.trim()
      let mountain = values.mountain.trim()
      let description = values.description.trim()
      let location = values.location.trim()

      const errors = []
      const newFieldsWithError = {}

      if (!title) {
        errors.push('Title is required.');
        newFieldsWithError.title = true;
      }
      if (!elavation) {
        errors.push('Elevation is required.');
        newFieldsWithError.elavation = true;
      }
      if (!distance) {
        errors.push('Distance is required.');
        newFieldsWithError.distance = true;
      }
      if (!imageUrl) {
        errors.push('Image URL is required.');
        newFieldsWithError.imageUrl = true;
      }
      if (!mountain) {
        errors.push('Mountain is required.');
        newFieldsWithError.mountain = true;
      }
      if (!location) {
        errors.push('Location is required.');
        newFieldsWithError.location = true;
      }

      if (elavation > 10002) {
        errors.push('Elavation needs to be below 10000m')
        newFieldsWithError.elavation = true;
      }

      if (distance > 1000) {
        errors.push('The distance needs to be lower than 1000 hours')
        newFieldsWithError.distance = true;
      }

      let place = extractCoordinates(location)

      if (!place) {
        throw new Error('Location needs to be valid')
      }

      if (description.length < 4) {
        throw new Error('Description must be longer than 4 charachters')
      }


      const result = create({ title, elavation, distance, imageUrl, mountain, description, location })
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
          <label htmlFor="username">Title of the Hija</label>
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
          <label htmlFor="email">Elavation of the Hija</label>
          <input
            type="number"
            min="0"
            id="elavation"
            name="elavation"
            value={values.elavation}
            onChange={changeHandler}
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