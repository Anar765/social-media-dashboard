const Card = (props) => {
  return (
    <div className={`card ${props.className}`}>
      <p className="type">{props.type}</p>

      <img src={props.src} alt={props.alt} />

      <h3 className="number">{props.number}</h3>

      <div className={`percentage ${props.status}`}>
        <img src={props.statusImg} alt={props.statusAlt} />
        <p>{props.percentage}%</p>
      </div>
    </div>
  )
}

export default Card