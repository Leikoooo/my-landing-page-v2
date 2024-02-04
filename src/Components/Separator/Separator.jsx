import './Separator.scss';

export default function Separator({TextLine}) {
    return (
        <div className="separator">
            <section className="separator__wave">
                <div className="line">{TextLine.repeat(50)}</div>
            </section>
        </div>
    )
}