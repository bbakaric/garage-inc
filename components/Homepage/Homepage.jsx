import Link from 'next/link';
import homepageStyles from '@/components/Homepage/Homepage.module.scss';

const Homepage = () => {
  return (
    <div className={homepageStyles.homepageWrapper}>
        <div className={homepageStyles.homepageBannerWrapper}>
            <img 
                src="/homepage.jpg" 
                alt="Homepage banner" 
                className={homepageStyles.homepageBanner}
            />
            <Link 
                href="/reports"
                className={homepageStyles.homepageBannerLink}
            >
                Get Started
            </Link>
        </div>
        <div className={homepageStyles.homepageDescriptionWrapper}>
            <h1 className={homepageStyles.homepageDescriptionTitle}>
                 Welcome to GarageInc Reports &#8722; Your Ultimate Solution 
                 for Effortless Vehicle Repair Documentation!
            </h1>
            <p className={homepageStyles.homepageDescriptionText}>
                Empower your mechanics and streamline your repair
                processes with Garage Inc Reports, the cutting-edge 
                application designed to revolutionize how you create 
                and manage vehicle repair reports. Our intuitive 
                platform takes the hassle out of paperwork, ensuring
                your focus remains on delivering top-notch automotive 
                services.
            </p>
            <p className={homepageStyles.homepageDescriptionText}>
                Our intuitive platform takes the hassle out of paperwork, 
                ensuring your focus remains on delivering top-notch automotive 
                services.
            </p>
        </div>
    </div>
  )
}

export default Homepage