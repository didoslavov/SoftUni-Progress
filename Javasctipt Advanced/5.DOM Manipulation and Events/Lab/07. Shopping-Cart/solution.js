function solve() {
   Array.from(document.querySelectorAll('.add-product')).forEach(x => x.addEventListener('click', addToCart));
   document.querySelector('.checkout').addEventListener('click', checkout);

   const buttons = Array.from(document.querySelectorAll('button'));
   const textArea = document.querySelector('textarea');
   const products = new Set();
   let total = [];
   
   function addToCart(e) {
      const productName = e.target.parentElement.parentElement.querySelector('.product-title').textContent;
      const productPrice = e.target.parentElement.parentElement.querySelector('.product-line-price').textContent;
      
      textArea.textContent += `Added ${productName} for ${productPrice} to the cart.\n`

      if (!products.has(productName)) products.add(productName);
      total.push(Number(productPrice));

   }

   function checkout() {
      const totalPrice = total.reduce((acc, x) => acc + x, 0);
      textArea.textContent += `You bought ${Array.from(products).join(', ')} for ${totalPrice.toFixed(2)}.`;

      buttons.forEach(b => b.disabled = true);
   } 
}