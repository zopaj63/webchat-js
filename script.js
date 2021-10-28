//connect to a channel
const drone = new Scaledrone("VIgNNXjmYel6Vmhu", {
    data: {
        name: getName(),
        color: getRandomColor(),
    },
});

//connect to a room
drone.on('open', error => {
    if (error) {
        return console.error(error);
    }
    console.log('Sucessfully conected to Scaledrone');

    const room = drone.subscribe('observable-room');
    room.on('open', error => {
        if (error) {
            return console.error(error);
        }
        console.log('Sucesfully joined room');
    });

});



function getName() {
    return ("Zoran");
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

