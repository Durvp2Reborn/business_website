import { useState, useEffect } from "react";

interface Item {
    id: number;
    name: string;
    price: number;
    description?: string;
    image?: string;
}

function Cart() {
    const [cart, setCart] = useState<Item[]>([]);


    useEffect(() => {
        const stored = localStorage.getItem("stored");
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) setCart(parsed);
            } catch {
                setCart([]);
            }
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("stored", JSON.stringify(cart));
    }, [cart]);


    function handleRemoveItem(id: number) {
        const updatedCart = cart.filter((item) => item.id !== id);
        setCart(updatedCart);
    }


    function handleClearCart() {
        const confirmed = window.confirm(
            "Are you sure you want to remove all items from your cart?"
        );
        if (!confirmed) return;
        setCart([]);
    }


    function getCartTotal() {
        return cart.reduce((sum, item) => sum + (item.price || 0), 0);
    }

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                        <div>
                            <strong>{cart.length}</strong> item{cart.length !== 1 ? "s" : ""} in cart
                        </div>
                        <div>
                            <button className="btn-secondary" onClick={handleClearCart} style={{ marginRight: "0.5rem" }}>
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    <div className="cart-list">
                        {cart.map((item) => (
                            <div className="cart-item" key={item.id} style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                                <div className="cart-item-media-wrap" style={{ flex: "0 0 auto" }}>
                                    {item.image ? (
                                        <img src={item.image} alt={item.name} className="cart-item-media" />
                                    ) : (
                                        <div style={{ width: 100, height: 80, background: "#f0f0f0", borderRadius: 6 }} />
                                    )}
                                </div>

                                <div className="cart-item-details" style={{ flex: "1 1 auto" }}>
                                    <h2 style={{ margin: 0, fontSize: "1rem" }}>{item.name}</h2>
                                    {item.description && <p className="muted" style={{ margin: 0 }}>{item.description}</p>}
                                </div>

                                <div style={{ flex: "0 0 auto", textAlign: "right" }}>
                                    <div className="cart-item-price">${item.price.toFixed(2)}</div>
                                    <button className="btn-secondary" onClick={() => handleRemoveItem(item.id)} style={{ marginTop: "0.5rem" }}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-total" style={{ marginTop: "1rem" }}>
                        Total: ${getCartTotal().toFixed(2)}
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
