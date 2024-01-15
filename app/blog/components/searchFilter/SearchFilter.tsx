'use client'
import React, { useEffect, useState } from 'react'
import styles from './SearchFilter.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdKeyboardCommandKey } from 'react-icons/md'
import { useRouter } from 'next/navigation'
const SearchFilter = ({ setSearchText }: { setSearchText: Function }) => {
  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value)
  }
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.onkeydown('k', function () {
  //       alert('test')
  //     })
  //   }
  // })

  return (
    <form className={styles.search} method="get" action="" autoComplete="off">
      <AiOutlineSearch />
      <input
        type="search"
        placeholder="Faite votre recherche"
        onChange={handleSearchChange}
        name="s"
      />
      <button type="submit" className={styles.ctrl_k}>
        <MdKeyboardCommandKey />K
      </button>
    </form>
  )
}

export default SearchFilter
