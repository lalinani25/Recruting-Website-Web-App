const signUp = document.querySelector('#coachSignUp');
const message = document.querySelector("p");

signUp.addEventListener('click', async function (event) {

    const email = document.querySelector('#coach_email').value;
    const name = document.querySelector('#coach_name').value;
    const password = document.querySelector('#coach_password').value;
    const school = document.querySelector('#coach_school').value;
    const title = document.querySelector('#coach_title').value;

    const userData = {
        email: email,
        name: name,
        password: password,
        school: school,
        title: title
    };


    await createAccount(userData);

});

async function createAccount(userData) {
    const mssg = document.querySelector("p");
    const url = "https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/coachuser";
    console.log("test")
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            try {
                const data = await response.json();
                mssg.innerHTML = data.message;
                message.textContent = 'Verification email has been sent to ' + userData.email;
                message.style.color = 'white';
            } catch (error) {
                console.error('Error parsing JSON response:', error.message);
                mssg.innerHTML = 'Verification email has been sent to ' + userData.email;
                mssg.style.color = 'white';
            }
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
}

