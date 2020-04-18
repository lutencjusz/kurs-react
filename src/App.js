// eslint-disable-next-line
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./containers/TodoList";
import AddTodo from "./containers/AddTodo";

const Button = styled.button`
  color: ${props =>
    props.ustawienie ? props.theme.kolory.pierwszy : props.theme.kolory.drugi};
  background: ${props =>
    props.ustawienie ? props.theme.tlo.pierwszy : props.theme.tlo.drugi};
`;

const Inline = styled(Button)`
  background: unset;
`;

const theme = {
  tlo: {
    pierwszy: "yellow",
    drugi: "red"
  },
  kolory: {
    pierwszy: "black",
    drugi: "yellow"
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Testowy plik</h1>
        <Button className="btn btn-primary" ustawienie>
          Przycisk
        </Button>
        <Button className="btn btn-primary">Przycisk2</Button>
        <Inline className="btn btn-success" ustawienie>
          Przycisk2
        </Inline>
        <AddTodo />
        <TodoList />
      </div>
    </ThemeProvider>
  );
}
