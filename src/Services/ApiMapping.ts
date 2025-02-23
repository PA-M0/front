export enum httpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
} 

const ApiMapping = {
    projects: {
        getAllProjects: {
            url: '/api/project/',
            httpMethod: httpMethod.GET,

        },
        getProjectById: {
            url: '/api/project/',
            httpMethod: httpMethod.GET,
        },
        deleteProjectById: {
            url: '/api/project/',
            httpMethod: httpMethod.DELETE
        },
        addNewProject: {
            url: '/api/project/',
            httpMethod: httpMethod.POST
        },
        editProject: {
            url: '/api/project/',
            httpMethod: httpMethod.PUT
        },
        getProjectsForEmployee: {
            url: '/api/project/',
            httpMethod: httpMethod.GET
        },
        getProjectsForCustomer: {
            url: '/api/project/',
            httpMethod: httpMethod.GET
        },
    },
    employees: {
        getAllEmployees: {
            url: '/api/employee/',
            httpMethod: httpMethod.GET
        },
        addNewEmployee: {
            url: '/api/employee/',
            httpMethod: httpMethod.POST
        },
        getEmployeeById: {
            url: '/api/employee/',
            httpMethod: httpMethod.GET
        },
        editEmployee: {
            url: '/api/employee/',
            httpMethod: httpMethod.PUT
        },
        deleteEmployee: {
            url: '/api/employee/',
            httpMethod: httpMethod.DELETE
        },
        addProjectToEmployee: {
            url: '/api/employee/',
            httpMethod: httpMethod.POST
        },
        removeProjectFromEmployee: {
            url: '/api/employee/',
            httpMethod: httpMethod.POST
        }
    },
    service: {
        getAllServices: {
            url: '/api/service/',
            httpMethod: httpMethod.GET
        },
        addNewService: {
            url: '/api/service/',
            httpMethod: httpMethod.POST
        },
        getServiceById: {
            url: '/api/service/',
            httpMethod: httpMethod.GET
        },
        editService: {
            url: '/api/service/',
            httpMethod: httpMethod.PUT
        },
        deleteSerice: {
            url: '/api/service/',
            httpMethod: httpMethod.DELETE
        }
    },
    contact: {
        getAllContact: {
            url: '/api/contactPerson/',
            httpMethod: httpMethod.GET
        },
        addNewContact: {
            url: '/api/contactPerson/',
            httpMethod: httpMethod.POST
        },
        getContactById: {
            url: '/api/contactPerson/',
            httpMethod: httpMethod.GET
        },
        editContact: {
            url: '/api/contactPerson/',
            httpMethod: httpMethod.PUT
        },
        deleteContact: {
            url: '/api/contactPerson/',
            httpMethod: httpMethod.DELETE
        }
    },
    customer: {
        getAllCustomers: {
            url: '/api/customer/',
            httpMethod: httpMethod.GET
        },
        addNewCustomer: {
            url: '/api/customer/',
            httpMethod: httpMethod.POST
        },
        getCustomerById: {
            url: '/api/customer/',
            httpMethod: httpMethod.GET
        },
        editCustomer: {
            url: '/api/customer/',
            httpMethod: httpMethod.PUT
        },
        deleteCustomer: {
            url: '/api/customer/',
            httpMethod: httpMethod.DELETE
        },
        addProjectToCustomer: {
            url: '/api/customer/',
            httpMethod: httpMethod.POST
        },
        removeProjectFromCustomer: {
            url: '/api/customer/',
            httpMethod: httpMethod.POST
        }
    }
}
export default ApiMapping;