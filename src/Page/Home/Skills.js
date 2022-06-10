import React from 'react';

const Skills = () => {
    return (
        <div class="px-16 ">
            <h1 class="text-5xl text-center mt-8 font-bold">My Skills</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 mx-0 justify-items-center md:mx-60'>
                <div class="card max-w-lg bg-neutral mt-4 text-primary-content pt-6">
                    <div class="card-body">
                        <h2 class="card-title">Frontend Skill</h2>
                        <div>
                            <p>HTML</p>
                            <progress class="progress progress-accent w-56" value="100" max="100"></progress>
                            <p>CSS</p>
                            <progress class="progress progress-primary w-56" value="85" max="100"></progress>
                            <p>JavaScript</p>
                            <progress class="progress progress-secondary w-56" value="80" max="100"></progress>
                            <p>Bootstrap</p>
                            <progress class="progress progress-warning w-56" value="90" max="100"></progress>
                            <p>Tailwind</p>
                            <progress class="progress progress-info w-56" value="90" max="100"></progress>
                            <p>React.JS</p>
                            <progress class="progress progress-error w-56" value="80" max="100"></progress>
                            <p>React Router</p>
                            <progress class="progress progress-primary w-56" value="85" max="100"></progress>
                            <p>Dom Manipulation</p>
                            <progress class="progress progress-warning w-56" value="70" max="100"></progress>
                        </div>

                    </div>
                </div>
                <div class="card max-w-lg bg-neutral mt-4 text-primary-content pt-6">
                    <div class="card-body">
                        <h2 class="card-title">Backend Skill</h2>
                        <div>
                            <p>Node.js</p>
                            <progress class="progress progress-accent w-56" value="50" max="100"></progress>
                            <p>Express.js</p>
                            <progress class="progress progress-warning w-56" value="40" max="100"></progress>
                            <p>MongoDB</p>
                            <progress class="progress progress-secondary w-56" value="50" max="100"></progress>
                        </div>
                    </div>
                </div>
                <div class="card max-w-lg bg-neutral mt-4 text-primary-content pt-6">
                    <div class="card-body">
                        <h2 class="card-title">Tools</h2>
                        <div>
                            <p>Github</p>
                            <progress class="progress progress-accent w-56" value="70" max="100"></progress>
                            <p>Firebase</p>
                            <progress class="progress progress-warning w-56" value="60" max="100"></progress>
                            <p>Netlify</p>
                            <progress class="progress progress-secondary w-56" value="70" max="100"></progress>
                            <p>Heroku</p>
                            <progress class="progress progress-error w-56" value="60" max="100"></progress>
                            <p>VS Code</p>
                            <progress class="progress progress-primary w-56" value="75" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;