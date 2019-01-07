<template>
  <div class="item company">
    <!--Is needed to change the company class for warehouse class if needed-->
    <button class="select-item" :disabled="!isactive ? '' : disabled" @click.prevent="getBranches">
      <!-- The button has or not a disabled property-->
      <div class="info">
        <p>
          <strong>{{enterpriseName}}</strong>
          <!--Find the way of use isactive to active the display none property-->
          <!--<span v-bind:style="{ display: none }"></span>-->
          <span v-bind:class="{'on': isactive}"></span>
          <i v-bind:class="{'fas fa-lock': !isactive}"></i>
          <span v-if="keyType == 'RFC'">{{keyType}}: {{rfc}}</span>
          <span v-else-if="keyType == 'Clave'">{{keyType}}: {{warehouseKey}}</span>
        </p>
      </div>
      <div v-if="isactive == false">
        <ItemCompanyDisabled></ItemCompanyDisabled>
      </div>
    </button>
  </div>
</template>
<script>
import ItemCompanyDisabled from "./ItemCompanyDisabled.vue";

export default {
  components: {
    ItemCompanyDisabled: ItemCompanyDisabled
  },
  data: function() {
    return {
      enterpriseName: "",
      isactive: true,
      keyType: "RFC",
      rfc: "POASHF12434",
      warehouseKey: "90078434",
      warehouseTitle: "Almacén Sonora Grill",
      enterpriseData: ""
    };
  },
  mounted() {
    this.enterpriseData = JSON.parse(localStorage.getItem("companies"));
    this.enterpriseName = this.enterpriseData[0].emitter.business_name;
    this.rfc = this.enterpriseData[0].emitter.tax_id;
  },
  methods: {
    getBranches() {
      let branches = JSON.parse(localStorage.getItem("branches"));
      console.log(branches);
    }
  }
};
</script>

