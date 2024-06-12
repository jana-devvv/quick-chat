import React from "react";
import pb from "../services/common";

function Message({ data }) {
  const user = pb.authStore.model;

  return (
    <>
      <div className="flex gap-5">
        <div className="flex flex-col items-center justify-center   ">
          <img
            className="w-12 h-12 rounded-full"
            src={`https://api.dicebear.com/8.x/thumbs/svg?seed=${data.expand?.user?.username}`}
            alt=""
          />
          <p>{data.expand?.user?.username}</p>
        </div>

        <div className="bg-primary p-3 rounded-lg my-2">
          <h3>{data.message}</h3>
        </div>
      </div>
    </>
  );
}

export default Message;
