import React from "react";

export default function HeadToTop({ children, style }) {
    return (
        <div style={style} onClick={() => window.scrollTo(0, 0)}>
            {children}
        </div>
    );
}
