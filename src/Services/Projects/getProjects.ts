import ApiMapping from '../ApiMapping';
import Apis from './Apis';
class Project {
    static getAllProjects() {
        return Apis.call(ApiMapping.projects.getAllProjects, {});
    }
    static getProjectById(data: object) {
        return Apis.call(ApiMapping.projects.getProjectById, data);
    }
}
export default Project;