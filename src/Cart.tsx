

function Cart() {




  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map(function(item: any) {
              return (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-media-wrap">
                    <img src={item.image} alt={item.name} className="cart-item-media" />
                  </div>
                  <div className="cart-item-details">
                    <h2>{item.name}</h2>
                    <p className="muted">{item.description}</p>
                  </div>
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>
                </div>
              );
            })}
          </div>
          <div className="cart-total">Total: ${getCartTotal().toFixed(2)}</div>
        </>
      )}
    </div>
  );
}

export default Cart;