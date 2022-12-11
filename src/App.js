import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <Header />
      </div>
      <div className="App">
        <div className="sidebarArea">
          <Sidebar />
        </div>
        <div className="mainContentArea">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
