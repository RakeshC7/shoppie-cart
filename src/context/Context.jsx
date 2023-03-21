import { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import cartReducer from './Reducers';

const Cart = createContext();

const Context = ({ children }) => {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        price: faker.commerce.price(),
        image: faker.image.fashion(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])
    }));

    // console.table(products);
    const [ProductState, dispatchProducts] = useReducer(cartReducer, {
        products: products,
        cart: []
    });

    return  (
        <Cart.Provider value={{ProductState, dispatchProducts}}>
            {children}
        </Cart.Provider>
    );
};

export const CartState = () => {
    return useContext(Cart);
};

export default Context;