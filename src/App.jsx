//import './app.css';
import { Outlet as RouterOutlet } from "react-router-dom";
import { Container } from "@/components";
import { Header } from "./components/header";

export const App = (props) => {
  const { menu } = props;

  return (
    <>
      <Header menu={menu} />
      <Container>
        <RouterOutlet />
      </Container>
    </>
  );
};

export default App;
