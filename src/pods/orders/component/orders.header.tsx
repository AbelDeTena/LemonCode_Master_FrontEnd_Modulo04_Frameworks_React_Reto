export const Header = () => {
  return (
    <>
      <div>
        <label htmlFor="number">Number</label>
        <input type="text" id="number" value={8} />
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
          value={"Mercadona"}
        />
      </div>
      <label htmlFor="date">Date</label>
      <input type="date" id="date" value={"17/12/2023"} />
    </>
  );
};
