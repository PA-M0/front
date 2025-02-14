import React, { useEffect, useState } from 'react';
import {Services} from '../../Services/Services'

const Projects = () => {
  const [projects, setProjects] = useState('');
  
  useEffect(()  => {
    const fetchProjects = async () => {
      try{
      const projects = await Services.projects.getAllProjects();      
      setProjects(projects);
      } catch(error){
        console.log(error);
      }
    }
    fetchProjects()

   
  }, [])
  return (
    <>
      <h2>Projects</h2>
      <div>
        {projects.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          projects.map((project, index) => (
            <div key={index}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>  
          ))
        )}
      </div>
    </> 
  )
  
};

export default Projects;