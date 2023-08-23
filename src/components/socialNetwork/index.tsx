import styles from './styles.module.css'
import Item from './item';
const SocialNetwork = () => {
    return (
        <div className={styles.socialNetwork}>
            <ul>
                <Item link="https://dribbble.com/">
                    Dribbble
                </Item>
                <Item link="https://www.behance.net/">
                    Behance
                </Item>
                <Item link="https://www.linkedin.com/">
                    Linkedin
                </Item>
            </ul>
        </div>
    )
}
export default SocialNetwork