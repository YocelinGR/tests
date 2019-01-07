<template>
  <div class="column companies is-half">
    <EnterpriseBanner></EnterpriseBanner>
    <ItemCompany></ItemCompany>
    <ItemCompany></ItemCompany>
    <ItemCompany></ItemCompany>
  </div>
</template>

<script>
import EnterpriseBanner from "./EnterpriseBanner.vue";
import ItemCompany from "./ItemCompany.vue";

export default {
  props: ["company"],
  data: function() {
    return {
      companysData: this.company
    };
  },
  components: {
    EnterpriseBanner: EnterpriseBanner,
    ItemCompany: ItemCompany
  },
  mounted() {
    this.companysData = JSON.parse(localStorage.getItem("companies"));
  }
};
</script>

