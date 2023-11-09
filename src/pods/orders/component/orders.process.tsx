export const Process = () => {
  return (
    <>
      <label htmlFor="state">State</label>
      <input type="text" id="state" value={`{25}%`} />
      <label htmlFor="total">State</label>
      <input type="text" id="total" value={`${25}€`} />
      <button>Send</button>
    </>
  );
};
