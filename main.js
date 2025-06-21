const WebSocket = require('ws');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('received: %s', message);
  });

  ws.send('something');
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});