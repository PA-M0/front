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
            url: '/products',
            httpMethod: httpMethod.GET,

        },
        getProjectById: {
            url: '/projects/$id',//todo: ???how to set id ???
            httpMethod: httpMethod.GET,
        },
    }
}
export default ApiMapping;