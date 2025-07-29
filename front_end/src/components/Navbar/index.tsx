import { navigation } from "../../router/routes";

export default function Navbar() {
  // Get the current path
  const currentPath = window.location.pathname;
  const activeLinkClassName = "font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text";
  const hoverLinkClassName =
    "hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-transparent hover:bg-clip-text";
  return (
    <div className="bg-white dark:bg-gray-800 flex justify-center items-center mb-4">
      <div className="border shadow-teal-300 shadow-md max-w-2xl rounded-lg dark:bg-gray-700 p-1 dark:text-gray-300">
        <div className="w-full max-w-screen-xl mx-auto">
          <ul className="flex flex-wrap gap-2 md:gap-5 lg: lg:gap-8">
            {navigation.map((nav, index) => (
              <li key={index}>
                <a
                  href={nav.href == currentPath ? undefined : nav.href}
                  className={`text-gray-700 ${currentPath === nav.href ? activeLinkClassName : hoverLinkClassName}`}
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
