document.querySelector('.upload').onclick = async () => {
    const fileEl = document.querySelector('.file')
    const [imgFile] = fileEl.files

    // 表单
    const formData = new FormData()
    formData.append('avatar', imgFile)

    const response = await fetch('http://123.207.32.32:1888/02_param/upload', {
        method: 'POST',
        body: formData
    })
    const result = await response.json()
    console.log(result)
}