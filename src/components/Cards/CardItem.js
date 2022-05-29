import React from 'react';
import { useNavigate } from 'react-router-dom';


const CardItem = (props) => {
    const { name, img, text } = props.data;

    const navigate = useNavigate();

    const toCheckoutPage = () => {
        navigate(`/checkout`);
    }
    return (
        <div className='my-6 bg-emerald-100 shadow-xl border rounded-lg'>

            <div className="flex justify-center mb-2">
                <img className="py-8" src={img} alt="a" />
            </div>

            <div className="grid grid-cols-1">
                <div className="mx-16">
                    <h1 className='text-2xl'>Name: {name}</h1>
                    <h1>{text}</h1>

                </div>
                <div className="flex items-end justify-center">
                    <button onClick={() => toCheckoutPage()} className='bg-indigo-500 hover:bg-indigo-600 w-full py-2 px-4 border rounded-md font-semibold text-2xl text-white mx-2 mb-4' >Get Appointment</button>
                </div>
            </div>

        </div>
    );
};

export default CardItem;