interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Income Tax Refund Portal',
    description: `ITR login, income tax login, ITR refund login, income tax return login, ITR portal access, refund tracking, and seamless tax management.`,
    imgSrc: '/static/images/project-portal-itr-thumbnail.png',
    href: 'https://www.portal.incometaxrefunds.in/',
  },
  {
    title: 'Income Tax Refund Starter',
    description: `File Income Tax Refund (ITR-1, ITR-2), ITR Registration, Govt. Notice Resolution, Aadhar & PAN Link, & 24/7 online support.`,
    imgSrc: '/static/images/project-incometaxrefunds-starter-thumbnail.png',
    href: 'https://www.incometaxrefunds.in/',
  },
  {
    title: 'Portfolio',
    description: `Hello, I'm Vishal. I'm a freelance full-stack specialist with 1 years of experience. I enjoy building sites & apps. My focus is React (Next.js).`,
    imgSrc: '/static/images/project-vishal-portfolio-thumbnail.png',
    href: 'https://vishal-portfolio-dev.vercel.app/',
  },
]

export default projectsData
