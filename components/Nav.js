"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import { signIn,signOut,getProviders } from 'next-auth/react'
const Nav = () => {
    const {data:session}=useSession()
    const [toggle,settoggle]=useState(false)
  return (
    <nav className='h-full p-2 flex-between '>
        <Link href="/" className='flex gap-2'>
            <Image src="/next.svg" height={50} width={50}>

            </Image>
            <span className='font-semibold font-inter logo_text blue_gradient '>Rudra</span>
        </Link>
   
        <div className=' flex relative'>
            {
              session===null &&
              
              <button className='black_btn' onClick={()=>{signIn()}}>Sign in</button>
            }
            {

                session &&
                <Image src={session?.user.image} className='rounded-3xl' height={40} width={40} onClick={(e)=>settoggle((prev)=>prev===false?true:false)}></Image>
            }
            {
              toggle &&
              <div className='dropdown glassmorphism'>
                <Link href="/profile" className='dropdown_link'>profile</Link>
                <Link href="/create" className='dropdown_link'>create message</Link>
                <button className='dropdown_link outline_btn ' onClick={(e)=>signOut()}>sign out</button>
                </div>
            }
        </div>
        
    </nav>
  )
}

export default Nav