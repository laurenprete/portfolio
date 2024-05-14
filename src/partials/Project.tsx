interface ProjectProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Project: React.FC<ProjectProps> = ({ image, title, description, link }) => (
  <div className="border rounded-lg shadow-md overflow-hidden flex flex-col">
    <img src={image} alt={title} className="w-full h-48 object-cover"/>
    <div className="p-4 h-60">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-200 mb-4">{description}</p>
    </div>
    <div className="p-4 justify-self-end">
    <a href={link} className="text-lightpurple font-bold" target={link.includes("github.com") ? "_blank" : ""}>
          {link.includes("github.com") ? "View on Github" : "Read more"}</a>
    </div>
  </div>
);

export default Project;