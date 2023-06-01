export const getTempStorage = (key) =>
    sessionStorage.getItem(key)

export const setTempStorage = (key, value) =>
    sessionStorage.setItem(key, value)


export const loadToStorage = (key) =>
    JSON.parse(localStorage.getItem(key))

export const saveToStorage = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data))


export const updateFromStorage = (key, field) => {

    const storage = loadToStorage(key)

    const total = storage
        ? storage.reduce((accum, item) =>
            accum += item[field], 0)
        : 0

    return storage
        ? { [key]: storage, total }
        : { [key]: [], total }
}