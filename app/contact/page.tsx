import React from 'react'
import FormContact from './FormContact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UIX DEV : Contact',
  description: 'Description de la page',
}

const Contact = () => {
  return <FormContact />
}

export default Contact
