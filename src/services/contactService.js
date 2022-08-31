import serviceBase from "./serviceBase";
import {baseUrl} from "../config.user.json";

class ContactService extends serviceBase {
    async post(data) {
        const response = await this.getUser().request({
          method:"POST",
          url:baseUrl+'/FeedBack',
          data:data
        })
        return response.data
    }
}

export default ContactService