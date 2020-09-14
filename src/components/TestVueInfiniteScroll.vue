<template>
  <div class="row">
    
    <div class=" col-3" v-for="(item, $index) in list" :key="$index"  >
      <div >
        <img class="mb-2" :src="item.image" /> <br>
        <a  href="#">
        {{item.description}} </a>
        <br>
        <div class="d-flex flex-row ml-5"> 
          <p> Old Price: {{item.price}} </p> <p class="ml-3"> Selling Price: {{item.selling_price}} </p>
        </div>

      </div>
  
</div>
  

<infinite-loading  v-if="list.length"  @infinite="infiniteHandler"></infinite-loading>
   
  </div>
</template>



<script>

import InfiniteLoading from 'vue-infinite-loading';
import axios from 'axios'


export default {
  
  name: 'InfiniteScroll',
  
  components : {
    InfiniteLoading
  },
   computed: {
    url() {
      return 'https://pim.wforwomanonline.com/pim/pimresponse.php/?service=category&store=1&url_key=sale&page=' +this.page + '&count=20&sort_by=&sort_dir=desc&filter=';
    }
  },
   data() {
    return {
      page: 1,
      list: [],
    };
  },
  created () {
    this.getData () 
  },
  methods: {
    async getData () {
      const response = await axios.get(this.url);
      this.list = response.data.result.products;

    },
    infiniteHandler($state) {
      setTimeout(() => {
        this.page++;
        axios
          .get(this.url)
          .then(response => {
            if (response.data.result.products.length > 1) {
             response.data.result.products.forEach(item => this.list.push(item));
              $state.loaded();
            } else {
              $state.complete();
            }
          })
          .catch(err => {
            console.log(err);
          });
      }, 500);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >


</style>
