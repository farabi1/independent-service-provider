import React from 'react';
import useMyData from '../../Custom Hook/useMyData';
import CardItem from './CardItem';

const Cards = () => {
    const [data, setData] = useMyData();
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-7'>
            {
                data.map(data => <CardItem key={data.id} data={data}></CardItem>)
            }
        </div>
    );
};

export default Cards;