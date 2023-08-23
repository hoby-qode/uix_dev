import styles from './styles.module.css'
const Textarea = ({ label, name, size, onChange }) => {
  return (
    <div className={`${styles.groupInput} ${size}`}>
      <textarea name={name} id={name} placeholder={label} onChange={onChange}></textarea>
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default Textarea
