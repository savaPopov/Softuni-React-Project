import { useNavigate } from 'react-router-dom';
import styles from './Create.module.css';
import { useForm } from '../../hooks/useForm';
import { create } from '../../api/data-api';

let initialValues = {
  title: '',
  elavation: '',
  distance:'',
  imageUrl: '',
  mountain: '',
  description: '',
  lat: '',
  lng: ''
}


export default function Create() {
  const navigate = useNavigate()

  async function createHandler(values) {
    console.log(values)


    try {
      const result =  await create(values)
      navigate('/catalog')
    } catch (err) {
      console.err(err.message)
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
          <label htmlFor="password">Lat</label>
          <input
            type="text"
            id="lat"
            name="lat"
            value={values.lat}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Lng</label>
          <input
            type="text"
            id="lng"
            name="lng"
            value={values.lng}
            onChange={changeHandler}
            required
          />
        </div>

        <button type="submit" className={styles['form-button']}>Create!</button>
      </form>
      <p><span>Error</span></p>
    </div>
  )
}