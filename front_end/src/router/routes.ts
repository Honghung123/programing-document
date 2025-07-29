import React from "react";
import DevopsPage from "../pages/DevopsPage";
import DocumentPage from "../pages/DocumentPage";
import LearnEnglishPage from "../pages/LearnEnglishPage";

export type RouteType = {
    path: string;
    title: string;
    element: () => JSX.Element;
    children: never[];
    layout?: ({ children }: { children: React.ReactNode }) => JSX.Element; 
};

export const routes: RouteType[] = [
    // User routes
    {
        path: "/",
        title: "Learning English",
        element: LearnEnglishPage,
        children: [],
    },
    {
        path: "/devops",
        title: "Devops",
        element: DevopsPage,
        children: [],
    },
    {
        path: "/general",
        title: "Documents",
        element: DocumentPage,
        children: [],
    },
];

export const navigation = routes.map((route) => {
    return {
        name: route.title,
        href: route.path,
    };
});
