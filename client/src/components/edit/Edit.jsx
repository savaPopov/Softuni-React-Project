import styles from './Edit.module.css';

import { update } from '../../api/data-api';

import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuthContext } from '../../contexts/AuthContext';
import { useGetOneHike } from '../../hooks/useHikes';
import { useEffect } from 'react';

export default function Edit() {

  const navigate = useNavigate()
  const { hikeId } = useParams()
  const [hike] = useGetOneHike(hikeId)
  const { userId } = useAuthContext()

  useEffect(() => {
    if (hike._ownerId == undefined) {
      return
    }

    if (hike._ownerId != userId) {
      navigate('/')
    }

  }, [[hike._ownerId, userId, navigate]])





  async function editHandler(values) {
    //TODO modal
    const isConfirmed = confirm(`Are you sure you want to update this hike?`)
    console.log(values)
    if (isConfirmed) {
      //TODO error handling
      const updatedHike = await update(hikeId, values)
      navigate(`/details/${hikeId}`)
    }
  }

  const { changeHandler, submitHandler, values } = useForm(hike, editHandler, true)
  return (
    <div className={styles['form-container']}>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2 className={styles['form-title']}>Edit Hike</h2>
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

        <button type="submit" className={styles['form-button']}>Edit!</button>
      </form>
      <h4>Error</h4>
    </div>
  )
}