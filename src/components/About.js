import React from "react";
import UserContext from "../utils/UserContext";
class AboutComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <UserContext.Consumer>
        {({ loggedInUser, setUserName }) => (
          <div style={{ padding: "20px" }}>
            <img
              src={avatar_url}
              style={{ borderRadius: "50%", height: "150px", width: "150px" }}
            ></img>
            <h3>{loggedInUser}</h3>
            <h4>{location}</h4>
            <input
              placeholder="Edit user name"
              style={{ padding: "5px", margin: "5px" }}
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mayankgwl13593");
    const json = await data.json();
    this.setState({ userInfo: json });
  }
}
export default AboutComponent;
