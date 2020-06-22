const container = document.getElementById('container');
const btnPush = document.getElementById('push');
const btnReplcae = document.getElementById('replace');

const render = (path) => {
	container.innerText = `this is ${path}.html`;
};

const push = (path) => {
	history.pushState({ param: '11' }, 'title', path);
	render(path);
};
const replace = (path) => {
	history.replaceState({ param: 'replace' }, 'title', path);
};

const nav = document.getElementById('nav');
nav.onclick = (e) => {
	if (e.target.id === 'push') {
		const el = e.target;
		const path = el.innerText;
		push(path);
	}
};

window.addEventListener('popstate', (e) => {
	const state = e.state || {};
	const path = location.pathname;
	render(path);
});
