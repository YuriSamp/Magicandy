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
      <div className="flex gap-4">
        <Link href={Github}><BsGithub className='text-black ' /></Link>
        <Link href={Linkedin}><BsLinkedin className='text-black' /></Link>
      </div>
    </div>
  )
}

export default SocialMedia