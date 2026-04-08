import ProjectCard from './ProjectCard';

const projects = [
  {
    image: '/assets/images/projects/gorgon-hero.png',
    title: 'GorgonExplorer',
    tagline: 'Interactive game data explorer for Project: Gorgon MMO',
    techStack: ['React', 'TypeScript', 'Hono', 'DynamoDB', 'Lambda'],
    label: 'Game Tool',
    link: '/projects/gorgon-explorer/',
  },
  {
    image: '/assets/images/projects/leagues-hero.png',
    title: 'Leagues Advisor',
    tagline: 'Task planner and progress tracker for OSRS Leagues',
    techStack: ['React', 'Java', 'RuneLite', 'AWS'],
    label: 'Game Tool',
    link: '/projects/leagues-advisor/',
  },
  {
    image: '/assets/images/projects/gravmagnet-hero.png',
    title: 'GravMagnet',
    tagline: 'Lead generation and CRM platform for service businesses',
    techStack: ['.NET 8', 'Angular', 'MySQL', 'AWS'],
    label: 'Client Work',
    link: '/projects/gravmagnet/',
  },
  {
    image: '/assets/images/projects/starstuff-hero.png',
    title: 'StarStuff Photos',
    tagline: 'Photography portfolio and fine art print store',
    techStack: ['Next.js', 'Prisma', 'Stripe', 'AWS'],
    label: 'Client Work',
    link: '/projects/starstuff-photos/',
  },
  {
    image: '/assets/images/projects/ikim-hero.png',
    title: 'IKIM MIT',
    tagline: 'Custom WordPress platform for MIT manufacturing research',
    techStack: ['WordPress', 'PHP', 'Gutenberg', 'AWS S3'],
    label: 'MIT',
    link: '/projects/ikim-mit/',
  },
];

const ProjectList: React.FC = () => (
  <div>
    <h2 className="my-6 text-3xl font-bold text-lightpurple">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
);

export { ProjectList };
