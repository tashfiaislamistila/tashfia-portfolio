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
                    <p class="py-8 text-2xl">I am a MERN stack web developer trying to gain confidence using my potential in the field of “Web Development”. I will express my innovative creative skills for self and company growth.</p>
                    <div>
                        <button class="btn btn-outline btn-primary mx-2"><a href='https://drive.google.com/file/d/16tn4DlMUTwzH1wSMEY74uDiMNFEP4hr3/view?usp=sharing' alt='resume link'>Resume</a></button>
                        <button class="btn btn-outline btn-secondary"><a href='https://www.linkedin.com/in/tashfia-islam/' alt='resume link'>Linkdin</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;