import React, { useState } from "react";
import firebase from "../../../services/firebase";

import {
  Table,
  Button,
  Popup,
  Input,
  Modal,
  Icon,
  Message,
} from "semantic-ui-react";
import { InputForm } from "./styles";

function ListFooter() {
  const [modalAdd, setModalAdd] = useState(false);
  const [msg, setMsg] = useState(false);
  const [itemInput, setItemInput] = useState("");
  const [qtInput, setQtInput] = useState("");
  const [FornecedorInput, setFornecedorInput] = useState("");
  const [valInput, setValInput] = useState("");

  function idGen() {
    var id = 0;
    firebase
      .database()
      .ref("estoque")
      .once("value", (doc) => {
        doc.forEach((snapshot) => {
          id = snapshot.val().codigo;
        });
        addItem(id);
      });
  }
  function addItem(id) {
    var item = {
      codigo: parseInt(id) + 1,
      item: itemInput,
      quantidade: qtInput,
      fornecedor: FornecedorInput,
      valor: valInput,
    };
    firebase
      .database()
      .ref(`/estoque/${item.codigo}`)
      .set(item)
      .then(() => {
        setModalAdd(false);
      });
  }
  function inputCheck() {
    if (
      itemInput === "" ||
      qtInput === "" ||
      FornecedorInput === "" ||
      valInput === ""
    ) {
      setMsg(true);
    } else {
      idGen();
    }
  }
  return (
    <>
      <Modal open={modalAdd}>
        <Modal.Header>Adicionar item</Modal.Header>
        <Modal.Content>
          <InputForm>
            <Input
              style={{ flex: 1 }}
              onChange={(e) => setItemInput(e.target.value)}
              placeholder="Item"
            ></Input>
            <Input
              style={{ flex: 1 }}
              onChange={(e) => setQtInput(e.target.value)}
              placeholder="Quantidade"
            ></Input>
            <Input
              style={{ flex: 1 }}
              onChange={(e) => setFornecedorInput(e.target.value)}
              placeholder="Fornecedor"
            ></Input>
            <Input
              style={{ flex: 1 }}
              onChange={(e) => setValInput(e.target.value)}
              placeholder="Valor de compra (total)"
            ></Input>
          </InputForm>

          {msg ? (
            <Message
              size="small"
              warning
              onDismiss={() => {
                setMsg(false);
              }}
              header="Há campos vazios!"
              content="Preencha os campos e tente novamente."
            />
          ) : (
            ""
          )}
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => {setModalAdd(false); setMsg(false)}}>cancelar</Button>
          <Button onClick={inputCheck} icon primary labelPosition="right">
            Adicionar
            <Icon name="check" />
          </Button>
        </Modal.Actions>
      </Modal>
      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell colSpan='16'>
            <Popup
              content="Adicionar item."
              position="bottom right"
              trigger={
                <Button
                  onClick={() => setModalAdd(true)}
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
                <Button floated="left" icon="plus cart" primary size="small" />
              }
            />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </>
  );
}
export default ListFooter;
