import Networking from "../Networking/Networking";
import { httpMethod } from "./ApiMapping";

interface requestConfig {
    url: string,
    httpMethod: string
}
class Apis {
    static call(config: requestConfig, data: number | object, id?: number) {
        switch(config.httpMethod) {
            case httpMethod.GET: return Networking.get(config.url)
            case httpMethod.POST: return Networking.post(config.url, data)
            case httpMethod.PUT: return Networking.put(config.url, data, id)
            case httpMethod.PATCH: return Networking.patch(config.url, data)
            case httpMethod.DELETE: return Networking.delete(config.url, data);
            default: alert("internal error");
            
        }
        return 
    }
}
export default Apis;