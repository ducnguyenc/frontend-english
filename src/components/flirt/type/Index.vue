<template>
  <div class="container-fluid">
    <form @submit.prevent="createType">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Type</label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            placeholder="Type"
            v-model="typeStore.name"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Type</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="type in typeIndex" :key="type.id">
          <th scope="row">{{ type.id }}</th>
          <td>{{ type.name }}</td>
          <td>
            <button
              type="submit"
              class="btn btn-danger col"
              v-on:click="destroyType(type.id)"
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
axios.defaults.baseURL = "http://english-english.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:8000";

export default {
  data() {
    return {
      typeIndex: [],
      typeStore: {
        name: "",
      },
    };
  },
  mounted() {
    this.indexType();
  },
  methods: {
    indexType: function () {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .get("/api/flirt/typeIndex")
          .then((response) => {
            this.typeIndex = response.data;
            console.log(this.typeIndex);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(response);
      });
    },

    createType: function () {
      axios
        .post("/api/flirt/typeStore", this.typeStore)
        .then((response) => {
          console.log("success", response);
          this.$router.go();
        })
        .catch(function (error) {
          console.log("ERRRR", error);
        });
    },

    destroyType(id) {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .delete("/api/flirt/destroyType/" + id)
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