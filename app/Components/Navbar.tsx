
import { link } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {

const navbarItems  = [
    {name: "Home",
      link: "/home",
    },
    {name: "About",
      link: "/about",
    },
]


  return (
   <nav className="bg-transparent fixed top-0 left-0 w-full z-10 mt-12 px-48 flex items-center justify-between">
      <Link href={"/home"}>
      <Image src="/goslogo.png" alt="Logo" width={150} height={150} />
      </Link>
      <div className='space-x-4'>
        {
          navbarItems.map((item, index) => (
            <Link key={item.link} href={item.link}>{item.name}</Link>
          ))
        }
      </div>
  </nav>

  )
}
