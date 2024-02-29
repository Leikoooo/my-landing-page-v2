import './WorkWithMe.scss';

export default function WorkWithMe() {

    let data = [
        {
            title: 'Хакатон Nolabel',
            description: 'Вместе с командой разрабатывал бэкенд для сервиса по поиску дизайнеров интерьера',
            link: 'https://nolabel.team/'
        },
        {
            title: 'Хакатон Selectel x DonorSearch',
            description: 'Разрабатывал сервис привлечения доноров крови для животных',
            link: 'https://selectel.ru/'
        },
        {
            title: 'Хакатон Nolabel',
            description: 'Вместе с командой разрабатывал бэкенд для сервиса по поиску дизайнеров интерьера',
            link: 'https://nolabel.team/'
        },

    ]

    return (
        <div className="WorkWithMeContainer">
            <div className="WWMTitle">
                <span>Портфолио</span>
            </div>
            <div className="WWMContent">
                {data.map((item, index) => {
                        return (
                            <div key={index} className="WWMItem">
                                <h2 className={"cardTitle"}>{item.title}</h2>
                                <p className={"cardDescription"}>{item.description}</p>
                                <a className={"cardlink"} href={item.link ? item.link : '#'} target="_blank" rel="noreferrer">Ссылка</a>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}