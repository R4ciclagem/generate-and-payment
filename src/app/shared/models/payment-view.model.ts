import { PaymentBusiness } from "./payment-business.model";

export class PaymentView {

    name: string;
    ammount: number;
    code: number;
    grid: number;

    static mapToBussinessObject(obj: PaymentView): PaymentBusiness {

        let newObj = new PaymentBusiness();
        newObj.name = obj.name;
        newObj.ammount = obj.ammount;
        newObj.code = obj.code;
        newObj.grid = obj.grid;

        return newObj;
    }

    static mapFromBussinessObject(obj: PaymentBusiness): PaymentView {

        let newObj = new PaymentView();
        newObj.name = obj.name;
        newObj.ammount = obj.ammount;
        newObj.code = obj.code;
        newObj.grid = obj.grid;

        return newObj;
    }
}