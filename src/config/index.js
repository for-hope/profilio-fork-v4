module.exports = {
  siteTitle: 'Lamine Fetni | CS Student',
  siteDescription:
    'Lamine Fetni is a CS Student enrolled in a masters class based in Constantine, DZ who specializes in developing (and occasionally designing) high-quality websites and applications.',
  siteKeywords: 'Lamine Fetni, Resume, Android, Mobile Developer, web developer, javascript',
  siteUrl: 'https://lamine.me',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'todo',
  googleVerification: 'todo',
  name: 'Lamine Fetni',
  location: 'Algiers, DZ',
  email: 'mlaminefetni@gmail.com',
  github: 'https://github.com/for-hope',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/for-hope',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
