import React, { useState } from "react";
import firebase from "../../services/firebase";
import { Table, Dimmer, Loader, Button, Icon } from "semantic-ui-react";

function List() {
  const [carregando, setCarregando] = useState(true);
  // var estoque = {};
  var qtItems = [];
  firebase
    .database()
    .ref("estoque")
    .once("value", (snapshot) => {
      // estoque = snapshot.val();
      snapshot.forEach((item) => {
        qtItems.push(item.key);
      });
    })
    .then((sucesso) => {
      setCarregando(false);
    })
    .catch((error) => console.log(error));

  return (
    <>
      {carregando === false ? (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Codigo</Table.HeaderCell>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Quantidade</Table.HeaderCell>
              <Table.HeaderCell>Fornecedor</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>000</Table.Cell>
              <Table.Cell>Fone de ouvido</Table.Cell>
              <Table.Cell>100</Table.Cell>
              <Table.Cell>Samsung</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>000</Table.Cell>
              <Table.Cell>Fone de ouvido</Table.Cell>
              <Table.Cell>100</Table.Cell>
              <Table.Cell>Samsung</Table.Cell>
            </Table.Row>{" "}
            <Table.Row>
              <Table.Cell>000</Table.Cell>
              <Table.Cell>Fone de ouvido</Table.Cell>
              <Table.Cell>100</Table.Cell>
              <Table.Cell>Samsung</Table.Cell>
            </Table.Row>{" "}
            <Table.Row>
              <Table.Cell>000</Table.Cell>
              <Table.Cell>Fone de ouvido</Table.Cell>
              <Table.Cell>100</Table.Cell>
              <Table.Cell>Samsung</Table.Cell>
            </Table.Row>{" "}
            <Table.Row>
              <Table.Cell>000</Table.Cell>
              <Table.Cell>Fone de ouvido</Table.Cell>
              <Table.Cell>100</Table.Cell>
              <Table.Cell>Samsung</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan="4">
                <Button
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                >
                  <Icon name="plus cart" /> Entrada ou saida
                </Button>
                <Icon link color="blue" name="plus" size="large" />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      ) : (
        <>
          <Dimmer active>
            <Loader size="big">Listando itens</Loader>
          </Dimmer>
        </>
      )}
    </>
  );
}
export default List;
