
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import App from './App';
import {
  Home,
  //dev Components
  Tasks,
  Task,
  Keyify,
  Scratchpad,
} from 'pages';

export const menu = [
  { text: 'Home', link: "/" },
  { text: 'Tasks', link: "/tasks" },
  {
    text: 'Dev', items: [
      { text: 'keyify', link: "/dev/keyify" },
      { text: 'scratchpad', link: "/dev/scratchpad" },
    ]
  },
]

export const Router = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="tasks" element={<Tasks />} />
          <Route path="tasks/:id" element={<Task />} />
          <Route path="/dev">
            <Route path="keyify" element={<Keyify />} />
            <Route path="scratchpad" element={<Scratchpad />} />
          </Route>
          <Route path="home" element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="*" element={<Route404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const Route404 = (props) => {
  return (
    <div><h4>Route not Found</h4></div>
  )
}

export default Router;