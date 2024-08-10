import mongoose from "mongoose";
import UserModel from "./user.model";

import mail from "../utils/mail"

const Schema = mongoose.Schema;

const OrderShcema = new Schema({
    grandTotal : {
        type : Number,
        require : true
    },
    orderItems : [{
        product : {
            type :  mongoose.Schema.Types.ObjectId,
            ref : "Products"
        },
        quantity: Number,
    }],
    createdBy : {
        type : mongoose.Schema.Types.ObjectId
    },
    status : {
        type :String,
        enum: ['pending', 'completed', 'cancelled'],
        require : true
    }
},
{
    timestamps : true
}
);

OrderShcema.post("save",async function (doc, next){
    const order = doc;

    const user = await UserModel.findById(order.createdBy);
    console.log("send email to",user?.email);

    const content = await mail.render("order-success.ejs",{
        customerName : user?.fullName,
        orderItems : order.orderItems,
        grandTotal : order.grandTotal,
        contactEmail : "okeaja_918@zohomail.com",
        companyName : "Ecomm",
        year : 2024

    });

    await mail.send({
        to: user?.email as string,
        subject : "Order Success",
        content,
    });
    next();
});

const OrderModel = mongoose.model("Order",OrderShcema);

export default OrderModel;

