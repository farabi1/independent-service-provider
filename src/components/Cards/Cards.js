import React from 'react';
import useMyData from '../../Custom Hook/useMyData';
import CardItem from './CardItem';

const Cards = () => {
    const [data, setData] = useMyData();
    return (
        <div>
            {
                data.map(data => <CardItem key={data.id} data={data}></CardItem>)
            }
        </div>
    );
};

export default Cards;