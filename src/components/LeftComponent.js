import React from 'react';

function LeftComponent() {
  // You can customize the list of items as needed
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  
  return (
    <div>
      <ul style={{ listStyleType: 'none' }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default LeftComponent;
