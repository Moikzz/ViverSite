export function GetDoc (path, file) {
    return (`../assets/documents/${path}/${file}`)
}

export function GetImage (path, image) {
    return new URL(`../assets/images/${path}/${image}`, import.meta.url).href;
}