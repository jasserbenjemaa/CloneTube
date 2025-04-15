import { SidebarProvider } from "@/components/ui/sidebar";
import {HomeNavbar} from "../components/home-navbar";

interface HomeLayoutProps{
  children: React.ReactNode;
}

const Layout=({children}:HomeLayoutProps)=>{
  return (
    <SidebarProvider>
      <div className="w-full">
      <HomeNavbar/>
      </div>
      <div>
        {children}
      </div>
    </SidebarProvider>
  )
}

export default Layout;