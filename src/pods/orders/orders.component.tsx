import { OrderDetail } from "../../core";
import {Header, Process, Details} from "./component"


type Props = {
    number: number;
    supplier: string;
    date: string;     
    total: number; 
    state: string; 
    cbSend: ()=>void;
    disableButton: boolean;
    details:OrderDetail[]
  };

export const OrdersComponent = (props:Props) => {  

    return(
        <>
        <Header number={props.number} supplier={props.supplier} date={props.date} />
        <Process total={props.total} state={props.state} cbSend={props.cbSend}  disableButton={props.disableButton}/>
        <Details details={props.details}/>
        </>
    ) 
}