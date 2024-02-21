import React, {useState} from 'react';
import LeftComponent from './LeftComponent';
import CenterComponent from './CenterComponent';

function FCenterComponent() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  
  return (
    <div className="f-center-component">
      <div className="left-component">
        <LeftComponent />
      </div>
      <div className="center-component">
        <CenterComponent showRegisterForm={showRegisterForm} setShowRegisterForm={setShowRegisterForm} />
      </div>
    </div>
  );
}

export default FCenterComponent;
