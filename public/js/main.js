const API = 'https://raw.githubusercontent.com/RuChik152/trainingDatabase/main/files/productDataBase.json';

const app = new Vue({
   el: '#app',
   data: {
      isActiveMenu: false,
      count: 1,
      // product: [],
      // filters: [],
      // usercart:[],
      // userSerach: ''
   },
   methods: {
      activeMenu: function () {
         this.isActiveMenu = !this.isActiveMenu;
      },
      getJson(url){
         return fetch(url)
             .then(result => result.json())
      },
      postJson(url, data){
        return fetch(url, {
           method: 'POST',
           headers: {
              "Content-Type": "application/json"
           },
           body: JSON.stringify(data)
        }).then(result => result.json());
      },
      putJson(url, data){
        return fetch(url, {
           method: 'PUT',
           headers: {
              "Content-Type": "application/json"
           },
           body: JSON.stringify(data)
        }).then(result => result.json());
      },
      deletJson(url) {
         return fetch(url, {
            method: 'DELETE',
            headers: {
               "Content-Type": "application/json"
            }
            // body: JSON.stringify(data)
         }).then(result => result.json());
      },
      filterProduct(){
         let regexp = new RegExp(this.userSerach, 'i');
         this.product = this.filters.filter(item => regexp.test(item.product_name));
      }
   },
   mounted(){
      // this.getJson(`${API}`).then(data => {
      //    for(let item of data){
      //       this.$data.product.push(item);
      //       this.$data.filters.push(item);
      //    }
      // });
      // this.getJson(`./db/userCart.json`).then(data => {
      //    for (let item of data){
      //       this.$data.usercart.push(item);
      //    }
      // })

   }
});