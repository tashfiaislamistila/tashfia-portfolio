import React, { useEffect, useState } from 'react';
import Portfolio from './Portfolio';

const Portfolios = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-center mt-8 mb-4 font-bold'>My Projects</h1>
            <div className='grid gap-5 justify-items-center'>
                {
                    projects.map(project => <Portfolio
                        key={project.id}
                        project={project}
                    ></Portfolio>)
                }
            </div>
        </div>
    );
};

export default Portfolios;