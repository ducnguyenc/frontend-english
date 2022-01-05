<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
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
      </div>
      <div class="col">
        <form @submit.prevent="createFlirt">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Type</label>
            <div class="col-sm-10">
              <select
                class="custom-select"
                size="3"
                multiple
                v-model="flirtStore.type"
              >
                <option
                  v-for="type in typeIndex"
                  :key="type.id"
                  v-bind:value="type.id"
                >
                  {{ type.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Category</label>
            <div class="col-sm-10">
              <select
                class="custom-select"
                size="3"
                multiple
                v-model="flirtStore.category"
              >
                <option
                  v-for="category in categoryIndex"
                  :key="category.id"
                  v-bind:value="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                placeholder="Content"
                v-model="flirtStore.content"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                placeholder="Link"
                v-model="flirtStore.link"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

    <form class="row" @submit.prevent="indexFlirt">
      <div class="col">
        <select
          class="custom-select"
          size="3"
          multiple
          v-model="flirtShow.type"
        >
          <option
            v-for="type in typeIndex"
            :key="type.id"
            v-bind:value="type.id"
          >
            {{ type.name }}
          </option>
        </select>
      </div>
      <div class="col">
        <select
          class="custom-select"
          size="3"
          multiple
          v-model="flirtShow.category"
        >
          <option
            v-for="category in categoryIndex"
            :key="category.id"
            v-bind:value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="Content"
          v-model="flirtShow.content"
        />
      </div>
      <button type="submit" class="btn btn-primary col" style="height: 38px">
        Search
      </button>
    </form>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Type</th>
          <th scope="col">Category</th>
          <th scope="col">Content</th>
          <th scope="col">File</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="flirt in flirtIndex" :key="flirt.id">
          <th scope="row">{{ flirt.id }}</th>
          <td>{{ flirt.type }}</td>
          <td>{{ flirt.category }}</td>
          <td>{{ flirt.content }}</td>
          <td>
            <iframe :src="flirt.link"></iframe>
          </td>
          <td>
            <button
              type="submit"
              class="btn btn-danger col"
              v-on:click="destroyFlirt(flirt.id)"
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
      typeIndex: [],
      typeStore: {
        name: "",
      },
      categoryIndex: [],
      categoryStore: {
        name: "",
      },
      flirtStore: {
        type: [],
        category: [],
        content: "",
        link: "",
      },
      flirtShow: {
        type: [],
        category: [],
        content: "",
        link: "",
      },
      flirtIndex: {},
    };
  },
  mounted() {
    this.indexType();
    this.indexCategory();
    this.indexFlirt();
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

    createFlirt: function () {
      axios
        .post("/api/flirt/flirt", this.flirtStore)
        .then((response) => {
          console.log("success", response);
          this.$router.go();
        })
        .catch(function (error) {
          console.log("ERRRR", error);
        });
    },

    indexFlirt: function () {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        let url = "/api/flirt/flirt?";
        if (this.flirtShow.type.length) {
          url += "type=" + this.flirtShow.type;
        }
        if (this.flirtShow.category.length) {
          url += "category=" + this.flirtShow.category;
        }
        if (this.flirtShow.content.length) {
          url += "content=" + this.flirtShow.content;
        }
        axios
          .get(url)
          .then((response) => {
            this.flirtIndex = response.data;
            console.log(this.flirtIndex);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(response);
      });
    },

    destroyFlirt(id) {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .delete("/api/flirt/flirt/" + id)
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