
export default function InputCard() {

    return (
        <article className="panel panel-half lab-panel card">
            <div className="panel-heading">
                <p className="section-kicker">输入区</p>
                <h3>贴一段中文</h3>
            </div>
            <form className="lab-form">
                <label htmlFor="text-input">文本内容</label>
                <textarea
                    id="text-input"
                    rows="8"
                    placeholder="例如：生活没有标准答案，但每一天都值得认真感受。"
                    defaultValue="今天的风很轻，适合把脑海里的想法慢慢写下来。"
                ></textarea>
                <button className="primary-button" type="button">开始分析</button>
            </form>
        </article>
    )
}