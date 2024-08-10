const nodemailer = require('nodemailer');
import ejs from "ejs";
import path from "path";
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
    service : "Zoho",
    host : 'smtp.zoho.com',
    port : 465,
    secure : true,
    auth : {
        user : process.env.user,
        pass: process.env.pass
    },
    requireTLS : true,
});

const send = async ({
    to, 
    subject, 
    content
}:
    {to: string| string[], subject : string, content : string}) =>{
        const result = await transporter.sendMail({
            from : "okeaja_918@zohomail.com",
            to,
            subject,
            html : content
        });
    return result;
    };

const render = async(template : string, data : any)=>{
    const content = await ejs.renderFile(
        path.join(__dirname, `templates/${template}`),
        data
        );
    return content as string;
};
export default {
    send,
    render
};