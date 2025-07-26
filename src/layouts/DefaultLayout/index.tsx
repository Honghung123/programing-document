export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    const darkMode = false;
    return (
        <div className={darkMode ? "dark" : ""}> 
            {children} 
        </div>
    );
}
