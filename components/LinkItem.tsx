import Link from 'next/link';

export default function LinkItem({ URL, displayName }) {
  return (
    <li className="ml-4">
      <Link href={URL}>
        <a className="text-base font-medium text-gray-500 hover:text-gray-900">
          {displayName}
        </a>
      </Link>
    </li>
  );
}
