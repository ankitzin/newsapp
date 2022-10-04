import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    category: "general",
    country: "in",
    pageSize: 10,
  };
  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    country: PropTypes.string,
  };

  constructor(props) {
    super();
    console.log("my constructor News");
    this.state = {
      articles: [],
      loading: false,
      pageNum: 1,
    };
    // document.title = `${this.props.category} - Giant News`
  }
  async componentDidMount() {
    // console.log("inside cdm.")
    this.updatePage();
  }

  updatePage = async () => {
    console.log(this.state.pageNum);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ada6ce19b55a4330adf52d7b6bae2db4&page=${this.state.pageNum}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalSize: parsedData.totalResults,
      loading: false,
    });
  };

  handlePrevious = async () => {
    await this.setState({
      pageNum: this.state.pageNum - 1,
    });
    this.updatePage();
  };

  handleNext = async () => {
    // console.log("Next")

    if (
      this.state.pageNum + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      console.log("inside size work");
    } else {
      await this.setState({
        pageNum: this.state.pageNum + 1,
      });
      this.updatePage();
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center">Giants IT News - Top Headlines </h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage ? element.urlToImage : ""}
                    newsUrl={element.url}
                    author={!element.author ? "Unknown" : element.author}
                    date_at={element.publishedAt}
                  ></NewsItems>
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.pageNum <= 1}
              type="button"
              className="btn btn-dark mx-2"
              onClick={this.handlePrevious}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.pageNum + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark mx-2"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
