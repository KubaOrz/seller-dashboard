import { FC, useEffect, useState } from "react";
import { OrderData, orders } from "../../tools/mock-data/orders/orders";
import OrderItem from "../../components/shared/order/OrderItem";

const NotDeliveredOrders: FC = () => {
    const [notDeliveredOrders, setNotDeliveredOrders] = useState<OrderData[]>([]);

    useEffect(() => {
        const notDeliveredOrders = orders.filter(order => order.delivered === false);
        setNotDeliveredOrders(notDeliveredOrders);
    }, [])

    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-center font-sans text-4xl text-[#10AC98] mb-5">Niewysłane zamówienia ({notDeliveredOrders.length})</h1>

            <div className="w-90 gap-4 md:w-3/4 lg:w-2/3">
                {notDeliveredOrders.map((order, index) => (
                    <OrderItem key={index} order={order} />
                ))}
            </div>       
        </div>
    )
}

export default NotDeliveredOrders;