<template>
  <div class="column branches is-half is-hidden">
    <!--Render Warehouse information-->
    <EnterpriseBanner></EnterpriseBanner>
    <ItemCompany></ItemCompany>
    <!--Render display none mode-->
    <ItemCompany></ItemCompany>
    <!--Render blocked mode-->
    <ItemCompany></ItemCompany>
    <!--Render is active true mode-->
    <hr>
    <!--Render Office information-->
    <EnterpriseBanner></EnterpriseBanner>
    <ItemCompany></ItemCompany>
    <!--Render is active true mode-->
    <ItemCompany></ItemCompany>
    <!--Render blocked mode-->
    <ItemCompany></ItemCompany>
    <!--Render is active true mode-->
    <ItemCompany></ItemCompany>
    <!--Render display none mode-->
    <hr>
    <!--Render Store information-->
    <EnterpriseBanner></EnterpriseBanner>
    <ItemCompany></ItemCompany>
    <!--Render is active true mode-->
    <ItemCompany></ItemCompany>
    <!--Render blocked mode-->
    <ItemCompany></ItemCompany>
    <!--Render display none mode-->
    <ItemCompany></ItemCompany>
    <!--Render display none mode-->
  </div>
</template>

<script>
import EnterpriseBanner from "./EnterpriseBanner.vue";
import ItemCompany from "./ItemCompany";
export default {
  props: ["branch"],
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
  }
};
</script>
