import ApiMapping from '../ApiMapping';
import Apis from '../Apis';

class Employee {
    static getAllEmployees() {
        return Apis.call(ApiMapping.employees.getAllEmployees, {});
    }

    static addNewEmployee(data: object) {
        return Apis.call(ApiMapping.employees.addNewEmployee, data);
    }

    static getEmployeeById(data: object) {
        
        return Apis.call(ApiMapping.employees.getEmployeeById, data);
    }

    static editEmployee(data: object, id: number) {
        return Apis.call(ApiMapping.employees.editEmployee, data, id);
    }

    static deleteEmployee(id: number) {
        return Apis.call(ApiMapping.employees.deleteEmployee, id);
    }

    static addProjectToEmployee(data: object) {
        return Apis.call(ApiMapping.employees.addProjectToEmployee, data);
    }

    static removeProjectFromEmployee(data: object) {
        return Apis.call(ApiMapping.employees.removeProjectFromEmployee, data);
    }
}
export default Employee;