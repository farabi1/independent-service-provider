import React from 'react';


const CardItem = (props) => {
    const { name, img, text } = props.data;
    return (
        <div>
            <h1>
                < img src={img} />

                <h3>{name}</h3>
                <h3>{text}</h3>
                <h3>{text}</h3>

            </h1>
        </div>
    );
};

export default CardItem;