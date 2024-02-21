import React, {useState} from 'react';
import axios from 'axios';

function Header() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [showRegisterForm, setShowRegisterForm] = useState(false);

      const registerClicked = (e) => {
        e.preventDefault();
        setShowRegisterForm(true);
      };

      const closeRegisterForm = () => {
        setShowRegisterForm(false);
      };

      const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
        console.log('Username:', username);
        console.log('Password:', password);
        // Close the form after handling registration
        closeRegisterForm();
      };
      
      const loginClicked = () => {
        //('http://198.162.1.4/login', {

        axios.post('https://67b7-106-222-203-115.ngrok-free.app/login', {         
          username: 'a',
          password: 'b'
        })
        .then(response => {
          // Handle successful authentication
          console.log('Authentication successful:', response.data);
        })
        .catch(error => {
          // Handle authentication error
          console.error('Authentication error:', error.message);
        });
      };
      
      return (
        <div>
          <header>
            <h1>Library Management System</h1>
          </header>
          <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Books</a>
            <a href="#">Images</a>
            <a href="#">Videos</a>
            <a href="#">Search</a>
            <a href="#">Programs</a>
            <a href="#">Classes</a>
            <span className="submenu-container">
              <a href="#" className="menu-item">My Account</a>
              <ul className="submenu">
                <li onClick={registerClicked}>Register</li>
                <li onClick={loginClicked}>Login</li>
                {/* Add more items as needed */}
              </ul>
            </span>
            <a href="#">Services</a>
            <a href="#">Support</a>
            <a href="#">Contact</a>
          </nav>
          {showRegisterForm && (
            <div className="overlay">
              <div className="register-form">
                <span className="close-btn" onClick={closeRegisterForm}>
                  &times;
                </span>
                <h2>Register</h2>
                <form onSubmit={handleRegisterSubmit}>
                  <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                  </label>
                  <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </label>
                  <button type="submit">Register</button>
                </form>
              </div>
            </div>
          )}
        </div>
      );
}

export default Header;
