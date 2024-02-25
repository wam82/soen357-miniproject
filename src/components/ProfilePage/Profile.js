import React, { useState } from 'react';
import './Profile.css';

function ProfilePage() {
  // State variables for name, last name, and profile picture
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  // Function to handle changes in name fields
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  // Function to handle profile picture selection
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    // You can perform additional validation or processing here if needed
    setProfilePicture(file);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions like saving the data to the server
    // For demonstration, we're just logging the data to the console
    console.log('Submitting data:', { firstName, lastName, profilePicture });
    // Reset form fields if needed
    setFirstName('');
    setLastName('');
    setProfilePicture(null);
  };

  return (
    <div className='core'>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className='firstName'>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div className='lastName'>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div className='medical'>
          <label>Health Insurance No.:</label>
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div className='profilePicture'>
          <label>Profile Picture:</label>
          <label for="file-upload" className='custom-upload'>Upload</label>
          <input id="file-upload" type="file" accept="image/*" onChange={handleProfilePictureChange} />
        </div>
        <div>
          {/* Render profile picture preview if available */}
          {profilePicture && (
            <img src={URL.createObjectURL(profilePicture)} alt="Profile" style={{ maxWidth: '200px' }} />
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProfilePage;
