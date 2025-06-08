import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-row-reverse justify-between items-center">
        {/* Logo on Right */}
        {/* <h1 className="text-xl font-bold">MyApp</h1> */}

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AAK</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* Nav Links on Left */}
        <NavigationMenu>
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
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button (still on right for small screens) */}
        <Button variant="ghost" size="icon" className="md:hidden ml-4">
          <Menu />
        </Button>
      </div>
    </header>
  )
}
