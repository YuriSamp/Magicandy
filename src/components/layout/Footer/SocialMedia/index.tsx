import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

interface Props {
  Github: string;
  Linkedin: string;
  Nome: string
  Css: string
}

function SocialMedia({ Github, Linkedin, Nome, Css }: Props) {

  return (
    <div className={Css}>
      <p className='text-black font-semibold tracking-wider'>{Nome}</p>
      <ul className="flex gap-4">
        <li>
          <Link href={Github}><BsGithub name={`Github do ${Nome}`} className='text-black ' /></Link>
        </li>
        <li>
          <Link href={Linkedin}><BsLinkedin name={`Linkedin do ${Nome}`} className='text-black' /></Link>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedia
