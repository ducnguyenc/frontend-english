<template>
  <div class="container-fluid">
    <form @submit.prevent="createCategory">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Category</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            placeholder="Category"
            v-model="categoryStore.name"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categoryIndex" :key="category.id">
          <th scope="row">{{ category.id }}</th>
          <td>{{ category.name }}</td>
          <td>
            <button
              type="submit"
              class="btn btn-danger col"
              v-on:click="destroyCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const axios = require("axios/index");
axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "http://english-english.herokuapp.com";
axios.defaults.baseURL = "http://localhost:8000";

export default {
  data() {
    return {
      categoryIndex: [],
      categoryStore: {
        name: "",
      },
    };
  },
  mounted() {
    this.indexCategory();
  },
  methods: {
    indexCategory: function () {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .get("/api/flirt/categoryIndex")
          .then((response) => {
            this.categoryIndex = response.data;
            console.log(this.categoryIndex);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(response);
      });
    },

    createCategory: function () {
      axios
        .post("/api/flirt/categoryStore", this.categoryStore)
        .then((response) => {
          console.log("success", response);
          this.$router.go();
        })
        .catch(function (error) {
          console.log("ERRRR", error);
        });
    },

    destroyCategory(id) {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .delete("/api/flirt/destroyCategory/" + id)
          .then((response) => {
            console.log("success", response);
            this.$router.go();
          })
          .catch(function (error) {
            console.log("ERRRR", error);
          });
        console.log("success", response);
      });
    },
  },
};
</script>