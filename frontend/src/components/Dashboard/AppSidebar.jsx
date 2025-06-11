import { Calendar, Home, Hospital, Inbox, Search, Settings, ShieldUser, SquareCheckBig, Syringe, TestTubeDiagonal, Users } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

const nav_items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Approvals",
    url: "#",
    icon: SquareCheckBig,
  },
  {
    title: "Hospitals",
    url: "#",
    icon: Hospital,
  },
  {
    title: "Patients",
    url: "#",
    icon: Users,
  },
  {
    title: "Vaccine",
    url: "#",
    icon: Syringe,
  },
  {
    title: "Covid Tests",
    url: "#",
    icon: TestTubeDiagonal,
  },
  {
    title: "VaccinedPatients",
    url: "#",
    icon: ShieldUser,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

function AppSidebar() {
  return (
    <>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="py-8 text-3xl flex justify-center items-center text-blue-500 text-shadow-md">Dashboard</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="py-8">
                {nav_items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton className={'hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-75'} asChild>
                      <Link className="py-6" href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  )
}

export default AppSidebar