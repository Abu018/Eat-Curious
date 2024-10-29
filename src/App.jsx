import "./App.css";
import { Curious } from "./component/Curious/Curious";
import { Footer } from "./component/Footer/Footer";
import { Header } from "./component/Header/Header";
import { Home } from "./component/UI/Home";
import { Content } from "./component/Content/Content";
import { Positive } from "./component/Content/Positive";
import { EveryOne } from "./component/Content/EveryOne";
import { Foot } from "./component/Content/Foot";

function App() {
  return (
    <>
      <Header className="animate-slideUp" style={{ animationDelay: "0.1s" }} />
      <Home className="animate-slideUp" style={{ animationDelay: "0.2s" }} />
      <Curious className="animate-slideUp" style={{ animationDelay: "0.3s" }} />
      <Content className="animate-slideUp" style={{ animationDelay: "0.4s" }} />
      <Positive
        className="animate-slideUp"
        style={{ animationDelay: "0.5s" }}
      />
      <EveryOne
        className="animate-slideUp"
        style={{ animationDelay: "0.6s" }}
      />
      <Foot className="animate-slideUp" style={{ animationDelay: "0.7s" }} />
      <Footer className="animate-slideUp" style={{ animationDelay: "0.8s" }} />
    </>
  );
}

export default App;
