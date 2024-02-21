import React, { useState } from 'react';
import HeroSection from './HeroSection';

function CenterComponent({ showRegisterForm, setShowRegisterForm }) {
  const registerClicked = (e) => {
    e.preventDefault();
    setShowRegisterForm(true);
  };

  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        {showRegisterForm ? (
          <form>
            <label>
              Username:
              <input type="text" />
            </label>
            <label>
              Password:
              <input type="password" />
            </label>
            <button type="submit">Register</button>
          </form>
        ) : (
          <h1>Hello World</h1>
        )}
      </div>
    </div>
  );
}

export default CenterComponent;
