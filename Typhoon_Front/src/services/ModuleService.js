import axios from 'axios';

const MODULE_API_BASE_URL = "http://127.0.0.1:5000/modules";

class ModuleService {
    getModules (){
        return axios.get(MODULE_API_BASE_URL);
    }

    createModule (module){
        return axios.post(MODULE_API_BASE_URL,module);
    }
    getModuleById(moduleId){
        return axios.get(MODULE_API_BASE_URL+'/'+moduleId);
    }
    updateModule(module,moduleId){
        return axios.put(MODULE_API_BASE_URL+'/'+moduleId);
    }
    deleteModule(userId){
        return axios.delete(MODULE_API_BASE_URL+'/'+moduleId);
    }
}

export default new ModuleService()