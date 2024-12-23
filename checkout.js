const cart = JSON.parse(localStorage.getItem('cart')) || { cartItems: [] };
const cartItemsContainer = document.getElementById('cart-items-summary');
const checkoutTotalElement = document.getElementById('checkout-total');
const shippingForm = document.getElementById('shipping-form');

// Display Cart Summary on Checkout Page
function displayCartSummary() {
  cartItemsContainer.innerHTML = '';

  if (cart.cartItems.length === 0) {
    cartItemsContainer.innerHTML = '<p>No items in the cart yet.</p>';
    checkoutTotalElement.textContent = '0.00';
    return;
  }

  let total = 0;
  cart.cartItems.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <span>${item.name} (${item.size})</span>
      <span>$${item.price}</span>
    `;
    cartItemsContainer.appendChild(cartItem);
    total += item.price;
  });

  checkoutTotalElement.textContent = total.toFixed(2);
}

// Handle Shipping Form Submission
shippingForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const zip = document.getElementById('zip').value;
  const phone = document.getElementById('phone').value;

  // Display confirmation (could be replaced with a confirmation modal)
  alert(`Thank you for your purchase, ${name}!\n\nYour order will be shipped to:\n${address}, ${city}, ${zip}\nPhone: ${phone}`);

  // Clear cart after successful order
  localStorage.removeItem('cart');
  window.location.href = 'index.html'; // Redirect to home page
});

// Initialize the checkout page
displayCartSummary();