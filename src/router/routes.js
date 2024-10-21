import React from "react";
import HomePage from "../pages/HomePage";
import DocumentPage from "../pages/DocumentPage";

export const routes = [
    // User routes
    {
        path: "/home",
        title: "Home",
        element: <HomePage />,
        children: [],
    },
    {
        path: "/",
        title: "Documents",
        element: <DocumentPage />,
        children: [],
    },
];

export const navigation = routes.map((route) => {
    return {
        name: route.title,
        href: route.path,
    };
});
