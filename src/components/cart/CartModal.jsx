
import Cart from "./Cart";

const CartModal = () => {
  return (
    <>
      <input type="checkbox" id="cart-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="cart-modal"
            className="btn btn-sm btn-circle font-extrabold  border-none bg-yellow-500 hover:bg-white  text-red-600 absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="py-1 text-amber-600 font-semibold text-2xl text-center mb-4 ">
            <span className="border-b-2 border-b-amber-600 py-1">
              Shopping Cart
            </span>
          </h3>

          {services?.map((product) => (
            <Cart key={product._id} services={services} product={product} />
          ))}

          <h2 className="text-sm font-semibold mt-8">Sub Total</h2>
          <h2 className="text-sm mb-5 font-semibold text-blue-500">
            <i className="fa-solid fa-bangladeshi-taka-sign"></i>
            <span> {total.toFixed(2)}</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default CartModal;
