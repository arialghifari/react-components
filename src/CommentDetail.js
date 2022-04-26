import React from "react";

const CommentDetail = (props) => {
  return (
    <div className="comment w-[500px] flex flex-row gap-4">
      <a
        href="/"
        className="bg-cover bg-center h-16 w-16 rounded-full"
        style={{ backgroundImage: `url(${props.avatar})` }}
      >
        {" "}
      </a>
      <div className="basis-5/6">
        <a href="/" className="inline text-lg font-bold">
          {props.author}
        </a>
        <p className="inline text-gray-500 ml-4">{props.timeAgo}</p>
        <p className="mt-1">{props.comment}</p>
      </div>
    </div>
  );
};

export default CommentDetail;
