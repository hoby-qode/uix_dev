import styles from "./style.module.css"
import Link from 'next/link'

const ProjectFun = () => {
    return (
        <div>
            <div className={styles.projectFunTitle}>
                <h2>Projects <strong>FUN</strong> et Éducatifs</h2>
                <div className={styles.nbProjectFun}>
                    <p>10+ Projets</p>
                </div>
            </div>
            <div className={styles.projectFun}>
                <div className={styles.projectFunSticky}>
                    <Link href="/projets" passHref>
                        Tous les projets <span className="icon-arrow"></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default ProjectFun