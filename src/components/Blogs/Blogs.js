import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
                <h1>Question 1: Difference between authorization and authentication</h1>
                <h3>Authentication verifies who the user is.	Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user</h3> <br />
                <h3>Authorization determines what resources a user can access.
                    Authorization works through settings that are implemented and maintained by the organization</h3>
            </div>
            <div>
                <h1>Question 2: What other services does firebase provide other than authentication</h1>
                <h3>Parse - Open Source Backend Platform;<br />
                    Back4app - Parse Hosting Platform;<br />
                    Kinvey - Mobile Backend as a Service (mBaaS) for the Enterprise;<br />
                    Backendless - Mobile Backend and API Services Platform;<br />
                    Kuzzle - Backend for web, hybrid, or native mobile apps and IoT projects</h3>
            </div>
        </div>
    );
};

export default Blogs;