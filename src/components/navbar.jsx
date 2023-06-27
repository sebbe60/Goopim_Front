import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { setAuthState } from "@/store/slices/authSlice";
const navigation = [
  /*  { name: "Providers", href: "/" }, */
  { name: "Messages", href: "/message" },
  { name: "Profile", href: "/myprofile" },
  { name: "Projects", href: "/myprojects" },
  { name: "Finance", href: "/finance" },
  { name: "Contract", href: "/contract" },
];

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Check if user is logged in by checking if there's a token in localStorage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    dispatch(setAuthState(!!token));
  }, [router]);

  const handleLogout = () => {
    // Remove token from localStorage and redirect to homepage
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    dispatch(setAuthState(false));
    router.push("/");
  };

  return (
    <header className="top-0 h-12">
      <nav
        /* className="flex items-center justify-between p-6 lg:px-8 fixed top-0 w-full z-50 bg-inherit shadow" */
        href="/landingpage"
        className={`text-sm font-semibold leading-6 cursor-pointer ${
          router.pathname === "/landingpage"
            ? "flex items-center justify-between p-6 lg:px-8 fixed top-0 w-full z-50 bg-inherit shadow"
            : "flex items-center justify-between p-6 lg:px-8 fixed top-0 w-full z-50 bg-[#ffffff] shadow"
        }`}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 cursor-pointer">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div
          className="hidden lg:flex lg:gap-x-12"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Link
            href="/"
            className={`text-sm font-semibold leading-6 cursor-pointer ${
              router.pathname === "/"
                ? "text-[#fd5b1c] border-b-2 border-[#fd5b1c]"
                : "text-black"
            }`}
          >
            Provider
          </Link>
          {isLoggedIn &&
            navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 cursor-pointer ${
                  router.pathname === item.href
                    ? "text-[#fd5b1c] border-b-2 border-[#fd5b1c]"
                    : "text-black"
                }`}
              >
                {item.name}
              </Link>
            ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!isLoggedIn && (
            <Link
              href="/login"
              className={`text-sm font-semibold leading-6 rounded px-1 py-1 cursor-pointer bg-white ${
                router.pathname === "/login"
                  ? "text-black border-b-2 border-[#fd5b1c]"
                  : "text-black"
              }`}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
          {isLoggedIn && (
            <button
              className="inline-block rounded bg-secondary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#272727] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto cursor-pointer"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 cursor-pointer ${
                    router.pathname === "/"
                      ? "text-[#fd5b1c] border-b-2 border-[#fd5b1c]"
                      : "text-black"
                  }`}
                >
                  Provider
                </Link>
                {isLoggedIn &&
                  navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => closeMobileMenu()}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 cursor-pointer ${
                        router.pathname === item.href
                          ? "text-[#fd5b1c] border-b-2 border-[#fd5b1c]"
                          : "text-black"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
              </div>
              <div className="py-6">
                {!isLoggedIn && (
                  <Link
                    href="/login"
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 cursor-pointer ${
                      router.pathname === "/login"
                        ? "text-black border-b-2 border-[#fd5b1c]"
                        : "text-black"
                    }`}
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
                )}
                {isLoggedIn && (
                  <button
                    className="inline-block rounded bg-secondary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
