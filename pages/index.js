import React from "react";
import fetch from "isomorphic-fetch";

class Index extends React.Component {
  static async getInitialProps() {
    const responce = await fetch("https://api.hackerwebapp.com/news?page=2");
    const stories = await responce.json();
    return { stories };
  }

  render() {
    return <div>hacker news</div>;
  }
}

export default Index;
