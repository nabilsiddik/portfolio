"use client";

import { Link } from "react-router";
import BottomFadeGrid from "../patterns/BottomFadeGrid";

const CodeIcon = () => (
    <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M9.70710678,15.2928932 L8.29289322,16.7071068 L3.58578644,12 L8.29289322,7.29289322 L9.70710678,8.70710678 L6.41421356,12 L9.70710678,15.2928932 Z M14.2928932,8.70710678 L15.7071068,7.29289322 L20.4142136,12 L15.7071068,16.7071068 L14.2928932,15.2928932 L17.5857864,12 L14.2928932,8.70710678 Z M11.9863939,18.164399 L10.0136061,17.835601 L12.0136061,5.83560101 L13.9863939,6.16439899 L11.9863939,18.164399 Z" />
    </svg>
)


function Footer() {
    const navLinks = [
        { name: "Features", href: "#" },
        { name: "Solution", href: "#" },
        { name: "Customers", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Help", href: "#" },
        { name: "About", href: "#" },
    ];

    const socialIcons = [
        {
            name: "X",
            href: "https://x.com/SiddikNabil",
            svg: (
                <svg
                    className="size-6 transition-transform duration-200 hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                    ></path>
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/nabilsiddik/",
            svg: (
                <svg
                    className="size-6 transition-transform duration-200 hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                    ></path>
                </svg>
            ),
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/codewithnabil",
            svg: (
                <svg
                    className="size-6 transition-transform duration-200 hover:scale-110"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                    ></path>
                </svg>
            ),
        },
        {
            name: "Youtube",
            href: "https://www.youtube.com/@Code-With-Nabil",
            svg: (
                <svg className="mt-[1px]" width="24px" height="24px" viewBox="0 -3.5 24 24" id="meteor-icon-kit__solid-youtube" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.4593 2.63137C23.1843 1.59561 22.3738 0.77987 21.3447 0.50304C19.4795 0 12 0 12 0C12 0 4.52059 0 2.65529 0.50304C1.62622 0.77991 0.815739 1.59561 0.540659 2.63137C0.040863 4.50876 0.040863 8.4258 0.040863 8.4258C0.040863 8.4258 0.040863 12.3427 0.540659 14.2201C0.815739 15.2559 1.62622 16.0376 2.65529 16.3145C4.52059 16.8175 12 16.8175 12 16.8175C12 16.8175 19.4794 16.8175 21.3447 16.3145C22.3738 16.0376 23.1843 15.2559 23.4593 14.2201C23.9591 12.3427 23.9591 8.4258 23.9591 8.4258C23.9591 8.4258 23.9591 4.50876 23.4593 2.63137zM9.5538 11.9821V4.86942L15.8051 8.4258L9.5538 11.9821z" fill="currentColor" /></svg>
            ),
        },
        {
            name: "Whatsapp",
            href: "https://wa.me/8801957282230",
            svg: (
                <svg width="22px" height="22px" viewBox="0 0 24 24" id="meteor-icon-kit__solid-whatsapp" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837473 12.1032 4.20445e-05C5.54964 4.20445e-05 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z" fill="currentColor" /></svg>
            ),
        },
    ];

    return (
        <footer className="py-10 px-4 sm:px-6 lg:px-8 font-inter relative overflow-hidden">
            <BottomFadeGrid />
            <div className="container mx-auto">
                <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
                    <div className="mb-6 flex items-center justify-center">
                        <Link to='/'>
                            <h2 className="font-bold text-2xl flex items-center gap-2">
                                <span className="mt-1">
                                    <CodeIcon />
                                </span>
                                <span>Nabil Siddik</span>
                            </h2>
                        </Link>
                    </div>

                    <nav className="mb-6 w-full">
                        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-base font-medium">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-gray-900 dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="my-6 flex flex-wrap justify-center gap-4 text-sm">
                        {socialIcons.map((icon) => (
                            <a
                                key={icon.name}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={icon.name}
                                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                                href={icon.href}
                            >
                                {icon.svg}
                            </a>
                        ))}
                    </div>

                    <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-4">
                        &copy; {new Date().getFullYear()} Nabil Siddik. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
