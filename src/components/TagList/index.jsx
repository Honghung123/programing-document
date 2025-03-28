import React, { useEffect, useState } from "react";

export default function TagList({ fileList, handleClick }) {
    return (
        <ul className="flex flex-wrap gap-2 sm:gap-4 justify-center items-center">
            {fileList.map((file) => (
                <li
                    key={file.name}
                    onClick={() => handleClick(file)}
                    className="cursor-pointer border-2 rounded-md hover:bg-gray-200 transition duration-300 flex items-center gap-2"
                >
                    <p className="text-xs px-2 py-1 sm:text-sm lg:text-lg font-semibold text-gradient first-letter:capitalize">
                        {file.name}
                    </p>
                </li>
            ))}
        </ul>
    );
}
