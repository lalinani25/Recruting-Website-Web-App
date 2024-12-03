const create = document.querySelector('#create');
const user = localStorage.getItem("user");
const token = localStorage.getItem('token');
const mssg = document.querySelector("p");

create.addEventListener('click', async function (event) {
    // Collect form values
    const title = document.querySelector('#title').value;
    const inputDate = document.querySelector('#date').value;
    const position = document.querySelector('#position').value;
    const school = document.querySelector('#school').value;
    const description = document.querySelector('#description').value;

    // Check if all required fields are filled
    if (!title || !inputDate || !position || !school || !description) {
        mssg.innerHTML = "Please fill in all fields.";
        mssg.style.color = 'red';
        return;
    }

    // Function to convert date format
    function convertDateFormat(inputDate) {
        const date = new Date(inputDate);
        const month = date.getMonth() + 1; // Month is 0-based (Jan is 0)
        const day = date.getDate();
        const year = date.getFullYear();
        // Format date as mm/dd/yyyy (change if necessary)
        const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
        return formattedDate;
    }

    const outputDate = convertDateFormat(inputDate);
    console.log("Formatted Date: ", outputDate);

    // Parse the user object from localStorage
    if (!user || !token) {
        mssg.innerHTML = "Error: User is not logged in.";
        mssg.style.color = 'red';
        return;
    }

    const parsedUser = JSON.parse(user);
    if (!parsedUser._id) {
        mssg.innerHTML = "Error: User information is missing.";
        mssg.style.color = 'red';
        return;
    }

    // Create announcement data object
    const announcementData = {
        sender: parsedUser._id, // Use the parsed user ID
        title: title,
        date: outputDate,
        position: position,
        school: school,
        description: description
    };

    console.log("Announcement Data:", announcementData);

    // Call the API to create the announcement
    await createAnnouncement(announcementData);
});

async function createAnnouncement(announcementData) {
    const mssg = document.querySelector("p");
    const url = "https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/announcement";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(announcementData)
        });

            console.log(JSON.stringify(announcementData))

            console.log(response.ok)

        if (response.ok) {
            const data = await response;
            console.log(data)
            console.log("API Response:", data);
            mssg.textContent = 'Announcement was created successfully!';
            mssg.style.color = 'white';
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