import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Button } from "@material-tailwind/react";
import Spinner from "../Spinner";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  // It's output will be shown after render() method
  async componentDidMount() {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d59c6e90f9624b55941a603a87667a49&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    // console.log("Prev click");
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d59c6e90f9624b55941a603a87667a49&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true }); //show loading
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    // console.log("pageNumb:" + Math.ceil(this.state.totalResults / this.props.pageSize));
    // console.log("page:" + this.state.page + 1);
    let pageNumber = Math.ceil(this.state.totalResults / this.props.pageSize);
    if (!(this.state.page + 1 > pageNumber)) {
      let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d59c6e90f9624b55941a603a87667a49&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true }); //show loading
      let data = await fetch(apiUrl);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  render() {
    const currentPageNum = this.state.page + 1;
    const totalPageNum = Math.ceil(
      this.state.totalResults / this.props.pageSize
    );

    return (
      <section className="text-gray-600 container">
        <div className="py-24">
          {/* if loading = true then show */}
          {this.state.loading && <Spinner />}

          <div className="flex flex-wrap -m-4">
            {!this.state.loading && this.state.articles.map((article) => {
              return (
                <NewsItem
                  title={article.title ? article.title.slice(0, 60) : ""}
                  imageUrl={
                    article.urlToImage
                      ? article.urlToImage
                      : "https://dummyimage.com/768x403/de1ddb/ffffff.jpg&text=Image+not+found"
                  }
                  description={
                    article.description ? article.description.slice(0, 120) : ""
                  }
                  newsUrl={article.url}
                  key={article.url}
                />
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-12">
            <Button
              disabled={this.state.page <= 1}
              onClick={this.handlePrevClick}
              className={
                this.state.page <= 1 ? "opacity-30" : "hover:bg-opacity-80"
              }
            >
              &larr; &nbsp; Previous
            </Button>

            <Button
              disabled={currentPageNum > totalPageNum}
              onClick={this.handleNextClick}
              className={
                currentPageNum > totalPageNum
                  ? "opacity-30"
                  : "hover:bg-opacity-80"
              }
            >
              Next &nbsp; &rarr;
            </Button>
          </div>
        </div>
      </section>
    );
  }
}
