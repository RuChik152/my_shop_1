Vue.component('headers', {
   props: ['menu'],
   methods: {
      showCart(){
         this.isshow = !this.isshow;
      },
      addToCart(item){
         let change = this.usercart.find(el => el.id === item.id);
         if(change){
            this.$parent.putJson(`/api/cart/${change.id}`, {quantity: 1}).then(data => {
               if(data.result === 1){
                  change.quantity++;
               }
            });

         } else {
            let prod = Object.assign( {quantity: 1}, item);
            this.$parent.postJson('/api/cart/', prod).then(data => {
               if(data.result === 1) {
                  this.usercart.push(prod);
               }
            });
         }
      },
      removeBasket(item){
         let change = this.usercart.find(el => el.id === item.id);
         this.$parent.deletJson(`/api/cart/${change.id}`).then(data => {
            if(data.result === 1){
               this.usercart = data.usercart;
            }
         })
      }
   },
   data(){
     return {
        userSerach: '',
        isshow: false,
        usercart: [],
     }
   },
   mounted(){
     this.$parent.getJson('/api/cart').then(data => {
        for (let item of data){
           this.usercart.push(item);
        }
        console.log(this.usercart);
     })
   },
   template: `<header>
                <div class="navbar container">
                    <div class="navbar__box">
                    
                        <a class="navbar__box__logo navbar__box__item" href="index.html"><img src="img/logo.png" alt="logo"></a>
                        <form class="box__filter" action="/" @submit.prevent="$root.$refs.market.fiterUserProduct(userSerach)">
                            <input type="text" class="search_input" v-model="userSerach">
                            <button type="submit" class="search_button"><img src="img/search.png" alt="search"></button>
                        </form>                     
                    </div>
                    <div class="navbar__box">
                        <btn-menu @menu="menu"></btn-menu>
                        <a class="header__box__profile" href="registration.html"><img src="img/profile.png" alt="profile"></a>
                        <basket @remove="removeBasket" :isshow="isshow" :cart="usercart" @show="showCart"></basket>
                        <a class="header__box__basket" href="#" data-basket="0" @click.prevent="showCart"><img src="img/basket.png" alt="basket"></a>
                    </div>
                </div>
            </header>`
});

Vue.component('btn-menu', {
   template: `<button class="header__box__button" type="submit"><img src="img/button.png" alt="button" @click="$emit('menu')"></button>`
});

Vue.component('basket', {
   props: ['cart', 'isshow'],
   data(){
     return {

     }
   },
   methods: {

   },
   template: `<div class="info__basket" v-show="isshow" @mouseout.stop="$emit('show')">
                  <div class="cart-item" v-for="item of cart">
                       <p>{{ item.price }}</p>
                       <p>{{ item.product_name }}</p>
                       <p>{{ item.quantity }}</p>
                       <button @click.prevent="$emit('remove', item)">X</button>
                  </div>   
                  <div class="info__basket__summ">
                    <p>Итого : </p> <span class="total"></span>
                  </div>
              </div>`
});


