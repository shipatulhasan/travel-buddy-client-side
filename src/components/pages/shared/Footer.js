import React from 'react';

const Footer = () => {
    return (
        <div className="relative mt-16 bg-gray-800">
      
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-slate-300"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-slate-100 uppercase">
                Company
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-slate-100">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm text-slate-100">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-slate-100">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    References
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-slate-100">
                Cherry
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-slate-100">
                Apples
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    Educational
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-slate-100">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    Infopreneur
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-slate-100 hover:text-slate-300"
                  >
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          
          </div>
        </div>
      </div>
    </div>
    );
};

export default Footer;