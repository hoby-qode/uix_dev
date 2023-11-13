'use client'
import { replie } from '@/src/types/types'
import React, { useState } from 'react'
import InnerHTML from '@/components/ui/InnerHTML'
import Modal from '@/components/ui/Modal'
import styles from './comment.module.css'
import Image from 'next/image'
import {FaRegCommentDots} from 'react-icons/fa'
const TeaseComment = ({ comment }: { comment: replie }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const date = new Date(comment.date).toLocaleDateString()
  console.log(comment.author_avatar_urls['96'])

  const handleToggleModal = (isOpen: number) => {
    setIsOpen(!isOpen)
  }
  
  return (
    <div className={styles.teaseComment}>
      <div className={styles.teaseComment_head}>
        <div className={styles.teaseComment_head_picture}>
          <Image src={comment.author_avatar_urls['96']} alt='' width={40} height={40} />
        </div>
        <div className={styles.teaseComment_head_title}>
          <h4>{comment.author_name}</h4>
          {date}
        </div>
      </div>
      <div className="desc">
        <InnerHTML html={{ __html: comment.content.rendered }} />
      </div>
      <span className="d-flex align-items-center" onClick={() => setIsOpen(true)}>
        <FaRegCommentDots className='mr-2'/> Répondre
      </span>

      {isOpen ? (
        <Modal
          isOpen={isOpen}
          OnSetModal={setIsOpen}
          idComment={comment.id}
          title={comment.author_name}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default TeaseComment
