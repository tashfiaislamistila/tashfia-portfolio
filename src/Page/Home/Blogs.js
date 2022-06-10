import React from 'react';
import comingsoon from '../../assets/comingsoon.jpg'

const Blogs = () => {
    return (
        <div >
            <div className='container px-16'>
                <img className='m-14' style={{ height: "500px", width: "1000px" }} src={comingsoon} alt="" />
            </div>
        </div>
    );
};

export default Blogs;