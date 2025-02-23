import ApiMapping from '../ApiMapping';
import Apis from '../Apis';

class Service {
    static getAllServices() {
        return Apis.call(ApiMapping.service.getAllServices, {});
    }

    static addNewService(data: object) {
        return Apis.call(ApiMapping.service.addNewService, data);
    }

    static getServiceById(data: object) {
        return Apis.call(ApiMapping.service.getServiceById, data);
    }

    static editService(data: object, id: number) {
        return Apis.call(ApiMapping.service.editService, data, id);
    }

    static deleteSerice(id: number) {
        return Apis.call(ApiMapping.service.deleteSerice, id);
    }
}
export default Service;