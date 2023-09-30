import './Social.css'
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Social() {
  return (
    <div className='social'>
        <a href="https://github.com/QuentinCode" target='_blank' >
            <FaGithub id='git' />
        </a>
        <a href="https://www.facebook.com/quentin.gibouin" target='_blank'>
            <FaFacebook id='fb' />
        </a>
        <a href="https://www.instagram.com/gibouinquentin/?hl=fr" target='_blank'>
            <FaInstagram id='insta' />
        </a>
    </div>
  )
}