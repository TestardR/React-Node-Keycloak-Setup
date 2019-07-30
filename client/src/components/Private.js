import React, { Component } from "react";
import axios from "axios";

export default class Private extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:9000/private")
      .then(res => this.setState({ message: res.data.message }))
      .catch(err => console.log(err));
  }

  render() {
    return <div>{this.state.message}</div>;
  }
}
