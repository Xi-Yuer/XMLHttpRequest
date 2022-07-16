document.querySelector('.upload').onclick = () => {
    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        console.log(xhr.response)
    }

    xhr.responseType = 'json'

    xhr.open("post", "http://123.207.32.32:1888/02_param/upload")

    // 监听进度
    xhr.onprogress = (e) => {
        console.log(e)
    }

    const fileEl = document.querySelector('.file')
    const [imgFile] = fileEl.files

    // 表单
    const formData = new FormData()
    formData.append('avatar', imgFile)


    xhr.send(formData)
}