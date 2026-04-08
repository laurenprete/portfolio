import ProjectCard from './ProjectCard';

const clientWork = [
  {
    image: '/assets/images/projects/ikim-hero.png',
    title: 'IKIM MIT',
    tagline: 'Custom WordPress platform for MIT manufacturing research',
    techStack: ['WordPress', 'PHP', 'Gutenberg', 'AWS S3'],
    link: '/projects/ikim-mit/',
  },
  {
    image: '/assets/images/projects/starstuff-hero.png',
    title: 'StarStuff Photos',
    tagline: 'Photography portfolio and fine art print store',
    techStack: ['Next.js', 'Prisma', 'Stripe', 'AWS'],
    link: '/projects/starstuff-photos/',
    imagePosition: 'object-center',
  },
  {
    image: '/assets/images/projects/gravmagnet-hero.png',
    title: 'GravMagnet',
    tagline: 'Lead generation and CRM platform for service businesses',
    techStack: ['.NET 8', 'Angular', 'MySQL', 'AWS'],
    link: '/projects/gravmagnet/',
  },
  {
    image: '/assets/images/projects/inkdex-hero.png',
    title: 'GPI InkDex',
    tagline: 'AI-powered SEO audit and content generation for Shopify',
    techStack: ['Next.js', 'Claude API', 'Shopify GraphQL', 'AWS'],
    link: '/projects/inkdex/',
  },
];

const sideProjects = [
  {
    image: '/assets/images/projects/gorgon-hero.png',
    title: 'GorgonExplorer',
    tagline: 'Build planner and game data explorer for Project: Gorgon MMO',
    techStack: ['React', 'TypeScript', 'Hono', 'DynamoDB', 'Lambda'],
    link: '/projects/gorgon-explorer/',
  },
  {
    image: '/assets/images/projects/leagues-hero.png',
    title: 'Leagues Advisor',
    tagline: 'Task planner and progress tracker for OSRS Leagues',
    techStack: ['React', 'Java', 'RuneLite', 'AWS'],
    link: '/projects/leagues-advisor/',
  },
  {
    image: '/assets/images/projects/status-hero.png',
    title: 'Briarwood Status',
    tagline: 'Serverless uptime monitoring and alerting platform',
    techStack: ['React', 'Hono', 'Lambda', 'DynamoDB', 'CDK'],
    link: '/projects/briarwood-status/',
  },
];

const ProjectList: React.FC = () => (
  <div>
    <h2 className="mt-10 mb-6 text-3xl font-bold text-lightpurple">Client Work</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {clientWork.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>

    <h2 className="mt-10 mb-6 text-3xl font-bold text-lightpurple">Side Projects</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {sideProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </div>
);

export { ProjectList };
