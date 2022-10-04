import { Component } from "react";

class RegionsBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, icon } = this.props;
    return (
      <div>
        <span>{name}</span>

        <img className="img" src={icon} />
      </div>
    );
  }
}
export default RegionsBar;
