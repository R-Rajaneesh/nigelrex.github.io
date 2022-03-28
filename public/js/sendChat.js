console.log("e");
import io from "socket.io-client";
const socket = io("http://localhost:3001");
let form = document.getElementById("form");
let input = document.getElementById("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("message", { content: input.value });
    input.value = "";
  }
});
