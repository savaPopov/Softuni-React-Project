import { useEffect, useState } from "react";
import styles from './Search.module.css';
import { getAll } from "../../api/data-api";
import HomeItem from "../home/homeItem/HomeItem";
export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [hikes, setHikes] = useState([])
  useEffect(() => {
    async function fetchData() {
      const data = await getAll()
      setHikes(data)

    }
    fetchData()

  }, [])



  const handleSearchChange = (e) => {
    e.preventDefault();

    setSearchQuery(e.target.value)

  };

  const filteredData = searchQuery.length >= 2
    ? hikes.filter((hike) =>
      hike.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : hikes

  return (
    <>
      <div className={styles['form-container']}>
        <form className={styles.form} method="get" name="search-form">
          <h2 className={styles['form-title']}>Search Hikes</h2>
          <input
            type="text"
            id="search"
            className={styles['form-group']}
            placeholder="Search for recipes..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
      </div>

      <section id="sidebar">
        <div className="mini-posts">
          {filteredData.length > 0 ? filteredData.map(hike => <HomeItem key={hike._id} {...hike} />) : <h1 className="no-articles">No Hikes match your criteria</h1>}
        </div>
      </section>

    </>
  );
}
