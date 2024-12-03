const user = localStorage.getItem("user");
const mssg = document.querySelector("p");
const token = localStorage.getItem("token");
const container = document.getElementById("coach_notifications");

console.log(user)
const user2 =   JSON.parse(user)
console.log(user2._id)

let url = `https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/invitation/response/${user2._id}`

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
        }
    }

    else {
        const errorData = await response.json();
        mssg.innerHTML = "Error: " + errorData.message;
        mssg.style.color = 'red';
    }
} catch (error) {
    mssg.innerHTML = "Error: An error occurred" + error;
    mssg.style.color = 'red';
}
