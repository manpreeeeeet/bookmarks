import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import CreateBookmark from "./components/CreateBookmark";
import { EditableBookmarks } from "./components/EditableBookmarks";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<CreateBookmark />} />
        <Route path="/edit" element={<EditableBookmarks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// ToDo: Create a UI/CSS for a bookmark
