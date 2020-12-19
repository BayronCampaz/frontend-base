import React, { useState, useEffect, Fragment } from 'react';
import Form from './components/Form'
import './App.css';
import axios from 'axios';
import Lyrics from './components/Lyrics';

function App() {

  const [search, saveSearch] = useState({
    artist: '',
    title: ''
  });
  const [consult, saveConsult] = useState(false);
  const [result, saveResult] = useState({});
  const [error, saveError] = useState(false);
  const [resultTranslate, saveResultTranslate] = useState({});

  const { artist, title } = search;

  useEffect(() => {
    const consultAPI = async () => {

      if (consult) {
        let query = `https://api.lyrics.ovh/v1/${artist.replace(' ', '%20')}/${title.replace(' ', '%20')}`
        const api = await fetch(query);
        const song = await api.json()
        saveResult(song);
        saveConsult(false);

      }
    }
    consultAPI();
    // eslint-disable-next-line
  }, [consult]);


  let component;
  if(error || result.lyrics === "") {
    component = <p className="alert alert-warning">No hay resultados para la busqueda</p> 
  } else {
    component = <Lyrics result={result}/>
  }

  return (
    <div className="container m-5">
      <h1>Lyrics Finder</h1>
      <div className="container">
        <Form
          search={search}
          saveSearch={saveSearch}
          saveConsult={saveConsult}
        />
        {component}
      </div>
    </div>
  );
}

export default App;
