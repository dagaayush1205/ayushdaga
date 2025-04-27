// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'dagaayush1205', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['dagaayush1205/baahubali', 'dagaayush1205/tarzan'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Baahubali',
          description:
            'Software system for simulating a 6-DoF robotic arm with real-time visualization and inverse kinematics. Utilizes MATLAB and SolidWorks to model kinematics, validate joint limits, and refine motion trajectories. Implements analytical IK algorithms to achieve precise end-effector control and realistic movement coordination. Designed for seamless transition to physical hardware implementation.',
          imageUrl:
            '',
          link: 'https://github.com/dagaayush1205/baahubali',
        },
        {
          title: 'Tarzan',
          description:
            'Zephyr Project to design control system for Rudra\'s R25 rover using STM32 Nucleo H7a3zi_q.',
          imageUrl:'',
          link: 'https://github.com/dagaayush1205/tarzan',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ayush Daga',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'dagaayush1205',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'ayushdagaa',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://ayushdaga-portfolio.vercel.app/',
    phone: '9811206735',
    email: 'dagaayush1205@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/drive/u/2/folders/1KkpxrgpdJ-TQ0AiLrqvTz6iuwNvKcSjA', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Git',
    'shell',
    'zephyr',
    'embedded systems',
    'MATLAB',
    'p5js',
    'typst'
  ],
  experiences: [
    {
      company: 'Team Rudra - SRM MARS ROVER',
      position: 'Embedded Systems Developer',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'https://srmrudra.com',
    },
    {
      company: 'Samsung PRISM',
      position: '',
      from: 'January 2025',
      to: 'Present',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'SRM Institute of Science and Technology, Kattankulathur',
      degree: 'B.Tech',
      from: '2023',
      to: '2027',
    },
    {
      institution: 'Delhi Public School, R.K. Puram',
      degree: 'CBSE-XII',
      from: '',
      to: '2023',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.

  enablePWA: true,
};

export default CONFIG;
