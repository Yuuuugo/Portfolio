import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
    return (
        <div className = 'header_socials'>
            <a href= "https://www.linkedin.com/in/hugo-gabrielidis-70289a21b/" target = "_blank"><BsLinkedin/></a>
            <a href= "https://github.com/Yuuuugo" target = "_blank"><BsGithub/> </a>
        </div>
    )
}

export default HeaderSocials
