import React, { useState } from "react";
import pb from "../services/common";
import { FaPlusCircle } from "react-icons/fa";

function BottomNavigationBar() {
  const user = pb.authStore.model;
  const [chat, setChat] = useState("");

  async function submitChat(e) {
    e.preventDefault();

    const payload = {
      message: chat,
      user: user.id,
    };

    const record = await pb.collection("message").create(payload);

    setChat("");
  }

  return (
    <div className="w-full h-[72px] bg-bg">
      <form
        onSubmit={submitChat}
        className="mx-6 relative"
        encType="multipart/form-data"
      >
        <input
          placeholder="Message"
          className="bg-input placeholder:text-gray-500 h-10 w-full px-12 focus:outline-none text-white rounded-md"
          type="text"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
        />
        <label
          htmlFor="image"
          className="absolute top-2.5 left-2 cursor-pointer"
        >
          <FaPlusCircle className="w-5 h-5 text-white" />
          <input
            name="image"
            id="image"
            type="file"
            className="absolute top-2 left-2 hidden"
          />
        </label>
        {/* <button type="submit">Kirim</button> */}
      </form>
    </div>
  );
}

export default BottomNavigationBar;
