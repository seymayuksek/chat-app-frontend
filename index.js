function send() {

    const textBox = document.getElementById("text-box");
    text = textBox.value;
    textBox.value = "";

    if (text===""){
        return;
    }


    const myMessageDiv = document.createElement("div");
    myMessageDiv.className = "my-message-div";
    myMessageDiv.setAttribute("align", "right");


    const timeItem = document.createElement("div");
    timeItem.className = "time-receiver";
    timeItem.innerHTML = "15.14  ";


    const newMessageBox = document.createElement("div");
    newMessageBox.className = "receiver";
    newMessageBox.innerHTML = text;


    myMessageDiv.appendChild(timeItem);
    myMessageDiv.appendChild(newMessageBox);

    const messagesBox = document.getElementById("messagesBox");
    messagesBox.appendChild(myMessageDiv);



}