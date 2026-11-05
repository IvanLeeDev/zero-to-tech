import AnimatedCardGrid from "./AnimatedCardGrid";
import InputCard from './InputCard';
import ResultCard from "./ResultCard";
import PageHeading from "./PageHeading";
import Nav from "./Nav";

export default function TextLabPage({current, onNavigate}) {
    return (
        <AnimatedCardGrid className={'dashboard-grid'}>
            <article className="hero-stage panel-full">
                <Nav current={current} onNavigate={onNavigate}/>
                <PageHeading title="文字实验室" subtitle="拼音和情绪，挖掘中文里的细节"/>
            </article>
            <InputCard/>
            <ResultCard/>
        </AnimatedCardGrid>
    )
}