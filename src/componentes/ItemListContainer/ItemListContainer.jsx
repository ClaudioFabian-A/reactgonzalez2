import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { getCategoria, getArticulos } from '../../asyncmock/asyncmock'
import { useParams } from 'react-router-dom'




const ItemListContainer = () => {

    const [articulos, setArticulos] = useState([]);
    const { idCategoria } = useParams();
    useEffect(() => {
        const funcionArticulos = idCategoria ? getCategoria : getArticulos;

        funcionArticulos(idCategoria)
            .then(respuesta => setArticulos(respuesta))
            .catch(error => console.error(error))
    }, [idCategoria])
    return (
        <>
            <h2 style={{ textAlign: "center" }}>Articulos</h2>
            <ItemList articulos={articulos} />

        </>

    )
}
export default ItemListContainer 