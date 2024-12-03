const search_btn = document.getElementById('searchCoachesBtn');
const user = localStorage.getItem("user");
const mssg = document.querySelector("p");
const token = localStorage.getItem("token");

search_btn.addEventListener('click', async function (event) {
    async function searchCoaches() {
        let search = document.getElementById("search_coaches");

        if (search.value != null) {
            search = document.getElementById("search_coaches").value;
        } else {
            search = "";
        }

        console.log(search);
        let url = `https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/studentuser/coachusers?search=${search}`;

        console.log(url);
        try {
            let response = await fetch(url, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.status == 200) {
                let data = await response.json();
                console.log(data);

                const container = document.getElementById("coaches_profile");
                container.innerHTML = '';
                console.log(container);
                console.log(data.length);

                for (let i = 0; i < data.length; i++) {
                    const coach_profile = document.createElement('div');
                    coach_profile.className = "coach-profile";

                    // Profile picture
                    const profile_picture = document.createElement('img');
                    if(data[i].image != undefined){
                    profile_picture.src = data[i].image;
                    }else{
                        profile_picture.src = "http://cdn.mcauto-images-production.sendgrid.net/9fdee810147efd1c/06f2ed33-e8af-4475-baee-7a90421efc5c/400x400.jpg";
                    }
                    profile_picture.className = "profile-picture";
                    coach_profile.appendChild(profile_picture);

                    // Information container
                    const coach_info = document.createElement('div');
                    coach_info.className = "coach-info";

                    // Name
                    const name = document.createElement('h3');
                    name.textContent = data[i].name || "Unknown Name";
                    name.className = "coach-name";
                    coach_info.appendChild(name);

                    // Email
                    const email = document.createElement('p');
                    email.textContent = `Email: ${data[i].email || "N/A"}`;
                    email.className = "coach-email";
                    coach_info.appendChild(email);

                    // School
                    const school = document.createElement('p');
                    school.textContent = `School: ${data[i].school || "N/A"}`;
                    school.className = "coach-school";
                    coach_info.appendChild(school);

                    // Title
                    const title = document.createElement('p');
                    title.textContent = `Title: ${data[i].title || "N/A"}`;
                    title.className = "coach-title";
                    coach_info.appendChild(title);

                    // Coaching Position
                    if (data[i].coaching_position != null || data[i].coaching_position != undefined) {
                        const coaching_position = document.createElement('p');
                        coaching_position.textContent = `Position: ${data[i].coaching_position || "N/A"}`;
                        coaching_position.className = "coach-position";
                        coach_info.appendChild(coaching_position);
                    }

                    // Append the info container to the profile
                    coach_profile.appendChild(coach_info);

                    // Append the complete profile to the container
                    container.appendChild(coach_profile);
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
    }

    searchCoaches();
});