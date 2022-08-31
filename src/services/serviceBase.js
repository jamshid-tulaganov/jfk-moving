import {baseUrl} from "../config.user.json";
import axios from "axios";


 class ServiceBase  {

     constructor(user) {
      this.user = user;
     }


    getUser(){
        if(this.user == null){
            this.user = axios.create({
                baseURL: `${baseUrl}`
            });

            // this.user.interceptors.request.use((config) => {
            //     const token = JSON.parse(localStorage.getItem('user'));
            //     if (config.headers && token)
            //         config.headers.Authorization = `Bearer ${token.token}`;
            //     return config;
            // });

        }
        return this.user;
    }
}

export default ServiceBase;