import moment from "moment";
import Head from "../src/components/head.jsx";
import React from "react";
import io from "socket.io-client";
const socket = io("http://localhost:3001");

class Chat extends React.Component {
  render() {
    function sendChat() {
      if (typeof window !== "undefined") {
        let messages = document.getElementById("messages");
        let form = document?.getElementById("form");
        let input = document?.getElementById("input");

        form.addEventListener("submit", function (e) {
          e.preventDefault();
          if (input.value) {
            socket.emit("message", {
              content: input.value,
              author: "Nigelrex",
              timestamp: moment().unix(),
            });
            var item = document.createElement("li");
            item.textContent = input.value;
            messages.appendChild(item);
            window.scrollTo(0, document.body.scrollHeight);
            input.value = "";
          }
        });
      }
    }
    return (
      <>
        <Head />
        <div>
          <ul id="messages"></ul>
          <form id="form" action="">
            <input id="input" autoComplete="off" />
            <button onClick={sendChat()}>Send</button>
          </form>
        </div>
      </>
    );
  }
}
export default Chat;
