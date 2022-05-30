const ApprovalCard = (props) => {
  console.log(props.children);
  return (
    <section className="card border rounded-md my-6">
      <div className="content p-4">{props.children}</div>
      <hr />
      <div className="p-4 flex flex-col sm:flex-row gap-2">
        <button className="py-2 px-10 flex-1 border-2 border-green-500 hover:bg-green-200 rounded-md">
          Approve
        </button>
        <button className="py-2 px-10 flex-1 border-2 border-red-500 hover:bg-red-200 rounded-md">
          Reject
        </button>
      </div>
    </section>
  );
};

export default ApprovalCard;
