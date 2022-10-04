import "./App3.css";

import { Component } from "react";

import RegionsBar from "../src/components/regionsBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      regions: [],
      searchInput: "",
      data: [],
      hide: false,
    };
  }

  componentDidMount() {
    fetch("/data/index.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ regions: res });
        this.state.data = res;
      });
  }
  componentDidUpdate(prevProps, prevState) {
    const { regions, searchInput } = this.state;
    if (prevState.searchInput !== searchInput) {
      if (searchInput.length >= 3) {
        this.setState({
          regions: regions.filter((region) =>
            region.name.includes(searchInput)
          ),
        });
      } else {
        this.setState({ regions: this.state.data });
      }
    }
  }
  handleSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
  };
  handleBtn = () => {
    this.setState({ hide: !this.state.hide });
  };

  render() {
    const { hide } = this.state;
    return (
      <>
        <div>
          <button onClick={this.handleBtn} className="btn">
            {hide ? "hide" : " show"}
          </button>
        </div>
        {hide && (
          <div className="container">
            <input
              onChange={this.handleSearchInput}
              placeholder="search regions..."
              type="text"
              className="input"
            />
            {this.state.regions.map((item, index) => {
              return (
                <RegionsBar key={index} name={item.name} icon={item.img} />
              );
            })}
          </div>
        )}
      </>
    );
  }
}
export default App;
