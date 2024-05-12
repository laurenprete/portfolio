const skills = [
  'C#',
  'JavaScript',
  'TypeScript',
  'Java',
  'Python',
  'Angular',
  'React',
  'SQL',
  'Docker',
  'DevOps',
  'AWS',
  'Azure',
];
const Hero = () => (
  <div>
    <div className="flex items-center justify-center text-lg text-gray-200">
      <div className="w-3/5 text-justify">
        <h1 className="mb-4 text-4xl font-bold text-lightpurple">
          Hi, I'm <span>Lauren.</span>
        </h1>
        <p className="py-2">
          I'm a{' '}
          <span className="font-semibold text-white">
            full-stack software engineer
          </span>{' '}
          with 8 years of experience. I specialize in{' '}
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
          Want to get in touch? You can read my{' '}
          <a
            className="font-semibold text-lightblue"
            target="_blank"
            href="assets/docs/LaurenPrete_Resume2024.pdf"
          >
            resume
          </a>
          , find me on{' '}
          <a
            className="font-semibold text-lightblue"
            target="_blank"
            href="https://www.linkedin.com/in/lauren-prete-756038139/"
          >
            LinkedIn
          </a>
          , or hire me on{' '}
          <a
            className="font-semibold text-lightblue"
            target="_blank"
            href="https://www.upwork.com/freelancers/~01283d68d4c0f7353f?mp_source=share"
          >
            Upwork
          </a>
          .
        </p>
      </div>
      <div className="w-2/5 px-10">
        <img
          src="assets/images/lauren.jpg"
          alt="Lauren"
          className="img-shadow w-48 rounded-full border-4 border-lightpurple object-cover shadow-2xl"
        />
      </div>
    </div>
    <div>
      <h2 className="my-4 text-3xl font-bold text-lightpurple">
        Technologies & Skills
      </h2>
      <div>
        {skills.map((skill, index) => (
          <span
            className="mx-1 inline-flex items-center rounded-md bg-purple-100 px-2 py-1 font-medium text-medpurple"
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
