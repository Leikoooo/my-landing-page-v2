import './WorkWithMe.scss';

export default function WorkWithMe() {

    let data = [
        {
            title: 'Hackathon "Nolabel"',
            description: 'Вместе с командой разрабатывали сервис по поиску дизайнеров интерьера. Я занимался бэкендом',
            link: 'https://github.com/Leikooo/NoLabel_Backend'
        },
        {
            title: 'Hackathon "Selectel x DonorSearch"',
            description: 'Разрабатывали сервис привлечения доноров крови для животных. Я являлся капитаном команды и работал с фронтендом.',
            link: 'https://github.com/Leikooo/SelectelHackaton'
        },
        {
            title: 'Hackathon "Vk x Itmo"',
            description: 'Разрабатывали библиотеку для детекта потери трафика в мобильном приложении. Я занимался сбором информации и разработкой фронтенда.',
            link: 'https://github.com/Leikooo/Itmo-hack-2023'
        },

    ]

    return (
        <div className="WorkWithMeContainer">
            <div className="WWMTitle">
                <span className={'WWMTitleText1'}>ОПЫТ</span>
                <span className={'WWMTitleText2'}>РАБОТЫ</span>
            </div>
            <div className="WWMContent">
                {data.map((item, index) => {
                        return (
                            <div className={'itemBorder'}>
                                <div key={index} className="WWMItem">
                                    <a href={item.link} target="_blank" rel="noreferrer">
                                        <h2 className={"cardTitle"}>
                                            {item.title}
                                        </h2>
                                        <p className={"cardDescription"}>{item.description}</p>
                                    </a>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}