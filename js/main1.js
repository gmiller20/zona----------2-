import { HomePage } from './pages/HomePage.js';
import { NewsPage } from './pages/NewsPage.js';
import { EmployeePage } from './pages/EmployeePage.js';
import { ZekiPage } from './pages/ZekiPage.js';
import { FormPage } from './pages/FormPage.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', function () {
    // const currentPage = window.location.pathname.split('/').pop();

    const path = window.location.pathname;

    // Определяем базовый путь (для GitHub Pages)
    const pathSegments = path.split('/').filter(seg => seg !== '');

    // Если первый сегмент — это имя репозитория, отбрасываем его
    // Предполагаем, что репозиторий называется "zona----------2-"
    let currentPage = '';
    if (pathSegments.length > 0 && pathSegments[0] === 'zona----------2-') {
        // Это GitHub Pages, убираем имя репозитория
        currentPage = pathSegments.slice(1).join('/');
    } else {
        // Локальная разработка или корневой домен
        currentPage = path.replace(/^\/+/, '').toLowerCase();
    }

    // 1. Убираем начальный слэш, приводим к нижнему регистру
    currentPage = currentPage.toLowerCase();

    // 2. Если это корень сайта — считаем как index.html
    if (currentPage === '' || currentPage === 'zona----------2-') {
        currentPage = 'index.html';
    }
    // 3. Если путь заканчивается слэшем — убираем его
    else if (currentPage.endsWith('/')) {
        currentPage = currentPage.slice(0, -1);
        if (currentPage === '') {
            currentPage = 'index.html';
        }
    }

    switch (currentPage) {
        case 'index.html':
            const homePage = new HomePage();
            homePage.init();
            break;
        case 'news.html':
            const newsPage = new NewsPage();
            newsPage.init();
            newsPage.render();
            break;
        case 'employee.html':
            const employeePage = new EmployeePage();
            employeePage.init();
            employeePage.render();
            break;
        case 'zeki.html':
            const zekiPage = new ZekiPage();
            zekiPage.init();
            zekiPage.render();
            break;
        case 'form.html':
            const formPage = new FormPage();
            formPage.init();
            formPage.render();
            break;
        default:
            const header = new Header();
            header.render();
            const footer = new Footer();
            footer.render();
            break;
    }
});


