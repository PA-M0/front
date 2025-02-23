import ApiMapping from '../ApiMapping';
import Apis from '../Apis';
class Project {
    static getAllProjects() {
        return Apis.call(ApiMapping.projects.getAllProjects, {});
    }

    static getProjectById(data: object) {
        return Apis.call(ApiMapping.projects.getProjectById, data);
    }

    static deleteProjectById(id: number) {
        return Apis.call(ApiMapping.projects.deleteProjectById, id);
    }

    static addNewProject(data: object) {
        return Apis.call(ApiMapping.projects.addNewProject, data);
    }
    
    static editProject(data: object, id) {
        return Apis.call(ApiMapping.projects.editProject, data, id);
    }

    static getProjectsForEmployee(data: object) {
        return Apis.call(ApiMapping.projects.getProjectsForEmployee, data);
    }

    static getProjectsForCustomer(data: object) {
        return Apis.call(ApiMapping.projects.getProjectsForCustomer, data);
    }
}
export default Project;