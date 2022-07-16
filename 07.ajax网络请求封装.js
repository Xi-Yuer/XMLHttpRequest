class Ajax {
    constructor({
        baseUrl, timeout = 10000,
        headers = {}, withCredentials = false, responseType = 'json'
    }) {
        this.baseUrl = baseUrl;
        this.timeout = timeout;
        this.headers = headers;
        this.withCredentials = withCredentials;
        this.responseType = responseType;
        this.xhr = new XMLHttpRequest();

    }
    send(method = 'GET', url, data) {
        return new Promise((resolve, reject) => {
            if (method.toUpperCase() === 'GET') {
                const queryString = []
                for (let key in data) {
                    queryString.push(`${key}=${data[key]}`)
                }
                this.xhr.open(method, this.baseUrl + url + '?' + queryString.join('&'), true);
            }
            else {
                this.xhr.open(method, this.baseUrl + url, true);
                this.xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            }
            this.xhr.timeout = this.timeout;
            this.xhr.withCredentials = this.withCredentials;
            this.xhr.responseType = this.responseType;
            for (let key in this.headers) {
                this.xhr.setRequestHeader(key, this.headers[key]);
            }
            this.xhr.onreadystatechange = () => {
                if (this.xhr.readyState === 4) {
                    if (this.xhr.status >= 200 && this.xhr.status < 300) {
                        resolve(this.xhr.response);
                    } else {
                        reject(this.xhr.statusText);
                    }
                }
            }
            if (method.toUpperCase() === 'GET') {
                this.xhr.send(null);
            } else {
                this.xhr.send(data);
            }
        })
    }
    // 取消请求
    cancel() {
        this.xhr.abort();
    }
    get(url, data) {
        return this.send('GET', url, data);
    }
    post(url, data) {
        return this.send('POST', url, data);
    }
}

const instance1 = new Ajax({
    baseUrl: 'http://123.207.32.32:8000',
})
const instance2 = new Ajax({
    baseUrl: 'http://123.207.32.32:1888',
})
const instance3 = new Ajax({
    baseUrl: 'http://123.207.32.32:1888',
})

instance1.get('/home/multidata').then(res => {
    console.log(res);
})
instance2.get('/02_param/get', {
    name: 'xiyuer',
    age: 18
}).then(res => {
    console.log(res);
})

instance3.get('/01_basic/timeout').then(res => {
    console.log(res);
})

// 取消请求
document.querySelector('.btn').onclick = () => {
    instance3.cancel()
}