class HashRouter {
	constructor() {
		//用于存储不同hash值对应的回调函数
		this.routers = {};
	}
	//用于注册每个视图
	register(hash, callback = function () {}) {
		this.routers[hash] = callback;
	}
	//用于注册首页
	registerIndex(callback = function () {}) {
		this.routers['index'] = callback;
	}
}

const container = document.getElementById('container');
window.addEventListener('hashchange', (e) => {
	console.log('hashchange', e);
	container.innerText = location.hash;
});
