import React from "react";

export default function Event() {
  return (
    <div className="h-screen flex justify-center items-start pt-[50px] bg-blue-400">
      <div className="card card-dash bg-base-100 w-[40%] h-[300px]">
        <div className="card-body">
          <h2 className="card-title text-xl">Tech Conference 2025</h2>
          <p>10/12/2025</p>
          <p>
            It's a tech conference held on the given dates and technology
            experts and AI experts from across India will attend.
          </p>
          <p>Dehradun</p>
          <p><span>Seats available:</span></p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
