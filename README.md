# 前端单页面路由实现原理 hash history

## hash

以#号

-   hashchange 事件, 能改变 location.hash

## history

没有#号，以/pathname 展示不同路由

-   pushState 历史记录栈中增加一条记录 replaceState 更改当前的记录。能改变 location.pathname
-   popstate 事件，浏览器 前进（go）、 后退（back） 时触发
