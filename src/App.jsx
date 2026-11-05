import HomePage from "./components/HomePage";
import TextLabPage from "./components/TextLabPage";
import { useRouter } from './router/useRouter';

export default function App() {

    const { path, navigate } = useRouter();

    const current = path.startsWith('/text-lab') ? 'textlab': 'home';
    const onNavigate = (path) => navigate(path === 'textlab'? '/text-lab' : '/');

    return (
        <div className="app-shell">
            <div className="page-shell">
                <main className="page-content">
                    {current === "home" 
                    ? <HomePage current={current} onNavigate={onNavigate}/> 
                    : <TextLabPage current={current} onNavigate={onNavigate}/>}
                </main>
            </div>
        </div>
    );
}