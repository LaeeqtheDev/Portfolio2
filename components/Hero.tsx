import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import pp from '../public/pp.jpg'
import Link from 'next/link';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [
          `Hi, The Name's Syed Laeeq Ahmed`,
                "Guy-who-loves-Anime.tsx",
                "<ButLovesToCodeMore/>"
    ],
    loop: true,
    delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
<Image className='relative rounded-full mx-auto object-cover' src='/pp.jpg' alt='' width='132px' height='132px' />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A'/>
        </h1>

        <div className='pt-5'>
        
        <Link href='#about'>
        <button className='heroButton'>About</button>
        </Link>
        
        
        <Link href='#skills'>
        <button className='heroButton'>Skills</button>
        </Link>

       

        <Link href='#projects'>
        <button className='heroButton'>Projects</button>
        </Link >
        </div>
        </div>
    </div>
  )
}

