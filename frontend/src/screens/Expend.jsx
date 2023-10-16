import React from 'react';

function Expend() {
  console.log('In Expend.jsx');
  return (
    <>
      <div>
        <iframe
          title="My HTML Content"
          src="./Expendhtml.html"
          width="100%"
          height="500"
        />
      </div>
    </>
  );
}

export default Expend;
