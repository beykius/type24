const messageInput = document.querySelector('#messageInput');
const sendButton = document.querySelector('#sendButton');
const allMessages = document.querySelector('.message.all-messages');
const chatHeader = document.querySelector('.chat-header');


function getTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    return `${hours}:${minutes}`;
}

function addMessage(theMessage) {
    const createMessage = document.createElement('div');
    createMessage.classList.add('message');

    const messageText = document.createElement('p');
    messageText.textContent = theMessage;

    const time = document.createElement('span');
    time.classList.add('time');
    time.textContent = getTime();

    createMessage.appendChild(messageText);
    createMessage.appendChild(time);
    allMessages.appendChild(createMessage);

}

function sendMessage() {
    const message = messageInput.value;
    if (message) {
        addMessage(message);
        chatHeader.style.display = 'none';
        messageInput.value = '';
    }
}

sendButton.onclick = () => {
    sendMessage();
}