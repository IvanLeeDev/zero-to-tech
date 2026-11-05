import AnimatedCardGrid from "./AnimatedCardGrid";
import InputCard from './InputCard';
import ResultCard from "./ResultCard";
import PageHeading from "./PageHeading";
import Nav from "./Nav";
import { textLab } from "../data/site.js";

export default function TextLabPage({current, onNavigate}) {
    return (
        <AnimatedCardGrid className={'dashboard-grid'}>
            <article className="hero-stage panel-full">
                <Nav current={current} onNavigate={onNavigate}/>
                <PageHeading title={textLab.heroTitle} subtitle={textLab.heroSubtitle}/>
            </article>
            <InputCard/>
            <ResultCard/>
        </AnimatedCardGrid>
    )
}