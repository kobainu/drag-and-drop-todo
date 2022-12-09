import "./App.css";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";

function App() {
  console.log(new Date());
  return (
    <>
      <div className="header">
        <h1 className="appTitle">Teiji</h1>
        <p className="logout">ログアウト</p>
      </div>
      <div className="App">
        {/* <h1 style={{ marginBottom: "20px" }}>trello like app</h1> */}
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
