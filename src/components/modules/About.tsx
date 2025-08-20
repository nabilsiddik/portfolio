import aboutImage from '../../assets/images/nabil-siddik-about-me.jpg'
import FancyTab from '../FancyTab';
import MagicCard from '../MagicCard';
import SectionHeader from "../SectionHeader";
import ThreeDCard from '../ThreeDCard';

// interface CustomBadgeProps {
//   children: React.ReactNode;
//   className?: string;
//   [key: string]: React.ReactNode | string | undefined | (() => void);
// }
// interface GradientBadgeProps extends CustomBadgeProps {
//   gradient?: 'blue' | 'purple' | 'green' | 'orange' | 'rainbow' | 'sunset';
// }

// const GradientBadge = ({ children, gradient = "blue", className = "", ...props }: GradientBadgeProps) => {
//   const gradients = {
//     blue: "bg-gradient-to-r from-blue-500/80 to-cyan-500/80",
//     purple: "bg-gradient-to-r from-purple-500/80 to-pink-500/80",
//     green: "bg-gradient-to-r from-green-500/80 to-emerald-500/80",
//     orange: "bg-gradient-to-r from-orange-500/80 to-red-500/80",
//     rainbow: "bg-gradient-to-r from-red-500/80 via-yellow-500/80 via-green-500/80 via-blue-500/80 to-purple-500/80",
//     sunset: "bg-gradient-to-r from-orange-400/80 via-pink-500/80 to-purple-600/80",
//   }

//   return (
//     <div
//       className={`w-[100px] px-3 inline-flex items-center py-1.5 text-md font-medium rounded-full backdrop-blur-md ${gradients[gradient]} border border-white/30 shadow-lg text-white hover:scale-105 transition-all duration-300 ${className}`}
//       {...props}
//     >
//       {children}
//     </div>
//   )
// }

const About = () => {
  return (
    <div className="my-30 relative" style={{
      // background: 'linear-gradient(263.72deg, rgb(255, 196, 102) 5.37%, rgb(255, 147, 193) 48.9%, rgb(203, 102, 241) 99.03%)'
    }}>

      <SectionHeader style={{
        titleColor: '#ffffff',
        descriptionColor: '#ffffff'
      }} title="About Me" description="Passionate software developer crafting scalable, user-friendly solutions. I turn complex challenges into clean, efficient code while constantly learning and innovating." />

      <div className="container mx-auto">
        <div className="flex gap-10 items-center">
          <div className='flex-1'>
            {/* <SpiderNetwork /> */}
            <ThreeDCard>
            <MagicCard>
              <img src={aboutImage} alt="" />
            </MagicCard>
          </ThreeDCard>
          </div>

          <div className="flex-3">
            <FancyTab />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
