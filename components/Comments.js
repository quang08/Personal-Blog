import moment from "moment";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

import { getComments } from "../services";

function Comments({ slug }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((res) => {
      setComments(res);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="dark:bg-black dark:shadow-gray-700 bg-white shadow-lg  rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} {comments.length > 1 ? "Comments" : "Comment"}
          </h3>

          {comments.map((comment, i) => (
            <div key={i} className="border-b border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAt).format("MMM DD, YYYY")}
              </p>
              <p className="whitespace-pre-line dark:text-gray-300 text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Comments;
