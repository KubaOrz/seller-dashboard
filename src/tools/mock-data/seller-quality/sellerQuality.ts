export type SellerQualityAspect = {
    name: string;
    assesment: number;
}

export type SellerQualityCategory = "very-good" | "good" | "bad" | "very-bad";

export type SellerQualityData = {
    clientSupport: SellerQualityAspect,
    prices: SellerQualityAspect,
    deliveryTime: SellerQualityAspect,
    productQuality: SellerQualityAspect,
    respondTime: SellerQualityAspect,
}

export const sellerQualityData: SellerQualityData = {
    clientSupport: {
        name: "Client Support",
        assesment: 4.5,
    },
    prices: {
        name: "Prices",
        assesment: 3.8,
    },
    deliveryTime: {
        name: "Delivery Time",
        assesment: 4.2,
    },
    productQuality: {
        name: "Product Quality",
        assesment: 4.0,
    },
    respondTime: {
        name: "Respond Time",
        assesment: 4.7,
    },
};
