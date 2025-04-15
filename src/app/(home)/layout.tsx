import  HomeLayoutProps from "@/modules/home/ui/layout/home-layout"
interface LayoutProps{
  children:React.ReactNode
}
const Layout=({children}:LayoutProps)=>{
  return (
    <HomeLayoutProps>
      {children}
    </HomeLayoutProps>
  )
}
export default Layout;