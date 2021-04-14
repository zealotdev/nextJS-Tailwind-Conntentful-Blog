import LinkItem from './LinkItem';
import Link from 'next/link';
export default function Navigation({ links }) {
  return (
    <nav className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex items-center">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/zeal-logo.svg"
                  alt="zeal"
                />
                <small className="text-blue-600 font-medium">Zeal Blog</small>
              </a>
            </Link>
          </div>
          <ul className="flex">
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
  );
}
