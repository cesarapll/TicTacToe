const socket = io("http://localhost:3005");

function getCurrentStateEvent(){
  socket.emit("client:get-current-state");
}

socket.on("server:current-state", (currentSymbol) => {
  
})

function drawInBoard(index) {
  const block = document.getElementById(index);
  block.innerHTML = `<p class="symbol">${game.getCurrentPlayer().symbol}</p>`;
}

function handleClick(index) {
  drawInBoard(index);
  socket.emit("client:draw", {
    index
  });
}

socket.on("server:draw", (index) => {
  game.drawInBoard(index);
});

socket.on("server:have-winner", (index) => {
  console.log("The winner is")
});
