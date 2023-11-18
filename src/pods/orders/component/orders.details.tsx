import { OrderDetail } from "../../../core";
import { RowItem } from "./orders.item";

type DetailsProps = {
  details: OrderDetail[];
};

export const Details = ({ details }: DetailsProps) => {
  return (
    <>
    <div>
    <button onClick={()=>{alert("click")}}>Validate</button>
    <button onClick={()=>{alert("click")}}>Invalidate</button>
    </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>State</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {details.map((item) => (
            <RowItem key={item.description} {...item} />
          ))}
        </tbody>
      </table>
    </>
  );
};
