<template>
  <div class="column companies is-half">
    <EnterpriseBanner :bannerName="this.componentName"></EnterpriseBanner>
    <div v-for="company in enterpriseData" :key="company.company_id">
      <ItemCompany
        :companyId="company.company_id"
        :companyName="company.emitter.business_name"
        :companyTask="company.emitter.tax_id"
        :gettingBranches="branchesData"
        @enterpriseShops="branchesData =$event"
      ></ItemCompany>
    </div>
  </div>
</template>

<script>
import EnterpriseBanner from "./EnterpriseBanner.vue";
import ItemCompany from "./ItemCompany.vue";

export default {
  props: {
    componentName: String,
    enterpriseData: Array,
    branchesData: Array
  },
  data: function() {
    return {
      indexData: 0
    };
  },
  components: {
    EnterpriseBanner: EnterpriseBanner,
    ItemCompany: ItemCompany
  }
};
</script>

