const skills = [
  'C#',
  '.NET',
  'TypeScript',
  'Java',
  'Angular',
  'React',
  'Next.js',
  'Astro',
  'Tailwind CSS',
  'Hono',
  'SQL',
  'Docker',
  'CI/CD',
  'AWS',
];
const Hero = () => (
  <div>
    <div className="flex flex-col items-center justify-center text-gray-200 lg:flex-row lg:text-lg">
      <div className="lg:w-3/5 lg:text-justify">
        <h1 className="mb-4 text-3xl font-bold text-lightpurple lg:text-4xl">
          Hi, I'm <span>Lauren.</span>
        </h1>
        <p className="py-2">
          I'm a{' '}
          <span className="font-semibold text-white">
            full-stack software engineer{' '}
          </span>
          with nearly a decade of experience. I specialize in{' '}
          <span className="font-semibold text-white">
            web application and web API development
          </span>
          , but I dabble to varying degrees in the worlds of desktop, mobile,
          and embedded as well.
        </p>
        <p className="py-2">
          Software engineering is my passion. I take pride and joy in building{' '}
          <span className="font-semibold text-white">scalable solutions</span>{' '}
          that perform well across all levels of complexity and use. I love
          working{' '}
          <span className="font-semibold text-white">directly with users</span>{' '}
          to create something that solves their problems. I also have a knack
          for the "soft skills," like gathering requirements, effectively
          conveying technical information, and managing projects and roadmaps.
        </p>
        <p className="py-2">
          I'm a Software Engineer Lead at{' '}
          <span className="font-semibold text-white">
            North Atlantic Industries
          </span>
          , where I build internal tools and automation for embedded computing
          products in the aerospace and defense space. I also run{' '}
          <a
            className="font-semibold text-lightblue"
            target="_blank"
            href="https://briarwoodsoftware.com"
          >
            Briarwood Software
          </a>
          , a consulting firm where I build custom web applications and software
          integrations for clients across e-commerce, education, and service
          industries.
        </p>
        <p className="py-2">
          Want to get in touch? You can read my{' '}
          <a
            className="font-semibold text-lightblue"
            target="_blank"
            href="assets/docs/LaurenPrete_Resume2026.pdf"
          >
            resume
          </a>
          , find me on{' '}
          <a
            className="font-semibold text-lightblue"
            target="_blank"
            href="https://www.linkedin.com/in/lauren-dev/"
          >
            LinkedIn
          </a>
          , or email me at{' '}
          <a
            className="font-semibold text-lightblue"
            href="mailto:hello@laurenprete.com"
          >
            hello@laurenprete.com
          </a>
        </p>
      </div>
      <div className="order-first mb-6 flex items-center justify-center px-10 md:mb-10 lg:order-last lg:mb-0 lg:w-2/5">
        <img
          src="assets/images/lauren.jpg"
          alt="Lauren"
          className="img-shadow w-28 rounded-full border-2 border-lightpurple object-cover md:w-36 lg:w-48"
        />
      </div>
    </div>
    <div>
      <h2 className="my-4 text-2xl font-bold text-lightpurple lg:text-3xl">
        Languages & Tools
      </h2>
      <div>
        {skills.map((skill, index) => (
          <span
            className="m-1 inline-flex items-center rounded-md bg-purple-100 px-2 py-1 font-medium text-medpurple"
            key={index}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export { Hero };
