const Input = ({ type, label, name, size, onChange }) => {
  return (
    <div className={`groupInput ${size}`}>
      <input
        placeholder={label}
        type={type}
        name={name}
        id={name}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default Input
