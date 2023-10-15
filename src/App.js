import { useState } from "react";
import Banner from "./component/Banner";
import Forms from "./component/Forms";
import Footer from "./component/Footer";
import Team from "./component/Team";

function App() {
  const teams = [
    {
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Front End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Data Sciente",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "DevOps",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const onNewColaborador = (colaborador) => {
    debugger
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <div className="App">
      <Banner />
      <Forms
        teams={teams.map((team) => team.nome)}
        onColaboradorRegistered={(colaborador) => onNewColaborador(colaborador)}
      />
      {teams.map((time) => 
        <Team
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      )}
      <Footer/>
    </div>
  );
}

export default App;
