async function getData() {
    // const response = await fetch('http://123.207.32.32:8000/home/multidata')
    const response = await fetch('http://123.207.32.32:1888/02_param/postjson', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: '张三',
            age: 18,
            address: '北京'
        })
    })
    console.log(response)
    const res = await response.json()
    console.log(res)
}

getData()