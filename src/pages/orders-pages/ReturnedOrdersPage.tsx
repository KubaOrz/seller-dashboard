import { FC, useEffect, useState } from "react";
import { OrderData, orders } from "../../tools/mock-data/orders/orders";
import OrderItem from "../../components/shared/order/OrderItem";

const ReturnedOrdersPage: FC = () => {
    const [refunds, setRefunds] = useState<OrderData[]>([]);

    useEffect(() => {
        const refunds = orders.filter(order => order.returned === false);
        setRefunds(refunds);
    }, [])

    return (
        <div className="flex flex-col gap-4 items-center">
            <h1 className="text-center font-sans text-4xl text-[#10AC98] mb-5">Zwroty ({refunds.length})</h1>

            <div className="w-90 gap-4 md:w-3/4 lg:w-2/3">
                {refunds.map((order, index) => (
                    <OrderItem key={index} order={order} />
                ))}
            </div>       
        </div>
    )
}

export default ReturnedOrdersPage;