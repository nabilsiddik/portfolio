'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackendIcon = () => (
  <svg className='w-10 h-10' fill='currentColor' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      viewBox="0 0 512 512">
      <circle cx="428.368" cy="374.808" r="41.248" />
      <path d="M352.752,503.96v-39.392c0-23.44,19.248-29.168,28.912-30.576l32.272,69.968H352.752L352.752,503.96z" />
      <path d="M377.04,443.096l24.384,52.864h-40.672v-31.392C360.752,451,369.376,445.4,377.04,443.096 M386.56,425.544
	c0,0-41.808,0.56-41.808,39.024s0,47.392,0,47.392s81.392,0,81.68,0L386.56,425.544L386.56,425.544z M426.416,511.96L426.416,511.96
	L426.416,511.96L426.416,511.96z"/>
      <path d="M442.832,503.96l32.272-69.968c9.664,1.408,28.912,7.136,28.912,30.576v39.392H442.832z" />
      <path d="M479.712,443.096C487.376,445.4,496,451,496,464.568v31.392h-40.672L479.712,443.096 M470.192,425.544l-39.856,86.416l0,0
	H512c0,0,0-8.928,0-47.392S470.192,425.544,470.192,425.544L470.192,425.544z"/>
      <polygon points="428.368,425.544 399.664,425.544 428.368,489.096 457.088,425.544 " />
      <circle cx="83.632" cy="374.808" r="41.248" />
      <path d="M8,503.96v-39.392c0-23.44,19.248-29.168,28.912-30.576l32.272,69.968H8L8,503.96z" />
      <path d="M32.288,443.096l24.384,52.864H16v-31.392C16,451,24.624,445.4,32.288,443.096 M41.808,425.544
	c0,0-41.808,0.56-41.808,39.024s0,47.392,0,47.392s81.392,0,81.68,0L41.808,425.544L41.808,425.544z M81.68,511.96L81.68,511.96
	L81.68,511.96L81.68,511.96z"/>
      <path d="M98.08,503.96l32.272-69.968c9.664,1.408,28.912,7.136,28.912,30.576v39.392H98.08z" />
      <path d="M134.96,443.096c7.664,2.288,16.288,7.904,16.288,21.472v31.392h-40.672L134.96,443.096 M125.44,425.544L85.584,511.96l0,0
	h81.68c0,0,0-8.928,0-47.392S125.44,425.544,125.44,425.544L125.44,425.544z"/>
      <polygon points="83.632,425.544 54.912,425.544 83.632,489.096 112.336,425.544 " />
      <polygon points="436.368,301.544 420.368,301.544 420.368,264.04 91.632,264.04 91.632,301.544 75.632,301.544 75.632,248.04 
	436.368,248.04 "/>
      <rect x="249.952" y="210.36" width="16" height="52.944" />
      <g>
        <path d="M215.072,149.224L101.824,99.992V72.728L215.072,23.72v32.112L136.08,86.024l79.008,31.328v31.872
		H215.072z"/>
        <path d="M225.552,170.872L266.448,0.04h23.776l-41.36,170.832H225.552z" />
        <path d="M300.72,149.352v-31.888l79.104-31.104L300.72,55.608v-31.68l113.36,49.008v27.04L300.72,149.352z"
        />
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
    </svg>
)

const FrontEndIcon = () => (
  <svg
    className="w-10 h-10"
    fill="currentColor"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 496 496"
    enableBackground="new 0 0 496 496"
    xmlSpace="preserve"
  >
    <g>
      <g>
        <g>
          <path d="M371.352,192h-128v-64c0-44.112,35.888-80,80-80V32c-52.936,0-96,43.064-96,96v64h-160c-17.648,0-32,14.352-32,32v192
          c0,17.648,14.352,32,32,32h88v32h-16v16h160v-16h-16v-32h88c17.648,0,32-14.352,32-32V224C403.352,206.352,389,192,371.352,192z
          M267.352,480h-96v-32h96V480z M387.352,416c0,8.824-7.176,16-16,16h-304c-8.824,0-16-7.176-16-16v-16h336V416z M387.352,384
          h-336V224c0-8.824,7.176-16,16-16h160v16c0,27.936-14.416,52.536-36.176,66.848C182.808,270.432,162.744,256,139.352,256
          c-30.88,0-56,25.128-56,56s25.12,56,56,56s56-25.128,56-56c0-1.632-0.104-3.24-0.248-4.84
          c28.784-16.592,48.248-47.616,48.248-83.16v-16h128c8.824,0,16,7.176,16,16V384z M147.352,320
          c11.136,0,21.792-2.008,31.752-5.512c-1.32,20.88-18.552,37.512-39.752,37.512c-22.056,0-40-17.944-40-40
          c0-22.056,17.944-40,40-40c17.232,0,31.816,11.008,37.432,26.32c-9.12,3.624-19.032,5.68-29.432,5.68h-16v16H147.352z"/>
          <rect x="291.352" y="224" width="16" height="16" />
          <rect x="323.352" y="224" width="16" height="16" />
          <rect x="355.352" y="224" width="16" height="16" />
          <path d="M304.04,80h36.608l120-40l-120-40H304.04l40,40L304.04,80z M344.976,18.304L410.056,40l-65.08,21.696L366.664,40
          L344.976,18.304z"/>
          <path d="M275.352,352h80v-80h-80V352z M291.352,288h48v48h-48V288z" />
        </g>
      </g>
    </g>
  </svg>



)


export default function ClassicTab() {
  const [activeTab, setActiveTab] = useState(1);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const tabs = [
    {
      id: 1,
      name: 'Front-End Skills',
      icon: <FrontEndIcon />,
      color: 'from-pink-500 to-rose-500',
      content:
        'This is the PHOTOS tab content. Here you would display your photo gallery or image collection.',
    },
    {
      id: 2,
      name: 'Backend Skills',
      icon: <BackendIcon/>,
      color: 'from-purple-500 to-indigo-500',
      content:
        'This is the MUSIC tab content. Here you would display your music player or audio tracks.',
    },
    {
      id: 3,
      name: 'Other Skills',
      icon: '🎬',
      color: 'from-blue-500 to-cyan-500',
      content:
        'This is the VIDEOS tab content. Here you would display your video player or video collection.',
    },
  ];

  return (
    <div className='w-full max-w-3xl mx-auto'>
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
              : 'bg-white dark:bg-gray-800 shadow hover:shadow-md'
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
              <span className='font-medium tracking-wide text-center mt-2'>
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
          className={`relative overflow-hidden rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg border-t-4 border-gradient-to-r ${tabs.find((t) => t.id === activeTab)?.color}`}
        >
          <div className='absolute top-0 right-0 p-2 flex items-center justify-center'>
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

          <h3 className='text-xl font-bold mb-4 text-gray-800 dark:text-white'>
            {tabs.find((t) => t.id === activeTab)?.name}
          </h3>

          <div className='prose dark:prose-invert'>
            <p>{tabs.find((t) => t.id === activeTab)?.content}</p>
          </div>

          <div className='mt-6 text-center'>
            <button
              className={`px-4 py-2 rounded-full text-white bg-gradient-to-r ${tabs.find((t) => t.id === activeTab)?.color}`}
            >
              Explore {tabs.find((t) => t.id === activeTab)?.name}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
