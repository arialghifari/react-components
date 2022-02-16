import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import "./index.css";

const App = () => {
    return (
        <div className="comments grid grid-cols-1 place-items-center my-8 gap-6">
            <h1 className="text-4xl">Comments</h1>

            <CommentDetail
                author="Farhan"
                timeAgo="Today at 3:25PM"
                comment="Very good blog post!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Demian"
                timeAgo="Today at 1:00PM"
                comment="I learn a lot from this post!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Messi"
                timeAgo="Yesterday at 2:05AM"
                comment="Well done, keep up the good work!"
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
