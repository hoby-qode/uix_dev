import { replie } from '@/src/types/types'
import React, { useState } from 'react'
import InnerHTML from '@/components/ui/InnerHTML'
import Modal from '@/components/ui/Modal'
import styles from './comment.module.css'
import Image from 'next/image'
import { FaRegCommentDots } from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Skeleton from 'react-loading-skeleton'
const TeaseComment = ({
  comment,
  idPost,
}: {
  comment: any
  idPost: number
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const date = new Date(comment.date).toLocaleDateString()

  const router = useRouter()
  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <div className={`${styles.teaseComment} commentItem`}>
      <div className={styles.teaseComment_head}>
        <div className={styles.teaseComment_head_picture}>
          {/* <Image
            src={comment.author_avatar_urls['96']}
            alt={comment.author_name}
            width={40}
            height={40}
          /> */}
        </div>
        <div className={styles.teaseComment_head_title}>
          <h4 className="d-flex align-items-center gap-10">
            {comment.author_name ? comment.author_name : <Skeleton />}
            <div
              className="openModal align-items-center"
              onClick={openModal}
              style={{ cursor: 'pointer' }}
            >
              <FaRegCommentDots className="mr-2" /> Répondre
            </div>
          </h4>
          {comment.date ? comment.date : <Skeleton />}
        </div>
      </div>
      <div className={styles.teaseComment_content}>
        {comment.content.rendered ? (
          <InnerHTML html={{ __html: comment.content.rendered }} />
        ) : (
          <Skeleton count={15} />
        )}
      </div>

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
