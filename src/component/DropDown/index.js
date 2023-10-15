import "./DropDown.css";

const DropDown = (props) => {
  return (
    <div className="drop-down">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.onChanged(event.target.value)}
        required={props.required}
        value={props.valor}
      >
        <option value=''></option>
        {props.items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropDown;
