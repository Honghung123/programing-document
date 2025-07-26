import { navigation } from "../../router/routes";

export default function Navbar() {
    return (
        <div className="bg-white dark:bg-gray-800 flex justify-center items-center mb-4">
            <div className="border shadow-teal-300 shadow-md max-w-2xl rounded-lg dark:bg-gray-700 p-1 dark:text-gray-300">
                <div className="w-full max-w-screen-xl mx-auto">
                    <ul className="flex flex-wrap gap-2 md:gap-5 lg: lg:gap-8">
                        {navigation.map((nav, index) => (
                            <li key={index}>
                                <a
                                    href={nav.href}
                                    className="text-gray-700 hover:bg-gray-50 border-gray-100 md:hover:bg-transparent md:border-0 block md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-gray-700 dark:md:hover:text-blue-700"
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
