import express from "express";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import { Game } from "./models/game";

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);
app.use(express.static(__dirname + "/public"));

const game = new Game();
game.startGame();

io.on("connection", (socket) => {
  console.log("Comenzando juego");
  socket.on("client:draw", (index) => {
    socket.broadcast.emit("server:draw", {
        index
    })
    if(game.currentPlayerWins(index)){
        socket.broadcast.emit("server:have-winner", "El ganador es el jugador: ", game.getCurrentPlayer().symbol);
    } else {
        game.changePlayerTurn()
    }
  });


});

server.listen(3005);
console.log("Server on port", 3005);
