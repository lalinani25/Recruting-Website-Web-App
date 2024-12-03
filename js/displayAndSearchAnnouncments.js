const search_btn = document.getElementById('searchAnnouncements');
const user = localStorage.getItem("user");
const mssg = document.querySelector("p");
const token = localStorage.getItem("token");
const container = document.getElementById("coach_main");

let url = `https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/announcements?search=`

console.log(url)
async function fetchAnnouncements(url) {
    try {
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            },
        });

        if (response.status == 200) {
            let data = await response.json();

            // Clear container before adding new announcements
            container.innerHTML = '';

            if (data.length === 0) {
                container.innerHTML = '<p>No announcements found.</p>';
                return;
            }

            // Dynamically create announcement cards
            data.forEach(announcementData => {
                const card = document.createElement('div');
                card.className = "announcement-card";

                // Title
                const title = document.createElement('h3');
                title.textContent = announcementData.title;
                card.appendChild(title);

                // Date
                const date = new Date(announcementData.date);
                const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date
                    .getDate()
                    .toString()
                    .padStart(2, '0')}/${date.getFullYear()}`;
                const dateElement = document.createElement('p');
                dateElement.innerHTML = `<i class="fa fa-calendar icon"></i>Event Date: ${formattedDate}`;
                card.appendChild(dateElement);

                // Position
                const position = document.createElement('p');
                position.innerHTML = `<i class="fa fa-briefcase icon"></i>Position: ${announcementData.position}`;
                card.appendChild(position);

                // School
                const school = document.createElement('p');
                school.innerHTML = `<i class="fa fa-university icon"></i>School: ${announcementData.school}`;
                card.appendChild(school);

                // Description
                const description = document.createElement('p');
                description.textContent = announcementData.description;
                card.appendChild(description);

                // Append card to the container
                container.appendChild(card);
            });
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


async function searchAnnouncements() {
    let search = document.getElementById("search_announcements").value || '';
    let searchUrl = `https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/announcements?search=${encodeURIComponent(
        search
    )}`;
    console.log(searchUrl);

    await fetchAnnouncements(searchUrl);
}

// Fetch initial announcements on page load
fetchAnnouncements(url);

// Add event listener for search button
search_btn.addEventListener('click', async function () {
    await searchAnnouncements();
});


