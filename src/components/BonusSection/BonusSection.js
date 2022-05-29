import React from 'react';

const BonusSection = () => {
    return (
        <div className='grid grid-cols-2  bg-gray-200 '>

            <div className="">
                <img src="https://i.ibb.co/LvR8D3r/pen-handwriting-ftr.jpg" alt="Cloth WareHouse" />
            </div>
            <div className="flex justify-center items-center">
                <div className="mx-10">
                    <h1 className=" text-teal-800 font-bold text-4xl  p-2" to='/'>What is Graphology?</h1>
                    <p className=" font-bold text-2xl p-2 my-5 rounded-md">
                        Graphology is the study of personality through the analysis of handwriting, and it provides a psychological picture of the writer as unique as fingerprints.

                        As professional graphologists, trained in analytical psychology, we translate hundreds of graphic indicators into an accurate interpretation of the writer’s character, personal qualities, aptitudes and potential. Beneficial for both personal and professional use, it can pinpoint invaluable information about the writer’s talents or problem areas which are less evident from other personality tests. </p>
                    <button className=' bg-emerald-400 hover:bg-emerald-500 text-white px-3 py-2 mx-2 rounded-lg text-lg font-bold '>Learn More</button>

                </div>
            </div>
        </div>
    );
};

export default BonusSection;