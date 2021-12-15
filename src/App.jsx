import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import { Layout } from "./components/Layout";
import { Home } from "./components/Home/Home";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { Notes } from "./components/Notes/Notes";
import { Weather } from "./components/Weather/Weather";
import { ContactBook } from "./components/ContactBook/ContactBook";
import { Converter } from "./components/Converter/Converter";
import { CreateContact } from "./components/ContactBook/CreateContact";
import { EditContact } from "./components/ContactBook/EditContact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/ToDoList' element={<ToDoList />} />
          <Route path='/Notes' element={<Notes />} />
          <Route path='/Weather' element={<Weather />} />
          <Route path='/ContactBook' element={<ContactBook />} />
          <Route path='/ContactBook/contact-form' element={<CreateContact />} />
          <Route path='/ContactBook/contact-form/:id' element={<EditContact />} />
          <Route path='/Converter' element={<Converter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;