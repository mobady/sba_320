import { useEffect, useState } from "react";

function App() {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.alquran.cloud/v1/meta");
      const result = await response.json();
      console.log(result);
      setSurahs(result.data.surahs.references); // Save the 'surahs.references' array
    }

    fetchData();
  }, []);

  return (
    <div className="content">
      <h1>Quran Surahs</h1>
      <ul>
        {surahs.map((surah) => (
          <li key={surah.number}>
            <h2>{surah.englishName} - {surah.name}</h2>
            <p>Translation: {surah.englishNameTranslation}</p>
            <p>Number of Ayahs: {surah.numberOfAyahs}</p>
            <p>Revelation Type: {surah.revelationType}</p>
            <button onClick={() => alert(`You selected Surah ${surah.englishName}`)}>
              Read Surah {surah.englishName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
