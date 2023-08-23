import styles from './style.module.css'
import Button from '../button/index'
import { useRef, useState } from 'react'
import Cursor from '@/src/components/cursor'
import Link from 'next/link'
const Item = ({ index, setModal, ...props }) => {
  const projectItem = useRef(null)
  const [showCursor, setShowCursor] = useState(false)
  return (
    <div
      ref={projectItem}
      className={styles.projectsItem}
      data-scroll
      data-scroll-section
    >
      <div
        className={styles.projectCategory}
        data-scroll
        data-scroll-speed={0.05}
      >
        {/* {props.category.map((item, key) => {
          console.log(item)
          return (
            <div key={item}>
              <Button href="#" type="primary">
                {key}
              </Button>
            </div>
          )
        })} */}
        <Button href="#test" type="primary">
          UI/UX Design
        </Button>
        <Button href="#" type="secondary">
          Intégration
        </Button>
        <Button href="#" type="white">
          Développement
        </Button>
      </div>
      <div
        className={styles.projectDescription}
        data-scroll
        data-scroll-speed={0.08}
      >
        <h2>{props.title}</h2>
        <div className={styles.projectIntro}>{props.desc}</div>
        <Link
          href={props.link}
          className={styles.link}
          onMouseEnter={() => {
            setModal({ active: true, index: index })
          }}
          onMouseLeave={() => {
            setModal({ active: false, index: index })
          }}
        ></Link>
      </div>
      <div
        className={styles.projectTechno}
        data-scroll
        data-scroll-speed={0.09}
      >
        <p>Adobe XD</p>
        <p>WordPress</p>
        <p>HTML&CSS</p>
        <p>JavaScript</p>
      </div>
    </div>
  )
}

export default Item
