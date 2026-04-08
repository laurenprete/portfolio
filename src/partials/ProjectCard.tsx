interface ProjectCardProps {
  image: string;
  title: string;
  tagline: string;
  techStack: string[];
  label: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  tagline,
  techStack,
  label,
  link,
}) => (
  <a
    href={link}
    className="group relative block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute top-3 right-3">
      <span className="bg-darkpurple/80 text-lightpurple text-xs font-medium px-2 py-1 rounded">
        {label}
      </span>
    </div>
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-darkpurple via-darkpurple/80 to-transparent p-4 pt-16">
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-300 text-sm mb-2">{tagline}</p>
      <div className="flex flex-wrap gap-1">
        {techStack.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-medpurple/60 text-lightpurple px-2 py-0.5 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </a>
);

export default ProjectCard;
