const user = localStorage.getItem("user");
const mssg = document.querySelector("p");
const token = localStorage.getItem("token");
const container = document.getElementById("student_notifications");

console.log(user)
const user2 = JSON.parse(user)
console.log(user2._id)
console.log(user2.invitations)

const invitationArray = user2.invitations

let url = `https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/invitations/${user2._id}`

console.log(url)
try {
    let response = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        },

    });


    if (response.status == 200) {

        let data = []
        data = await response.json()

        console.log(data)
        container.innerHTML = '';
       
        

        for (let i = 0; i < data.length; i++) {
            const invitation = document.createElement('div')
            invitation.className = "box"

            const declinemessagebtn = document.createElement("button")
            declinemessagebtn.className = "decline_btn"
            declinemessagebtn.id = `decline_btn${i}`
            declinemessagebtn.textContent = "x"
            declinemessagebtn.style.color = "red";
            invitation.appendChild(declinemessagebtn)
            
            const acceptmessagebtn = document.createElement("button")
            acceptmessagebtn.className = "accept_btn"
            acceptmessagebtn.id = `accept_btn${i}`
            acceptmessagebtn.textContent = "✔"
            acceptmessagebtn.style.color = "green";
            invitation.appendChild(acceptmessagebtn)


            const subject = document.createElement('p');
            subject.textContent = ` ${data[i].subject}`;
            invitation.appendChild(subject)

            console.log(invitation)

            const description = document.createElement('p');
            description.textContent = ` ${data[i].description}`
            invitation.appendChild(description)


            container.appendChild(invitation)
            console.log(container)


            const invitation_btn = document.getElementById(`accept_btn${i}`)
            const decline_btn = document.getElementById(`decline_btn${i}`)

            invitation_btn.addEventListener('click', async function (event) {

                const sender = user2._id
                const receiver = data[i].sender
                const subject = "Request for Contact Information Accepted"
                const description = `Student's Email: ${user2.email}`

                const invitation = {
                    sender: sender,
                    receiver: receiver,
                    subject: subject,
                    description: description
                }

                const url = "https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net//invitation/response";
                console.log("test")
                try {
                    const response = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                             "Authorization": `Bearer ${token}`
                        },
                        body: JSON.stringify(invitation)
                    });

                    if (response.ok) {
                        
                            const data = response
                            mssg.innerHTML = "Your email was shared with the coach!"
                            console.log(data)
                            setTimeout(function() {
                                location.reload();
                            }, 1000);
                          
                    } else {
                        const errorData = await response.json();
                        mssg.innerHTML = "Error: " + errorData.message;
                        mssg.style.color = 'red';
                    }
                } catch (error) {
                    console.error('Error:', error.message);
                    mssg.innerHTML = "Error: " + error.message;
                    mssg.style.color = 'red';
                }

            })



            decline_btn.addEventListener('click', async function (event) {

                const invitationID = data[i]._id
                console.log(data[i])

                const url = `https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net//invitation/${invitationID}`;
                try {
                    const response = await fetch(url, {
                        method: "DELETE",
                        headers: {
                             "Authorization": `Bearer ${token}`
                        },
                    });

                    if (response.ok) {
                        data.splice(i, 1)
                        invitationArray.splice(i, 1)
                        console.log("deleted successfully")
                        mssg.innerHTML = "Invitation has been declined!"
                            setTimeout(function() {
                                location.reload();
                            }, 1000);
                          
                    } else {
                        const errorData = await response.json();
                        mssg.innerHTML = "Error: " + errorData.message;
                        mssg.style.color = 'red';
                    }
                } catch (error) {
                    console.error('Error:', error.message);
                    mssg.innerHTML = "Error: " + error.message;
                    mssg.style.color = 'red';
                }

            })

        }
    }

    else {
        const errorData = await response.json();
        mssg.innerHTML = "Error: " + errorData.message;
        mssg.style.color = 'red';
    }
} catch (error) {
    mssg.innerHTML = "Error: An error occurred";
    mssg.style.color = 'red';
}












