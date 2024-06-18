import React from "react";
import pb from "../services/common";

function Message({ data }) {
  const user = pb.authStore.model;

  return (
    <>
      <div className="flex gap-5">
        <div className="flex flex-col items-center justify-center   ">
          <img
            className="w-8 h-8 rounded-full"
            src={`https://api.dicebear.com/8.x/thumbs/svg?seed=${data.expand?.user?.username}`}
            alt=""
          />
        </div>

        <div className="text-white py-3 rounded-lg my-2">
          <p className="text-white">{data.expand?.user?.username}</p>

          <h3>{data.message}</h3>
        </div>
      </div>
    </>
  );
}

export default Message;
