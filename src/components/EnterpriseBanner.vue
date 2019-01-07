<template>
  <div class="select-title">
    <div
      class="icon"
      :class="[company ? 'companies' : '', warehouse ? 'warehouse' : '', office ? 'offices' : '', store ? 'stores' : '',]"
    ></div>
    <h4 v-if="company">{{selectBranchTitle}}</h4>
    <h4 v-if="warehouse">Almacenes</h4>
    <h4 v-if="office">Oficinas</h4>
    <h4 v-if="store">Tiendas</h4>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      selectBranchTitle: "Empresas",
      enterpriseIcon: "icon warehouse",
      company: true,
      warehouse: false,
      office: false,
      store: false
    };
  }
};
</script>

