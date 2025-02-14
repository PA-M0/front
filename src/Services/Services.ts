import Projects from './Projects/getProjects';
export const Services = {
    projects: {
        getAllProjects: Projects.getAllProjects,
        getProjectById: Projects.getProjectById
    }
}