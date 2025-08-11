import { Badge } from "lucide-react"
import SectionDevider from "../SectionDevider"

interface CustomBadgeProps {
    children: React.ReactNode;
    className?: string;
    [key: string]: React.ReactNode | string | undefined | (() => void);
}
interface GradientBadgeProps extends CustomBadgeProps {
    gradient?: 'blue' | 'purple' | 'green' | 'orange' | 'rainbow' | 'sunset';
}

const GradientBadge = ({ children, gradient = "blue", className = "", ...props }: GradientBadgeProps) => {
    const gradients = {
        blue: "bg-gradient-to-r from-blue-500/80 to-cyan-500/80",
        purple: "bg-gradient-to-r from-purple-500/80 to-pink-500/80",
        green: "bg-gradient-to-r from-green-500/80 to-emerald-500/80",
        orange: "bg-gradient-to-r from-orange-500/80 to-red-500/80",
        rainbow: "bg-gradient-to-r from-red-500/80 via-yellow-500/80 via-green-500/80 via-blue-500/80 to-purple-500/80",
        sunset: "bg-gradient-to-r from-orange-400/80 via-pink-500/80 to-purple-600/80",
    }

    return (
        <div
            className={`w-[100px] px-3 inline-flex items-center py-1.5 text-md font-medium rounded-full backdrop-blur-md ${gradients[gradient]} border border-white/30 shadow-lg text-white hover:scale-105 transition-all duration-300 ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}

const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <SectionDevider deviderText={
          <GradientBadge gradient="sunset">About Me</GradientBadge>
        }/>
        about
      </div>
    </div>
  )
}

export default About
