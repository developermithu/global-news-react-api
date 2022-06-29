import React, { Component } from "react";
import NewsItem from "./NewsItem";
import { Button } from "@material-tailwind/react";
import Spinner from "../Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: "18",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    let apiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(apiUrl);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  // It's output will be shown after render() method
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  capitalizeCategoryName = () => {
    const array = this.props.category.toLowerCase().split(" ");
    for (let i = 0; i < array.length; i++) {
      array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    return array.join(" ");
  };

  render() {
    document.title = `Global News - ${this.capitalizeCategoryName()}`;

    const currentPageNum = this.state.page + 1;
    const totalPageNum = Math.ceil(
      this.state.totalResults / this.props.pageSize
    );

    // console.log("current " + currentPageNum);
    // console.log("total " + totalPageNum);

    return (
      <section className="text-gray-600 container">
        <div className="py-24">
          {/* if loading = true then show */}
          {this.state.loading && <Spinner />}

          <div className="flex flex-wrap -m-4">
            {!this.state.loading &&
              this.state.articles &&
              this.state.articles.map((article) => {
                return (
                  <NewsItem
                    key={article.url}
                    title={article.title ? article.title.slice(0, 60) : ""}
                    imageUrl={
                      article.urlToImage
                        ? article.urlToImage
                        : "https://dummyimage.com/768x403/de1ddb/ffffff.jpg&text=Image+not+found"
                    }
                    description={
                      article.description
                        ? article.description.slice(0, 120)
                        : ""
                    }
                    newsUrl={article.url}
                    category={this.props.category}
                    date={article.publishedAt}
                    author={article.author}
                    source={article.source.name}
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
