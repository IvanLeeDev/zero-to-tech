import AnimatedCardGrid from "./AnimatedCardGrid";
import InputCard from './InputCard';
import ResultCard from "./ResultCard";
import PageHeading from "./PageHeading";
import Nav from "./Nav";

export default function TextLabPage() {
    return (
        <AnimatedCardGrid className={'dashboard-grid'}>
            <article className="hero-stage panel-full">
                <Nav/>
                <PageHeading/>
            </article>
            <InputCard/>
            <ResultCard/>
        </AnimatedCardGrid>
    )
}