"use client"; // Ensure this is a client component

import { useRouter } from 'next/navigation';
import Link from 'next/link';

function PostItem({ id, title }) {
    return (
        <li className='flex flex-row gap-2 space-y-1 items-baseline'>
            <h1>{id}</h1>
            <Link href={`/post/${id}`} className="text-blue-500 hover:underline">
                {title}
            </Link>
        </li>
    );
}

export default PostItem;
