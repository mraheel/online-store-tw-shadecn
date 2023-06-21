import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { CartActions } from '@/store/slice/cart.slice'

interface Props{
    _id: string,
    qty: number
}

const CartItemQtyCard:React.FC<Props> = ({_id, qty}) => {

    const dispatch = useDispatch()

    const [ itemQty, setitemQty ] = useState<number>(qty)
    const [ disableQtyBtn, setDisableQtyBtn ] = useState<boolean>(false)

    const handleUpdateCartItemQuantity =  (id: string, action: string) => {

        setDisableQtyBtn(false)
        if(action === 'dec'){
            if(itemQty-1 == 1)
                setDisableQtyBtn(true)
            
            setitemQty((prev:number)=> --prev)
        }else{
            setitemQty((prev:number)=> ++prev)
        } 
      }

    useEffect(()=>{
        dispatch(CartActions.updateCartItemQuantity({_id, quantity:itemQty}))
    },[dispatch, _id, itemQty])
      
    return(
        <>
            <Button disabled={disableQtyBtn}  onClick={()=> handleUpdateCartItemQuantity(_id, 'dec') } variant={"outline"} className="w-fill" >
                <AiOutlineMinus />
            </Button>
            <input className="mx-2 border text-center w-8" readOnly={true} value={ itemQty } /> 
            <Button onClick={()=> handleUpdateCartItemQuantity(_id, 'inc') } variant={"outline"} className="w-fill" >
                <AiOutlinePlus />
            </Button>
        </>
    )
}
export default CartItemQtyCard
