import React from 'react';
export default function NewsItem(props) {
  return (
    <div>
      <div className="my-3 card" style={{ width: '18rem', backgroundColor: props.mode === "light" ? "#f8f9fa" : "#212529" }}>
        <span style={{ left: "90%", zIndex: "1" }} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
          {props.source}
          <span className="visually-hidden">unread messages</span>
        </span>
        <img src={props.imageUrl ? props.imageUrl : "https://i.pinimg.com/236x/91/f3/79/91f3795f8f8aa3ccdbf4d39497d9d5dc.jpg"} alt="..." />
        <div className="card-body">
          <h5 style={{ color: props.mode === "light" ? "#212529" : "#d5dbde" }} className="card-title">{props.title}</h5>
          <p style={{ color: props.mode === "light" ? "#212529" : "#d5dbde" }} className="card-text">{props.description}</p>
          <p className="card-text"><small className="text-body-secondary">By {props.author} on {props.date}</small></p>
          <a href={props.newsUrl} rel="noreferrer" target='_blank' className={`btn btn-sm btn-outline-${props.mode === 'light' ? "dark" : "light"}`}>Read More</a>
        </div>
      </div>
    </div>
  )
}
