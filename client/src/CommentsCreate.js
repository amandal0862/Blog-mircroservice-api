import React, { useEffect, useState } from "react";

const CommentsCreate = () => {
  const [content, setContent] = useState([]);

  return (
    <div>
      <form>
        <div className="form-groups">
          <label>New Comment</label>
          <input className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentsCreate;
