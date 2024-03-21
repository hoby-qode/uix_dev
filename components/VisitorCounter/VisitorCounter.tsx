"use client"

import { getVisits, updateVisits } from '@/libs/visits';
import React, { useState, useEffect } from 'react';

const VisitorCounter = () => {
    const [visitorCount, setVisitorCount] = useState(36);

    useEffect(() => {
        fetchVisitorCount();
    }, []);

    const fetchVisitorCount = async () => {
        try {
            // const count = await getVisits();
            // setVisitorCount(count);
            // await updateVisits(); // Mettre à jour le compteur de visites après l'avoir récupéré
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