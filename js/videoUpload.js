const uploadButton = document.querySelector('#upload_button');
const videoFileInput = document.getElementById('bannerPicInput');
const token = localStorage.getItem('token');

uploadButton.addEventListener('click', async function (event) {
    const videoFile = videoFileInput.files[0];  // Get the selected file

    if (!videoFile) {
        alert('Please choose a video file.');
        return;
    }

    const formData = new FormData();
    formData.append('video', videoFile);  // Ensure this matches the server's expected field name

    try {
        const url = "https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/studentuser/uploadvideo";
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Upload successful:', data);
            alert('Upload successful!');
        } else {
            const error = await response.text();  // Get the error response as text if it's not JSON
            console.error('Error response:', error);
            alert('Error: ' + error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Network error or server error');
    }
});
