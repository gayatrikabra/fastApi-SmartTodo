import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./components/Layout/Login";
import Register from "./components/Layout/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Show from "./components/Dashboard/Show";
import Add from './components/Dashboard/Add';
import Edit from './components/Dashboard/Edit';
import Delete from './components/Dashboard/Delete'


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Shared Layout */}
        <Route path="/" element={<Layout />}>

         

          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />



          <Route path="register" element={<Register />} />
          <Route path="show" element={<Show />} />
          <Route path="add" element={<Add />} />
          <Route path="delete" element={<Delete />} />
          <Route path="edit" element={<Edit />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;


