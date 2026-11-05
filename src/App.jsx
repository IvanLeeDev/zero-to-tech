import { useState } from 'react';
import HomePage from "./components/HomePage";
import TextLabPage from "./components/TextLabPage";

export default function App() {
    const [ page, setPage] = useState("home");

    return (
        <div className="app-shell">
            <div className="page-shell">
                <main className="page-content">
                    {page === "home" 
                    ? <HomePage current={page} onNavigate={setPage}/> 
                    : <TextLabPage current={page} onNavigate={setPage}/>}
                </main>
            </div>
        </div>
    );
}