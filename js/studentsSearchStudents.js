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

                    console.log(data)
                    const student_profile = document.createElement('div');
                    student_profile.className = "box";

                    console.log(container)

                    const name = document.createElement('p');
                    name.textContent = `Name: ${data[i].name}`;
                    student_profile.appendChild(name)

                    const school = document.createElement('p');
                    school.textContent = `School: ${data[i].school}`;
                    student_profile.appendChild(school)

                    const gradYear = document.createElement('p');
                    gradYear.textContent = `Graduation Year: ${data[i].gradYear}`
                    student_profile.appendChild(gradYear)

                    if (data[i].gpa != undefined) {
                        const gpa = document.createElement('p');
                        gpa.textContent = `GPA: ${data[i].gpa}`
                        student_profile.appendChild(gpa)

                    }

                    if (data[i].position != undefined) {
                        const position = document.createElement('p');
                        position.textContent = `Position: ${data[i].position}`
                        student_profile.appendChild(position)

                    }

                    if (data[i].height != undefined) {
                        const height = document.createElement('p');
                        height.textContent = `Height: ${data[i].height}`
                        student_profile.appendChild(height)

                    }

                    if (data[i].weight != undefined) {
                        const weight = document.createElement('p');
                        weight.textContent = `Weight: ${data[i].weight}`
                        student_profile.appendChild(weight)

                    }

                    if (data[i].forty_time != undefined) {
                        const forty_time= document.createElement('p');
                        forty_time.textContent = `40 Time: ${data[i].forty_time}`
                        student_profile.appendChild(forty_time)

                    }

                    if (data[i].pass_yards != undefined) {
                        const pass_yards= document.createElement('p');
                        pass_yards.textContent = `Pass Yards: ${data[i].pass_yards}`
                        student_profile.appendChild(pass_yards)

                    }

                    if (data[i].comp_percentage != undefined) {
                        const comp_percentage= document.createElement('p');
                        comp_percentage.textContent = `Completion Percentage: ${data[i].comp_percentage}`
                        student_profile.appendChild(comp_percentage)

                    }

                    if (data[i].pass_tds != undefined) {
                        const pass_tds= document.createElement('p');
                        pass_tds.textContent = `Passing Touchdowns: ${data[i].pass_tds}`
                        student_profile.appendChild(pass_tds)

                    }

                    if (data[i].pass_ints != undefined) {
                        const pass_ints= document.createElement('p');
                        pass_ints.textContent = `Pass Interceptions: ${data[i].pass_ints}`
                        student_profile.appendChild(pass_ints)

                    }

                    if (data[i].rec != undefined) {
                        const rec= document.createElement('p');
                        rec.textContent = `Receptions: ${data[i].rec}`
                        student_profile.appendChild(rec)

                    }

                    if (data[i].rec_yards != undefined) {
                        const rec_yards= document.createElement('p');
                        rec_yards.textContent = `Receiving Yards: ${data[i].rec_yards}`
                        student_profile.appendChild(rec_yards)

                    }

                    if (data[i].red_tds != undefined) {
                        const red_tds= document.createElement('p');
                        red_tds.textContent = `Red Zone Touchdowns: ${data[i].red_tds}`
                        student_profile.appendChild(red_tds)

                    }

                    if (data[i].rush_yards != undefined) {
                        const rush_yards= document.createElement('p');
                        rush_yards.textContent = `Rush Yards: ${data[i].rush_yards}`
                        student_profile.appendChild(rush_yards)

                    }

                    if (data[i].rush_tds != undefined) {
                        const rush_tds= document.createElement('p');
                        rush_tds.textContent = `Rush Touchdowns: ${data[i].rush_tds}`
                        student_profile.appendChild(rush_tds)

                    }

                    if (data[i].yards_per_att != undefined) {
                        const yards_per_att= document.createElement('p');
                        yards_per_att.textContent = `Yards Per Attempt: ${data[i].yards_per_att}`
                        student_profile.appendChild(yards_per_att)

                    }

                    if (data[i].tackles != undefined) {
                        const tackles= document.createElement('p');
                        tackles.textContent = `Tackles: ${data[i].tackles}`
                        student_profile.appendChild(tackles)

                    }

                    if (data[i].sacks != undefined) {
                        const sacks= document.createElement('p');
                        sacks.textContent = `Sacks: ${data[i].sacks}`
                        student_profile.appendChild(sacks)

                    }

                    if (data[i].ints != undefined) {
                        const ints= document.createElement('p');
                        ints.textContent = `Interceptions: ${data[i].ints}`
                        student_profile.appendChild(ints)

                    }

                    if (data[i].tfls != undefined) {
                        const tfls= document.createElement('p');
                        tfls.textContent = `Tackle For Loss: ${data[i].tfls}`
                        student_profile.appendChild(tfls)

                    }

                    if (data[i].fg_made != undefined) {
                        const fg_made= document.createElement('p');
                        fg_made.textContent = `Field Goal Made: ${data[i].fg_made}`
                        student_profile.appendChild(fg_made)

                    }

                    if (data[i].fg_missed != undefined) {
                        const fg_missed = document.createElement('p');
                        fg_missed.textContent = `Field Goal Missed: ${data[i].fg_missed}`
                        student_profile.appendChild(fg_missed)

                    }

                    if (data[i].punt_avg != undefined) {
                        const punt_avg = document.createElement('p');
                        punt_avg.textContent = `Punt Average: ${data[i].punt_avg}`
                        student_profile.appendChild(punt_avg)

                    }


                    container.appendChild(student_profile)
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


    searchStudents();
});