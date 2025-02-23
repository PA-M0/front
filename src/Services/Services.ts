import Project from './ProjectApi/ProjectApi';
import Employee from './RolesApi/getRoles';
import Service from './ServiceApi/ServiceApi'
import Contact from './ContactApi/ContactApi'
import Customer from './CustomerApi/CustomerApi.ts';

export const Services = {
    projects: {
        getAllProjects: Project.getAllProjects,
        addNewProject: Project.addNewProject,
        getProjectById: Project.getProjectById,
        editProject: Project.editProject,
        deleteProject: Project.deleteProjectById,
        getProjectsForEmployee: Project.getProjectsForEmployee,
        getProjectsForCustomer: Project.getProjectsForCustomer
        
    },
    employee: { 
        getAllEmployees: Employee.getAllEmployees,
        addNewEmployee: Employee.addNewEmployee,
        editEmployee: Employee.editEmployee,
        deleteEmployee: Employee.deleteEmployee,
        addProjectToEmployee: Employee.addProjectToEmployee,
        removeProjectFromEmployee: Employee.removeProjectFromEmployee
    },
    service: {
        getAllServices: Service.getAllServices,
        addNewService: Service.addNewService,
        getServiceById: Service.getServiceById,
        editService: Service.editService,
        deleteSerice: Service.deleteSerice
    },
    contact: {
        getAllContacts: Contact.getAllContacts,
        addNewContacts: Contact.addNewContacts,
        getContactById: Contact.getContactById,
        editContact: Contact.editContact,
        deleteContact: Contact.deleteContact
    },
    customer: {
        getAllCustomers: Customer.getAllCustomers,
        addNewCustomer: Customer.addNewCustomer,
        getCustomerById: Customer.getCustomerById,
        editCustomer: Customer.editCustomer,
        deleteCustomer: Customer.deleteCustomer,
        addProjectToCustomer: Customer.addProjectToCustomer,
        removeProjectFromCustomer: Customer.removeProjectFromCustomer
    }
}