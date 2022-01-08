Vue.component('market', {
   props: ['productlist'],
   data(){
     return {
        count: 99999,
        product: [],
        filters: []
     }
   },
   methods: {
       fiterUserProduct(item){
           let regexp = new RegExp(item, 'i');
           this.product = this.filters.filter(item => regexp.test(item.product_name));
       },
      showAddblock(event){
         event.currentTarget.children[1].style.display = 'block';
      },
      noShowAddblock(event){
         event.currentTarget.children[1].style.display = '';
      },
      addToBasket(event){
         console.log(event.currentTarget);
         console.log(event);
      }
   },
   mounted(){
     this.$parent.getJson('/api/getProducts').then(data => {
            for(let item of data){
               this.$data.product.push(item);
               this.$data.filters.push(item);
            }
     })
   },
   template: `<section class="market container">
                    <h2 class="market__title">fetured items</h2>
                    <p class="market__desc">shop for items based on what we featured in this week</p>
                    <ul class="market__product">
                              <li class="market__product__item" v-for="item of product" :data-name="item.product_name" :data-price="item.price" :data-id="item.id">
                                  <a class="product__item" href="#" @mouseover="showAddblock" @mouseout="noShowAddblock">
                                      <img class="product__item__img" src="img/shirt.jpg" alt="shirt">
                                      <div class="product__box__button">
                                          <button type="submit" class="product__item__button" @click.prevent="$root.$refs.headers.addToCart(item)">Add to card</button>
                                      </div>
                                  </a>
                                  <div class="market__product__box">
                                      <a href="#">
                                          <h2 class="product__item__title">{{ item.product_name }}</h2>
                                      </a>
                                      <p class="product__item__desc">Known for her sculptural takes on traditional tailoring,australian arbiter of cool kymelleryteams up with moda operandi.</p>
                                      <p class="product__item__price">$ {{ item.price }}</p>
                                  </div>
                              </li>
                    </ul>
                    <button class="market__button" type="submit">browse all product</button>
                </section>`
});







// <!--                        <li class="market__product__item" data-name='Розовый жакет' data-price="10" data-id="454">-->
// <!--                            <a class="product__item" href="#">-->
// <!--                                <img class="product__item__img" src="img/jacket.jpg" alt="jacket">-->
// <!--                                <div class="product__box__button">-->
// <!--                                    <button type="submit" class="product__item__button">Add to card</button>-->
// <!--                                </div>-->
// <!--                            </a>-->
// <!--                            <div class="market__product__box">-->
// <!--                                <a href="#">-->
// <!--                                    <h2 class="product__item__title">ellery x m'o capsule</h2>-->
// <!--                                </a>-->
// <!--                                <p class="product__item__desc">Known for her sculptural takes on traditional tailoring,-->
// <!--                                    australian arbiter of cool-->
// <!--                                    kym-->
// <!--                                    ellery-->
// <!--                                    teams up with moda operandi.</p>-->
// <!--                                <p class="product__item__price">$52.00</p>-->
// <!--                            </div>-->
// <!--                        </li>-->
// <!--                        <li class="market__product__item" data-name='черное платье' data-price="20" data-id="44">-->
// <!--                            <a class="product__item" href="#">-->
// <!--                                <img class="product__item__img" src="img/the_dress.jpg" alt="the_dress">-->
// <!--                                <div class="product__box__button">-->
// <!--                                    <button type="submit" class="product__item__button">Add to card</button>-->
// <!--                                </div>-->
// <!--                            </a>-->
// <!--                            <div class="market__product__box">-->
// <!--                                <a href="#">-->
// <!--                                    <h2 class="product__item__title">ellery x m'o capsule</h2>-->
// <!--                                </a>-->
// <!--                                <p class="product__item__desc">Known for her sculptural takes on traditional tailoring,-->
// <!--                                    australian arbiter of cool-->
// <!--                                    kym-->
// <!--                                    ellery-->
// <!--                                    teams up with moda operandi.</p>-->
// <!--                                <p class="product__item__price">$52.00</p>-->
// <!--                            </div>-->
// <!--                        </li>-->
// <!--                        <li class="market__product__item" data-name='Белые шорты' data-price="30" data-id="67">-->
// <!--                            <a class="product__item" href="#">-->
// <!--                                <img class="product__item__img" src="img/blouse.jpg" alt="blouse">-->
// <!--                                <div class="product__box__button">-->
// <!--                                    <button type="submit" class="product__item__button">Add to card</button>-->
// <!--                                </div>-->
// <!--                            </a>-->
// <!--                            <div class="market__product__box">-->
// <!--                                <a href="#">-->
// <!--                                    <h2 class="product__item__title">ellery x m'o capsule</h2>-->
// <!--                                </a>-->
// <!--                                <p class="product__item__desc">Known for her sculptural takes on traditional tailoring,-->
// <!--                                    australian arbiter of cool-->
// <!--                                    kym-->
// <!--                                    ellery-->
// <!--                                    teams up with moda operandi.</p>-->
// <!--                                <p class="product__item__price">$52.00</p>-->
// <!--                            </div>-->
// <!--                        </li>-->
// <!--                        <li class="market__product__item">-->
// <!--                            <a class="product__item" href="#">-->
// <!--                                <img class="product__item__img" src="img/pants.jpg" alt="pants">-->
// <!--                                <div class="product__box__button">-->
// <!--                                    <button type="submit" class="product__item__button">Add to card</button>-->
// <!--                                </div>-->
// <!--                            </a>-->
// <!--                            <div class="market__product__box">-->
// <!--                                <a href="#">-->
// <!--                                    <h2 class="product__item__title">ellery x m'o capsule</h2>-->
// <!--                                </a>-->
// <!--                                <p class="product__item__desc">Known for her sculptural takes on traditional tailoring,-->
// <!--                                    australian arbiter of cool-->
// <!--                                    kym-->
// <!--                                    ellery-->
// <!--                                    teams up with moda operandi.</p>-->
// <!--                                <p class="product__item__price">$52.00</p>-->
// <!--                            </div>-->
// <!--                        </li>-->
// <!--                        <li class="market__product__item">-->
// <!--                            <a class="product__item" href="#">-->
// <!--                                <img class="product__item__img" src="img/blazer.jpg" alt="blazer">-->
// <!--                                <div class="product__box__button">-->
// <!--                                    <button type="submit" class="product__item__button">Add to card</button>-->
// <!--                                </div>-->
// <!--                            </a>-->
// <!--                            <div class="market__product__box">-->
// <!--                                <a href="#">-->
// <!--                                    <h2 class="product__item__title">ellery x m'o capsule</h2>-->
// <!--                                </a>-->
// <!--                                <p class="product__item__desc">Known for her sculptural takes on traditional tailoring,-->
// <!--                                    australian arbiter of cool-->
// <!--                                    kym-->
// <!--                                    ellery-->
// <!--                                    teams up with moda operandi.</p>-->
// <!--                                <p class="product__item__price">$52.00</p>-->
// <!--                            </div>-->
// <!--                        </li>-->