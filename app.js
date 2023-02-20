const inputBox = document.getElementById("inputField")
inputBox.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        e.preventDefault()
        submitMessage();
    }
});

let userInformation = {
    firstUsername: " "
}
function applyUsername(){
    document.getElementById("applied-username").innerText = userInformation.firstUsername
}


const usernameSubmit = document.getElementById("usernameField")
usernameSubmit.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
        e.preventDefault()
        applyUsername1();
    }
});

function applyUsername1() {
    const retrievedName = usernameSubmit.value
    userInformation["firstUsername"] = retrievedName


    document.getElementById("usernameDiv").style.visibility = "hidden"
    
    document.getElementById("container").style.filter= "blur(0px)"


    applyUsername()
}

function submitMessage(){
    const messageText = inputBox.value

    const newMessageHolder = document.createElement("li")
    newMessageHolder.classList.add("message-info")

    //Profile picture space
    const profilePicture = document.createElement("div")
    profilePicture.classList.add("message-author-pfp")

    const messageAuthor = document.createElement("p")
    messageAuthor.innerHTML= document.getElementById("applied-username").innerText
    messageAuthor.classList.add("message-author")

    const newMessage = document.createElement("p")
    newMessage.innerHTML = messageText
    newMessage.classList.add("message-content")

    const newInfoHolder = document.createElement("div")
    newInfoHolder.appendChild(messageAuthor)
    newInfoHolder.appendChild(newMessage)

    //Group everthing together
    newMessageHolder.appendChild(profilePicture)
    newMessageHolder.appendChild(newInfoHolder)

    // Get Message holding space
    document.getElementById("messageSpace").appendChild(newMessageHolder)

    document.getElementById("inputField").value = " ";
}