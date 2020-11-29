import React from "react";
import fetch from "isomorphic-fetch";
import Error from "next/error";

class Index extends React.Component {
  static async getInitialProps() {
    let stories;
    try {
      const responce = await fetch(
        "https://api.hackerwebapp.com/fy/news?page=2"
      );
      stories = await responce.json();
      return { stories };
    } catch (err) {
      console.log(err);
      stories = [];
    }

    return { stories };
  }

  render() {
    const { stories } = this.props;

    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }

    return <div>hacker news</div>;
  }
}

export default Index;
