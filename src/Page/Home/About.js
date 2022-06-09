import React from 'react';
import picture from '../../assets/mypicture.jpg'
const About = () => {
    return (
        <div id="about" class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img style={{ height: "500px" }} src={picture} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-2xl font-bold">Hello!</h1>
                    <h1 class="text-5xl font-bold">I am Tashfia Islam</h1>
                    <p class="py-8 text-2xl">I am a Junior Web developer and I like to code simple beutiful websites.</p>
                    <button class="btn btn-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;