import React from 'react';
import picture2 from '../../assets/my-picture2.jpg'
import Typical from 'react-typical'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub, falinkedin } from '@fortawesome/free-brand-svg-icons';

const About = () => {
    return (
        <div id="about" class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img style={{ height: "500px" }} src={picture2} class="max-w-sm rounded-full shadow-2xl " />
                <div>
                    <h1 class="text-2xl font-bold">Hello!</h1>
                    <h1 class="text-5xl font-bold">I am Tashfia Islam</h1>
                    <h1 class="text-4xl mt-4 text-error ">
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'Web Developer',
                                1000,
                                'MERN Stack Developer',
                                1000,
                                'React Developer',
                                1000,
                                'Javascript Developer',
                                1000,
                                'Frontend Developer',
                                1000,
                                'Programmer',
                                1000
                            ]}
                        />
                    </h1>
                    <p class="py-8 text-2xl">I am a self-curious web developer trying to gain confidence using my potential in the field of “Web Development”. I will express my innovative creative skills for self and company growth.
                        I am excited to start my career as a web developer as well as to enhance my workplace and reputation day by day.</p>
                    <div>
                        <button class="btn btn-outline btn-secondary mx-2"><a href='https://drive.google.com/file/d/16tn4DlMUTwzH1wSMEY74uDiMNFEP4hr3/view?usp=sharing' alt='resume link'>Have a look in my Resume</a></button>

                        <button class="btn btn-outline btn-primary mx-2"><a href='https://www.linkedin.com/in/tashfia-islam/' alt='resume link'>Linkdin</a></button>
                        <button class="btn btn-outline btn- neutral"><a href='https://github.com/tashfiaislamistila' alt='resume link'>Github</a></button>
                    </div>
                    {/* <div>
                        <button class="btn btn-outline">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" class="hover:text-blue-500">
                                <a href='https://www.linkedin.com/in/tashfia-islam/' alt='resume link'></a></FontAwesomeIcon></button>
                    </div> */}
                </div>
            </div>
        </div >
    );
};

export default About;