import serviceBase from "./serviceBase";
import {baseUrl} from "../config.user.json";

class EmploymentService extends serviceBase {

   async post(data) {
        try{
            const apiResponse = await this.getUser().request({
                method:"POST",
                url:`${baseUrl}/EmploymentOpportunities`,
                data:data,
            })
        }catch (e) {
             console.log(e)
        }
    }

}

export default EmploymentService