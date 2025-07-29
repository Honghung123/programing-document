import React from "react";

export default function HeadToTop({ children, className }: { children: React.ReactNode; className: string }) {
    return (
        <div className={className} onClick={() => window.scrollTo(0, 0)}>
            {children}
        </div>
    );
}
