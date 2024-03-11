import React, { useState, useEffect} from 'react';
import {  useParams } from 'react-router-dom';
import "../../styles/content_detail.scss";
import axios from 'axios';

function ContentDetail(props) {
  const [data, setData] = useState([]);



  const { id } = useParams();
  

useEffect(() => {
    async function getMovieById() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=es-CO`, {
          headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWNlNmZhNzgyMzlhYzNhNDkxZWMyNmUzMGEyZWNkZSIsInN1YiI6IjY1ZWUwZjgzOTBmY2EzMDE4NjRjNTMzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1ZqqEiL6Q8cCX9PUWOIQRmE_ojnLwuXJ7Huc19NAm-M`
          }
        });
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovieById();
  }, []);  

  return (
    <div className="content-detail">
      <h1>{data.title}</h1>
      <div className="content-detail__main">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/GBexfwe-9j0?si=6T6OyudtBIDJm1qQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <h5>Descripción</h5>
      <p>{data.overview}</p>
      <h5>Fecha de lanzamiento</h5>
      <p>{data.release_date}</p>
      <h5>Popularidad</h5>
      <p>{data.popularity}</p>
      </div>
    </div>
  );
}

export default ContentDetail;