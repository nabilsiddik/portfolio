import TypewriterView from '../TypeWritterText';
import developerImage from '../../assets/images/nabil-siddik-hero.jpg'
import { Link } from 'react-router-dom'
import { downloadFileFromGoogleDrive } from '@/utils/downloadFileFromGoogleDrive';

const LinkedInIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
    </svg>
);

const GithubIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3.3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-23.3 2.6-57.5 0 0 21.9-7 72.1 25.6 20.9-6.2 43.6-9.4 66.3-9.4 22.7 0 45.4 3.1 66.3 9.4 50.2-32.6 72.1-25.6 72.1-25.6 13.7 34.2 5.2 51 2.6 57.5 16 17.6 23.6 31.4 23.6 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
    </svg>
);

const YoutubeIcon = () => (
    <svg width="1em" height="1em" viewBox="0 -3.5 24 24" id="meteor-icon-kit__regular-youtube" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.4593 2.63137C23.1843 1.59561 22.3738 0.77987 21.3447 0.50304C19.4795 0 12 0 12 0C12 0 4.52059 0 2.65529 0.50304C1.62622 0.77991 0.815739 1.59561 0.540659 2.63137C0.040863 4.50876 0.040863 8.4258 0.040863 8.4258C0.040863 8.4258 0.040863 12.3427 0.540659 14.2201C0.815739 15.2559 1.62622 16.0376 2.65529 16.3145C4.52059 16.8175 12 16.8175 12 16.8175C12 16.8175 19.4794 16.8175 21.3447 16.3145C22.3738 16.0376 23.1843 15.2559 23.4593 14.2201C23.9591 12.3427 23.9591 8.4258 23.9591 8.4258C23.9591 8.4258 23.9591 4.50876 23.4593 2.63137zM9.5538 11.9821V4.86942L15.8051 8.4258L9.5538 11.9821z" fill="currentColor" /></svg>
);

const MailIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.8 4H3.2C2.54 4 2 4.54 2 5.2v12.4C2 18.92 3.08 20 4.4 20h15.2c1.32 0 2.4-1.08 2.4-2.4V5.2c0-.66-.54-1.2-1.2-1.2ZM5.65 6.3a1 1 0 1 0-1.3 1.52l6.87 5.89a1.2 1.2 0 0 0 .78.285 1.2 1.2 0 0 0 .78-.286l6.87-5.89a1 1 0 1 0-1.3-1.518L12 11.744 5.65 6.301Z" fill="currentColor" /></svg>
);


const WhatsAppIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 24 24" id="meteor-icon-kit__solid-whatsapp" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837473 12.1032 4.20445e-05C5.54964 4.20445e-05 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z" fill="currentColor" /></svg>
);

// Main App component that renders the portfolio
export default function Portfolio2Page() {
    return <Portfolio2 />;
}


// The main portfolio component, now fully responsive with light/dark mode support.
const Portfolio2 = () => {

    return (
        <div className="flex items-center justify-center font-sans dark:bg-black">
            <div className="container">
                <div className=" dark:bg-black w-full p-4 relative overflow-hidden py-20">

                    {/* Main Content (Hero Section) */}
                    <main className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 pb-5">

                        {/* Left Side: Text Content */}
                        <div className="text-center md:text-left md:w-1/2 z-10 order-2 md:order-1">
                            {/* Font sizes now scale better from mobile to desktop */}
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-foreground dark:text-white leading-tight mt-[-20px]">
                                Hi, <TypewriterView /> <br />
                                <span className="text-black dark:text-white text-xl lg:text-2xl">Experienced Full Stack Developer</span>
                            </h1>
                            <p className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0">
                                I aim to build scalable, high-performance websites that enhance user
                                experience and solve real-world problems. I am committed to continuous learning and staying updated with the latest
                                technologies. I aim to contribute to innovative projects in a collaborative environment.
                            </p>
                            <button onClick={() => {
                                downloadFileFromGoogleDrive('1NwrAnzL1CmsaOlrt4aFvjuPHHJlW2FSl')
                            }} className="mt-8 bg-black dark:bg-white text-white dark:text-black font-bold py-3 px-10 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center mx-auto md:mx-0 gap-3">
                                <span>Download Resume</span>
                                <span>
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a1 1 0 0 1 1 1v10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 13.586V3a1 1 0 0 1 1-1zM5 17a1 1 0 0 1 1 1v2h12v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" fill="#fff" /></svg>
                                </span>
                            </button>
                        </div>

                        {/* Right Side: Image with Blob Shape */}
                        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0 order-1 md:order-2">
                            {/* The blob shape adapts to light/dark mode */}
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-full h-full">
                                <path fill="currentColor" className="text-black dark:text-white" d="M48.8,-63.9C62.9,-54.2,73.8,-40.1,78.2,-24.5C82.6,-8.9,80.5,8.2,74.5,23.6C68.5,39,58.6,52.7,45.5,62.3C32.4,71.9,16.2,77.4,-1.8,78.8C-19.8,80.2,-39.6,77.5,-53.4,67.7C-67.2,57.9,-75,41,-76.8,24.2C-78.5,7.4,-74.2,-9.3,-66.5,-23.7C-58.8,-38.1,-47.7,-50.3,-34.9,-60.1C-22.1,-69.9,-7.6,-77.4,7.9,-78.9C23.4,-80.4,46.8,-75.9,48.8,-63.9Z" transform="translate(100 100)" />
                            </svg>
                            {/* The image is clipped to a similar path */}

                            <div className="w-full h-full">
                                <img
                                    src={developerImage}
                                    alt="Aesthetic scenery in grayscale"
                                    className="absolute w-full h-full object-cover dark:brightness-90" // Added grayscale filter and dark mode brightness adjustment
                                    style={{ clipPath: 'url(#blob-clip)' }}
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null;
                                        target.src = 'https://placehold.co/400x400/000000/FFFFFF?text=Image';
                                    }}
                                />
                            </div>
                            {/* Defining the SVG clip-path. It's hidden but used by the style attribute */}
                            <svg width="0" height="0">
                                <defs>
                                    <clipPath id="blob-clip" clipPathUnits="objectBoundingBox">
                                        <path d="M0.244,-0.32C0.315,-0.271,0.369,-0.2,0.391,-0.122C0.413,-0.045,0.402,0.041,0.373,0.118C0.343,0.195,0.293,0.263,0.227,0.312C0.162,0.359,0.081,0.387,-0.009,0.394C-0.099,0.401,-0.198,0.387,-0.267,0.339C-0.336,0.289,-0.375,0.205,-0.384,0.121C-0.393,0.037,-0.371,-0.047,-0.333,-0.119C-0.294,-0.191,-0.239,-0.251,-0.175,-0.3C-0.111,-0.35,-0.038,-0.387,0.04,-0.395C0.117,-0.402,0.234,-0.38,0.244,-0.32Z" transform="matrix(2.5, 0, 0, 2.5, 0.5, 0.5)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </main>

                    {/* Social Links Footer - Now fully responsive with dark mode support */}
                    <div className="flex justify-center pb-4 md:p-0 md:justify-start">
                        <div className="flex space-x-5 md:space-x-6 text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                            <Link to='https://www.linkedin.com/in/nabilsiddik' target="_blank">
                                <LinkedInIcon />
                            </Link>
                            <Link to='https://github.com/nabilsiddik' target="_blank">
                                <GithubIcon />
                            </Link>
                            <Link to='https://www.youtube.com/@Code-With-Nabil' target="_blank">
                                <YoutubeIcon />
                            </Link>
                            <Link to='https://wa.me/8801957282230' target="_blank">
                                <WhatsAppIcon />
                            </Link>
                            <span className='cursor-pointer' onClick={() => {
                                window.open(
                                    "https://mail.google.com/mail/?view=cm&fs=1&to=nabilsiddik90@gmail.com&su=Hello&body=This%20is%20a%20test",
                                    "_blank",
                                    "noopener,noreferrer"
                                );
                            }}><MailIcon /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
