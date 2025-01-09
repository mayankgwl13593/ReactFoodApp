import React from "react";
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
      <div>
        <img src={avatar_url}></img>
        <h3>{name}</h3>
        <h4>{location}</h4>
      </div>
    );
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mayankgwl13593");
    const json = await data.json();
    this.setState({ userInfo: json });
  }
}
export default AboutComponent;
