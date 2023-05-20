import './ItemDetail.css'


const ItemDetail =({id, nombre, precio, img}) => {
    return(
        <div className="cardIt">
            <h2>Articulo:{nombre}</h2>
            <h3>Precio: {precio}</h3>
            <h3>codico: {id}</h3>
            <img src={img} alt={nombre}  className='img' />
        </div>
    )
}
export default ItemDetail