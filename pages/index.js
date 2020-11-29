import React from "react";
import fetch from "isomorphic-fetch";
import Error from "next/error";
import Link from "next/link";
import StoryList from "../components/StoryList";
import Layout from "../components/Layout";
class Index extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let stories;
    let page;
    try {
      page = Number(query.page) || 1;
      const responce = await fetch(
        `https://api.hackerwebapp.com/news?page=${page}`
      );
      stories = await responce.json();
    } catch (err) {
      console.log(err);
      stories = [];
    }

    return { page, stories };
  }

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("service worker registration succesful", registration);
        })
        .catch((err) => {
          console.warn("service worker registration failed", err.message);
        });
    }
  }

  render() {
    const { page, stories } = this.props;

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
          <footer>
            <Link href={`/?page=${page + 1}`}>
              <a>Next Page ({page + 1})</a>
            </Link>
          </footer>

          <style jsx>
            {`
              footer {
                padding: 1em;
              }
              footer a {
                font-weight: bold;
                color: black;
                text-decoration: none;
              }
            `}
          </style>
        </Layout>
      </div>
    );
  }
}

export default Index;
