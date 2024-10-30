const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay * 1000))

document.querySelector("#student_login").addEventListener('click', async () => {
    console.log("login")

    const url = "https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/studentuser/login"
    console.log(url)

    const email = document.querySelector("#student_email")
    console.log(email.value)
    const password = document.querySelector("#student_password")
    console.log(password.value)

    const data = {
        email: email.value,
        password: password.value
    }
    console.log(data)

    const body = JSON.stringify(data)
    console.log(body)

    const options = {
        method: "POST",
        headers: {
            "Content-Type": 'application/json'
        },
        body
    }

    console.log('calling fetch')

    let response = await fetch(url, options)

    console.log(response)
    console.log(response.status)

    console.log('fetch returned')

    if (response.status === 200) {
        console.log("logged in successfully.")
        const body = await response.json();
        console.log(body)
        console.log(JSON.stringify(body.user))

        localStorage.setItem("user", JSON.stringify(body.user));
        localStorage.setItem("token", body.token);

        location.href = "studentmain.html"
    }
    else if (response.status === 401) {
        console.log('failed to log in')
        document.querySelector("#errorMssg").innerHTML = "Email has not been validated. Please verify your email to log in!"
    }
    else {
        console.log("error logging in")
        document.querySelector("#errorMssg").innerHTML = "Invalid credentials."
    }

    await sleepNow(3)

    email.value = ''
    password.value = ''
    document.querySelector("#errorMssg").innerHTML = ''

})
