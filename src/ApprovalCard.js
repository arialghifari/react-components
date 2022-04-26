const ApprovalCard = () => {
  return (
    <div className="card border p-3 rounded-md">
      <p>Are you sure?</p>
      <hr className="mt-4" />
      <div className="button mt-3">
        <button className="py-2 px-10 border-2 border-green-500 rounded-tl-md rounded-bl-md">
          Approve
        </button>
        <button className="py-2 px-10 border-2 border-red-500 rounded-tr-md rounded-br-md">
          Decline
        </button>
      </div>
    </div>
  );
};

export default ApprovalCard;
