const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
console.log(token)

const update = document.querySelector('#student_update');
const message = document.querySelector("p");

let url1 = "https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/studentuser/data"

try {
    let response = await fetch(url1, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        },

    })

    if (response.ok) {
        let data = [];
        data = await response.json()
        console.log(data)

        if (data[0].email != undefined) {
            const container = document.getElementById("student_email");
            container.style.display = 'block';
            container.value = data[0].email;
        }

        if (data[0].name != undefined) {
            const container = document.getElementById("student_name");
            container.style.display = 'block';
            container.value = data[0].name;
        }

        if (data[0].school != undefined) {
            const container = document.getElementById("student_school");
            container.style.display = 'block';
            container.value = data[0].school;
        }

        if (data[0].gradYear != undefined) {
            const container = document.getElementById("student_gradYear");
            container.style.display = 'block';
            container.value = data[0].gradYear;
        }

        function checkForInputField() {

            if (document.getElementById("input-GPA")) {
                const container = document.getElementById("input-GPA");
                container.style.display = 'block';
                if (data[0].gpa != undefined) {
                    container.placeholder = data[0].gpa;
                } else {
                    container.placeholder = "Enter value for GPA";
                }
            }

            if (document.getElementById("input-Position")) {
                const container = document.getElementById("input-Position");
                container.style.display = 'block';
                if (data[0].position != undefined) {
                    container.placeholder = data[0].position;
                } else {
                    container.placeholder = "Enter value for Position";
                }
            }

            if (document.getElementById("input-Height")) {
                const container = document.getElementById("input-Height");
                container.style.display = 'block';
                if (data[0].height != undefined) {
                    container.placeholder = data[0].height;
                } else {
                    container.placeholder = "Enter value for Height";
                }
            }

            if (document.getElementById("input-Weight")) {
                const container = document.getElementById("input-Weight");
                container.style.display = 'block';
                if (data[0].weight != undefined) {
                    container.placeholder = data[0].weight;
                } else {
                    container.placeholder = "Enter value for Weight";
                }
            }

            if (document.getElementById("input-40-Time")) {
                const container = document.getElementById("input-40-Time");
                container.style.display = 'block';
                if (data[0].forty_time != undefined) {
                    container.placeholder = data[0].forty_time;
                } else {
                    container.placeholder = "Enter value for 40-Time";
                }
            }

            if (document.getElementById("input-Pass-Yards")) {
                const container = document.getElementById("input-Pass-Yards");
                container.style.display = 'block';
                if (data[0].pass_yards != undefined) {
                    container.placeholder = data[0].pass_yards;
                } else {
                    container.placeholder = "Enter value for Pass Yards";
                }
            }

            if (document.getElementById("input-Completion-Percentage")) {
                const container = document.getElementById("input-Completion-Percentage");
                container.style.display = 'block';
                if (data[0].comp_percentage != undefined) {
                    container.placeholder = data[0].comp_percentage;
                } else {
                    container.placeholder = "Enter value for Completion Percentage";
                }
            }

            if (document.getElementById("input-Passing-Touchdowns")) {
                const container = document.getElementById("input-Passing-Touchdowns");
                container.style.display = 'block';
                if (data[0].pass_tds != undefined) {
                    container.placeholder = data[0].pass_tds;
                } else {
                    container.placeholder = "Enter value for Passing Touchdowns";
                }
            }

            if (document.getElementById("input-Pass-Interceptions")) {
                const container = document.getElementById("input-Pass-Interceptions");
                container.style.display = 'block';
                if (data[0].pass_ints != undefined) {
                    container.placeholder = data[0].pass_ints;
                } else {
                    container.placeholder = "Enter value for Pass Interceptions";
                }
            }

            if (document.getElementById("input-Receptions")) {
                const container = document.getElementById("input-Receptions");
                container.style.display = 'block';
                if (data[0].rec != undefined) {
                    container.placeholder = data[0].rec;
                } else {
                    container.placeholder = "Enter value for Receptions";
                }
            }

            if (document.getElementById("input-Receiving-Yards")) {
                const container = document.getElementById("input-Receiving-Yards");
                container.style.display = 'block';
                if (data[0].rec_yards != undefined) {
                    container.placeholder = data[0].rec_yards;
                } else {
                    container.placeholder = "Enter value for Receiving Yards";
                }
            }

            if (document.getElementById("input-Red-Zone-Touchdowns")) {
                const container = document.getElementById("input-Red-Zone-Touchdowns");
                container.style.display = 'block';
                if (data[0].red_tds != undefined) {
                    container.placeholder = data[0].red_tds;
                } else {
                    container.placeholder = "Enter value for Red Zone Touchdowns";
                }
            }

            if (document.getElementById("input-Rush-Yards")) {
                const container = document.getElementById("input-Rush-Yards");
                container.style.display = 'block';
                if (data[0].rush_yards != undefined) {
                    container.placeholder = data[0].rush_yards;
                } else {
                    container.placeholder = "Enter value for Rush Yards";
                }
            }

            if (document.getElementById("input-Rush-Touchdowns")) {
                const container = document.getElementById("input-Rush-Touchdowns");
                container.style.display = 'block';
                if (data[0].rush_tds != undefined) {
                    container.placeholder = data[0].rush_tds;
                } else {
                    container.placeholder = "Enter value for Rush Touchdowns";
                }
            }

            if (document.getElementById("input-Yards-Per-Attempt")) {
                const container = document.getElementById("input-Yards-Per-Attempt");
                container.style.display = 'block';
                if (data[0].yards_per_att != undefined) {
                    container.placeholder = data[0].yards_per_att;
                } else {
                    container.placeholder = "Enter value for Yards Per Attempt";
                }
            }

            if (document.getElementById("input-Tackles")) {
                const container = document.getElementById("input-Tackles");
                container.style.display = 'block';
                if (data[0].tackles != undefined) {
                    container.placeholder = data[0].tackles;
                } else {
                    container.placeholder = "Enter value for Tackles";
                }
            }

            if (document.getElementById("input-Sacks")) {
                const container = document.getElementById("input-Sacks");
                container.style.display = 'block';
                if (data[0].sacks != undefined) {
                    container.placeholder = data[0].sacks;
                } else {
                    container.placeholder = "Enter value for Sacks";
                }
            }

            if (document.getElementById("input-Interceptions")) {
                const container = document.getElementById("input-Interceptions");
                container.style.display = 'block';
                if (data[0].ints != undefined) {
                    container.placeholder = data[0].ints;
                } else {
                    container.placeholder = "Enter value for Interceptions";
                }
            }

            if (document.getElementById("input-Tackle-For-Loss")) {
                const container = document.getElementById("input-Tackle-For-Loss");
                container.style.display = 'block';
                if (data[0].tfls != undefined) {
                    container.placeholder = data[0].tfls;
                } else {
                    container.placeholder = "Enter value for Tackle For Loss";
                }
            }

            if (document.getElementById("input-Field-Goal-Made")) {
                const container = document.getElementById("input-Field-Goal-Made");
                container.style.display = 'block';
                if (data[0].fg_made != undefined) {
                    container.placeholder = data[0].fg_made;
                } else {
                    container.placeholder = "Enter value for Field Goal Made";
                }
            }

            if (document.getElementById("input-Field-Goal-Missed")) {
                const container = document.getElementById("input-Field-Goal-Missed");
                container.style.display = 'block';
                if (data[0].fg_missed != undefined) {
                    container.placeholder = data[0].fg_missed;
                } else {
                    container.placeholder = "Enter value for Field Goal Missed";
                }
            }

            if (document.getElementById("input-Punt-Average")) {
                const container = document.getElementById("input-Punt-Average");
                container.style.display = 'block';
                if (data[0].punt_avg != undefined) {
                    container.placeholder = data[0].punt_avg;
                } else {
                    container.placeholder = "Enter value for Punt Average";
                }
            }
        }

        // Start polling every 100 milliseconds
        const polling = setInterval(checkForInputField, 100);
    }

} catch (error) {
    message.innerHTML = "Error: An error occurred";
    message.style.color = 'red';
}



update.addEventListener('click', async function (event) {

    const email = document.querySelector('#student_email').value;
    const name = document.querySelector('#student_name').value;
    const school = document.querySelector('#student_school').value;
    const gradYear = document.querySelector('#student_gradYear').value;

    let gpa = "";
    if (document.getElementById('input-GPA') != null) {
        gpa = document.querySelector('#input-GPA').value;
    }
    else {
        gpa = undefined;
    }

    let position = "";
    if (document.getElementById('input-Position') != null) {
        position = document.querySelector('#input-Position').value;
    }
    else {
        position = undefined;
    }

    let height = "";
    if (document.getElementById('input-Height') != null) {
        height = document.querySelector('#input-Height').value;
    }
    else {
        height = undefined;
    }

    let weight = "0";
    if (document.getElementById('input-Weight') != null) {
        weight = document.querySelector('#input-Weight').value;
    }
    else {
        weight = undefined;
    }

    let forty_time = "0";
    if (document.getElementById('input-40-Time') != null) {
        forty_time = document.querySelector('#input-40-Time').value;
    }
    else {
        forty_time = undefined;
    }

    let pass_yards = "0";
    if (document.getElementById('input-Pass-Yards') != null) {
        pass_yards = document.querySelector('#input-Pass-Yards').value;
    }
    else {
        pass_yards = undefined;
    }

    let comp_percentage = "0";
    if (document.getElementById('input-Completion-Percentage') != null) {
        comp_percentage = document.querySelector('#input-Completion-Percentage').value;
    }
    else {
        comp_percentage = undefined;
    }

    let pass_tds = "0";
    if (document.getElementById('input-Passing-Touchdowns') != null) {
        pass_tds = document.querySelector('#input-Passing-Touchdowns').value;
    }
    else {
        pass_tds = undefined;
    }

    let pass_ints = "0";
    if (document.getElementById('input-Pass-Interceptions') != null) {
        pass_ints = document.querySelector('#input-Pass-Interceptions').value;
    }
    else {
        pass_ints = undefined;
    }

    let rec = "0";
    if (document.getElementById('input-Receptions') != null) {
        rec = document.querySelector('#input-Receptions').value;
    }
    else {
        rec = undefined;
    }

    let rec_yards = "0";
    if (document.getElementById('input-Receiving-Yards') != null) {
        rec_yards = document.querySelector('#input-Receiving-Yards').value;
    }
    else {
        rec_yards = undefined;
    }

    let red_tds = "0";
    if (document.getElementById('input-Red-Zone-Touchdowns') != null) {
        red_tds = document.querySelector('#input-Red-Zone-Touchdowns').value;
    }
    else {
        red_tds = undefined;
    }

    let rush_yards = "0";
    if (document.getElementById('input-Rush-Yards') != null) {
        rush_yards = document.querySelector('#input-Rush-Yards').value;
    }
    else {
        rush_yards = undefined;
    }

    let rush_tds = "0";
    if (document.getElementById('input-Rush-Touchdowns') != null) {
        rush_tds = document.querySelector('#input-Rush-Touchdowns').value;
    }
    else {
        rush_tds = undefined;
    }

    let yards_per_att = "0";
    if (document.getElementById('input-Yards-Per-Attempt') != null) {
        yards_per_att = document.querySelector('#input-Yards-Per-Attempt').value;
    }
    else {
        yards_per_att = undefined;
    }

    let tackles = "0";
    if (document.getElementById('input-Tackles') != null) {
        tackles = document.querySelector('#input-Tackles').value;
    }
    else {
        tackles = undefined;
    }

    let sacks = "0";
    if (document.getElementById('input-Sacks') != null) {
        sacks = document.querySelector('#input-Sacks').value;
    }
    else {
        sacks = undefined;
    }

    let ints = "0";
    if (document.getElementById('input-Interceptions') != null) {
        ints = document.querySelector('#input-Interceptions').value;
    }
    else {
        ints = undefined;
    }

    let tfls = "0";
    if (document.getElementById('input-Tackle-For-Loss') != null) {
        tfls = document.querySelector('#input-Tackle-For-Loss').value;
    }
    else {
        tfls = undefined;
    }

    let fg_made = "0";
    if (document.getElementById('input-Field-Goal-Made') != null) {
        fg_made = document.querySelector('#input-Field-Goal-Made').value;
    }
    else {
        fg_made = undefined;
    }

    let fg_missed = "0";
    if (document.getElementById('input-Field-Goal-Missed') != null) {
        fg_missed = document.querySelector('#input-Field-Goal-Missed').value;
    }
    else {
        fg_missed = undefined;
    }

    let punt_avg = "0";
    if (document.getElementById('input-Punt-Average') != null) {
        punt_avg = document.querySelector('#input-Punt-Average').value;
    }
    else {
        punt_avg = undefined;
    }

    const userData = {
        email: email,
        name: name,
        school: school,
        gradYear: gradYear,
        gpa: gpa,
        position: position,
        height: height,
        weight: weight,
        forty_time: forty_time,
        pass_yards: pass_yards,
        comp_percentage: comp_percentage,
        pass_tds: pass_tds,
        pass_ints: pass_ints,
        rec: rec,
        rec_yards: rec_yards,
        red_tds: red_tds,
        rush_yards: rush_yards,
        rush_tds: rush_tds,
        yards_per_att: yards_per_att,
        tackles: tackles,
        sacks: sacks,
        ints: ints,
        tfls: tfls,
        fg_made: fg_made,
        fg_missed: fg_missed,
        punt_avg: punt_avg

    };

    console.log(userData)

    await editStudentProfile(userData);

});

async function editStudentProfile(userData) {
    const mssg = document.querySelector("p");
    const url = "https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/studentuser/editprofile";
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

        mssg.innerHTML = 'Student Profile Updated!';
        mssg.style.color = 'white'
        console.log(userData)

    } else {
        const errorData = await response.json();
        mssg.innerHTML = "Error: " + errorData.message;
        mssg.style.color = 'red';
    }

}

