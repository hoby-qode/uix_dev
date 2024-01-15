'use client'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdKeyboardCommandKey } from 'react-icons/md'
import styles from '@/app/blog/components/searchFilter/SearchFilter.module.css'
import { useRouter } from 'next/navigation'
const SearchFilter = () => {
  const router = useRouter()
  return (
    <div className={styles.search}>
      <AiOutlineSearch />
      <input
        type="search"
        placeholder="Faite votre recherche"
        onClick={() => router.push('/blog')}
      />
      <div className={styles.ctrl_k}>
        <MdKeyboardCommandKey />K
      </div>
    </div>
  )
}

export default SearchFilter
