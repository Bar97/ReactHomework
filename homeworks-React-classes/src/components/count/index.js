import { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { namesForCount } = this.props;
    const{count}=this.state
    return (
      <>
        <div className="count">
          {namesForCount.map((item) => {
            return <h1>{item} Unmounted {count} Times</h1>;
          })}
        </div>
      </>
    );
  }
}

export default Count;
