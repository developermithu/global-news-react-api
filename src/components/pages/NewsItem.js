import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      imageUrl,
      category,
      author,
      date,
      source,
      newsUrl,
    } = this.props;

    return (
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-50 border-opacity-60 rounded-lg relative">
          <div className="absolute -top-3 -right-3 text-white bg-pink-500 px-2 py-1 rounded text-xs">
            {source}
          </div>
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={imageUrl}
            alt="blog"
          />
          <div className="p-6">
            <div className="flex items-center justify-between tracking-widest text-xs title-font capitalize font-medium text-indigo-400 mb-2">
              <p>{category ? category : "Unknown"}</p>
              <p className="flex items-center gap-x-1">
                <svg
                  className="w-4 h-4 fill-indigo-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span> {author ? author : "Unknown"}</span>
              </p>
            </div>
            <h1 className="title-font font-medium text-gray-900 mb-3">
              {title}..
            </h1>
            <p className="leading-relaxed text-sm mb-3">{description}...</p>
            <div className="flex items-center justify-between flex-wrap ">
              <a
                href={newsUrl}
                target="blank"
                className="text-indigo-400 text-sm inline-flex items-center md:mb-2 lg:mb-0"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>

              <span className="bg-gray-500 text-indigo-400 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2">
                {new Date(date).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
