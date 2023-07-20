
let main=document.querySelector('.main');
let html;
products.forEach((k) => {
  let name=`<p class="main-name">${k.name}</p>`	 
  let image=`<img class="main-image" src="${k.image}">`
  html+=`
  <div class="container">
    		<div class="image-container">
              ${image}
    		</div>
    		<div class="name-container">
              ${name}
    		</div>
    		<div class="rating"></div>
    		<div class="quality">
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
    		<div><div class="button-container"></div></div>
    </div>`
})
main.innerHTML=html;
// console.log(html);
