<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Bệnh viện</th>
        <th scope="col">Ngày khám</th>
        <th scope="col">Chẩn đoán</th>
        <th scope="col">Thuốc</th>
        <th scope="col">Lời khuyên</th>
        <th scope="col">Hành động</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in datas" :key="item.id">
        <th scope="col">{{ index + 1 }}</th>
        <th scope="col">{{ item.hospital }}</th>
        <th class="col-1">{{ item.day_examination }}</th>
        <th scope="col">{{ item.diagnose }}</th>
        <th class="col-5">
          <table class="table table-striped">
            <tbody>
              <tr v-for="drug in item.drugs" :key="drug.id">
                <th scope="col">{{ drug.name }}</th>
                <th class="col-1">{{ drug.number }}</th>
                <th class="col-1">{{ drug.unit }}</th>
              </tr>
            </tbody>
          </table>
        </th>
        <th scope="col">{{ item.advice }}</th>
        <th scope="col">
          <button type="button" class="btn btn-danger" @click="Delete(item.id)">
            Xóa
          </button>
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script>
const axios = require("axios/index");
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://english-english.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:8000";

export default {
  data() {
    return {
      datas: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList: function () {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .get("/api/sick/sinus")
          .then((response) => {
            this.datas = response.data;
            console.log(this.datas);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(response);
      });
    },

    Delete(id) {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .delete("/api/sick/sinus/" + id)
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