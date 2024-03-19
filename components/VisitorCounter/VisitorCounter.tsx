"use client"

import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        fetchVisitorCount();
    }, []);

    const fetchVisitorCount = async () => {
        
        console.log("response");
        try {
            const response = await fetch(
                `http://uixdev.s193304.mos2.atester.fr/wp-json/uixdev/v1/visitor-count`, 
                {
                  method: 'GET',
                  mode: 'cors', // Active le mode CORS
                  credentials: 'same-origin',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              );
            if (response.ok) {
                const data = await response.json();
                setVisitorCount(data);
            } else {
                throw new Error('Error fetching visitor count');
            }
        } catch (error) {
            console.error('Error fetching visitor count:', error);
        }
    };

    return (
        <>
            {visitorCount}
        </>
    );
};

export default VisitorCounter;