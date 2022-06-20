import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import style from './Tourse.module.css';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [laoding, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log('data:', data);
      setData(data);
      setLoading(false);
    } catch (err) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (laoding) {
    return <Loading />;
  }
  if (data.length == 0) {
    return (
      <main>
        <h1>NoTourse</h1>
        <button onClick={() => fetchData(data)} className={style.btn}>
          Refresh
        </button>
      </main>
    );
  }
  const henadleRemove = (id) => {
    const newitem = data.filter((item) => item.id !== id);
    setData(newitem);
  };

  const handleclick = () => {
    console.log('hi');
    setData(data);
  };
  return (
    <main>
      <Tours data={data} henadleRemove={henadleRemove} />
    </main>
  );
}

export default App;
