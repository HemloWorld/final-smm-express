let _connectedUsers = [];

const onWebsocket = (socket) => {
    _connectedUsers.push(socket.id);
    console.log(_connectedUsers.length);
    console.log(_connectedUsers);
    socket.on('disconnect', (data) => {
        console.log(socket.id + " Disconnected");
    });
    // let i = 30;
    // console.log(socket.id);
    // setInterval(() => {
    //     i--;
    //     if (i == 0) {
    //         socket.emit('surp', 'DOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONE');
    //     } else socket.emit('inc', i);
    // }, 1000);
    // socket.emit("msg", i);
    // socket.on('num', (data) => {
    //     i = data;
    //     console.log(data);
    // })
}

module.exports = onWebsocket;