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
    url: "",
    icon: Home,
  },
  {
    title: "Patients",
    url: "patients",
    icon: Users,
  },
  {
    title: "Hospitals",
    url: "hospitals",
    icon: Hospital,
  },
  {
    title: "Vaccine",
    url: "vaccines",
    icon: Syringe,
  },
  {
    title: "Approvals",
    url: "approvals",
    icon: SquareCheckBig,
  },
  {
    title: "Covid Tests",
    url: "covid-tests",
    icon: TestTubeDiagonal,
  },
  {
    title: "VaccinedPatients",
    url: "vaccinated-patients",
    icon: ShieldUser,
  },
  {
    title: "Settings",
    url: "settings",
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
                      <Link className="py-6" to={`/dashboard/${item.url}`}>
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