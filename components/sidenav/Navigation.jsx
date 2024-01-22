import Link from 'next/link';
import navigationStyles from "@/components/sidenav/Navigation.module.scss";

const SideNav = () => {
  return (
    <nav className={navigationStyles.navWrapper}>
        <Link href='/'>
            <img 
                src="/logo.png"
                alt="Company logo" 
                className={navigationStyles.navLogo}
            />
        </Link>
        <div className={navigationStyles.navLinkWrapper}>
            <Link 
                href='/' 
                className={navigationStyles.navLink}
            >
                Home
            </Link>
            <Link 
                href='/reports' 
                className={navigationStyles.navLink}
            >
                Reports
            </Link>
        </div>   
    </nav>  
  )
}

export default SideNav