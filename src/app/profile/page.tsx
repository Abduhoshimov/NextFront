"use client"
import { signOut, signIn } from 'next-auth/react'
import React from 'react'
import { useSession } from 'next-auth/react'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { IoLogOutOutline } from "react-icons/io5";

const ProfilePage = () => {
    const session = useSession()
    console.log(session);

    const sigOut = () => {
        signOut({callbackUrl:"/"})
    }
    const signInn = () => {
        signIn("google", { callbackUrl: "/" })
    }
    const signGitHub = () => {
        signIn("github", { callbackUrl: "/"})
    }
    return (
        <div>
            <div className='bg-[url(/profile_img.jpg)] relative h-[500px] w-full flex flex-col items-center justify-center'>
                <h1 className='text-white text-[50px]'>Sign In</h1>
                <p className='text-gray mb-[10px]'>Home/<span className='text-white'>Sign In</span></p>
                <div className='flex items-center gap-[20px]'>
                    <button className='text-white w-[40px] h-[40px] bg-gray rounded-[50%]' onClick={signInn}><FaGoogle /></button>
                    <button className='text-white w-[40px] h-[40px] bg-gray rounded-[50%]' onClick={signGitHub}><FaGithub /></button>
                </div>
                <div className='absolute top-3 right-2 flex items-center justify-center text-black w-[40px] h-[40px] bg-gray rounded-[50%]'>
                    <button className='' onClick={sigOut}><IoLogOutOutline /></button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage