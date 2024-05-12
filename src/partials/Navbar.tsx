const navigation = [
  { name: 'Homepage', href: '/' },
  { name: 'Blog', href: '/posts/' },
];

const Navbar = () => (
  <header className="bg-purple-950 text-gray-200">
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <a href="/" className="-m-1.5 p-1.5">
        <span className="sr-only">
          Lauren Prete - Software Engineering Professional
        </span>
      </a>
      <div className="lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-gray-200"
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  </header>
);

export { Navbar };
