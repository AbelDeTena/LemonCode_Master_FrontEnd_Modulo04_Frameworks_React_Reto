import React from "react";
import { OrderDetail } from "../../../core";

export const RowItem = (props: OrderDetail) => {
  const [isChecked, setChecked] = React.useState(props.state);
  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </td>
      <td>{props.state ? "Validated" : "Invalid"}</td>
      <td>{props.description}</td>
      <td>{props.amount} €</td>
    </tr>
  );
};
