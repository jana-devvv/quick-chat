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
    pb.collection("message").subscribe("*", async ({ action, record }) => {
      if (action == "create") {
        const user = await pb.collection("users").getOne(record.user);
        record.expand = { user };
        setMessages((prevMessage) => [...prevMessage, record]);
      }
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

  return (
    <>
      <div className="flex mb-20  min-h-screen flex-col">
        {messages.map((data, index) => (
          <div className="flex">
            <Message data={data} key={index} />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
