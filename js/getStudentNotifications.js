const user = localStorage.getItem("user");
const mssg = document.querySelector("p");
const token = localStorage.getItem("token");
const container = document.getElementById("student_notifications");

console.log(user)
const user2 =   JSON.parse(user)
console.log(user2._id)

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
        console.log(container)
        console.log(data.length)

        for (let i = 0; i < data.length; i++) {

            console.log(data)
            const invitation = document.createElement('div')
            invitation.className = "box"

            const messagebtn = document.createElement("button")
            messagebtn.className = "accept_btn"
            messagebtn.id = `accept_btn${i}`
            messagebtn.textContent = "✉️"
            console.log(messagebtn)
            invitation.appendChild(messagebtn)

            console.log(invitation)

            const subject = document.createElement('p');
            subject.textContent = `Subject: ${data[i].subject}`;
            invitation.appendChild(subject)

            console.log(invitation)

            const description = document.createElement('p');
            description.textContent = `Description: ${data[i].description}`
            invitation.appendChild(description)


            container.appendChild(invitation)
            console.log(container)


            const invitation_btn = document.getElementById(`accept_btn${i}`)

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
                            console.log(data)
                          
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
