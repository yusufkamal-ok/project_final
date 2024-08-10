import { Request } from "express";

export interface IReqUser extends Request {
  user: {
    role: string;
    id: string;
  };
}

export interface ReqOrder extends Request {
  order : {
    grandTotal : Number;
    orderItems : {name : string, productId : string, price : Number, quantity : Number}[];
    createdBy  :string,
    status : "pending" | "completed" | "cancelled";  
  }
}