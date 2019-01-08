<template>
  <div class="item company">
    <!--Is needed to change the company class for warehouse class if needed-->
    <button class="select-item" :disabled="!isactive ? '' : disabled" @click="getBranches()">
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
  props: {
    companyId: Number,
    companyName: String,
    companyTask: String,
    gettingBranches: Array
  },
  components: {
    ItemCompanyDisabled: ItemCompanyDisabled
  },
  data: function() {
    return {
      enterpriseName: "",
      isactive: true,
      keyType: "RFC",
      rfc: ""
    };
  },
  mounted() {
    this.enterpriseName = this.companyName;
    this.rfc = this.companyTask;
  },
  computed: {
    getShops() {
      return this.gettingBranches.filter(branch => branch.type == "Shop");
    },
    getStore() {
      return this.gettingBranches.filter(branch => branch.type == "Store");
    },
    getOffice() {
      return this.gettingBranches.filter(branch => branch.type == "Office");
    }
  },
  methods: {
    getBranches() {
      console.log("The enterprise branches is loading");
      let shopsAvailable = this.getShops; // it should be the branch filtered by company
      this.$emit("enterpriseShops", shopsAvailable);
    }
  }
};
</script>

