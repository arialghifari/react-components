import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import "./main.css";

const App = () => {
  return (
    <div className="comments m-5">
      <h1 className="text-4xl">Comments</h1>

      <ApprovalCard>
        <p className="font-bold">Warning!</p>
        <p>Are you sure you want to do this?</p>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Farhan"
          timeAgo="Today at 3:25PM"
          comment="Very good blog post!"
          avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/975.jpg"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Demian"
          timeAgo="Today at 1:00PM"
          comment="I learn a lot from this post!"
          avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/600.jpg"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Messi"
          timeAgo="Yesterday at 2:05AM"
          comment="Well done, keep up the good work!"
          avatar="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
