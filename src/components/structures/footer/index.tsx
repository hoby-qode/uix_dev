import FooterLink from './footerLink'
import FormContact from './formContact'
import styles from './styles.module.css'
const Index = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <FormContact />
        
        <FooterLink />
      </div>
    </footer>
  )
}
export default Index
