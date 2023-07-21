

let html="";
products.forEach((k) => {
  let name=`<p class="main-name" >${k.name}</p>`	 
  let image=`<img class="main-image" src="${k.image}">`
  let rating=`<img class="main-rating" src="product-image/ratings/rating-${(k.rating.stars)*10}.png">`
  html+=`
  <div class="container">
        <div class="image-container">
              ${image}
        </div>
        <div class="name-container">
              ${name}
        </div>
        <div class="rating-count">
                <div>${rating}</div>
               <div class="main-rew">${k.rating.count}</div>
            </div>
            <div class="price">
              $${k.priceCents/100}
            </div>
        <div class="quantity">
          <select>
              <option selected="" value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
        </div>
        <div class="button-container"><button class="buybtn" data-product-name="${k.name}">
          Add to Cart
        </button></div>
    </div>`
});

let main=document.querySelector('.out-container');
main.innerHTML=html;

const cartitem=document.querySelector('.cart-items');
  
let addcartbtn=document.querySelectorAll('.buybtn');

let quantity=0;
  
addcartbtn.forEach((button)=>{
    button.addEventListener('click',(k) => {
      quantity++;
      cartitem.innerHTML=quantity;
      const productname=button.dataset.productName;
      cart.push({
        name:productname,
        quantity:1
      });
      console.log(cart);
    });
  })

