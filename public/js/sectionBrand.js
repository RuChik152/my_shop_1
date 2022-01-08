Vue.component('brand', {
   props: ['active'],
   template: `<section class="brand">
                    <div class="item__bx bx__left">
                        <img class="bx__img" src="img/man.jpg" alt="man">
                    </div>
                    <div class="item__bx bx__right">
                        <div class="bx__right__text">
                            <h1 class="brand__box__title">the brand</h1>
                            <p class="brand__box__text">of luxerious <span>fashion</span></p>
                        </div>
                    </div>
                    <nav_menu :active_menu="active"></nav_menu>
                </section>`
});

Vue.component('nav_menu', {
   props: ['active_menu'],
   template: `<nav v-bind:class="{ navbar__menu__deactive: active_menu }" class="navbar__menu">
                        <button class="navbar__menu__button" onclick="showMenu();" type="submit"><img
                                src="img/close.svg" alt="close"></button>
                        <h2 class="navbar__menu__title">menu</h2>
                        <ul class="menu__list">
                            <li class="menu__list__item">
                                <h3>man</h3>
                                <ul>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Bags</a></li>
                                    <li><a href="#">Denim</a></li>
                                    <li><a href="#">T-Shirts</a></li>
                                </ul>
                            </li>
                            <li class="menu__list__item">
                                <h3>woman</h3>
                                <ul>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Jackets & Coats</a></li>
                                    <li><a href="#">Polos</a></li>
                                    <li><a href="#">T-Shirts</a></li>
                                    <li><a href="#">Shirts</a></li>
                                </ul>
                            </li>
                            <li class="menu__list__item">
                                <h3>kids</h3>
                                <ul>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Jackets & Coats</a></li>
                                    <li><a href="#">Polos</a></li>
                                    <li><a href="#">T-Shirts</a></li>
                                    <li><a href="#">Shirts</a></li>
                                    <li><a href="#">Bags</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>`
});