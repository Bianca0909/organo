import { useState } from "react";
import Button from "../Button";
import DropDown from "../DropDown";
import TextField from "../TextField";
import "./Forms.css";

const Forms = (props) => {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const onSave = (event) => {
    event.preventDefault();
    props.onColaboradorRegistered({
      nome,
      cargo,
      imagem,
      time,
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  };

  return (
    <section className="forms">
      <form onSubmit={onSave}>
        <h2> Preencha os dados para criar o card do colaborador</h2>
        <TextField
          label="Nome"
          obrigatorio={true}
          placeholder="Digite o seu nome"
          valor={nome}
          onChanged={(valor) => setNome(valor)}
        />
        <TextField
          label="Cargo"
          obrigatorio={true}
          placeholder="Digite o seu cargo"
          valor={cargo}
          onChanged={(valor) => setCargo(valor)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          onChanged={(valor) => setImagem(valor)}
        />
        <DropDown
          obrigatorio={true}
          label="Team"
          items={props.teams}
          valor={time}
          onChanged={(valor) => setTime(valor)}
        />
        <Button text="Criar Card" />
      </form>
    </section>
  );
};

export default Forms;
