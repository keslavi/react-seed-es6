import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import App from "./app"; //router displays here

//things that are always loaded
//prettier-ignore
import { 
  Home, 
  About 
} from "./pages";

/*
  some codesplitting examples... 
  prevent overly large page loads from happening up front

  tasks, scratchpad aren't usually needed.
*/
const Tasks = lazy(() => import("./pages/-example-task-section/tasks/tasks"));
const Task = lazy(() => import("./pages/-example-task-section/task/task"));
// prettier-ignore
const Contacts = lazy(() => import("./pages/-example-contact/contacts/contacts"));
const Contact = lazy(() => import("./pages/-example-contact/contact/contact"));
const Scratchpad = lazy(() => import("./pages/dev-section/scratchpad"));

//not introducing jwt and private routes yet
const menu = [
  { text: "Home", link: "/" },
  { text: "About", link: "/about" },
  {
    text: "Dev",
    items: [
      //example of creating submenu (low css doesn't support it)
      { text: "Tasks", link: "/dev/tasks" },
      { text: "Contacts", link: "/dev/contacts" },
      { text: "Scratchpad", link: "/dev/scratchpad" },
    ],
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App menu={menu} />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/dev">
            <Route
              path="tasks"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Tasks />
                </Suspense>
              }
            />
            <Route
              path="tasks/:id"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Task />
                </Suspense>
              }
            />
            <Route
              path="contacts"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Contacts />
                </Suspense>
              }
            />
            <Route
              path="contacts/:id"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="scratchpad"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Scratchpad />
                </Suspense>
              }
            />
          </Route>

          <Route path="" element={<Home />} />
          <Route path="*" element={<Route404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

const Route404 = () => {
  return (
    <div>
      <h4>404</h4>
    </div>
  );
};
