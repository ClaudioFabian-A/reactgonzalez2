import './CartWidget.css'
// import '../Imagenes/ImgNavBar/th.jpeg'
// let imagen = "../Imagenes/ImgNavBar/th.jpeg";

const CartWidget = () => {
    const carrito = "https://www.goodfreephotos.com/albums/vector-images/shopping-cart-vector-clipart.png";
    return (
        <>
            <div>
                <img src={carrito} className='imgCarrito' />
                <strong className='numeroCarrito' >0</strong>

            </div>
        </>
    )
}

export default CartWidget
