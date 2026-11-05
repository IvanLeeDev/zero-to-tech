
export default function Nav({current, onNavigate}) {

    const items = [
        {
            label: '个人主页',
            key: 'home',
        },
        {
            label: '文字实验室',
            key: 'texlab',
        },
    ]
    return (
        <div className="hero-topline">
            <p className="brand-eyebrow">zero to tech</p>
            <nav className="inline-links hero-nav">
                {items.map(item => (
                    <a 
                        key={item.key}
                        className={"nav-link" + (current === item.key ? " active" : "")} 
                        href="#"
                        onClick={(e) => {e.preventDefault(); onNavigate(item.key)}}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </div>
    )
}