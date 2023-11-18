import { MockOrders, Order } from "../../core"
import {OrdersComponent} from "./orders.component"
export const Orders = () => {

    const Orders:Order = MockOrders[1]
    const {number, supplier, date, details} = Orders;    
    
    const total = details.reduce((acc, detail) => acc + detail.amount, 0);
    
    const calculateState = () =>{
        const trues = details.length;
        const trueCount = details.filter(detail => detail.state === true).length;
        return ((trueCount / trues) * 100).toFixed(2);
    }
    const state = calculateState();

    const sendOrder = () => {
        alert("order sent")
    }
    const isButtonDisabled = Number(state) !== 100;

    return(
        <>
        <OrdersComponent number={number} supplier={supplier} date={date}  total={total} state={state} cbSend={sendOrder} disableButton={isButtonDisabled} details={details}/>        
        </>
    ) 
}