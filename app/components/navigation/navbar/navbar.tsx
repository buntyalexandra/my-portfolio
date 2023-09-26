import React from "react";
import Link from "next/link";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-20 bg-pink-900 sticky top-0 z-40 border-b-8 border-black">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={toggle}
            >
              {/* Menu icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex md:justify-between md:items-center gap-x-4 text-black">
              <li>
                <Link href="/">
                  <p className="hover:text-pink-100">Home</p>
                </Link>
              </li>
              <li>
                <p>⟡</p>
              </li>
              <li>
                <Link href="/web-development">
                  <p className="hover:text-pink-100 leading-none">
                    Web Development
                  </p>
                </Link>
              </li>
              <li>
                <p>⟡</p>
              </li>
              <li>
                <Link href="/graphic-design">
                  <p className="hover:text-pink-100 leading-none">
                    Graphic Design
                  </p>
                </Link>
              </li>
              <li>
                <p>⟡</p>
              </li>
              <li>
                <Link href="/multi-media-illustration">
                  <p className="hover:text-pink-100 leading-none">
                    Multi-Media Illustration
                  </p>
                </Link>
              </li>
              <li>
                <p>⟡</p>
              </li>
              <li>
                <Link href="/cakes">
                  <p className="hover:text-pink-100">Cakes</p>
                </Link>
              </li>
              <li>
                <p>⟡</p>
              </li>
              <li>
                <Link href="/about">
                  <p className="hover:text-pink-100">About</p>
                </Link>
              </li>
              <li>
                <p>⟡</p>
              </li>
              <li>
                <Link href="/contact">
                  <p className="hover:text-pink-100">Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
