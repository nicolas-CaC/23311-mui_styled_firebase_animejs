const regexp = {
    name: /^[ a-zA-Z\.áéíóúÁÉÍÓÚ]{3,}$/,
    email: /^[a-zA-Z0-9]{4,}@[a-zA-Z0-9]{4,}(\.com\b|\.net\b|\.org\b|\.mail\b|\.io\b)$/,
    age: /^[0-9\-]{2}$/
}

export const checkForm = (form) => {

    let result = { error: false }
    let fields = Object.entries(form)

    for (let field of fields) {

        let [name, value] = field

        result[name] = { error: false }
        const toNumber = parseInt(value)

        if (value.length === 0)
            result[name].length =
                result[name].error = true

        if (!isNaN(toNumber))
            value = toNumber

        const ok = regexp[name].test(value)
        if (ok) continue

        result.error =
            result[name].error = true
    }

    return result
}