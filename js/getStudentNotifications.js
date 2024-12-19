const user = localStorage.getItem("user");
const mssg = document.querySelector("p");
const token = localStorage.getItem("token");
const container = document.getElementById("student_notifications");

console.log(user);
const user2 = JSON.parse(user);
console.log(user2._id);
console.log(user2.invitations);

const invitationArray = user2.invitations;

let url = `https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/invitations/${user2._id}`;

console.log(url);

try {
    let response = await fetch(url, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    if (response.status === 200) {
        let data = await response.json();
        console.log(data);
        container.innerHTML = '';

        for (let i = 0; i < data.length; i++) {
            const invitation = document.createElement('div');
            invitation.className = "box";

            const declinemessagebtn = document.createElement("button");
            declinemessagebtn.className = "decline_btn";
            declinemessagebtn.id = `decline_btn${i}`;
            declinemessagebtn.textContent = "x";
            declinemessagebtn.style.color = "red";
            invitation.appendChild(declinemessagebtn);

            const acceptmessagebtn = document.createElement("button");
            acceptmessagebtn.className = "accept_btn";
            acceptmessagebtn.id = `accept_btn${i}`;
            acceptmessagebtn.textContent = "✔";
            acceptmessagebtn.style.color = "green";
            invitation.appendChild(acceptmessagebtn);

            const subject = document.createElement('p');
            subject.textContent = ` ${data[i].subject}`;
            invitation.appendChild(subject);

            const description = document.createElement('p');
            description.textContent = ` ${data[i].description}`;
            console.log(data[i].description)
            invitation.appendChild(description);

            container.appendChild(invitation);

            // Check if invitation is already accepted
            const acceptedInvitations = JSON.parse(localStorage.getItem("acceptedInvitations")) || [];
            if (acceptedInvitations.includes(data[i]._id)) {
                // Hide the accept and decline buttons if accepted
                acceptmessagebtn.style.display = 'none';
                declinemessagebtn.style.display = 'none';
                subject.textContent = "Request Accepted"
            }

            // Accept button click event
            acceptmessagebtn.addEventListener('click', async function (event) {
                const sender = user2._id;
                const receiver = data[i].sender;
                const subject = "Request for Contact Information Accepted";
                const description = `Student's Email: ${user2.email}`;

                const invitation = {
                    sender: sender,
                    receiver: receiver,
                    subject: subject,
                    description: description,
                };

                const url = "https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net//invitation/response";
                try {
                    const response = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`,
                        },
                        body: JSON.stringify(invitation),
                    });

                    if (response.ok) {
                        // Mark the invitation as accepted in localStorage
                        const acceptedInvitations = JSON.parse(localStorage.getItem("acceptedInvitations")) || [];
                        acceptedInvitations.push(data[i]._id);
                        localStorage.setItem("acceptedInvitations", JSON.stringify(acceptedInvitations));

                        mssg.innerHTML = "Your email was shared with the coach!";
                        alert(`Your email was shared with the coach!`);
                        console.log(response);

                        // Hide the accept and decline buttons after acceptance
                        acceptmessagebtn.style.display = 'none';
                        declinemessagebtn.style.display = 'none';

                        // Optionally reload the page after a brief delay
                        setTimeout(function () {
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
            });

            // Decline button click event
            declinemessagebtn.addEventListener('click', async function (event) {
                const invitationID = data[i]._id;
                const url = `https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net//invitation/${invitationID}`;
                try {
                    const response = await fetch(url, {
                        method: "DELETE",
                        headers: {
                            "Authorization": `Bearer ${token}`,
                        },
                    });

                    if (response.ok) {
                        data.splice(i, 1);
                        invitationArray.splice(i, 1);
                        console.log("deleted successfully");
                        alert("Invitation deleted successfully!");
                        mssg.innerHTML = "Invitation has been declined!";

                        setTimeout(function () {
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
            });
        }
    } else {
        const errorData = await response.json();
        mssg.innerHTML = "Error: " + errorData.message;
        mssg.style.color = 'red';
    }
} catch (error) {
    mssg.innerHTML = "Error: An error occurred";
    mssg.style.color = 'red';
}




