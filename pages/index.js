import React from "react";
import fetch from "isomorphic-fetch";
import Error from "next/error";

class Index extends React.Component {
  static async getInitialProps() {
    let stories;
    try {
      const responce = await fetch("https://api.hackerwebapp.com/news?page=2");
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

    return (
      <div>
        <h1>Hacker News</h1>
        <span>
          {stories.map((story) => (
            <h4 key={story.id}>{story.title}</h4>
          ))}
        </span>
      </div>
    );
  }
}

export default Index;
