import serviceBase from "./serviceBase";

export default class PaymentService extends serviceBase{
    async post(paymentData) {
    const apiResponse = await this.getUser().request({
      method:"POST",
      url:"/StripePayment/ProceedPayment",
      data:paymentData
    })
        return apiResponse;
    }

}