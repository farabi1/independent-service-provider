import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>

            <div className=" bg-stone-100 mx-20 p-5 border rounded-md shadow-sm my-14">
                <h1 className=' text-2xl text-indigo-800'> Question 1: Difference between authorization and authentication</h1><br />
                <h1>Authentication verifies who the user is.	Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user </h1>
                <h1 >Authorization determines what resources a user can access.
                    Authorization works through settings that are implemented and maintained by the organization</h1>
                <br />
                <h1 className=' text-2xl text-indigo-800'>Question 2: What other services does firebase provide other than authentication</h1> <br />
                <h1>Parse - Open Source Backend Platform;<br />
                    Back4app - Parse Hosting Platform;<br />
                    Kinvey - Mobile Backend as a Service (mBaaS) for the Enterprise;<br />
                    Backendless - Mobile Backend and API Services Platform;<br />
                    Kuzzle - Backend for web, hybrid, or native mobile apps and IoT projects</h1><br />

                <h1 className=' text-2xl text-indigo-800'>Question 3: Why are you using firebase? What other options do you have to implement authentication?</h1> <br />

                <h1>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</h1><br />

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;