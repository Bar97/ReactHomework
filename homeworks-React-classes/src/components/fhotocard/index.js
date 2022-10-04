import { Component } from "react";
import close from "../../assets/close.svg";

class FhotoCard extends Component {
  constructor(props) {
    super(props);
    
  }

  
  render() {
    const { avatar_url, login } = this.props;

    return (
      <>
        <div>
         
          <img className="img" src={avatar_url} />
          <div className="name">{login} </div>
        </div>
      </>
    );
  }
}

export default FhotoCard;
