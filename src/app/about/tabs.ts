export const TABS = [
  {
    default: true,
    label: 'Hello',
    title: 'Hi, I\'m Ray!',
    picture: { path: './assets/img/me.jpeg', alt: 'Me' },
    content1: `I am a software engineer that enjoys crafting solutions using technology.`,
    content2: `Based in Seattle, WA, I enjoy working as a full stack developer
      and exploring new technologies.`
  },
  {
    default: false,
    label: 'Skills',
    title: 'Things I\'ve Used',
    picture: { path: './assets/img/code.jpg', alt: 'Skills' },
    list: [
      {
        item: 'Languages: C/C++, VBA, T-SQL, HTML, CSS, TypeScript, JavaScript, Python',
        icon: 'language'
      },
      {
        item: 'Databases: MS SQL Server, MySQL',
        icon: 'database' },
      {
        item: 'Tools: AWS, Git, Docker, Trello, MS Access, Slurm, MPI, WordPress',
        icon: 'glasses' },
      {
        item: 'Stacks: MEAN, LAMP, WAMP',
        icon: 'bars'
      },
      {
        item: 'Platforms: Linux, Windows, Mac',
        icon: 'laptop'
      }
    ]
  },
  {
    default: false,
    label: 'Hobbies',
    title: 'What I do for fun',
    picture: { path: './assets/img/rukia.jpg', alt: 'Hobbies' },
    list: [
      { item: 'All things coffee', icon: 'coffee' },
      { item: 'Playing video games and watching anime', icon: 'tv' },
      { item: 'Trumpeting', icon: 'music' },
      { item: 'Relaxing with our cat Rukia', icon: 'cat' }
    ]
  }
];
