import { useEffect, useRef } from "react";
import { animate, scrambleText } from "animejs";

export default function ResultCard(){

    const cardRef = useRef(null);
    const scoreRef = useRef(null);

    useEffect(() => {

        animate(scoreRef.current, {
            innerHTML: scrambleText({ chars: "0-9" }),
            duration: 1500,
        });

    }, [])

    return (
        <article ref={cardRef}  className="panel panel-half lab-panel result-panel card">
            <div className="panel-heading">
                <p className="section-kicker">结果区</p>
                <h3>分析结果</h3>
            </div>
            <div className="result-stack">
                <div className="result-item">
                    <span>原文</span>
                    <p>今天的风很轻，适合把脑海里的想法慢慢写下来。</p>
                </div>
                <div className="result-item">
                    <span>拼音</span>
                    <p>jīn tiān de fēng hěn qīng …</p>
                </div>
                <div className="result-grid">
                    <div className="result-badge">
                        <span>情感分数</span>
                        <strong ref={scoreRef} data-score>0.86</strong>
                    </div>
                    <div className="result-badge">
                        <span>情感判断</span>
                        <strong>偏积极</strong>
                    </div>
                </div>
            </div>
        </article>
    )
}