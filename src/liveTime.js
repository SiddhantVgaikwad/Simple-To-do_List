import React, { useState, useEffect } from 'react';

const LiveDateTime = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    // You can use the 'toLocaleString' method to format the date and time as needed.
    const formattedDateTime = currentDateTime.toLocaleString();

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentDateTime(new Date());
        }, 1000); // Update every 1000ms (1 second)
    
        return () => {
          // Cleanup the interval when the component unmounts
          clearInterval(intervalId);
        };
      }, []);

      return (
        <div>
          <p>{formattedDateTime}</p>
        </div>
      );
    };
    
    
    
  
    export default LiveDateTime;