import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={imageUrl}
            alt="https://www.shutterstock.com/image-vector/abstract-business-logo-corporate-identity-design-1826060273"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
              <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>
                {source}
               
              </span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                Last {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
