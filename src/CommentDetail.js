const CommentDetail = (props) => {
  return (
    <section className="comment flex flex-col gap-2 sm:flex-row sm:gap-4">
      <div className="w-20 min-w-[80px]">
        <img
          src={props.avatar}
          alt="profile"
          className="rounded-full object-cover object-center"
        />
      </div>

      <div className="content">
        <a href="/" className="text-lg font-bold">
          {props.author}
        </a>
        <p className="inline text-gray-500 ml-4">{props.timeAgo}</p>
        <p className="mt-1">{props.comment}</p>
      </div>
    </section>
  );
};

export default CommentDetail;
