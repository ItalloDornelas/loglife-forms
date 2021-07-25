import { useHistory } from "react-router-dom";
import Button from "../../components/Button/Button";
import { DataGrid } from "@material-ui/data-grid";
import { useCards } from "../../provider/card/card";
import { CardContainer, ContainerNull, Title, ContainerButton } from "./styles";

import ModalDelet from "../../components/ModalDelet/ModalDelet";

const ListMembers = () => {
  const history = useHistory();
  const { card } = useCards();
  const rows = card.map((client, key) => ({
    userName:
      client.typePerson === "PF - Pessoa Física"
        ? client.username
        : client.fantasyName,
    surname:
      client.typePerson === "PF - Pessoa Física"
        ? client.surname
        : client.corporateName,
    typeUser: client.typePerson,
    id: key + 1,
  }));
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "userName", headerName: "Cliente", width: 250 },
    { field: "surname", headerName: "Sobrenome/Nome Fantasia", width: 300 },
    { field: "typeUser", headerName: "Tipo do Cliente", width: 200 },
  ];

  if (!card.length) {
    return (
      <ContainerNull>
        <h1>
          Não temos cadastro de <br />
          nenhum cliente ainda 😃
        </h1>
        <Button redSchema onClick={() => history.push("/registerMember")}>
          Cadastre um cliente
        </Button>
      </ContainerNull>
    );
  }

  return (
    <div>
      <Title>Lista de Clientes</Title>
      <CardContainer>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={3}
          checkboxSelection
        />
        <ContainerButton>
          <ModalDelet />
        </ContainerButton>
      </CardContainer>
    </div>
  );
};
export default ListMembers;
