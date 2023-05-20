import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getArticulo } from "../../asyncmock/asyncmock";


const ItemDetailContainer = () => {

   const [articulo, setArticulo] = useState(null);
   const { idItem } = useParams();

   useEffect(() => {
      getArticulo(idItem)
         .then(res => setArticulo(res))
         .catch(error => console.log(error))

   }, [idItem])

   return (
      <div>
         <ItemDetail {...articulo} />
      </div>
   )


}
export default ItemDetailContainer