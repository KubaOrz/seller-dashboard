export type OrderData = {
    productName: string;
    price: string;
    orderDate: string;
    address: string;
    clientPhoneNumber: string;
    paid: boolean;
    delivered: boolean;
    returned: boolean;
}

export const orders: OrderData[] = [
    {
      productName: 'Product A',
      price: '49.99',
      orderDate: '2023-03-01',
      address: '123 Main Street, Cityville',
      clientPhoneNumber: '555-1234',
      paid: true,
      delivered: false,
      returned: false,
    },
    {
      productName: 'Product B',
      price: '29.99',
      orderDate: '2023-03-05',
      address: '456 Oak Avenue, Townsville',
      clientPhoneNumber: '555-5678',
      paid: true,
      delivered: true,
      returned: false,
    },
    {
      productName: 'Product C',
      price: '19.99',
      orderDate: '2023-03-10',
      address: '789 Pine Lane, Villagetown',
      clientPhoneNumber: '555-9101',
      paid: true,
      delivered: true,
      returned: true,
    },
    {
      productName: 'Product D',
      price: '39.99',
      orderDate: '2023-03-15',
      address: '101 Cedar Street, Hamletville',
      clientPhoneNumber: '555-1122',
      paid: true,
      delivered: false,
      returned: false,
    },
    {
      productName: 'Product E',
      price: '59.99',
      orderDate: '2023-03-20',
      address: '202 Elm Road, Countryside',
      clientPhoneNumber: '555-3344',
      paid: false,
      delivered: false,
      returned: false,
    },
    {
      productName: 'Product F',
      price: '25.99',
      orderDate: '2023-03-25',
      address: '303 Birch Blvd, Suburbia',
      clientPhoneNumber: '555-5566',
      paid: true,
      delivered: true,
      returned: false,
    },
    {
      productName: 'Product G',
      price: '15.99',
      orderDate: '2023-03-30',
      address: '404 Maple Court, Outskirts',
      clientPhoneNumber: '555-7788',
      paid: true,
      delivered: true,
      returned: true,
    },
    {
      productName: 'Product H',
      price: '35.99',
      orderDate: '2023-04-01',
      address: '505 Pineapple Lane, Seaside',
      clientPhoneNumber: '555-9900',
      paid: false,
      delivered: false,
      returned: false,
    },
    {
      productName: 'Product I',
      price: '45.99',
      orderDate: '2023-04-05',
      address: '606 Oakwood Drive, Mountainside',
      clientPhoneNumber: '555-1122',
      paid: true,
      delivered: true,
      returned: false,
    },
    {
      productName: 'Product J',
      price: '55.99',
      orderDate: '2023-04-10',
      address: '707 Cedar Hill, Riverside',
      clientPhoneNumber: '555-3344',
      paid: true,
      delivered: true,
      returned: true,
    },
  ];