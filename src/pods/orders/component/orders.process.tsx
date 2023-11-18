type Props = {    
    total: number; 
    state: string; 
    cbSend: ()=>void;
    disableButton: boolean;
  };

export const Process = (props:Props) => {

  const isButtonDisabled = Number(props.state) !== 100;

  return (
    <>
      <label htmlFor="state">State</label>
      <input type="text" id="state" value={`${props.state}%`} />
      <label htmlFor="total">Total</label>
      <input type="text" id="total" value={`${props.total}€`} />
      <button disabled={isButtonDisabled}  onClick={props.cbSend}>Send</button>
    </>
  );
};
