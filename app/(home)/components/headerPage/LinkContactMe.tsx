"use client"
import Link from 'next/link'
import React from 'react'

const LinkContactMe = () => {
    const handleOpenChat = () => {
        if (window.Tawk_API) {
            window.Tawk_API.toggle();  // Ouvre ou ferme la bulle de chat
        }
    };
    return (
        <Link className="btn btn-primary" href="#contact" onClick={handleOpenChat}>
            Contactez-moi
        </Link>
    )
}

export default LinkContactMe