import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/Surah.css"

function Surah() {
  const { surahNumber } = useParams(); 
  const [ayahs, setAyahs] = useState([]);
  const [surahName, setSurahName] = useState('');

  useEffect(() => {
    async function fetchAyahs() {
      const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
      const result = await response.json();
     console.log(result.data)
      setAyahs(result.data.ayahs); 
      setSurahName(result.data.name)
    }
    fetchAyahs();
  }, [surahNumber]); 
  return (
    <div className="content">
      <h1 className='surahName'> { surahName } </h1>
      <ul>
      {}
        {ayahs.map((ayah) => (
          <li key={ayah.numberInSurah}>
            <p className='ayah'><b className='ayahNum'> {ayah.numberInSurah} </b> {ayah.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Surah;
