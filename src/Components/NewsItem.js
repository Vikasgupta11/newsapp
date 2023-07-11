import React, { Component } from "react";
import imageError from "../imageError.png";
const NewsItem =(props)=> {
  // Here imageError is use for to show when imageUrl isNull as default image.

 
    let { title, description, imageUrl, newsUrl, publishedAt, author, source } =
      props;
    return (
      <>
        {" "}
        <div className="my-3">
          <div className="card">
            <img
              src={imageUrl ? imageUrl : imageError}
              className="card-img-top rounded "
              alt="..."
            />
            <div className="card-body">
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info "
                style={{ left: "50%", zIndex: 1 }}
              >
                {source.name}
              </span>

              <h5 className="card-title">{title }...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text">
                <small className="text-muted">
                  By {author ? author : "Unknown"} On{" "}
                  {new Date(publishedAt).toGMTString()}
                </small>
              </p>
              <a
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-warning"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }


export default NewsItem;
