const SocialMedia = (props) => {

  return (
    <div className={`social-media ${props.className}`}>
        <div className="sm-icon">
            <img src={props.src} alt={props.alt} />
            <p className='userName'>{props.username}</p>
        </div>

        <p className="number">
            <span>{props.numberOfFol}</span><br />
            FOLLOWERS
        </p>

        <div className={`changes ${props.status}`}>
            <img src={props.statusImg} alt={props.statusAlt} />
            <p>{props.change} {props.day}</p>
        </div>
    </div>
  )
}

export default SocialMedia