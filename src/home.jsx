import { createRoot } from 'react-dom/client'
import HomePage from './components/HomePage';
import "./css/reset.css";
import "./css/variables.css";
import "./css/layout.css";
import "./css/hero.css";
import "./css/nav.css";
import "./css/cards.css";
import "./css/lab.css";
import "./css/responsive.css";

createRoot(document.getElementById('root')).render(
    <div className="app-shell">
        <div className="page-shell">
            <main className="page-content">
                <HomePage/>
            </main>
        </div>
    </div>
);