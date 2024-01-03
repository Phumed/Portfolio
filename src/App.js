import Home from "./home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Education from "./components/education/education";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "education",
    element: <Education />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "skills",
    element: <Skills />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
