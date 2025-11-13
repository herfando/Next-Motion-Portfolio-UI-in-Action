import image from 'next/image';
import Image from 'next/image';
import { JSX } from 'react';


export interface SkillItem {
  name: string;
  image: JSX.Element;
  description: string;
  percentage: number;
}

export const skillData: SkillItem[] = [
  {
    name: 'HTML',
    image: (
      <Image
        src='/images/08_html.png'
        alt='html icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description: 'Building the structure of web pages with semantic markup for accessibility.',
    percentage: 90,
  },
  {
    name: 'CSS',
    image: (
      <Image
        src='/images/06_css.png'
        alt='css icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description: 'Building the structure of web pages with semantic markup for accessibility.',
    percentage: 90,
  },
  {
    name: 'Javascript',
    image: (
      <Image
        src='/images/07_js.png'
        alt='javascript icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description: 'Building the structure of web pages with semantic markup for accessibility.',
    percentage: 90,
  },
  {
    name: 'React JS',
    image: (
      <Image
        src='/images/12_reactjs.png'
        alt='react icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description: 'Building the structure of web pages with semantic markup for accessibility.',
    percentage: 90,
  },
  {
    name: 'Mongo DB',
    image: (
      <Image
        src='/images/15_mongoDB.png'
        alt='mongodb icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description: 'Building the structure of web pages with semantic markup for accessibility.',
    percentage: 90,
  },
  {
    name: 'Docker',
    image: (
      <Image
        src='/images/13_docker.png'
        alt='docker icon'
        width={23.33}
        height={23.33}
        className='w-23.33 h-23.33'
      />
    ),
    description: 'Building the structure of web pages with semantic markup for accessibility.',
    percentage: 90,
  },
];