import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        toast.success("Your mail sent to authority");
    };
    return (
        <div>
            <Header></Header>
            <div className="flex justify-center my-20 w-4/5 mx-auto ">
                <div className=" grid grid-cols-2 bg-base-100 shadow-lg bg-slate-100 py-10 px-5 rounded-md">
                    <div className="">
                        <figure><img className=' object-contain h-80 w-96 ' src="https://i.ibb.co/f9jvNNz/Graphology.jpg" alt="Graphology" /></figure>
                    </div>
                    <div >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label className="text-left">Email :</label>
                            <input

                                type='email' name='email' placeholder='Email'
                                className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"
                                {...register("email")}

                            />
                            <label className="text-left">Text :</label>
                            <input

                                type='text' name='text' placeholder='text'
                                className="w-full p-2 border-2 rounded-md outline-none text-sm mb-4 mt-2"
                                {...register("text")}

                            />


                            <input className=" bg-teal-500 hover:bg-teal-600 text-lg text-white py-2 px-4 w-full rounded-md mt-5" type="submit" value="Send Mail" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;