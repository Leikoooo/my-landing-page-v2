import './AboutMe.scss';
// import ExperienceBlock from "./ExperienceBlock";

export default function AboutMe() {
    return (
        <div className="aboutMeContainer">
            <div className="aboutMeContent">
                <div className="leftAM">

                    <div className="skills">
                        <div className="titleAM">
                            <span>Skills</span>
                            <div className="subtitleAM">
                                <h2>• Python</h2>
                                <p>

                                </p>
                            </div>
                            <div className="subtitleAM">
                                <h2>• Golang</h2>
                                <p>Около года опыт создания и поддержки API </p>
                            </div>
                            <div className="subtitleAM">
                                <h2>• React</h2>
                                <p>Я умею работать с библиотеками Flask и Django, а также с базами данных PostgreSQL и
                                    MongoDB
                                </p>
                            </div>
                            <div className="subtitleAM">
                                <h2>• HTML, CSS, JavaScript</h2>
                                <p>Мои проекты включают в себя разработку веб-приложений, а также создание и
                                    поддержку
                                    сайтов с использованием HTML, CSS и JavaScript
                                </p>
                            </div>
                            <div className="education">
                                <div className="titleAM">
                                    <span>Education</span>
                                    <h2>• Университет ИТМО</h2>
                                    <p>Я второкурсник, учусь на факультете информационных технологий и программирования,
                                        где
                                        изучаю различные языки программирования, алгоритмы и структуры данных, а также
                                        основы информационной безопасности
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rightAM">
                    <div className="experinece">
                        <div className="titleAM">
                            <span>Experience</span>
                            <div className="subtitleAM">
                                <h2>• Разработка telegram ботов</h2>
                                <p>Моим ключевым навыком является глубокое знание языка программирования Python и опыт
                                    создания разнообразных Telegram-ботов, включая проекты, связанные с
                                    автоматизацией
                                    продаж и крипто-платежами. Я знаком с работой API Telegram и умею работать с
                                    документацией.</p>
                            </div>
                            <div className="subtitleAM">
                                <h2>• Разработка проектов</h2>
                                <p>Я умею работать с библиотеками Flask и Django, а также с базами данных PostgreSQL
                                    и
                                    MongoDB. Мои проекты включают в себя разработку веб-приложений, а также создание
                                    и
                                    поддержку сайтов с использованием HTML, CSS и JavaScript.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cryptoContainer">
                <div className="cryptoContent">
                    <span>Crypto</span>
                    <p>Я занимаюсь инвестированием в криптовалюты, а также разработкой проектов, связанных с
                        крипто-платежами. Я знаком с работой API Telegram и умею работать с документацией.</p>
                </div>
            </div>
        </div>
    )
}