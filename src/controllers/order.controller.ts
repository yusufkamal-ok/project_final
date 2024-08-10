import { Request, Response } from "express";
import OrderModel from "../models/order.model";
import ProductsModel from "../models/products.model";


interface IPaginationQuery {

  page: number;

  limit: number;

  userId?: string;

};

type Query = {
  createdBy?: string;
};

export default {
    async add(req: Request, res: Response) {
      try {
        const { grandTotal, orderItems, createdBy, status } = req.body
        for (const item of orderItems) {
          const product = await ProductsModel.findById(item.product);
    
          if (!product) {
            return res.status(404).send({ error: `Product with ID ${item.product} not found` });
          }
       
          if (item.quantity > product.qty) {
            return res.status(400).send({ error: `Insufficient quantity for product ${product.name}` });
          }
    
          product.qty -= item.quantity;
          await product.save();
        }
        const order = new OrderModel({
          grandTotal,
          orderItems,
          createdBy,
          status,
        });
    
        await order.save();
        res.status(201).json({
          data: order,
          message: "Success create order",
        });
      } catch (error) {
        const err = error as Error;
        res.status(400).json({
          data: err.message,
          message: "Failed create order",
        });
        return;
      }
    },

    async findAll(req: Request, res: Response) {
      try {
        const {userId , limit = 10, page = 1} = req.query as unknown as IPaginationQuery;
        const query: Query = {};
        if (userId) {
          query.createdBy = userId;
        }
        const result = await OrderModel.find(query)
        .limit(limit)
        .skip((page - 1)* limit)
        .sort({createdAt : -1})
        .populate([{path : "orderItems.product", select : "name price"}])
        .exec();
        res.status(200).json({
          data: result,
          message: "Success get all order",
        });
      } catch (error) {
        const err = error as Error;
        res.status(500).json({
          data: err.message,
          message: "Failed get all order",
        });
      }
    },

}