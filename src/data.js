import tourImage_1 from './images/tour-1.jpeg'
import tourImage_2 from './images/tour-2.jpeg'
import tourImage_3 from './images/tour-3.jpeg'
import tourImage_4 from './images/tour-4.jpeg'

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',
  },
]

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.linkedin.com',
    icon: 'fab fa-linkedin',
  },
  {
    id: 3,
    href: 'https://www.youtube.com',
    icon: 'fab fa-youtube',
  },
  {
    id: 4,
    href: 'https://www.twitter.com',
    icon: 'fab fa-twitter',
  },
]
export const serviceData = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
  },

  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
  },
]

export const tours = [
  {
    id: 1,
    image: tourImage_1,
    date: 'august 26th, 2024',
    title: 'Tibet Adventure',
    location: 'tibet',
    duration: 6,
    cost: 2100,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    image: tourImage_2,
    date: 'october 1th, 2024',
    title: 'best of java',
    location: 'indonesia',
    duration: 11,
    cost: 1400,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    image: tourImage_3,
    date: 'september 15th, 2024',
    title: 'explore hong kong',
    location: 'hong kong',
    duration: 8,
    cost: 5000,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 4,
    image: tourImage_4,
    date: 'december 5th, 2024',
    title: 'kenya highlights',
    location: 'kenya',
    duration: 20,
    cost: 3300,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
]
