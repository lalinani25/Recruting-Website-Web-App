const search_btn = document.getElementById('searchCoachesBtn');
const user = localStorage.getItem("user");
const mssg = document.querySelector("p");
const token = localStorage.getItem("token");


search_btn.addEventListener('click', async function (event) {

    async function searchCoaches() {

        let search = document.getElementById("search_coaches");

        if (search.value != null) {
            search = document.getElementById("search_coaches").value;
        }
        else {
            search = "";
        }

        console.log(search)
        let url = `https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/studentuser/coachusers?search=${search}`

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

                const container = document.getElementById("coaches_profile")
                container.innerHTML = '';
                console.log(container)
                console.log(data.length)
    
                for (let i = 0; i < data.length; i++) {
    
                    console.log(data)
                    const coach_profile = document.createElement('div')
                    coach_profile.className = "box"
    
                    const name = document.createElement('p');
                    name.textContent = `Name: ${data[i].name}`;
                    coach_profile.appendChild(name)
    
                    const email = document.createElement('p');
                    email.textContent= `Email: ${data[i].email}`;
                    coach_profile.appendChild(email)
    
    
                    const school = document.createElement('p');
                    school.textContent = `School: ${data[i].school}`;
                    coach_profile.appendChild(school)
    
                    const title = document.createElement('p');
                    title.textContent = `Title: ${data[i].title}`
                    coach_profile.appendChild(title)
    
                    if (data[i].coaching_position != null || data[i].coaching_position != undefined) {
                        const coaching_position = document.createElement('p');
                        coaching_position.textContent = `Coaching Position: ${data[i].coaching_position}`
                        coach_profile.appendChild(coaching_position)
    
                    }
    
                    container.appendChild(coach_profile)
                    console.log(container)
    
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

    }


    searchCoaches();
});