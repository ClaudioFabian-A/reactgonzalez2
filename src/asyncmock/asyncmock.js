const articulos = [
    { nombre: "Pro Plan", precio: 2000, id: "1", img: "https://puppis.vteximg.com.br/arquivos/ids/191410/Web_LogoPurinaPloplan_OUT-1.png?v=638107735093430000", idCat: "1", },
    { nombre: "Royal Canning", precio: 2000, id: "2", img: "https://puppis.vteximg.com.br/arquivos/ids/163028/Royal%20Canin%20150x150.png?v=636613090416470000", idCat: "1", },
    { nombre: "Vital Can", precio: 2500, id: "3", img: "https://puppis.vteximg.com.br/arquivos/ids/163030/VitalCan%20150x150.png?v=636613090441530000", idCat: "1", },
    { nombre: "Eukanuba", precio: 2500, id: "4", img: "https://puppis.vteximg.com.br/arquivos/ids/163020/Eukanuba%20150x150.png?v=636764384009700000", idCat: "2", },
    { nombre: "Excelent", precio: 3000, id: "5", img: "https://puppis.vteximg.com.br/arquivos/ids/163021/Excellent%20150x150.png?v=636613090346730000", idCat: "2", },
    { nombre: "Old Prince", precio: 3000, id: "6", img: "https://puppis.vteximg.com.br/arquivos/ids/176336/Old%20Prince%20150x150_1.png?v=637535916472600000", idCat: "2", },
    { nombre: "infinity", precio: 3500, id: "7", img: "https://puppis.vteximg.com.br/arquivos/ids/163024/Infinity%20150x150.png?v=636613090376630000", idCat: "3", },
    { nombre: "Puppis", precio: 2000, id: "8", img: "https://puppis.vteximg.com.br/arquivos/ids/185680/puppis-logo-marcas.png?v=637871153631470000", idCat: "3", },
    { nombre: "Ferplast", precio: 3000, id: "9", img: "https://puppis.vteximg.com.br/arquivos/ids/163036/Ferplast%20150x150.png?v=636613804106400000", idCat: "3", },
    { nombre: "Kong", precio: 1500, id: "10", img: "https://puppis.vteximg.com.br/arquivos/ids/163038/Kong%20150x150.png?v=636613804126300000", idCat: "4", },
    { nombre: "Nerf", precio: 2000, id: "11", img: "https://puppis.vteximg.com.br/arquivos/ids/163039/Nerf%20150x150.png?v=636613804136300000", idCat: "4", },
    { nombre: "Pawise", precio: 2500, id: "12", img: "https://puppis.vteximg.com.br/arquivos/ids/185679/pawise-logo-marcas.png?v=637830354377100000", idCat: "4", },
    // { nombre : , precio: , id: "", img:"", idCat: "",},
    // { nombre : , precio: , id: "", img:"", idCat: "",},

]

export const getArticulos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(articulos)
        }, 2000)
    })

}
export const getArticulo = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const articulo = articulos.find(art => art.id === id);
            resolve(articulo);

        }, 2000)
    })
}
export const getCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const catArticulo = articulos.filter(cat => cat.idCat === idCategoria);
            resolve(catArticulo);
        }, 2000)
    })
}