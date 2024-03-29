
import './App.css';
import { Outlet as RouterOutlet } from 'react-router-dom';
import { /*Container,*/ContainerFullWidth } from 'components';

import { Header } from 'components/header';
import { menu } from './router';

function App() {
  return (
    <div data-testid='app'>
      <Header menu={menu} />
      <ContainerFullWidth>
        <RouterOutlet />
      </ContainerFullWidth>
    </div>
  );
}

export default App;
