const search_btn = document.getElementById('searchAnnouncements');
const user = localStorage.getItem("user");
const mssg = document.querySelector("p");
const token = localStorage.getItem("token");
const container = document.getElementById("coach_main");

let url = `https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/announcements?search=`

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
        container.innerHTML = '';
        console.log(container)
        console.log(data.length)


        for (let i = 0; i < data.length; i++) {

            console.log(data)
            const announcement = document.createElement('div')
            announcement.className = "box"

            console.log(announcement)

            const title = document.createElement('p');
            title.textContent = `Title: ${data[i].title}`;
            announcement.appendChild(title)

            console.log(announcement)

            const date_input = document.createElement('p');

            const dateString = data[i].date;
            const date = new Date(dateString);

            // Extract month, day, and year
            const month = date.getMonth() + 1; // getMonth() returns 0-based month (0 = January, 11 = December)
            const day = date.getDate();
            const year = date.getFullYear();

            // Format to mm/dd/yyyy
            const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;

            console.log(formattedDate);

            date_input.textContent = `Event Date: ${formattedDate}`;
            announcement.appendChild(date_input)

            console.log(announcement)

            const position = document.createElement('p');
            position.textContent = `Position: ${data[i].position}`
            announcement.appendChild(position)

            console.log(announcement)

            const school = document.createElement('p');
            school.textContent = `School: ${data[i].school}`;
            announcement.appendChild(school)

            console.log(announcement)

            const description = document.createElement('p');
            description.textContent = `Description: ${data[i].description}`
            announcement.appendChild(description)

            console.log(announcement)


            container.appendChild(announcement)
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


async function searchAnnouncements() {

    let search = document.getElementById("search_announcements");

    if (search.value != null) {
        search = document.getElementById("search_announcements").value;
    }
    else {
        search = "";
    }

    console.log(search)
    let url = `https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/announcements?search=${search}`

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
            container.innerHTML = '';
            console.log(container)
            console.log(data.length)


            for (let i = 0; i < data.length; i++) {

                console.log(data)
            const announcement = document.createElement('div')
            announcement.className = "box"

            console.log(announcement)

            const title = document.createElement('p');
            title.textContent = `Title: ${data[i].title}`;
            announcement.appendChild(title)

            console.log(announcement)

            const date_input = document.createElement('p');

            const dateString = data[i].date;
            const date = new Date(dateString);

            // Extract month, day, and year
            const month = date.getMonth() + 1; // getMonth() returns 0-based month (0 = January, 11 = December)
            const day = date.getDate();
            const year = date.getFullYear();

            // Format to mm/dd/yyyy
            const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;

            console.log(formattedDate);

            date_input.textContent = `Event Date: ${formattedDate}`;
            announcement.appendChild(date_input)

            console.log(announcement)

            const position = document.createElement('p');
            position.textContent = `Position: ${data[i].position}`
            announcement.appendChild(position)

            console.log(announcement)

            const school = document.createElement('p');
            school.textContent = `School: ${data[i].school}`;
            announcement.appendChild(school)

            console.log(announcement)

            const description = document.createElement('p');
            description.textContent = `Description: ${data[i].description}`
            announcement.appendChild(description)

            console.log(announcement)


            container.appendChild(announcement)
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


search_btn.addEventListener('click', async function (event) {
    searchAnnouncements();

});
