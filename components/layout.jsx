import Navigation from './Navigation/Navigation';
import layoutStyles from "@/components/layout.module.scss";
 
export default function Layout({ children }) {
  return (
    <div className={layoutStyles.layout}>
        <Navigation />
        <main>{children}</main>
    </div>
  )
}