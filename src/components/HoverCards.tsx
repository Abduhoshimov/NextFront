"use client"
import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Logo from "../assets/img/Logo.png"

const HoverCards = () => {
    return (
        <div className='container py-[15px] flex items-center justify-between'>
            <div className='flex items-center gap-[20px] justify-between'>
                <HoverCard>
                    <HoverCardTrigger className='hover:text-blue'>HOME</HoverCardTrigger>
                    <HoverCardContent>
                        <ul>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop1</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop2</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop3</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop4</Link>
                            </li>
                        </ul>
                    </HoverCardContent>
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger className='hover:text-blue'>SHOP</HoverCardTrigger>
                    <HoverCardContent>
                        <ul>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop1</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop2</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop3</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop4</Link>
                            </li>
                        </ul>
                    </HoverCardContent>
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger className='hover:text-blue'>BLOG</HoverCardTrigger>
                    <HoverCardContent>
                        <ul>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop1</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop2</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop3</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop4</Link>
                            </li>
                        </ul>
                    </HoverCardContent>
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger className='hover:text-blue'>PORTFOLIO</HoverCardTrigger>
                    <HoverCardContent>
                        <ul>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop1</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop2</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop3</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop4</Link>
                            </li>
                        </ul>
                    </HoverCardContent>
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger className='hover:text-blue'>PAGE</HoverCardTrigger>
                    <HoverCardContent>
                        <ul>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop1</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop2</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop3</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Home Shop4</Link>
                            </li>
                        </ul>
                    </HoverCardContent>
                </HoverCard>
                <Link className='hover:text-blue' href={"/contact"}>CONTACT</Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>YOUR RECENTLY VIEWED</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            lorem
                                            <img width={"220px"} src={Logo.src} alt="Logo" />
                                        </div>
                                        <img width={"220px"} src={Logo.src} alt="Logo" />
                                        <img width={"220px"} src={Logo.src} alt="Logo" />
                                        <img width={"220px"} src={Logo.src} alt="Logo" />
                                        <img width={"220px"} src={Logo.src} alt="Logo" />
                                        <img width={"220px"} src={Logo.src} alt="Logo" />
                                        <img width={"220px"} src={Logo.src} alt="Logo" />
                                    </div>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

            </div>
            <div className='flex items-center gap-[20px] justify-between'>
                <HoverCard>
                    <HoverCardTrigger>US Dollar</HoverCardTrigger>
                    <HoverCardContent>
                        <ul>
                            <li className='hover:text-blue' >
                                <Link href={""}>EURO</Link>
                            </li>
                        </ul>
                    </HoverCardContent>
                </HoverCard>
                <HoverCard>
                    <HoverCardTrigger>English</HoverCardTrigger>
                    <HoverCardContent>
                        <ul>
                            <li className='hover:text-blue'>
                                <Link href={""}>French</Link>
                            </li>
                            <li className='hover:text-blue'>
                                <Link href={""}>Japanese</Link>
                            </li>
                        </ul>
                    </HoverCardContent>
                </HoverCard>
            </div>
        </div>
    )
}

export default HoverCards