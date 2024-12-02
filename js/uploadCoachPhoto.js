const uploadButton = document.getElementById('uploadProfilePic_button');
const imageFileInput = document.getElementById('profilePicInput');
const token = localStorage.getItem('token');

uploadButton.addEventListener('click', async function (event) {
    const imageFile = imageFileInput.files[0];  // Get the selected file

    if (!imageFile) {
        alert('Please choose an image file.');
        return;
    }

    // Check image type (e.g., jpg, png, jpeg)
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(imageFile.type)) {
        alert('Invalid file type. Please select a valid image file (JPG, PNG, GIF, WebP).');
        return;
    }

    // Check image size (limit to 10MB, for example)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (imageFile.size > maxSize) {
        alert('File is too large. Please select a file smaller than 10MB.');
        return;
    }

    const formData = new FormData();
    formData.append('image', imageFile);  // Ensure this matches the server's expected field name

    try {
        if (!token) {
            alert('User is not authenticated. Please log in.');
            return;
        }

        const url = "https://football-api-server-ane2c4bwdacvf8f6.eastus-01.azurewebsites.net/coachuser/uploadimage";  // Update the URL if needed

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
        } else if (response.status === 401) {
            // Handle unauthorized (e.g., token expired or invalid)
            alert('Session expired. Please log in again.');
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