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

    // Получаем все сегменты пути
    const pathSegments = path.split('/').filter(seg => seg !== '');

    // Ищем имя файла (последний сегмент, который заканчивается на .html)
    let fileName = '';
    for (let i = pathSegments.length - 1; i >= 0; i--) {
        if (pathSegments[i].endsWith('.html')) {
            fileName = pathSegments[i];
            break;
        }
    }

    // Если файл не найден, это корень или папка
    let currentPage = fileName || 'index.html';

    // 1. Приводим к нижнему регистру
    currentPage = currentPage.toLowerCase();

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


