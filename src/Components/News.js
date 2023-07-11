import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setartiles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(0);
  const [totalResults, settotalResults] = useState(0);


  // This is Default Proptype  Syntax

 const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(20);
    setloading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setartiles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);

    props.setProgress(100);
  };

 
  // componenDidMount() is Life cycle Method of React
  useEffect(() => {
      document.title = `${capitalize(props.category)} - NewsMonkey`;

    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setpage(page + 1);

    // this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9047e0d9f9ef4542a3446533402ab0e2&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setartiles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);

    console.log(articles.length+" "+totalResults);
  };

  return (
    <>
      <div className="container my-3">
        <br></br>
        <h1 className="text-center mt-4">
          News Monkey - Top {capitalize(props.category)} Headlines
        </h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          // style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
          // inverse={true} //
          hasMore={articles.length<=totalResults}
          loader={<Spinner />}
          scrollableTarget="scrollableDiv"
        >
          <div className="container">
            <div className="row overflow-hidden"  >
              {articles.map((element) => {
                // Here map function is executes for an evry Array Element,
                // inthis we have passed an Arrow function, as it class Every ele.
                // we just return NewsItem type after putting all data within it.
                return (
                 
                  <div className="col-md-4">
                    <NewsItem
                      title={element.title ? element.title.slice(0, 48) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      key={element.url}
                      newsUrl={element.url}
                      publishedAt={element.publishedAt}
                      author={element.author}
                      source={element.source}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};
// Here PropTypes Data Types specified,
News.propTypes = {
  // this line is case sensitive, i.e "propTypes"
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
