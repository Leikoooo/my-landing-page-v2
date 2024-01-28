import './PageContent.scss';

export default function PageContent({PageTitle}) {
    return (
        <div className="pageContent">
            <div className="blockTitle">
                <span>{PageTitle}</span>
            </div>
        </div>
    )
}