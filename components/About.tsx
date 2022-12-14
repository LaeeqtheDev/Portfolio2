import { motion} from 'framer-motion'
import React from 'react'
import Image from 'next/image'

interface Props {
    
}

export const About = (props: Props) => {
    return (
        <motion.div 
        initial={{opacity: 1}}
        whileInView={{opacity: 1.5}}
        transition={{duration: 1.5}}
        
        
        className=' flex flex-col relative h-screen text-center md:text-left md:flex flex-row max-w-7xl px-18 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        
        <motion.img 
        initial={{
            x: -200,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        
        className='-mb-20 md:mb-0 flex flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[800px] xl:h-[399px]'
        src='/about.png' alt='about'
       
        />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a {""}
                    <span className='underline decoration-[#F7AB0A]/50' >little</span>{""} background
                </h4>
                <p className='text-sm'>
                I am Laeeq!, here's little bit about me... I've been coding for over 4 years now. As a Frontend Developer I've worked with startups to help build
                & scale their compaines. I have cloned most of applications you have used in your daily life. All of them can be seen and used through my Github.
                I since childhood had been profond of computer and tech, I with my team is capable of working on advanced and complex algorithm delivering projects on time.
                Oh did i mention? I can teach aswell.

                </p>
            </div>
        </motion.div>
    )
}
