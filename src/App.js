import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
        <Navbar title="TextFormat" page_1="Blog" page_2="About" />
        <div className="container">
          <TextForm />
        </div>
    </>
  );
}

export default App;
