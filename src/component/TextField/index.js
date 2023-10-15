import "./TextField.css";

const TextField = (props) => {

  const onDigit = (event) => {
    props.onChanged(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={onDigit}
        required={props.obrigatorio}
        placeholder={`${props.placeholder}...`}
      />
    </div>
  );
};

export default TextField;
