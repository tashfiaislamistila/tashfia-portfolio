import React from 'react';

const Portfolio = ({ project }) => {
    const { name, img, description, website, Github } = project;
    return (
        <div class="card lg:card-side w-2/3 shadow-2xl mt-4 bg-base-200">
            <figure><img style={{ height: "300px", width: "300px" }} src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div class="card-actions">
                    <button class="btn btn-info"><a href={website} alt='resume link'>Live Site</a></button>
                    <button class="btn btn-warning"><a href={Github} alt='resume link'>GitHub </a></button>
                    {/* <button class="btn btn-primary"><a href={website} alt='resume link'>Details</a></button> */}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;