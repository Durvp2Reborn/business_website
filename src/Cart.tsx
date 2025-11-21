import { useState, useEffect } from "react";

interface Item {
    id: number;
    name: string;
    price: number;
    description: string;
    image?: string;
}

function Cart() {
    const [cart, setCart] = useState<Item[]>([]);


    useEffect(() => {
        const stored = localStorage.getItem("stored");
        if (stored) {
            try {
                setCart(JSON.parse(stored));
            } catch {
                setCart([]);
            }
        }
    }, []);


    function handleRemoveItem(id: number) {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem("stored", JSON.stringify(updatedCart));
    }


    function getCartTotal() {
        return cart.reduce((sum, item) => sum + item.price, 0);
    }

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <div className="cart-list">
                        {cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-media-wrap">
                                    {item.image && (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="cart-item-media"
                                        />
                                    )}
                                </div>
                                <div className="cart-item-details">
                                    <h2>{item.name}</h2>
                                    <p className="muted">{item.description}</p>
                                </div>
                                <div className="cart-item-price">
                                    ${item.price.toFixed(2)}
                                </div>
                                <button
                                    className="btn-secondary"
                                    onClick={() => handleRemoveItem(item.id)}
                                    style={{ marginLeft: "1rem" }}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">Total: ${getCartTotal().toFixed(2)}</div>
                </>
            )}
        </div>
    );
}

export default Cart;