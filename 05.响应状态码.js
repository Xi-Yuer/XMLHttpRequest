const xhr = new XMLHttpRequest()

xhr.open('get', "http://123.207.32.32:8000/home/multidata")

xhr.send()

xhr.responseType = 'json'
xhr.onload = () => {
    console.log(xhr)
    console.log(xhr.status)
}