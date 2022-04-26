import React from "react";
import ReactDOM from "react-dom";
// import faker from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import "./index.css";

const App = () => {
  return (
    <div className="comments grid grid-cols-1 place-items-center my-8 gap-6">
      <h1 className="text-4xl">Comments</h1>

      <ApprovalCard />

      <CommentDetail
        author="Farhan"
        timeAgo="Today at 3:25PM"
        comment="Very good blog post!"
        // avatar={faker.image.avatar()}
        avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/975.jpg"
      />
      <CommentDetail
        author="Demian"
        timeAgo="Today at 1:00PM"
        comment="I learn a lot from this post!"
        avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/600.jpg"
      />
      <CommentDetail
        author="Messi"
        timeAgo="Yesterday at 2:05AM"
        comment="Well done, keep up the good work!"
        avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
