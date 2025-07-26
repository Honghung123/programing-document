import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes, RouteType } from "../router/routes";
import DefaultLayout from "../layouts/DefaultLayout";
import NotFoundPage from "../pages/NotFoundPage";

export default function MyRouterProvider() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route: RouteType, index: number) => {
                    const element = <route.element />; 
                    let Page = element;
                    if (route.layout) { 
                        Page = <DefaultLayout>element</DefaultLayout>;
                    }  
                    return <Route key={index} path={route.path} element={Page} />;
                })}
                <Route
                    path="*"
                    element={
                        <DefaultLayout>
                            <NotFoundPage />
                        </DefaultLayout>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
