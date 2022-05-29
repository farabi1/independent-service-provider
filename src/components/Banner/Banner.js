import React from 'react';


const Banner = () => {
    return (
        <div className='grid grid-cols-2  bg-gray-200 '>
            <div className="flex justify-center items-center">
                <div className="mx-10">
                    <h1 className=" text-teal-800 font-bold text-4xl  p-2" to='/'>The Graphology Consultancy</h1>
                    <p className=" font-bold text-2xl p-2 my-5 rounded-md">Providing expert handwriting analysis and advice for business and <span className='text-teal-500'>Self-knowledge</span> </p>
                    <button className=' bg-emerald-400 hover:bg-emerald-500 px-3 py-2 mx-2 rounded-lg text-lg font-bold '>Learn More</button>

                </div>
            </div>
            <div className="">
                <img src="https://i.ibb.co/t3x73mc/writing-with-a-pen.png" alt="Cloth WareHouse" />
            </div>
        </div>
    );
};

export default Banner;

//
// self-knowledge
// The Graphology Consultancy

//  