<template>
    <div>
    <nav class="navbar navbar-expand-lg  fixed-top navbar-light bg-light">
        <a class="navbar-brand" href="#"><img src="https://wforwoman.com/images/logo.png" width="40" height="40" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav desktop-main">
            <li class="nav-item active">
                <a class="nav-link " href="#">MEN <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">WOMAN</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">KIDS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">HOME 	&#38; LIVINGS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">OFFERS</a>
            </li>
            </ul>
            <div class='pr-5 ml-5'>
            <input class="desktop-searchBar" placeholder ='Search for products, brands and more' >
        </div>
        <div class='pl-5 ml-5' >
            <i class="fa fa-user fa-lg " style="margin-left:277px;" aria-hidden="true"></i>
            <!-- <i class="fa fa-shopping-bag fa-2x pt--5" style="margin-left:300px; " aria-hidden="true"></i> -->
            <!-- <label class="desktop-userTitle" > Profile </label> -->
        </div>
        <div class='ml-3' >
            <i class="fa  fa-cart-arrow-down fa-lg " aria-hidden="true"></i>
            <!-- <i class="fa fa-shopping-bag fa-2x pt--5" style="margin-left:300px; " aria-hidden="true"></i> -->
            <!-- <label class="desktop-userTitle" > Profile </label> -->
        </div>
        <div class='ml-3' >
            <i class="fa fa-shopping-bag fa-lg" aria-hidden="true"></i>
            <!-- <i class="fa fa-shopping-bag fa-2x pt--5" style="margin-left:300px; " aria-hidden="true"></i> -->
            <!-- <label class="desktop-userTitle" > Profile </label> -->
        </div>
    </div>
  </nav>
    <TestVueInfiniteScroll /> </div>
</template>

<script>
import TestVueInfiniteScroll from './components/TestVueInfiniteScroll'

export default {
  name: 'Container',
  components: {
    TestVueInfiniteScroll
  }
}
</script>

<style lang="scss">
@import "@/scss/style.scss";


</style>