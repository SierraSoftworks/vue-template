import Vue from "vue"

const get = Vue.filter("get", (value, path) => {
    if (!path) return value
    return path.split(".").reduce((value, path) => {
        if (value === undefined) return undefined
            if (Array.isArray(value)) {
                try {
                    return value[parseInt(path)]
                } catch (e) {}
            }
        return value[path]
    }, value)
})

const exclude = Vue.filter("exclude", (obj, ...fields) => {
    return Object.keys(obj).filter(f => !~fields.indexOf(f)).reduce((obj2, k) => {
        obj2[k] = obj[k]
        return obj2
    }, {})
})

export {
    get,
    exclude
}