import serviceBase from "./serviceBase";
import {baseUrl} from "../config.user.json";

export default class Moving extends serviceBase{

    async  getMovingData(isDeleted) {
     const apiResponse = await  this.getUser().request({
          method:"GET",
          url:`/Movings?isDeleted=false`
      });
     return apiResponse
    }

    async postMovingData(movingData) {
        const apiResponse = await this.getUser().request({
            method:"POST",
            data:movingData,
            url:`/Movings`
        })
        return apiResponse.data
    }

    async putMovingData(newMovingData) {
        const apiResponse = await this.getUser().request({
            method:"PUT",
            data:newMovingData
        })
        return  apiResponse
    }

    async getPriceMover(isDeleted=false) {
        const apiResponse = await this.getUser().request({
            method:"GET",
            // headers: {
            //     "Access-Control-Allow-Origin": "http://localhost:5500",
            //     "Origin": "*",
            //     "Access-Control-Request-Method": "OPTIONS",
            //     "Content-Type": "application/json, charset=utf-8"
            // },
            url:baseUrl+`/MovingUnitPricesPerHour?isDeleted=${isDeleted}`
        })
        return apiResponse.data;
    }
}
