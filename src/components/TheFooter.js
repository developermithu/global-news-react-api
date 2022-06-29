import React, { Component } from "react";

export default class TheFooter extends Component {
  render() {
    return (
      <footer className="bg-white border-t-2 border-grey-300">
        <div className="container py-4">
            <p className="text-center text-gray-800">
              © Copyright 2022 -{" "}
              <a
                href="https://instagram.com/developermithu"
                target="blank"
                className="text-blue-500 hover:underline cursor-pointer"
              >
                developermithu
              </a>
            </p>
        </div>
      </footer>
    );
  }
}
