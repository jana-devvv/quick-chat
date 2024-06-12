import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pb from "../services/common";
import Message from "../components/Message";

function HomePage() {
  const token = localStorage.getItem("pocketbase_auth");
  const route = useNavigate();
  const user = pb.authStore.model;
  const [messages, setMessages] = useState([]);
  const [chat, setChat] = useState("");

  async function getMessaage() {
    try {
      const records = await pb.collection("message").getList(1, 50, {
        sort: "created",
        expand: "user",
      });
      console.log(records.items);
      setMessages(records.items);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    pb.realtime.subscribe("message", function (e) {
      let x = messages.filter((item) => item.id !== e.record.id);
      setMessages((prevMessage) => [...prevMessage, e.record]);
    });
    return () => {
      pb.realtime.unsubscribe();
    };
  });

  useEffect(() => {
    getMessaage();
  }, []);

  if (token == null) {
    route("/login");
  }

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
    <>
      <div className="flex justify-center items-center min-h-screen flex-col">
        {messages.map((data, index) => (
          <div className="flex">
            <Message data={data} key={index} />
          </div>
        ))}
        <form onSubmit={submitChat}>
          <input
            type="text"
            value={chat}
            onChange={(e) => setChat(e.target.value)}
          />
          <button type="submit">Kirim</button>
        </form>
      </div>
    </>
  );
}

export default HomePage;
