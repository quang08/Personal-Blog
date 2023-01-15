import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Button from "./Button";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import avatar from "../public/profile.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button
          className="bg-gray-200 md:float-right dark:bg-neutral-800"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button
          className="align-middle md:float-right"
          onClick={() => setTheme("dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      );
    }
  };

  return (
    <div className="sticky top-0 z-50 md:static container mx-auto px-10 md:mb-4 mt-10 md:mt-0 opacity-100">
      <div className="md:border-b w-full inline-block border-gray-400 md:py-6 py-2 md:flex justify-between items-center">
        <div className="flex md:float-left block mb-10 md:mb-0 hidden md:inline-flex">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl">The Quang</span>
          </Link>
        </div>

        <div className="md:float-left md:invisible visible text-lg md:py-0 flex justify-between align-center align-middle">
          <div>
            <Link href="/">
              <Image
                alt="Profile"
                className="inline rounded-full"
                width={45}
                height={45}
                src={avatar}
              />
            </Link>
          </div>

          <div className="p-1 flex align-center align-middle gap-3">
            <span className="pt-[1px]">{renderThemeChanger()}</span>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="dark:bg-neutral-800 dark:text-white inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition duration-300 hover:ring-2 hover:ring-teal-400">
                  Menu
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="dark:bg-neutral-800 absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/about"
                          className={classNames(
                            active ? "text-gray-900" : "text-gray-700",
                            "block px-4 py-2 text-sm dark:text-white transition duration-300 hover:text-teal-400 dark:hover:text-teal-400 dark:hover:bg-neutral-700 hover:bg-gray-100"
                          )}
                        >
                          About
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/project"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm dark:text-white transition duration-300 hover:text-teal-400 dark:hover:text-teal-400 dark:hover:bg-neutral-700 hover:bg-gray-100"
                          )}
                        >
                          Projects
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm dark:text-white transition duration-300 hover:text-teal-400 dark:hover:text-teal-400 dark:hover:bg-neutral-700 hover:bg-gray-100"
                          )}
                        >
                          Articles
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        <div className="md:visible invisible text-lg">
          <div className="flex items-center">
            <Link href="/project">
              <span className="md:float-right  align-middle text-black dark:text-white md:ml-10 font-semibold cursor-pointer transition duration-300 hover:text-teal-400 dark:hover:text-teal-400 ">
                Projects
              </span>
            </Link>
            <Link href="/about">
              <span className="md:float-right  align-middle text-black ml-3 mr-3 dark:text-white font-semibold cursor-pointer transition duration-300 hover:text-teal-400 dark:hover:text-teal-400">
                About
              </span>
            </Link>
            <Link href="/">
              <span className="md:float-right  align-middle text-black dark:text-white md:mr-3 font-semibold cursor-pointer transition duration-300 hover:text-teal-400 dark:hover:text-teal-400">
                Articles
              </span>
            </Link>
            <span className="">{renderThemeChanger()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
