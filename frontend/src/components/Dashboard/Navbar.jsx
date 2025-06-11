import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Link } from 'react-router-dom'
import { LogOut, Settings, User } from 'lucide-react'

function Navbar() {
  return (
    <>

      <header className='h-20 shadow-md w-full flex justify-between items-center px-10'>
        {/* <div className='container mx-auto px-4 py-3'>
          logog
        </div> */}
        <div>
          <SidebarTrigger />
        </div>
        {/* <NavigationMenu className={`justify-self-end`}>
          <NavigationMenuList className="hidden md:flex space-x-4">

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to={`/home`}>Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to={`/about`}>About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to={`/gallery`}>Gallery</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to={`/vaccines`}>Vaccines</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to={`/hospitals`}>Hospitals</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
              <Avatar className={`h-10 w-10`}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Asif Ahmed Khan</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span><User /></span>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span><Settings /></span>
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span><LogOut /></span>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

      </header>
    </>
  )
}

export default Navbar