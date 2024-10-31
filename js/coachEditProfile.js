const token = localStorage.getItem("token");
console.log(token)

const update = document.querySelector('#coach_update');
const message = document.querySelector("p");

update.addEventListener('click', async function (event) {

    const email = document.querySelector('#coach_email').value;
    const name = document.querySelector('#coach_name').value;
    const school = document.querySelector('#coach_school').value;
    const title = document.querySelector('#coach_title').value;
    const coaching_position = document.querySelector('#coaching_position').value;

    const userData = {
        email: email,
        name: name,
        school: school,
        title: title,
        coaching_position: coaching_position
    };


    console.log(userData)

    await editCoachProfile(userData);

});

async function editCoachProfile(userData) {
    const mssg = document.querySelector("p");
    const url = "https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/coachuser/editprofile";
    console.log("test")
    console.log(userData)
    
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(userData)
    }

    console.log(JSON.stringify(userData))
        const response = await fetch(url, options);


        console.log(response)
        console.log(response.status)

        if (response.status === 200) {
          
                mssg.innerHTML = 'Coach Profile Updated!';
                mssg.style.color = 'white'
                console.log(userData)
    
        } else {
            const errorData = await response.json();
            mssg.innerHTML = "Error: " + errorData.message;
            mssg.style.color = 'red';
        }
   
}
