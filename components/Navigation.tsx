import Link from 'next/link';
import { useState } from 'react';

import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

import LinkItem from './LinkItem';

export default function Navigation({ links }) {
  const [toggled, setClick] = useState(false);

  const toggleNav = () => {
    setClick(!toggled);
  };
  return (
    <div>
      <nav className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a className="flex items-center">
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="/zeal-logo.svg"
                    alt="zeal logo"
                  />
                  <span className="text-blue-600 font-medium font-sans">
                    Zeal Blog
                  </span>
                </a>
              </Link>
            </div>
            <ul className="flex invisible md:visible">
              {links.map((link) => {
                return (
                  <LinkItem
                    key={link.fields.codeId}
                    URL={link.fields.url}
                    displayName={link.fields.externalName}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="bg-white overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div className="flex justify-items-center">
              <Link href="/">
                <a className="flex items-center">
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="/zeal-logo.svg"
                    alt="zeal logo"
                  />
                  <span className="text-blue-600 font-medium font-sans">
                    Zeal Blog
                  </span>
                </a>
              </Link>
            </div>
            <div className="-mr-2" onClick={toggleNav}>
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close main menu</span>
                {toggled ? (
                  <ClearRoundedIcon fontSize="large" />
                ) : (
                  <MenuOpenRoundedIcon fontSize="large" />
                )}
              </button>
            </div>
          </div>
          {toggled ? (
            <div className="px-2 pt-2 pb-3 space-y-1">
              <ul className="flex-col justify-end">
                {links.map((link) => {
                  return (
                    <LinkItem
                      key={link.fields.codeId}
                      URL={link.fields.url}
                      displayName={link.fields.externalName}
                    />
                  );
                })}
              </ul>
            </div>
          ) : (
            <div className="hidden px-2 pt-2 pb-3 space-y-1">
              <ul className="flex-col">
                {links.map((link) => {
                  return (
                    <LinkItem
                      key={link.fields.codeId}
                      URL={link.fields.url}
                      displayName={link.fields.externalName}
                    />
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
