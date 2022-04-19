import React from 'react';
import CardItem from '../Cards/CardItem';
import './Home.css';
import useMyData from '../../Custom Hook/useMyData';


const Home = () => {

    const [data, setData] = useMyData();


    return (
        <div className='home'>
            {
                data.map(review => <CardItem key={data.id} data={data}></CardItem>)
            }
        </div>
    );
};

export default Home;