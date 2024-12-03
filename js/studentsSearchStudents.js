const search_btn = document.getElementById('searchStudentsBtn');
const user = localStorage.getItem("user");
const mssg = document.querySelector("p");
const token = localStorage.getItem("token");


search_btn.addEventListener('click', async function (event) {

    async function searchStudents() {

        let search = document.getElementById("search_students");

        if (search.value != null) {
            search = document.getElementById("search_students").value;
        }
        else {
            search = "";
        }

        console.log(search)
        let url = `https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/studentusers?search=${search}`

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

                const container = document.getElementById("students_profile")
                container.innerHTML = '';
                console.log(container)
                console.log(data.length)

                for (let i = 0; i < data.length; i++) {
                    const coach_profile = document.createElement('div');
                    coach_profile.className = "coach-profile";

                    // Profile picture
                    const profile_picture = document.createElement('img');
                    if (data[i].image != undefined) {
                        profile_picture.src = data[i].image;
                    } else {
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


                    // Position
                    const coaching_position = document.createElement('p');
                    coaching_position.textContent = `Position: ${data[i].position || "N/A"}`;
                    coaching_position.className = "coach-position";
                    coach_info.appendChild(coaching_position);

                      // Class
                      const coach_class = document.createElement('p');
                      coach_class.textContent = `Graduation Year: ${data[i].gradYear || "N/A"}`;
                      coach_class.className = "coach-class";
                      coach_info.appendChild(coach_class);

                    // School
                    const school = document.createElement('p');
                    school.textContent = `School: ${data[i].school || "N/A"}`;
                    school.className = "coach-school";
                    coach_info.appendChild(school);

                    // Append the info container to the profile
                    coach_profile.appendChild(coach_info);

                    // Click event for the popup
                    coach_profile.addEventListener('click', () => {
                        showPopup(data[i]);
                    });

                    // Append the complete profile to the container
                    container.appendChild(coach_profile);
                }

                // Function to show the popup
                function showPopup(coachData) {
                    const popup = document.createElement('div');
                    popup.className = 'popup';

                    const popupContent = document.createElement('div');
                    popupContent.className = 'popup-content';

                    // Close button
                    const closeButton = document.createElement('span');
                    closeButton.className = 'close-button';
                    closeButton.textContent = '×';
                    closeButton.addEventListener('click', () => {
                        popup.remove();
                    });

                    popupContent.appendChild(closeButton);

                    // Add detailed stats
                    const name = document.createElement('h3');
                    name.textContent = `Name: ${coachData.name}`;
                    popupContent.appendChild(name);

                    const school = document.createElement('p');
                    school.textContent = `School: ${coachData.school}`;
                    popupContent.appendChild(school)

                    const gradYear = document.createElement('p');
                    gradYear.textContent = `Graduation Year: ${coachData.gradYear}`
                    popupContent.appendChild(gradYear)

                    if (coachData.gpa != undefined) {
                        const gpa = document.createElement('p');
                        gpa.textContent = `GPA: ${coachData.gpa}`
                        popupContent.appendChild(gpa)

                    }

                    if (coachData.position != undefined) {
                        const position = document.createElement('p');
                        position.textContent = `Position: ${coachData.position}`
                        popupContent.appendChild(position)

                    }

                    if (coachData.height != undefined) {
                        const height = document.createElement('p');
                        height.textContent = `Height: ${coachData.height}`
                        popupContent.appendChild(height)

                    }

                    if (coachData.weight != undefined) {
                        const weight = document.createElement('p');
                        weight.textContent = `Weight: ${coachData.weight}`
                        popupContent.appendChild(weight)

                    }

                    if (coachData.forty_time != undefined) {
                        const forty_time= document.createElement('p');
                        forty_time.textContent = `40 Time: ${coachData.forty_time}`
                        popupContent.appendChild(forty_time)

                    }

                    if (coachData.pass_yards != undefined) {
                        const pass_yards= document.createElement('p');
                        pass_yards.textContent = `Pass Yards: ${coachData.pass_yards}`
                        popupContent.appendChild(pass_yards)

                    }

                    if (coachData.comp_percentage != undefined) {
                        const comp_percentage= document.createElement('p');
                        comp_percentage.textContent = `Completion Percentage: ${coachData.comp_percentage}`
                        popupContent.appendChild(comp_percentage)

                    }

                    if (coachData.pass_tds != undefined) {
                        const pass_tds= document.createElement('p');
                        pass_tds.textContent = `Passing Touchdowns: ${coachData.pass_tds}`
                        popupContent.appendChild(pass_tds)

                    }

                    if (coachData.pass_ints != undefined) {
                        const pass_ints= document.createElement('p');
                        pass_ints.textContent = `Pass Interceptions: ${coachData.pass_ints}`
                        popupContent.appendChild(pass_ints)

                    }

                    if (coachData.rec != undefined) {
                        const rec= document.createElement('p');
                        rec.textContent = `Receptions: ${coachData.rec}`
                        popupContent.appendChild(rec)

                    }

                    if (coachData.rec_yards != undefined) {
                        const rec_yards= document.createElement('p');
                        rec_yards.textContent = `Receiving Yards: ${coachData.rec_yards}`
                        popupContent.appendChild(rec_yards)

                    }

                    if (coachData.red_tds != undefined) {
                        const red_tds= document.createElement('p');
                        red_tds.textContent = `Red Zone Touchdowns: ${coachData.red_tds}`
                        popupContent.appendChild(red_tds)

                    }

                    if (coachData.rush_yards != undefined) {
                        const rush_yards= document.createElement('p');
                        rush_yards.textContent = `Rush Yards: ${coachData.rush_yards}`
                        popupContent.appendChild(rush_yards)

                    }

                    if (coachData.rush_tds != undefined) {
                        const rush_tds= document.createElement('p');
                        rush_tds.textContent = `Rush Touchdowns: ${coachData.rush_tds}`
                        popupContent.appendChild(rush_tds)

                    }

                    if (coachData.yards_per_att != undefined) {
                        const yards_per_att= document.createElement('p');
                        yards_per_att.textContent = `Yards Per Attempt: ${coachData.yards_per_att}`
                        popupContent.appendChild(yards_per_att)

                    }

                    if (coachData.tackles != undefined) {
                        const tackles= document.createElement('p');
                        tackles.textContent = `Tackles: ${coachData.tackles}`
                        popupContent.appendChild(tackles)

                    }

                    if (coachData.sacks != undefined) {
                        const sacks= document.createElement('p');
                        sacks.textContent = `Sacks: ${coachData.sacks}`
                        popupContent.appendChild(sacks)

                    }

                    if (coachData.ints != undefined) {
                        const ints= document.createElement('p');
                        ints.textContent = `Interceptions: ${coachData.ints}`
                        popupContent.appendChild(ints)

                    }

                    if (coachData.tfls != undefined) {
                        const tfls= document.createElement('p');
                        tfls.textContent = `Tackle For Loss: ${coachData.tfls}`
                        popupContent.appendChild(tfls)

                    }

                    if (coachData.fg_made != undefined) {
                        const fg_made= document.createElement('p');
                        fg_made.textContent = `Field Goal Made: ${coachData.fg_made}`
                        popupContent.appendChild(fg_made)

                    }

                    if (coachData.fg_missed != undefined) {
                        const fg_missed = document.createElement('p');
                        fg_missed.textContent = `Field Goal Missed: ${coachData.fg_missed}`
                        popupContent.appendChild(fg_missed)

                    }

                    if (coachData.punt_avg != undefined) {
                        const punt_avg = document.createElement('p');
                        punt_avg.textContent = `Punt Average: ${coachData.punt_avg}`
                        popupContent.appendChild(punt_avg)

                    }

                    if (coachData.video != undefined) {

                        const videoElement = document.createElement('video');
                        //videoElement.setAttribute('controls', '');
                        videoElement.setAttribute('autoplay', 'true');
                        videoElement.setAttribute('muted', 'true');
                        videoElement.setAttribute('loop', 'true');
                        videoElement.className = "background-video"
            
            
                        const sourceElement = document.createElement('source');
                        sourceElement.setAttribute('src', coachData.video);
                        sourceElement.setAttribute('type', 'video/mp4');
            
                        console.log(sourceElement)
            
                        videoElement.appendChild(sourceElement);
                        container.innerHTML = '';
            
                        popupContent.appendChild(videoElement);
            
                    }


                    popup.appendChild(popupContent);
                    document.body.appendChild(popup);
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


    searchStudents();
});