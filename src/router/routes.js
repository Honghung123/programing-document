import React from "react";
import DevopsPage from "../pages/DevopsPage";
import DocumentPage from "../pages/DocumentPage";

export const routes = [
    // User routes
    {
        path: "/devops",
        title: "Devops",
        element: <DevopsPage />,
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
