'use client'
import { replie } from '@/src/types/types'
import React, { useState } from 'react'
import InnerHTML from '@/components/ui/InnerHTML'
import Modal from '@/components/ui/Modal'
import styles from './comment.module.css'
import Image from 'next/image'
import {FaRegCommentDots} from 'react-icons/fa'
import { useRouter } from 'next/navigation'
const TeaseComment = ({ comment, idPost }: { comment: any;idPost:number }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const date = new Date(comment.date).toLocaleDateString()
  
  const router = useRouter()
  const openModal = () => {
    router.push('?id_comment=1')
    setIsOpen(true)
  }
  
  return (
    <div className={styles.teaseComment}>
      <div className={styles.teaseComment_head}>
        <div className={styles.teaseComment_head_picture}>
          <Image src={comment.author_avatar_urls['96']} alt='' width={40} height={40} />
        </div>
        <div className={styles.teaseComment_head_title}>
          <h4>{comment.author_name + ' - ' + comment.parent}</h4>
          {date}
        </div>
      </div>
      <div className={styles.teaseComment_content}>
        <InnerHTML html={{ __html: comment.content.rendered }} />
      </div>
      <span className="d-flex align-items-center" onClick={openModal}>
        <FaRegCommentDots className='mr-2'/> Répondre
      </span>

      {isOpen ? (
        <Modal
          isOpen={isOpen}
          OnSetModal={setIsOpen}
          idComment={comment.id}
          idPost={idPost}
          title={comment.author_name}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default TeaseComment
