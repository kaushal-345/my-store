const products = [
        { id: 1, 
        name: "Product1", 
        desc:"Lorem ipsum is what i want but im not getting it here", 
        price: 25 },
        { id: 2, 
        name: "Product2",
        desc:"Lorem ipsum is what i want but im not getting it here",
        price: 45 },
        { id: 3, 
        name: "Product3", 
        desc:"Lorem ipsum is what i want but im not getting it here",
        price: 30 },
  ];
  const cart = {};
  const addToCart = (id) => {
    if(!cart[id]) cart[id]=1    
    showCart();
  };

  const decrement = (id) =>{
    cart[id]=cart[id] -1
    cart[id] < 1 && delete cart[id]
    console.log(cart)
    showCart()
  }
  const increment =(id) =>{
    cart[id]=cart[id] +1
    console.log(cart)
    showCart()
  }

  const showCart = () => {
    let str = "";
    products.map((value) => {
      if (cart[value.id]) {
        str += `
        <li>${value.name}-$${value.price}-<button onclick='decrement(${value.id})'>-</button>${cart[value.id]}<button onclick='increment(${value.id})'>+</button>-${value.price*cart[value.id]}</li>
        `;
      }
    });
    divCart.innerHTML = str;
    showTotal()
  };

  const showTotal = () =>{
    let total=products.reduce((sum,value) => {
      // if(cart[value.id]){ return sum + value.price * cart[value.id] }
      // return sum
      return sum + value.price * (cart[value.id]?cart[value.id]:0)
    },0);
    let count = Object.keys(cart).length
    items.innerHTML=count
    // console.log(total)     
    divTotal.innerHTML=`Order Value: $${total}`
  } 

  const showProducts = () => {
    let str = "<div class='row'>";
    products.map((value) => {
      str += `
      <div class='box'>
        <h3>${value.name}</h3>
        <p>${value.desc}</p>
        <h4>$${value.price}</h4>
        <button onclick=addToCart(${value.id})>Add to Cart</button>
      </div>
      `;
    });
    divProducts.innerHTML = str +"</div>";
  };

  const displayCart = () => {
    divCartBlock.style.left="70%"
  }

  const hideCart = () => {
    divCartBlock.style.left="100%"
  }
