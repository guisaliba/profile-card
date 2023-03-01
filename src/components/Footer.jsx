import { TwitterLogo, InstagramLogo, FacebookLogo, GithubLogo } from 'phosphor-react'

function Footer() {
  return(
   <footer>
      <TwitterLogo
      size={26}
      color="#2B283A"
      weight="bold" />

      <FacebookLogo
      size={26}
      color="#2B283A"
      weight="bold" />

      <InstagramLogo
      size={26}
      color="#2B283A"
      weight="bold" />
      
      <GithubLogo size={26}
      color="#2B283A"
      weight="bold" />
   </footer>
  )
}

export default Footer

