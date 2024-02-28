import './PageContent.scss';

export default function PageContent({PageTitle, Component}) {
    return (
        <div className="pageContent">
            <PageTitle/>
            <div className="Content">
                <Component/>
            </div>
        </div>
    )
}