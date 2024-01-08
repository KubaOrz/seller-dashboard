import { FC } from "react";
import { OrderData } from "../../../tools/mock-data/orders/orders";
import MockRankingImage from '../../../tools/assets/main-page/ranking/mockRankingImage.png';
import { Divider } from "@mui/material";

const OrderItem: FC<{order: OrderData}> = ({ order }) => {
    return (
        <div className="flex flex-row border overflow-hidden shadow-lg rounded-lg p-3">
            <div className="aspect-square h-52">
                <img src={MockRankingImage} alt="Aspect" className="w-full h-full object-fit-cover" />
            </div>

            <div className="flex flex-col gap-2 p-4 w-full">
                <h1 className="font-sans text-3xl text-[#10AC98]">{order.productName}</h1>
                <Divider sx={{ width: '100%' }}/>
                <div className="ml-4">
                    <p>Cena: {order.price} zł</p>
                    <p>Data zamówienia: {order.orderDate}</p>
                    <p>Adres dostawy: {order.address}</p>
                    <p>Numer telefonu zamawiającego: {order.clientPhoneNumber}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderItem;