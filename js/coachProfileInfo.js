const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const mssg = document.querySelector("p");

let url = "https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/coachuser/data"
console.log(url)

try {
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        },

    })

    if (response.ok) {
        let data = [];
        data = await response.json()
        console.log(data)

        console.log(data[0].email)
        console.log(data[0].email != undefined)

        if(data[0].email != undefined){
            const container = document.getElementById("coach_email");
            container.style.display = 'block';
            const inputField = document.createElement('p');
                inputField.type = 'text';
                inputField.id = "coach_email"
                inputField.textContent = `Email: ${data[0].email}`;
                container.appendChild(inputField);
        }

        if(data[0].name != undefined){
            const container = document.getElementById("coach_name");
            container.style.display = 'block';
            const inputField = document.createElement('p');
                inputField.type = 'text';
                inputField.id = "coach_name"
                inputField.textContent = `Name: ${data[0].name}`;
                container.appendChild(inputField);
        }

        if(data[0].school != undefined){
            const container = document.getElementById("coach_school");
            container.style.display = 'block';
            const inputField = document.createElement('p');
                inputField.type = 'text';
                inputField.id = "coach_school"
                inputField.textContent = `School: ${data[0].school}`;
                container.appendChild(inputField);
        }

        if(data[0].title != undefined){
            const container = document.getElementById("coach_title");
            container.style.display = 'block';
            const inputField = document.createElement('p');
                inputField.type = 'text';
                inputField.id = "coach_title"
                inputField.textContent = `Title: ${data[0].title}`;
                container.appendChild(inputField);
        }

        if(data[0].coaching_position != undefined){
            const container = document.getElementById("coaching_position");
            container.style.display = 'block';
            const inputField = document.createElement('p');
                inputField.type = 'text';
                inputField.id = "coaching_position"
                inputField.textContent = `Coaching Position: ${data[0].coaching_position}`;
                container.appendChild(inputField);
        }

        console.log(data[0].image)

        if (data[0].image != undefined) {

            console.log("test")
    
            const container = document.getElementById("profile-picture");
            container.style.display = 'block';
    
            const imgElement = document.createElement('img');  // Dynamically create the <img> element
            imgElement.src = data[0].image;  // Create a URL for the image file
            imgElement.alt = 'Profile Picture';  // Set a fallback alt text in case the image fails to load
    
            // Set attributes to make sure the image fits within the circle
            imgElement.style.width = '100%';    // Set width to 100% of the parent container
            imgElement.style.height = '100%';   // Set height to 100% of the parent container
            imgElement.style.objectFit = 'cover';  // Ensure the image fully covers the circle without distortion
    
            console.log(container)
            container.appendChild(imgElement);
    
            console.log(container)
        }

    }

} catch (error) {
    mssg.innerHTML = "Error: An error occurred";
    mssg.style.color = 'red';
}
