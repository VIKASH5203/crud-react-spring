import React from "react";

export default function () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.amdocs.com/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu-JU8KTSDSZkY8xaqj-uXw_Lt5VcgASi4CAQNPHSkvw&s"
              alt=""
              width="40"
              height="40"
            />
            &nbsp; &nbsp; List of Customers
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
