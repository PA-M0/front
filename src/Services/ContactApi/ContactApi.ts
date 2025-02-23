import ApiMapping from '../ApiMapping';
import Apis from '../Apis';

class Contact {
    static getAllContacts() {
        return Apis.call(ApiMapping.contact.getAllContact, {});
    }

    static addNewContacts(data: object) {
        return Apis.call(ApiMapping.contact.addNewContact, data);
    }

    static getContactById(data: object) {
        return Apis.call(ApiMapping.contact.getContactById, data);
    }

    static editContact(data: object, id: number) {
        return Apis.call(ApiMapping.contact.editContact, data, id);
    }

    static deleteContact(id: number) {
        return Apis.call(ApiMapping.contact.deleteContact, id);
    }
}
export default Contact;