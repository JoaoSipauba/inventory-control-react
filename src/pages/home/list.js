import React, { useState } from "react";
import firebase from "../../services/firebase";
import { Table, Dimmer, Loader, Button, Popup } from "semantic-ui-react";

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
              <Table.HeaderCell width="1">Codigo</Table.HeaderCell>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell width="1">Quantidade</Table.HeaderCell>
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
            </Table.Row>
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
            </Table.Row>
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
            </Table.Row>
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
            </Table.Row>
          </Table.Body>
          <Table.Footer fullWidth >
            <Table.Row>
              <Table.HeaderCell colSpan="4">
                <Popup
                  content="Adicionar item."
                  position="bottom right"
                  trigger={
                    <Button
                      primary
                      icon="plus"
                      size="small"
                      circular
                      floated="right"
                    />
                  }
                />
                <Popup
                  content="Entrada ou saida de itens."
                  position="bottom left"
                  trigger={
                    <Button
                      floated="left"
                      icon="plus cart"
                      primary
                      size="small"
                    />
                  }
                />
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
