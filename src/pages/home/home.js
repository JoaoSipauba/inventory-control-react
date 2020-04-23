import React from "react";

import { FloatedGroup, ListArea } from "./styles";
import Menu from "../../components/menu/menu";
import List from "./list";

function Login() {
  return (
    <>
      <Menu />
      <FloatedGroup>
        <ListArea raised>
          <List />
        </ListArea>
      </FloatedGroup>
    </>
  );
}
export default Login;
