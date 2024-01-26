'use client'
import React, { forwardRef, useRef, useState } from 'react'
import styles from './newsletter.module.css'
import {useFormState, useFormStatus} from 'react-dom'
import { TbArrowRight, TbShoppingCart } from 'react-icons/tb'
import { sendMailBrevoApi } from '@/app/actions/actions'

const NotificationNewsletter = () => {
  const [email, setEmail] = useState('')
  const [isActive, setIsActive] = useState(false)
  const submit = useRef(null)
  const [message, formAction] = useFormState(sendMailBrevoApi, null);
  const handleChange = (e:any) => {
    setEmail(e.target.value)
    console.log(email);
    
    if(e.target.value) {
      setIsActive(true)
    }else {
      setIsActive(false)
    }
  }
  return (
    <div className={styles.newsletter}>
      
      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0">
          {message ? message : 'Abonné à mon newsletter pour suivre mes nouvelles'}
        </div>
        <div className={`col-md-6 ${styles.form_newsletter}`}>
          <form action={formAction} name="test">
            <input
              type="email"
              placeholder="Votre adresse mail"
              name='email'
              value={email}
              onChange={(e) => handleChange(e)}
            />
            <Submit ref={submit} isActive={isActive} />
          </form>
          
        </div>
      </div>
    </div>
  )
}
const Submit = forwardRef(function Submit(props:{isActive: boolean}, ref) {
  const status = useFormStatus();
  console.log(status);
  
  const label = <span>S&apos;inscrire <TbArrowRight /></span>
   return <button
      type="submit"
      className={`d-flex align-items-center justify-content-between ${props.isActive ? 'isActive' : 'isDisable'}`}
      disabled={status.pending && props.isActive ? true : false}>
      {status.pending ? 'Loading...' : label}
    </button>
})

export default NotificationNewsletter
