import Project from "./Project";

const projects = [
  {
    image: '/assets/images/projects/5sq.png',
    title: '5Squares Meal Delivery',
    description: '5Squares is a meal delivery platform for people who need healthy prepared meals delivered to their door. \
    This project involved creating a comprehensive admin backend to streamline the management of orders, customers, recipes, and more.',
    link: '/projects/5squares/',
  },
  {
    image: '/assets/images/projects/NAILanding.png',
    title: 'NAI SEO Landing Pages',
    description: 'I designed and developed dedicated landing pages for product lines with identified growth opportunities based on keyword research. \
    The pages are visually appealing, accessible, and load quickly on both desktop and mobile devices.',
    link: '/projects/nai-landing-pages/',
  },
  {
    image: '/assets/images/projects/youarehere.webp',
    title: 'Portfolio',
    description: 'The website you\'re on right now! It\'s nothing too crazy. Built with React, TypeScript, Astro, and Tailwind CSS.',
    link: "https://github.com/laurenprete/portfolio"
  },
];

const ProjectList: React.FC = () => (
  <div>
    <h2 className="my-6 text-3xl font-bold text-lightpurple">Projects</h2>
    <p className="mb-6">
    I currently work for North Atlantic Industries, an independent company creating embedded computing products for industrial, aerospace, and defense applications. 
    My team is awesome and it's a great place to work! Unfortunately, I am unable to share most of my projects there publicly. Below you'll find my side projects 
    or things I can share. I'm still working on updating this section with projects.
    </p>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Project
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  </div>
);

export { ProjectList };