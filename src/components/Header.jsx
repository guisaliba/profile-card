import { EnvelopeSimple, LinkedinLogo } from 'phosphor-react'

function Header() {
  return(
    <div>
      <header>
        <img
        className="profile-pic"
        src="https://images.unsplash.com/photo-1446511437394-36cdff3ae1b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHdvbWFuJTIwZ3JheXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="Profile picture" />
        <h1 className="profile-name">
          Laura Smith
        </h1>
        <p className="profile-job">
          Frontend Developer
        </p>
        <small className="profile-website">
          laurasmith.website
        </small>
          <div className="info-container">
            <button className="email-button">
              <EnvelopeSimple
              size={20}
              weight="bold" />
              Email
            </button>
            <button className="linkedin-button">
              <LinkedinLogo size={20}
              color="#FFFFFF"
              weight="fill" />
              Linkedin
            </button>
        </div>
      </header>
    </div>
  )
}

export default Header
