module.exports = {
  siteTitle: 'Sihan Tawsik | Backend Engineer',
  siteDescription:
    'Sihan Tawsik is a backend engineer based in Dhaka, Bangladesh who specializes in building websites and web applications.',
  siteKeywords:
    'Sihan Tawsik, Sihan, Tawsik, sihan-tawsik, web engineer, backend engineer, web developer, javascript, python',
  siteUrl: 'https://sihantawsik.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Sihan Tawsik',
  location: 'Dhaka, Bangladesh',
  email: 'sihantawsik@gmail.com',
  github: 'https://github.com/sihan-tawsik',
  twitterHandle: '@bchiang7',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/sihan-tawsik',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/sihan-tawsik',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/SihanTawsik',
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

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

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
