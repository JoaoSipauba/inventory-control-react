import React from "react";
import { Link } from "react-router-dom";

import { Form, Button, Segment} from "semantic-ui-react";
import Menu from "../../components/menu/menu";
import { FloatedGroup } from "./styles";

function Login() {
  return (
    <>
      <Menu/>
      <FloatedGroup>
        <Segment raised>
          <h2>Acesse sua conta</h2>
          <Form>
            <Form.Input iconPosition="left" icon="user" placeholder="Email" />
            <Form.Input iconPosition="left" icon="lock" placeholder="Senha" />
            <Link to="Home">
              <Button color="green" fluid size="medium">
                Login
              </Button>
            </Link>
          </Form>
        </Segment>
        <Segment raised>Não possui conta? Cadastre-se</Segment>
      </FloatedGroup>
    </>
  );
}
export default Login;
