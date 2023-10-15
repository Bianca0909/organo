import "./Employee.css";

const Employee = ({ nome, cargo, imagem, corDeFundo }) => {
  return (
    <div className="employee">
      <div className="header" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Employee;
