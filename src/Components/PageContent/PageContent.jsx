import './PageContent.scss';

export default function PageContent({PageTitle, Component}) {
    return (
        <div className="pageContent">
            <span className="pageTitle">{PageTitle}</span>
            <div className="gradient"/>

            <div className="Content">

                <Component/>
            </div>
        </div>
    )
}