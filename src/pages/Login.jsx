import React, { useState } from "react";
import pb from "../services/common";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const link = useNavigate();

  async function doLogin(e) {
    e.preventDefault();

    const payload = {
      identity: username,
      password: password,
    };

    await pb
      .collection("users")
      .authWithPassword(payload.identity, payload.password);
    link("/");

    console.log(payload);

    setUsername("");
    setPassword("");
  }

  async function doRegister(e) {
    e.preventDefault();

    const payload = {
      username: username,
      password: password,
      passwordConfirm: password,
    };

    await pb.collection("users").create(payload);

    console.log(payload);

    setUsername("");
    setPassword("");
  }

  return (
    <div className="grid place-items-center min-h-screen overflow-hidden">
      <div className="flex flex-col gap-4">
        <h3 className="">Login</h3>
        <form className="flex flex-col gap-5">
          <input
            className="border border-gray-500"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border border-gray-500"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={doLogin} type="submit" className="">
            Login
          </button>
          <button onClick={doRegister} type="submit" className="">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
