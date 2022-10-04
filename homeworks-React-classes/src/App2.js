import "./App2.css";

import { Component } from "react";
import { API_URL } from "./constans/api";
import FhotoCard from "./components/fhotocard/index";
import close from "../src/assets/close.svg";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      isOpen: true,
    };
  }

  componentDidMount() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((element) => {
          element.isOpen = true;
        });
        this.setState({
          peoples: res,
        });
      });
  }
  isOpen = () => {
    this.setState({ isOpen: false });
  };
  isShow = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="container">
        {this.state.peoples.map((item, index) => {
          return (
            <>
              {isOpen && (
                <div className="fhotocard">
                  <img onClick={this.isOpen} className="close" src={close} />
                  <FhotoCard
                    key={item.id}
                    avatar_url={item.avatar_url}
                    login={item.login}
                  />
                </div>
              )}
              {!isOpen && (
                <div className="fhotocard">
                  {" "}
                  <button onClick={this.isShow} className="show">
                    show
                  </button>
                </div>
              )}
            </>
          );
        })}
      </div>
    );
  }
}

export default App;
