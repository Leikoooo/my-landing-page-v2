import './AboutMe.scss';
// import ExperienceBlock from "./ExperienceBlock";

export default function AboutMe() {
    return (
        <div className="aboutMeContainer">
            <div className="aboutMeContent">
                <div className="leftAM">
                    <div className="Python">
                        <div className="titleAM">
                            <span>Python</span>
                            <div className="subtitleAM">
                                <p>• 3 года коммерческой разработки на Python.</p>
                                <p>• Опыт работы с Flask и Django.</p>
                                <p>• Десятки крупных телеграм ботов.</p>
                            </div>
                        </div>
                    </div>
                    <div className="Go">
                        <div className="titleAM">
                            <span>Golang</span>
                            <div className="subtitleAM">
                                <p>• 1 год разработки микросервисов на Golang.</p>
                                <p>• Работа с Oracle Database.</p>
                                <p>• Проектирование микросервисной архитектуры приложения.</p>
                            </div>
                        </div>
                    </div>
                    <div className="JS">
                        <div className="titleAM">
                            <span>NodeJS/TS</span>
                            <div className="subtitleAM">
                                <p>• Разработка фронтенда для текущего сайта.</p>
                                <p>• Разработка fullstack маркетплейса.</p>
                                <p>• Работа на нескольких проектах для хакатонов.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightAM">
                    <div className="skills">
                        <div className="titleAM">
                            <span>Skills</span>
                            <div className="subtitleAM">
                                <p>• ООП</p>
                                <p>• Паттерны проектирования</p>
                                <p>• Алгоритмы и структуры данных</p>
                                <p>• Тестирование</p>
                                <p>• Git</p>
                                <p>• CI/CD</p>
                            </div>
                        </div>
                    </div>
                    <div className="experinece">
                        <div className="titleAM">
                            <span>Experience</span>
                            <div className="subtitleAM">
                                <h2>Разработка telegram ботов</h2>
                                <p>• Бот для компании "Самолет+": ведение статистики по отчетности сотрудников.</p>
                                <p>• Бот автопродаж: продажа цифровых товаров с мультивалютной оплатой, включая
                                    криптовалюту.</p>
                                <p>• А также множество многофункциональных развлекательных и корпоративных ботов.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="SoftContainer">
                <div className="SoftContent">
                    <span>Crypto</span>
                    <p>▪ Я интересуюсь криптовалютами и блокчейн технологиями.
                        У меня есть опыт разработки смарт контрактов на Solidity. Разрабатывал собственный токен, а также участвовал в web3 хакатоне Forward, где удалось вместе с командой разработать собственное dApp.</p>
                </div>
            </div>
        </div>
    )
}