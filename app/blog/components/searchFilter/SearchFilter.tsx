import React from 'react'
import styles from './SearchFilter.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdKeyboardCommandKey } from 'react-icons/md'
const SearchFilter = () => {
  return (
    <div className={styles.search}>
      <AiOutlineSearch />
      <input type="search" placeholder='Faite votre recherche' />
      <div className={styles.ctrl_k}>
        <MdKeyboardCommandKey />
        K
      </div>
    </div>
  )
}

export default SearchFilter
