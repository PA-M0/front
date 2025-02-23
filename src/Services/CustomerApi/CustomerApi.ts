import ApiMapping from '../ApiMapping';
import Apis from '../Apis';

class Customer {
    static getAllCustomers() {
        return Apis.call(ApiMapping.customer.getAllCustomers, {});
    }

    static addNewCustomer(data: object) {
        const adaptedData = {
            name: data?.customerName,
            email: data.email,
            phoneNumber: data.phoneNumber
        }
        return Apis.call(ApiMapping.customer.addNewCustomer, adaptedData);
    }

    static getCustomerById(data: object) {
        return Apis.call(ApiMapping.customer.getCustomerById, data);
    }

    static editCustomer(data: object, id: number) {
        const adaptedData = {
            name: data?.customerName,
            email: data.email,
            phoneNumber: data.phoneNumber
        }
        return Apis.call(ApiMapping.customer.editCustomer, adaptedData, id);
    }

    static deleteCustomer(id: number) {
        return Apis.call(ApiMapping.customer.deleteCustomer, id);
    }

    
    static addProjectToCustomer(id: number) {
        return Apis.call(ApiMapping.customer.addProjectToCustomer, id);
    }

    
    static removeProjectFromCustomer(id: number) {
        return Apis.call(ApiMapping.customer.removeProjectFromCustomer, id);
    }
}
export default Customer;