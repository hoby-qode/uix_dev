'use client'
import React, { useState } from 'react'
import styles from './newsletter.module.css'
import Input from '../ui/Input'
import { TbArrowRight, TbShoppingCart } from 'react-icons/tb'

const NotificationNewsletter = () => {
  const [formData, setFormData] = useState({
    mail: '',
  })
  const handleChange = (e: any) => {
    setFormData((prevData) => ({
      mail: e.target.value,
    }))
    if (formData.mail.length > 3) {
    } else {
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className={styles.newsletter}>
      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0">
          Abonné à mon newsletter pour suivre mes nouvelles
        </div>
        <div className={`col-md-6 ${styles.form_newsletter}`}>
          <form onSubmit={handleSubmit} name="test">
            <input
              type="email"
              placeholder="Votre adresse mail"
              onChange={handleChange}
            />

            <button
              type="submit"
              className="d-flex align-items-center justify-content-between"
            >
              S&apos;inscrire <TbArrowRight />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NotificationNewsletter
