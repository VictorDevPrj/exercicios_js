const colors = {
    p: '#388e4c',
    div: '#1565c0',
    span: '#f689e3',
    ol: '#45fe2a2c',
    ul: '#45ef4ca',
    padrao: '#ffffff',
    form: '#3f2e4f50',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.bodrderColor = colors.get(tagName)

    if (!elemento.classList.contains('nolable')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])

    }
})
