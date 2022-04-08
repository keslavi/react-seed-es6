
import './App.css';
import {Outlet as RouterOutlet} from 'react-router-dom';

import { Header } from 'components/header';
import {menu} from './router';

function App() {
  return (
    <div>
      <Header menu={menu}/>
      <RouterOutlet/>
    </div>
  );
}

export default App;
