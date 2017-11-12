import createMenu from '../../components/menu/menu';
import './index.scss';
import 'normalize.css';

const menu = createMenu(['Главная','Блог'], 'menu');
document.body.appendChild(menu);

console.log('in index.js')
console.log($);
console.log(jQuery);

