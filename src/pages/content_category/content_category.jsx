import React, { useState, useEffect} from 'react';
import {  useParams } from 'react-router-dom';
import "../../styles/content_category.scss";
import List from '../../components/shared/list';
import axios from 'axios';

function ContentCategory(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/account/21087632/watchlist/movies?language=es-CO&page=1&sort_by=created_at.asc", {
          headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWNlNmZhNzgyMzlhYzNhNDkxZWMyNmUzMGEyZWNkZSIsInN1YiI6IjY1ZWUwZjgzOTBmY2EzMDE4NjRjNTMzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ZqqEiL6Q8cCX9PUWOIQRmE_ojnLwuXJ7Huc19NAm-M`
          }
        });
        setData(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
  }, []); // Se pasa un arreglo vacío como segundo argumento para que useEffect se ejecute solo una vez al montar el componente.

  const { name } = useParams();

  return (
    <div className="content-category">
      <h1>{name}</h1>
      <div className="content-category__main">
        <List data={data} />
      </div>
    </div>
  );
}

export default ContentCategory;