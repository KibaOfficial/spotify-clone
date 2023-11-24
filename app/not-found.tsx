// Copyright (c) 2023 KibaOfficial
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200">
      <div className="text-center text-black">
        <h1 className="text-5xl font-bold mb-4">404s and Heartbreaks</h1>
        <h2 className="text-2xl mb-2">Uh-oh! Looks like you&apos;re lost.</h2>
        <p className="text-lg mb-8">
          We couldn&apos;t find the page you were looking for.
        </p>
        {/* Use Link with legacyBehavior */}
        <Link href="/" legacyBehavior>
          <a className="text-black hover:underline uppercase">Go back</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
