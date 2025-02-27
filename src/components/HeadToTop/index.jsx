import React from "react";

export default function HeadToTop({ children, className }) {
    return (
        <div className={className} onClick={() => window.scrollTo(0, 0)}>
            {children}
        </div>
    );
}
