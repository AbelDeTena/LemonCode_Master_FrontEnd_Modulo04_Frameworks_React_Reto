type Props = {
  number: number;
  supplier: string;
  date: string;
};


export const Header = (props:Props) => {


  return (
    <>
      <div>
        <label htmlFor="number">Number</label>
        <input type="text" id="number" value={props.number} />
        <label
          htmlFor="
suppliers"
        >
          Suppliers
        </label>
        <input
          type="text"
          id="n
suppliers"
          value={props.supplier}
        />
      </div>
      <label htmlFor="date">Date</label>
      <input type="date" id="date" value={props.date} />
    </>
  );
};
