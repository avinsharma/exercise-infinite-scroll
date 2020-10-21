<template>
<div class="row">
   <div class="col-md-2  mt-5 pt-5">
    
     <div class=" ml-3 header-title vertical-filters-filters" >FILTERS  <div v-show="queryFilter.length > 0" class=" mt-4 header-clearAllBtn" @click="queryFilter = [], getData(queriedURL())">CLEAR ALL</div> </div>
    
     <div v-for="filter in filters" :key="filter.filter_lable" class="vertical-filters-filters " >
       <div class="vertical-filters-header "> {{filter.filter_lable}}</div>
       <div >
  <div v-for="option in filter.options" :key=option.value class="checkbox-style" >
    <label class="container">{{option.value}}
      <input type="checkbox" @change="check(option)"  :checked="checkIfChecked(option)">
      <span class="checkmark"></span>
    </label>
  </div>
       </div>
     </div>
     <!-- <filter-sidebar /> -->
 

    </div>
  <div class="col-md-10  mt-5 pt-5">
    <div class="row mb-3 pt--5 mt--5">
      <div class="col-md-9"><div v-for="filter in queryFilter" class="pill ml-1 mt-2" :key="filter"> {{filter}} <span @click="removeFilter(filter)"> <i class="fa fa-times" aria-hidden="true"></i></span> </div> </div> 
      <div class="col-md-3">
        <div class="form-group">
        <!-- <label for="exampleFormControlSelect1">Example select</label> -->
        <select class="sort-sortBy" v-model="sort" @change="changedSort" id="exampleFormControlSelect1">
          <option value='asc' >Price (low to high)</option>
          <option value='desc'>Price (high to low)</option>
          <option value='product_position'>Newest</option>
          <option value='discount'>Discount</option>
        </select>
       </div> 
      
      </div>
    </div>

  <div class="row">
    <div class=" col-3 product-base" v-for="(item, $index) in list" :key="$index"  >
      <div >
        <img class="mb-2" :src="item.image"  /> <br>
        <div class="product-productMetaInfo">
          <h4 class="product-product">{{item.description}}</h4>
          <div class="product-price"><span><span class="product-discountedPrice"><!-- react-text: 393 -->Rs. <!-- /react-text --><!-- react-text: 394 -->{{item.price}}<!-- /react-text --></span><span class="product-strike"><!-- react-text: 396 -->Rs. <!-- /react-text --><!-- react-text: 397 -->{{item.selling_price}}<!-- /react-text --></span></span><span class="product-discountPercentage">({{item.discount}}% OFF)</span></div></div>
              </div>
        </div>
  

<infinite-loading  v-if="list.length"  @infinite="infiniteHandler"></infinite-loading>
   
  </div>
  </div>
  

</div>
</template>



<script>

import InfiniteLoading from 'vue-infinite-loading';
// import FilterSidebar from './FilterSidebar.vue';
import axios from 'axios'


export default {
  
  name: 'InfiniteScroll',
  
  components : {
    InfiniteLoading,
    // FilterSidebar
  },
   computed: {
    url() {
      return 'https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=new-arrivals&page=' +this.page + '&count=20&sort_by=&sort_dir=&filter=' ;
    }
  },
   data() {
    return {
      sortQuery:'',
      queryFilter: [],
      sort:'product_position',
      sortDirection:'asc',
      page: 1,
      list: [],
      filters: [],
    };
  },
  created () {
    this.getFilters()
    this.pageReload ()
    this.getData (this.queriedURL()) 
  },
  watch: {
    queryFilter (val) {
    //  localStorage.setItem("queryFilter", JSON.stringify(val));
    this.$router.push({
        path: `/`, 
        query: { 
            sort: this.sort,
            sortDirection: this.sortDirection,
             queryFilter: val,
           
        }
    })
    },
    sort (val) {
       this.$router.push({
        path: `/`, 
        query: { 
            sort: val,
            sortDirection: this.sortDirection,
             queryFilter: this.queryFilter,
           
        }
    })

    },
    sortDirection(val) {
     this.$router.push({
        path: `/`, 
        query: { 
            sort: this.sortDirection,
            sortDirection: val,
             queryFilter: this.queryFilter,
           
        }
    })
    },
    page (val) {
      localStorage.page = val

    }
    

  },

  methods: {
    queriedURL () {
      return 'https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=new-arrivals&page=' +this.page + '&count=20&sort_by=' +this.sortQuery + '&sort_dir=' +this.sortDirection + '&filter=' +this.queryFilter.join(",") ;
 
    },
    pageReload () {
      if(this.$route.query.queryFilter) {
        this.queryFilter = this.$route.query.queryFilter;
      }
      if(this.$route.query.sort) {
        this.sort = this.$route.query.sort;
        this.changedSort()
      }
      if(this.$route.query.sortDirection) {
        this.sortDirection = this.$route.query.sortDirection
      }
      // if(localStorage.page) {
      //   this.page = localStorage.page
      // }
      
    },
    changedSort() {
      
      this.sortQuery = this.sort
      if(this.sort === 'asc') {
        this.sortQuery = 'selling_price'
        this.sortDirection = this.sort
      }
      if(this.sort === 'desc') {
        this.sortQuery = 'selling_price'
        this.sortDirection = this.sort
      }
      this.getData(this.queriedURL())

    },
    checkIfChecked (option) {
      if(this.queryFilter.indexOf(`${option.code}-${option.value}`) === -1) {
         return false        
      }
      else return true

    },
    check (option) {
      if(this.queryFilter.indexOf(`${option.code}-${option.value}`) === -1) {
        this.queryFilter.push(`${option.code}-${option.value}`);
        
      }
      else {
        let index = this.queryFilter.indexOf(`${option.code}-${option.value}`)
        this.queryFilter.splice(index,1)
      }
       this.getData(this.queriedURL())
     
    },
    removeFilter(filter) {
      let index = this.queryFilter.indexOf(filter)
        this.queryFilter.splice(index,1)
        this.getData(this.queriedURL())

    },
    async getFilters () {
    const response = await axios.get(this.url);
     this.filters = response.data.result.filters;
    },
    async getData (url) {
      console.log(url)
      const response = await axios.get(url);
      this.list = response.data.result.products;
      // if(this.filters.length < 1) {
      // this.filters = response.data.result.filters;
      // }

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
<style lang="scss">
@import "@/scss/style.scss";
template {
      font-family: Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
}


</style>
