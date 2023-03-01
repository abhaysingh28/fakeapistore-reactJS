import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import "./Home.css"

const Home = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setdata(data);
    console.log(data);
    setloading(false);
  }
  return (
    <>
      <div className="home">
      <h6>NEW IN TOP BRANDS</h6>

        {
          loading ? <Loader /> :
          data.map((e, i) => (
            <div  key={i} className="home__container">
              <img className='home__containerImage' onClick={()=>navigate(`/single/${e.id}`)} src={`${e.image}`}
               alt="" />
               <div className="homeContainerTitle">

               <h1>{e.title }</h1>
               </div>
            </div>
          ))
        }

      </div>

    </>
  );
}

export default Home;
