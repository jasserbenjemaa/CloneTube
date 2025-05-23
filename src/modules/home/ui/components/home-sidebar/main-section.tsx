"use client"

import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react"
import { useAuth, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import{
  
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton, 
  } from "@/components/ui/sidebar"

const items=[
  {
    title: 'Home',
    url: '/',
    icon:HomeIcon,
  },
  {
      title: 'Subscriptions',
      url: '/feed/subscriptions',
      icon:PlaySquareIcon,
      auth: true,
    },
    {
      title: 'Tranding',
      url: '/feed/tranding',
      icon:FlameIcon,
    }
]
export const MainSection = () => {
  const { isSignedIn } = useAuth();
  const clerk = useClerk();
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item)=>(
            <SidebarMenuItem key={item.title} >
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false}
                onClick={(e)=>{
                  if(!isSignedIn && item.auth){
                    e.preventDefault();
                    return clerk.openSignIn();
                  }
                }}
              >
                
                <Link href={item.url} className="flex items-center gap-4">
                  <item.icon/>
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
    
  )
}

