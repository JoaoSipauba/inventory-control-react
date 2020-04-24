import React, { useState, useEffect } from "react";
import firebase from "../../services/firebase";

import { Table, Dimmer, Loader} from "semantic-ui-react";
import ListFooter from "./components/listfooter";

function List() {
  const [carregando, setCarregando] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    var estoque = {};
    firebase
      .database()
      .ref("estoque")
      .on("value", (snapshot) => {
        estoque = snapshot.val();
        setItems(Object.values(estoque));
        setCarregando(false);
      })
    return () => {};
  }, []);
  return (
    <>
      {carregando === false ? (
        <Table color='blue' celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Codigo</Table.HeaderCell>
              <Table.HeaderCell>Item</Table.HeaderCell>
              <Table.HeaderCell>Quantidade</Table.HeaderCell>
              <Table.HeaderCell>Fornecedor</Table.HeaderCell>
              <Table.HeaderCell>Valor de compra(total)</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>{item.codigo}</Table.Cell>
                <Table.Cell>{item.item}</Table.Cell>
                <Table.Cell>{item.quantidade}</Table.Cell>
                <Table.Cell>{item.fornecedor}</Table.Cell>
                <Table.Cell>{item.valor}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

         <ListFooter/>
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
