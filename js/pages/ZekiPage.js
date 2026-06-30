import { zeki } from '../data/constants.js';
import { BasePage } from './BasePage.js';
import { VideoPidor } from '../components/VideoPidor.js';

export class ZekiPage extends BasePage {
    constructor() {
        super();
        this.container = document.getElementById('zeki');
        this.video = new VideoPidor();
        this.zeki = zeki;
    }

    render() {
        if (!this.container) return;
        this.container.innerHTML = `
            <div class="container">
                <div class="zeki">
                    <div class="card">
                        <div class="card-left">
                            <h1 class="card-title">Добро пожаловать в пидорятню!</h1>

                        </div>
                        <div class="video-container" id="video-container"></div>
                    </div>
                    <h1 class="zeki-title">Наши зеки</h1>
                    <div class="zeki-container">
                        ${this.zeki.map(zek => `
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <!-- Передняя сторона (ваш существующий дизайн) -->
                                    <div class="flip-card-front">
                                        <div class="zeki-card">
                                            <img src="${zek.img}" alt="${zek.name}" class="zeki-img">
                                            <div class="zeki-name">${zek.name}</div>
                                            <div class="zeki-info">${zek.position}</div>
                                        </div>
                                    </div>
                                    <!-- Задняя сторона (новая информация) -->
                                    <div class="flip-card-back">
                                        <h3>${zek.name}</h3>
                                        <p><strong>Погоняло:</strong> ${zek.nickname || 'Неизвестно'}</p>
                                        <p><strong>Статья:</strong> ${zek.article || 'Неизвестно'}</p>
                                        <p><strong>Срок:</strong> ${zek.sentence || 'Неизвестно'}</p>
                                        <p><strong>Достижения:</strong> ${zek.achievements || 'Нет'}</p>
                                        <div class="flip-card-badge">${zek.position}</div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        this.video.render();
        this.initFlipCards();
    }

    initFlipCards() {
        const cards = document.querySelectorAll('.flip-card');
        cards.forEach(card => {
            card.addEventListener('click', function () {
                this.classList.toggle('flipped');
            });
        });
    }
}