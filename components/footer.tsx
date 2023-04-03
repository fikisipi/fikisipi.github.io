let social: any[];

export function Footer() {
    return (
      <footer className="">
        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flex justify-center space-x-6 text-indigo-200">
            <a className="px-3" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block align-middle w-3 h-3 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
              Go to top
            </a>
            {null &&
              social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} @fikisipi
          </p>
        </div>
      </footer>
    );
  }