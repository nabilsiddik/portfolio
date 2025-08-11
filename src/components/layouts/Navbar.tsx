import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Link } from "react-router"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
    { href: "#", label: "Home", active: true },
    { href: "#", label: "About" },
    { href: "#", label: "Skills" },
    { href: "#", label: "Projects" },
    { href: "#", label: "Contact" },
    { href: "#", label: "Blog" },
]

const CodeIcon = () => (
    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M9.70710678,15.2928932 L8.29289322,16.7071068 L3.58578644,12 L8.29289322,7.29289322 L9.70710678,8.70710678 L6.41421356,12 L9.70710678,15.2928932 Z M14.2928932,8.70710678 L15.7071068,7.29289322 L20.4142136,12 L15.7071068,16.7071068 L14.2928932,15.2928932 L17.5857864,12 L14.2928932,8.70710678 Z M11.9863939,18.164399 L10.0136061,17.835601 L12.0136061,5.83560101 L13.9863939,6.16439899 L11.9863939,18.164399 Z" />
    </svg>
)

export default function Navbar() {
    return (
        <header className="border-b px-4 md:px-6">
            <div className="container mx-auto">
                <div className="flex h-16 items-center justify-between gap-4">
                    {/* Left side */}
                    <div className="flex items-center gap-2">
                        {/* Mobile menu trigger */}
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    className="group size-8 md:hidden"
                                    variant="ghost"
                                    size="icon"
                                >
                                    <svg
                                        className="pointer-events-none"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4 12L20 12"
                                            className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                                        />
                                        <path
                                            d="M4 12H20"
                                            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                                        />
                                        <path
                                            d="M4 12H20"
                                            className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                                        />
                                    </svg>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent align="start" className="w-36 p-1 md:hidden">
                                <NavigationMenu className="max-w-none *:w-full">
                                    <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                                        {navigationLinks.map((link, index) => (
                                            <NavigationMenuItem key={index} className="w-full">
                                                <NavigationMenuLink
                                                    href={link.href}
                                                    className="py-1.5"
                                                    active={link.active}
                                                >
                                                    {link.label}
                                                </NavigationMenuLink>
                                            </NavigationMenuItem>
                                        ))}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </PopoverContent>
                        </Popover>
                        {/* Main nav */}
                        <div className="flex items-center gap-6">
                            {/* logo  */}
                            <Link to='/'>
                                <h2 className="font-bold text-2xl flex items-center gap-2">
                                    <span className="mt-1">
                                        <CodeIcon />
                                    </span>
                                    <span>Nabil Siddik</span>
                                </h2>
                            </Link>
                            {/* Navigation menu */}
                            <NavigationMenu className="max-md:hidden">
                                <NavigationMenuList className="gap-2">
                                    {navigationLinks.map((link, index) => (
                                        <NavigationMenuItem key={index}>
                                            <NavigationMenuLink
                                                active={link.active}
                                                href={link.href}
                                                className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                                            >
                                                {link.label}
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className="flex items-center gap-2">
                        <Button asChild variant="ghost" size="sm" className="text-sm">
                            <a href="#">Sign In</a>
                        </Button>
                        <Button asChild size="sm" className="text-sm">
                            <a href="#">Get Started</a>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
