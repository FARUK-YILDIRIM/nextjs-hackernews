import React from "react";
import fetch from "isomorphic-fetch";
import Error from "next/error";
import StoryList from "../components/StoryList";
import Layout from "../components/Layout";
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
        <Layout
          title="Hacker News"
          description="Hacker News clone with Next.js"
        >
          <StoryList stories={stories} />
        </Layout>
      </div>
    );
  }
}

export default Index;
