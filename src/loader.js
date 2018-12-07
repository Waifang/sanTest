/**
 * @file   端外登录加载
 * @author waifang
 */
let wrapperLoaded = false;

export const jsLoad = (path, name) => {
    return new Promise((resolve, reject) => {
        var name = document.createElement('script');
        name.setAttribute('type', 'text/javascript');
        name.setAttribute('src', path);
        // scritptEleTbO.setAttribute('src', 'https://wappass.baidu.com/static/touch/js/api/wrapper.js');
        document.getElementsByTagName('head')[0].appendChild(name);
        name.onload = () => {
            wrapperLoaded = true;
            resolve();
        };
    })
};
export const jsLoaded = fn => {
    let next = () => {
        if (wrapperLoaded) {
            fn();
        }
        else {
            setTimeout(() => {
                next();
            }, 300);
        }
    };
    next();
};