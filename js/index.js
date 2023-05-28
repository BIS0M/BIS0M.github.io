import { Home, Service, About, NotFound } from './components.js';

const $root = document.getElementById('root');
const $navigation = document.getElementById('navigation');

const routes = [
    { path: '/home', component: Home },
    { path: '/project', component: Service },
];

const render = async path => {
    try {
        const component = routes.find(route => route.path === path)?.component || NotFound;
        $root.replaceChildren(await component());
    } catch (err) {
        console.error(err);
    }
};

// TODO: ajax ��û�� �ּ�â�� url�� �����Ű�� �����Ƿ� history ������ ���� �ʴ´�.
$navigation.onclick = e => {
    if (!e.target.matches('#navigation > li > a')) return;
    e.preventDefault();
    const path = e.target.getAttribute('href');
    render(path);
};

// TODO: �ּ�â�� url�� ������� �ʱ� ������ ���ΰ�ħ �� ���� �������� �������� �ƴ� ��Ʈ �������� ��û�ȴ�.
window.addEventListener('DOMContentLoaded', () => render('/'));