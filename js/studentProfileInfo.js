const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const mssg = document.querySelector("p");

let url = "https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/studentuser/data"
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


        if (data[0].email != undefined) {
            const container = document.getElementById("student_email");
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "student_email"
            inputField.textContent = `Email: ${data[0].email}`;
            container.appendChild(inputField);
        }

        if (data[0].name != undefined) {
            const container = document.getElementById("student_name");
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "student_name"
            inputField.textContent = `Name: ${data[0].name}`;
            container.appendChild(inputField);
        }

        if (data[0].school != undefined) {
            const container = document.getElementById("student_school");
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "student_school"
            inputField.textContent = `School: ${data[0].school}`;
            container.appendChild(inputField);
        }

        if (data[0].gradYear != undefined) {
            const container = document.getElementById("student_gradYear");
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "student_gradYear"
            inputField.textContent = `Graduation Year: ${data[0].gradYear}`;
            container.appendChild(inputField);
        }

        if (data[0].gpa != undefined) {
            const section = document.getElementById('section');
            const container = document.createElement('div');
            console.log(section)
            container.id = "gpa";
            container.className = "stat";
            console.log(container)
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "gpa"
            inputField.textContent = `GPA: ${data[0].gpa}`;
            container.appendChild(inputField);
            section.appendChild(container)
            console.log(section)
        }

        if (data[0].position != undefined) {
            const container = document.getElementById("position");
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "position"
            inputField.textContent = `Position: ${data[0].position}`;
            container.appendChild(inputField);
        }

        if (data[0].height != undefined) {
            const section = document.getElementById('section');
            const container = document.createElement('div');
            container.id = "height";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "height"
            inputField.textContent = `Height: ${data[0].height}`;
            container.appendChild(inputField);
            section.appendChild(container)
        }

        if (data[0].weight != undefined) {
            const section = document.getElementById('section');
            const container = document.createElement('div');
            container.id = "weight";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "weight"
            inputField.textContent = `Weight: ${data[0].weight}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].forty_time != undefined) {
            const section = document.getElementById('section');
            const container = document.createElement('div');
            container.id = "40_Time";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "40_Time"
            inputField.textContent = `40 Time: ${data[0].forty_time}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].pass_yards != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "pass_yards";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "pass_yards"
            inputField.textContent = `Pass Yards: ${data[0].pass_yards}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].comp_percentage != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "completion_percentage";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "completion_percentage"
            inputField.textContent = `Completion Percentage: ${data[0].comp_percentage}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].pass_tds != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "passing_touchdowns";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "passing_touchdowns"
            inputField.textContent = `Passing Touchdowns: ${data[0].pass_tds}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].pass_ints != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "pass_interceptions";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "pass_interceptions"
            inputField.textContent = `Pass Interceptions: ${data[0].pass_ints}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].rec != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "receptions";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "receptions"
            inputField.textContent = `Receptions: ${data[0].rec}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].rec_yards != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "receiving_yards";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "receiving_yards"
            inputField.textContent = `Receiving Yards: ${data[0].rec_yards}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].red_tds != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "red_zone_touchdowns";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "red_zone_touchdowns"
            inputField.textContent = `Red Zone Touchdowns: ${data[0].red_tds}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].rush_yards != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "rush_yards";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "rush_yards"
            inputField.textContent = `Rush Yards: ${data[0].rush_yards}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].rush_tds != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "rush_touchdowns";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "rush_touchdowns"
            inputField.textContent = `Rush Touchdowns: ${data[0].rush_tds}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].yards_per_att != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "yards_per_attempt";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "yards_per_attempt"
            inputField.textContent = `Yards Per Attempt: ${data[0].yards_per_att}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].tackles != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "tackles";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "tackles"
            inputField.textContent = `Tackles: ${data[0].tackles}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].sacks != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "sacks";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "sacks"
            inputField.textContent = `Sacks: ${data[0].sacks}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].ints != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "interceptions";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "interceptions"
            inputField.textContent = `Interceptions: ${data[0].ints}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].tfls != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "tackle_for_loss";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "tackle_for_loss"
            inputField.textContent = `Tackle For Loss: ${data[0].tfls}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].fg_made != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "field_goal_made";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "field_goal_made"
            inputField.textContent = `Field Goal Made: ${data[0].fg_made}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].fg_missed != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "field_goal_missed";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "field_goal_missed"
            inputField.textContent = `Field Goal Missed: ${data[0].fg_missed}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }

        if (data[0].punt_avg != undefined) {
            const section = document.getElementById('statistics-section');
            const container = document.createElement('div');
            container.id = "punt_average";
            container.className = "stat";
            container.style.display = 'block';
            const inputField = document.createElement('p');
            inputField.type = 'text';
            inputField.id = "punt_average"
            inputField.textContent = `Punt Average: ${data[0].punt_avg}`;
            container.appendChild(inputField);
            section.appendChild(container);
        }


        console.log(data[0].video)
        if (data[0].video != undefined) {

            const container = document.getElementById("banner");
            container.style.display = 'block';

            console.log(container)

            const videoElement = document.createElement('video');
            //videoElement.setAttribute('controls', '');
            videoElement.setAttribute('autoplay', 'true');
            videoElement.setAttribute('muted', 'true');
            videoElement.setAttribute('loop', 'true');
            videoElement.className = "background-video"


            const sourceElement = document.createElement('source');
            sourceElement.setAttribute('src', data[0].video);
            sourceElement.setAttribute('type', 'video/mp4');

            console.log(sourceElement)

            videoElement.appendChild(sourceElement);
            container.innerHTML = '';

            console.log(container)
            container.appendChild(videoElement);

            console.log(container)
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
