'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from "@/components/ui/badge"
import { Adaptablity, BackendIcon, BootstrapIcon, CollaborationIcon, CommunicationIcon, CssIcon, ExpressIcon, FigmaIcon, FrontEndIcon, HtmlIcon, JavaScriptIcon, MongoIcon, MongooseIcon, NextJsIcon, NodeIcon, OtherSkillsIcon, PostmanIcon, ProjectManagementIcon, ReactIcon, ReduxIcon, RestApiIcon, SassIcon, TailwindIcon, TeamworkIcon, TypeScriptIcon } from '@/svg/SkillIcons';


export default function ClassicTab() {
  const [activeTab, setActiveTab] = useState(1);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const tabs = [
    {
      id: 1,
      name: 'Front-End Skills',
      icon: <FrontEndIcon />,
      color: 'from-pink-500 to-rose-500',
      content: [
        {
          icon: <HtmlIcon />,
          name: 'HTML 5',
        },
        {
          icon: <CssIcon />,
          name: 'CSS 3',
        },
        {
          icon: <TailwindIcon />,
          name: 'Tailwind CSS',
        },
        {
          icon: <ReactIcon />,
          name: 'React.js',
        },
        {
          icon: <ReduxIcon />,
          name: 'Redux Toolkit',
        },
        {
          icon: <NextJsIcon />,
          name: 'Next.js',
        },
        {
          icon: <BootstrapIcon />,
          name: 'Bootstrap',
        },
        {
          icon: <SassIcon />,
          name: 'SASS',
        },
        {
          icon: <FigmaIcon />,
          name: 'Figma',
        },
        {
          icon: <JavaScriptIcon />,
          name: 'Javascript',
        },
        {
          icon: <TypeScriptIcon />,
          name: 'Typescript',
        },
      ]
    },
    {
      id: 2,
      name: 'Backend Skills',
      icon: <BackendIcon />,
      color: 'from-purple-500 to-indigo-500',
      content: [
        {
          icon: <NodeIcon />,
          name: 'Node.js',
        },
        {
          icon: <ExpressIcon />,
          name: 'Express.js',
        },
        {
          icon: <MongoIcon />,
          name: 'MongoDB',
        },
        ,
        {
          icon: <MongooseIcon />,
          name: 'Mongoose',
        },
        {
          icon: <NextJsIcon />,
          name: 'Next.js',
        },
        ,
        {
          icon: <PostmanIcon />,
          name: 'Post Man',
        },
        {
          icon: <RestApiIcon />,
          name: 'REST API',
        },
        {
          icon: <JavaScriptIcon />,
          name: 'Javascript',
        },
        {
          icon: <TypeScriptIcon />,
          name: 'Typescript',
        },
      ]
    },
    {
      id: 3,
      name: 'Other Skills',
      icon: <OtherSkillsIcon/>,
      color: 'from-blue-500 to-cyan-500',
      content: [
        {
          icon: <ProjectManagementIcon />,
          name: 'Project Management',
        },
        {
          icon: <CommunicationIcon />,
          name: 'Communication',
        },
        {
          icon: <CollaborationIcon />,
          name: 'Colaboration',
        },
        {
          icon: <TeamworkIcon />,
          name: 'Team Work',
        },
        {
          icon: <Adaptablity />,
          name: 'Adaptability',
        },
      ]
    },
  ];

  return (
    <div className='w-full mx-auto'>
      <div className="container mx-auto max-w-6xl px-10">
        {/* Tabs layout with cards */}
        <div className='grid grid-cols-3 gap-4 mb-8'>
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={() => setIsHovering(tab.id)}
              onMouseLeave={() => setIsHovering(null)}
              className={`relative overflow-hidden rounded-xl cursor-pointer ${activeTab === tab.id
                ? `bg-gradient-to-br ${tab.color} shadow-lg`
                : 'bg-white dark:bg-gray-800 shadow hover:shadow-md border-1'
                }`}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98 }}
              layout
            >
              <div
                className={`p-4 flex flex-col items-center justify-center aspect-[4/3] ${activeTab === tab.id
                  ? 'text-white'
                  : 'text-gray-800 dark:text-gray-200'
                  }`}
              >
                <motion.div
                  className='text-4xl mb-2'
                  initial={false}
                  animate={{
                    scale:
                      isHovering === tab.id || activeTab === tab.id ? 1.2 : 1,
                    rotate:
                      isHovering === tab.id && activeTab !== tab.id ? 10 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {tab.icon}
                </motion.div>
                <span className='font-bold tracking-wide text-center text-md md:text-lg lg:text-2xl mt-3'>
                  {tab.name}
                </span>
              </div>

              {isHovering === tab.id && activeTab !== tab.id && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br opacity-20 ${tab.color}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Content Area with dynamic colors based on active tab */}
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`relative overflow-hidden rounded-xl px-8 py-8 bg-white dark:bg-gray-800 shadow-lg border-t-4 border-gradient-to-r ${tabs.find((t) => t.id === activeTab)?.color}`}
          >
            <div className='absolute top-0 right-0 p-2 lg:p-3 flex items-center justify-center'>
              <motion.div
                className='text-2xl opacity-50'
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.2, 1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                {tabs.find((t) => t.id === activeTab)?.icon}
              </motion.div>
            </div>

            <h3 className='md:text-2xl text-xl font-bold mb-7 text-gray-800 dark:text-white'>
              {tabs.find((t) => t.id === activeTab)?.name}
            </h3>

            <div className='prose dark:prose-invert grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
              {tabs.map((tab) => {
                if(activeTab === tab.id){
                  return tab.content && tab.content.map((contentItem) => {
                  return <Badge>
                    <div className='flex items-center gap-2 py-1 px-2'>
                      <span>{contentItem?.icon}</span>
                      <span className='font-bold text-md md:text-lg'>{contentItem?.name}</span>
                    </div>
                  </Badge>
                })
                }
              })}
            </div>

            {/* <div className='mt-6 text-center'>
              <button
                className={`px-4 py-2 rounded-full text-white bg-gradient-to-r ${tabs.find((t) => t.id === activeTab)?.color}`}
              >
                Explore {tabs.find((t) => t.id === activeTab)?.name}
              </button>
            </div> */}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
