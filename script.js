document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById("chatIcon");
    const statusIcon = document.getElementById("statusIcon");
    const channelsIcon = document.getElementById("channelsIcon");
    const communitiesIcon = document.getElementById("communitiesIcon");
    const advertIcon = document.getElementById("advertIcon");
    const businessIcon = document.getElementById("businessIcon");
    const settingsIcon = document.getElementById("settingsIcon");
    const profileIcon = document.getElementById("profileIcon");

    const toolIcon = document.getElementById("tool-icon");
    const toolIconOne = document.getElementById("tool-icon-one");
    const toolIconTwo = document.getElementById("tool-icon-two");
    const toolIconThree = document.getElementById("tool-icon-three");
    const toolIconFour = document.getElementById("tool-icon-four");
    const toolIconFive = document.getElementById("tool-icon-five");

    const chatHistory = document.querySelector(".chat-history");
    const statusHistory = document.querySelector(".status-history");
    const channels = document.querySelector(".channels");
    const communities = document.querySelector(".communities");
    const business = document.querySelector(".business");
    const advertiseContainer = document.querySelector(".advertise-container");
    const settings = document.querySelector(".settings");
    const profiles = document.querySelector(".profiles");

    if (chatIcon) {
        chatIcon.addEventListener("click", function () {
            if (chatHistory) chatHistory.style.display = "block";
            if (statusHistory) statusHistory.style.display = "none";
            if (channels) channels.style.display = "none";
            if (communities) communities.style.display = "none";
            if (business) business.style.display = "none";
            if (advertiseContainer) advertiseContainer.style.display = "none";
            if (settings) settings.style.display = "none";
            if (profiles) profiles.style.display = "none";

            if (toolIcon) toolIcon.style.display = "none";
            if (toolIconOne) toolIconOne.style.display = "block";
            if (toolIconTwo) toolIconTwo.style.display = "none";
            if (toolIconThree) toolIconThree.style.display = "none";
            if (toolIconFour) toolIconFour.style.display = "none";
            if (toolIconFive) toolIconFive.style.display = "none";

        });
    }

    if (statusIcon) {
        statusIcon.addEventListener("click", function () {
            if (statusHistory) statusHistory.style.display = "block";
            if (chatHistory) chatHistory.style.display = "none";
            if (channels) channels.style.display = "none";
            if (communities) communities.style.display = "none";
            if (business) business.style.display = "none";
            if (advertiseContainer) advertiseContainer.style.display = "none";
            if (settings) settings.style.display = "none";
            if (profiles) profiles.style.display = "none";

            if (toolIcon) toolIcon.style.display = "block";
            if (toolIconOne) toolIconOne.style.display = "none";
            if (toolIconTwo) toolIconTwo.style.display = "none";
            if (toolIconThree) toolIconThree.style.display = "none";
            if (toolIconFour) toolIconFour.style.display = "none";
            if (toolIconFive) toolIconFive.style.display = "none";

        });
    }

        
    if (channelsIcon) {
        channelsIcon.addEventListener("click", function () {
            if (channels) channels.style.display = "block";
            if (chatHistory) chatHistory.style.display = "none";
            if (statusHistory) statusHistory.style.display = "none";
            if (communities) communities.style.display = "none";
            if (business) business.style.display = "none";
            if (advertiseContainer) advertiseContainer.style.display = "none";
            if (settings) settings.style.display = "none";
            if (profiles) profiles.style.display = "none";

            if (toolIcon) toolIcon.style.display = "none";
            if (toolIconOne) toolIconOne.style.display = "none";
            if (toolIconTwo) toolIconTwo.style.display = "block";
            if (toolIconThree) toolIconThree.style.display = "none";
            if (toolIconFour) toolIconFour.style.display = "none";
            if (toolIconFive) toolIconFive.style.display = "none";

        });
    }

    if (communitiesIcon) {
        communitiesIcon.addEventListener("click", function () {
            if (communities) communities.style.display = "block";
            if (channels) channels.style.display = "none";
            if (chatHistory) chatHistory.style.display = "none";
            if (statusHistory) statusHistory.style.display = "none";
            if (business) business.style.display = "none";
            if (advertiseContainer) advertiseContainer.style.display = "none";
            if (settings) settings.style.display = "none";
            if (profiles) profiles.style.display = "none";
            
            if (toolIcon) toolIcon.style.display = "none";
            if (toolIconOne) toolIconOne.style.display = "none";
            if (toolIconTwo) toolIconTwo.style.display = "none";
            if (toolIconThree) toolIconThree.style.display = "block";
            if (toolIconFour) toolIconFour.style.display = "none";
            if (toolIconFive) toolIconFive.style.display = "none";
        });
    }

    if (advertIcon) {
        advertIcon.addEventListener("click", function () {
            if (advertiseContainer) advertiseContainer.style.display = "block";
            if (communities) communities.style.display = "none";
            if (channels) channels.style.display = "none";
            if (chatHistory) chatHistory.style.display = "block";
            if (statusHistory) statusHistory.style.display = "none";
            if (business) business.style.display = "none";
            if (settings) settings.style.display = "none";
            if (profiles) profiles.style.display = "none";

            if (toolIcon) toolIcon.style.display = "none";
            if (toolIconOne) toolIconOne.style.display = "none";
            if (toolIconTwo) toolIconTwo.style.display = "none";
            if (toolIconThree) toolIconThree.style.display = "none";
            if (toolIconFour) toolIconFour.style.display = "block";
            if (toolIconFive) toolIconFive.style.display = "none";
        });
    }

    if (businessIcon) {
        businessIcon.addEventListener("click", function () {
            if (business) business.style.display = "block";
            if (advertiseContainer) advertiseContainer.style.display = "none";
            if (communities) communities.style.display = "none";
            if (channels) channels.style.display = "none";
            if (chatHistory) chatHistory.style.display = "none";
            if (statusHistory) statusHistory.style.display = "none";
            if (settings) settings.style.display = "none";
            if (profiles) profiles.style.display = "none";

            if (toolIcon) toolIcon.style.display = "none";
            if (toolIconOne) toolIconOne.style.display = "none";
            if (toolIconTwo) toolIconTwo.style.display = "none";
            if (toolIconThree) toolIconThree.style.display = "none";
            if (toolIconFour) toolIconFour.style.display = "block";
            if (toolIconFive) toolIconFive.style.display = "none";
        });
    }

    if (settingsIcon) {
        settingsIcon.addEventListener("click", function () {
            if (settings) settings.style.display = "block";
            if (business) business.style.display = "none";
            if (advertiseContainer) advertiseContainer.style.display = "none";
            if (communities) communities.style.display = "none";
            if (channels) channels.style.display = "none";
            if (chatHistory) chatHistory.style.display = "none";
            if (statusHistory) statusHistory.style.display = "none";
            if (profiles) profiles.style.display = "none";
        });
    }

    if (profileIcon) {
        profileIcon.addEventListener("click", function () {
            if (profiles) profiles.style.display = "block";
            if (settings) settings.style.display = "none";
            if (business) business.style.display = "none";
            if (advertiseContainer) advertiseContainer.style.display = "none";
            if (communities) communities.style.display = "none";
            if (channels) channels.style.display = "none";
            if (chatHistory) chatHistory.style.display = "none";
            if (statusHistory) statusHistory.style.display = "none";
        });
    }

});

document.addEventListener("DOMContentLoaded", function () {
    const advertIcon = document.getElementById("advertIcon");
    const advertiseContainer = document.querySelector(".advertise-container");
    const cancelButton = document.querySelector(".cancel");


    advertIcon.addEventListener("click", function () {
        advertiseContainer.style.display = "flex";
    });


    cancelButton.addEventListener("click", function () {
        advertiseContainer.style.display = "none";
    });

    advertiseContainer.addEventListener("click", function (event) {
        if (event.target === advertiseContainer) {
            advertiseContainer.style.display = "none"; 
        }
    });
});






document.addEventListener('DOMContentLoaded', () => {
    const interactiveImage = document.getElementById('interactiveImage');
    const imageOverlay = document.getElementById('imageOverlay');
    const largeImage = document.getElementById('largeImage');


    interactiveImage.addEventListener('click', () => {
        imageOverlay.style.display = 'flex'; 
    });


    largeImage.addEventListener('click', () => {

        const link = document.createElement('a');
        link.href = interactiveImage.src; 
        link.download = 'tech_tutor.png'; 
        document.body.appendChild(link); 
        link.click(); 
        document.body.removeChild(link);
    });


    imageOverlay.addEventListener('click', (event) => {
        if (event.target === imageOverlay) {
            imageOverlay.style.display = 'none'; // Hide the overlay
        }
    });
});




document.addEventListener('DOMContentLoaded', () => {

    const chatInput = document.querySelector('.chat-input input');
    const chatBodyContainer = document.querySelector('.chat-body-container');
    const sendIcon = document.querySelector('.send-icon'); 
    const emojiBtn = document.querySelector('#emoji-btn'); 
    const emojiPicker = document.querySelector('#emoji-picker'); 


    function addMessage(message) {

        const messageContainer = document.createElement('div');
        messageContainer.classList.add('new-container');


        messageContainer.innerHTML = `
            <div class="new-time">
                <p class="message">${message}</p>
                <p class="message-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
        `;


        chatBodyContainer.appendChild(messageContainer);
        chatBodyContainer.scrollTop = chatBodyContainer.scrollHeight; 
        
    }

 
    function sendMessage() {
        if (chatInput.value.trim() !== '') {
            addMessage(chatInput.value);  
            chatInput.value = '';         
        }
    }


    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            if (event.shiftKey) {

                chatInput.value += '\n'; 
                event.preventDefault(); 
            } else {
                sendMessage(); 
            }
        }
    });


    sendIcon.addEventListener('click', sendMessage); 


    emojiBtn.addEventListener('click', () => {
        emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'flex' : 'none';
    });


    emojiPicker.addEventListener('click', (event) => {
        if (event.target.classList.contains('emoji')) {
            const emoji = event.target.getAttribute('data-emoji');
            chatInput.value += emoji;
            chatInput.focus(); 
        }
    });


    document.addEventListener('click', (event) => {
        if (!emojiBtn.contains(event.target) && !emojiPicker.contains(event.target)) {
            emojiPicker.style.display = 'none';
        }
    });
});
