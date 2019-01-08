<template>
  <div class="column branches is-half" v-bind:class="{ 'is-hidden': !isActive }">
    <!--Render Warehouse information-->
    <EnterpriseBanner :bannerName="'Almacenes'"></EnterpriseBanner>
    <div v-for="warehouseBranch in getStore" :key="warehouseBranch.branch_id">
      <ItemCompany
        :companyId="warehouseBranch.branch_id"
        :companyName="warehouseBranch.name"
        :companyTask="warehouseBranch.register_date"
      ></ItemCompany>
    </div>
    <hr>
    <!--Render Office information-->
    <EnterpriseBanner :bannerName="'Oficinas'"></EnterpriseBanner>
    <div v-for="oficeBranch in getOffice" :key="oficeBranch.branch_id">
      <ItemCompany
        :companyId="oficeBranch.branch_id"
        :companyName="oficeBranch.name"
        :companyTask="oficeBranch.register_date"
      ></ItemCompany>
    </div>
    <hr>
    <!--Render Store information-->
    <EnterpriseBanner :bannerName="'Tiendas'"></EnterpriseBanner>
    <div v-for="storeBranch in getShops" :key="storeBranch.branch_id">
      <ItemCompany
        :companyId="storeBranch.branch_id"
        :companyName="storeBranch.name"
        :companyTask="storeBranch.register_date"
      ></ItemCompany>
    </div>
  </div>
</template>

<script>
import EnterpriseBanner from "./EnterpriseBanner.vue";
import ItemCompany from "./ItemCompany";
export default {
  props: {
    isActive: Boolean,
    branchesData: Array
  },
  data: function() {
    return {
      branchesData: this.branch
    };
  },
  mounted() {
    this.branchesData = JSON.parse(localStorage.getItem("branches"));
  },
  components: {
    EnterpriseBanner: EnterpriseBanner,
    ItemCompany: ItemCompany
  },
  computed: {
    getShops() {
      return this.branchesData.filter(branch => branch.type == "Shop");
    },
    getStore() {
      return this.branchesData.filter(branch => branch.type == "Store");
    },
    getOffice() {
      return this.branchesData.filter(branch => branch.type == "Office");
    }
  }
};
</script>
