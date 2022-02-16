import React from "react";

const CommentDetail = (props) => {
    console.log(props);
    return (
        <div className="comment w-2/6 flex flex-row gap-4">
            <div
                className="basis-1/6 bg-cover bg-center"
                style={{ backgroundImage: `url(${props.avatar}` }}
            ></div>
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
