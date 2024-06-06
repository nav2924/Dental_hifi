import { instance } from "../server.js";

export const checkout = async (req , res)=>{
 const options = {
  amount: 50000,  
  currency: "INR",
  receipt: "order_rcptid_11"
};
 const order = await instance.orders.create(options);

 console.log(order);

 res.status(200).json({
    success : true,
    order,
 })
}