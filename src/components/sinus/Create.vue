<template>
  <div class="container-fluid">
    <b-form @submit.prevent="onSubmit">
      <label>Bệnh viện</label>
      <b-form-input v-model="form.hospital"></b-form-input>
      <label>Ngày khám</label>
      <b-form-input v-model="form.day_examination"></b-form-input>
      <label>Chẩn đoán</label>
      <b-form-input v-model="form.diagnose"></b-form-input>
      <label>Thuốc</label>
      <b-form-input v-model="drug.name"></b-form-input>
      <label>Số lượng</label>
      <b-form-input v-model="drug.number"></b-form-input>
      <label>Đơn vị</label>
      <b-form-input v-model="drug.unit"></b-form-input>
      <label>Lời khuyên</label>
      <b-form-input v-model="form.advice"></b-form-input>
      <b-button type="submit" variant="primary">Lưu</b-button>
    </b-form>
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
      form: {
        hospital: "",
        day_examination: "",
        diagnose: "",
        drug: [],
        advice: "",
      },
      drug: {
        name: "",
        number: "",
        unit: "",
      },
    };
  },
  methods: {
    onSubmit() {
      var drugName = this.drug.name.split(",");
      var drugNumber = this.drug.number.split(",");
      var drugUnit = this.drug.unit.split(",");

      var drug = [];
      for (let i = 0; i < drugName.length; i++) {
        drug[i] = {
          name: drugName[i],
          number: drugNumber[i],
          unit: drugUnit[i],
        };
      }
      this.form.drug = drug;

      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post("/api/sick/sinus", this.form)
          .then((response) => {
            console.log(response);
            this.$router.go();
          })
          .catch(function (error) {
            console.log("ERRRR", error);
          });
        console.log(response);
      });
    },
  },
};
</script>