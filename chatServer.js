import http from "http";
import { Server } from "socket.io";
// import SQlite from "better-sqlite3";
// const db = new SQlite("./Databases/messages.sqlite");
const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
  socket.on("message", async (message) => {
    // console.log(`Message: ${message.content}`);
    // db.prepare(
    // 	"CREATE TABLE IF NOT EXISTS MESSAGES (USER TEXT, MESSAGE TEXT, UNIXTIME TEXT)",
    // ).run();
    // db.prepare(
    // 	"INSERT INTO MESSAGES (USER, MESSAGE, UNIXTIME) VALUES (?, ?, ?)",
    // ).run(
    // 	message.author,
    // 	message.content,
    // 	message.timestamp,
    // );
  });
});
server.listen(3001, () => {
  console.log("Chat server running");
});

export default io;
