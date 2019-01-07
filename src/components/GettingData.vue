<template>
  <div>
    <!-- selecciona sucursal -->
    <div class="select-branch">
      <div class="columns">
        <CompaniesComponent v-bind:company="companies"></CompaniesComponent>
        <BranchesComponent v-bind:company="branches"></BranchesComponent>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CompaniesComponent from "./CompaniesComponent";
import BranchesComponent from "./BranchesComponent";

export default {
  components: {
    BranchesComponent: BranchesComponent,
    CompaniesComponent: CompaniesComponent
  },
  data() {
    return {
      users: {},
      companies: [],
      branches: []
    };
  },
  mounted() {
    let urlBasic = "https://api-test.gestionix.com/api/v3/users/authentication";
    let urlUser = "https://api-test.gestionix.com/api/v3/users/93";
    let urlCompanie = "https://api-test.gestionix.com/api/v3/users/companies";
    let urlBranch = "https://api-test.gestionix.com/api/v3/branch_offices/?";
    axios
      .post(urlBasic, {
        user: "hogar@gestionix.com",
        password: "demo"
      })
      .then(function(response) {
        let accessKey = "Bearer " + response.data.access_token;
        localStorage.setItem("access-token", accessKey);
        axios.defaults.headers.common["Authorization"] = localStorage.getItem(
          "access-token"
        );
        axios
          .get(urlUser)
          .then(function(res) {
            // Get user data. Get n2
            localStorage.setItem("users", JSON.stringify(res.data));
          })
          .catch(function(err) {
            console.log(err);
          });
        axios
          .get(urlCompanie)
          .then(function(resp) {
            // Get Companies data. Get n3
            localStorage.setItem("companies", JSON.stringify(resp.data));
            localStorage.setItem("company-id", resp.data[0].company_id);
            axios.defaults.headers.common["Company"] = localStorage.getItem(
              "company-id"
            );
            axios
              .get(urlBranch)
              .then(function(re) {
                // Get Branches. Get n4
                localStorage.setItem("branches", JSON.stringify(re.data));
              })
              .catch(function(err) {
                console.log(err);
              });
          })
          .catch(function(err) {
            console.log(err);
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>