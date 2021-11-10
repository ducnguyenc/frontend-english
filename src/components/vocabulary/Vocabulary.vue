<template>
  <div>
    <div>
      <b-form @submit.prevent="onSubmit">
        <label for="feedback-user">English</label>
        <b-form-input v-model="form.english"></b-form-input>
        <label for="feedback-user">Vietnamese</label>
        <b-form-input v-model="form.vietnamese"></b-form-input>
        <label for="feedback-user">Example</label>
        <b-form-input v-model="form.example"></b-form-input>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </div>

    <div>
      <b-button size="sm" @click="selectAllRows">Select all</b-button>
      <b-button size="sm" @click="deleteAllRows">Delete all</b-button>
    </div>
    <b-row>
      <b-col>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-1 variant="info"
              >Accordion 1</b-button
            >
          </b-card-header>
        </b-card>
      </b-col>
      <b-col>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-2 variant="info"
              >Accordion 2</b-button
            >
          </b-card-header>
        </b-card>
      </b-col>
      <b-col>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-3 variant="info"
              >Accordion 3</b-button
            >
          </b-card-header>
        </b-card>
      </b-col>
      <b-col>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-4 variant="info"
              >Accordion 4</b-button
            >
          </b-card-header>
        </b-card>
      </b-col>
      <b-col>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.accordion-5 variant="info"
              >Accordion 5</b-button
            >
          </b-card-header>
        </b-card>
      </b-col>

      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-table
            :items="items.eday1"
            :fields="efields"
            selectable
            @row-selected="onRowSelected"
          >
            <template #cell(vietnamese)="row">
              <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                {{ row.index + 1 }}
                {{ row.detailsShowing ? "Hide" : "Show" }} Details
              </b-button>
            </template>
            <template #row-details="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Vietnamese:</b></b-col>
                  <b-col>{{ row.item.vietnamese }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Example:</b></b-col>
                  <b-col>{{ row.item.example }}</b-col>
                </b-row>
              </b-card>
            </template>
          </b-table>
          <b-table
            :items="items.vday1"
            :fields="vfields"
            selectable
            @row-selected="onRowSelected"
          >
            <template #cell(english)="row">
              {{ row.index + 1 }}
              <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                {{ row.detailsShowing ? "Hide" : "Show" }} Details
              </b-button>
            </template>
            <template #row-details="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>English:</b></b-col>
                  <b-col>{{ row.item.english }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Spell:</b></b-col>
                  <b-col>{{ row.item.spell }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Example:</b></b-col>
                  <b-col>{{ row.item.example }}</b-col>
                </b-row>
              </b-card>
            </template>
          </b-table>
        </b-card-body>
      </b-collapse>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-table
            :items="items.eday2"
            :fields="efields"
            selectable
            @row-selected="onRowSelected"
          >
            <template #cell(vietnamese)="row">
              <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                {{ row.detailsShowing ? "Hide" : "Show" }} Details
              </b-button>
            </template>
            <template #row-details="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Vietnamese:</b></b-col>
                  <b-col>{{ row.item.vietnamese }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Example:</b></b-col>
                  <b-col>{{ row.item.example }}</b-col>
                </b-row>
              </b-card>
            </template>
          </b-table>
          <b-table
            :items="items.vday2"
            :fields="vfields"
            selectable
            @row-selected="onRowSelected"
          >
            <template #cell(english)="row">
              {{ row.index + 1 }}
              <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                {{ row.detailsShowing ? "Hide" : "Show" }} Details
              </b-button>
            </template>
            <template #row-details="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>English:</b></b-col>
                  <b-col>{{ row.item.english }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Spell:</b></b-col>
                  <b-col>{{ row.item.spell }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Example:</b></b-col>
                  <b-col>{{ row.item.example }}</b-col>
                </b-row>
              </b-card>
            </template>
          </b-table>
        </b-card-body>
      </b-collapse>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-table
            :items="items.eday3"
            :fields="efields"
            selectable
            @row-selected="onRowSelected"
          >
            <template #cell(vietnamese)="row">
              <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                {{ row.detailsShowing ? "Hide" : "Show" }} Details
              </b-button>
            </template>
            <template #row-details="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Vietnamese:</b></b-col>
                  <b-col>{{ row.item.vietnamese }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Example:</b></b-col>
                  <b-col>{{ row.item.example }}</b-col>
                </b-row>
              </b-card>
            </template>
          </b-table>
          <b-table
            :items="items.vday3"
            :fields="vfields"
            selectable
            @row-selected="onRowSelected"
          >
            <template #cell(english)="row">
              {{ row.index + 1 }}
              <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                {{ row.detailsShowing ? "Hide" : "Show" }} Details
              </b-button>
            </template>
            <template #row-details="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>English:</b></b-col>
                  <b-col>{{ row.item.english }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Spell:</b></b-col>
                  <b-col>{{ row.item.spell }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Example:</b></b-col>
                  <b-col>{{ row.item.example }}</b-col>
                </b-row>
              </b-card>
            </template>
          </b-table>
        </b-card-body>
      </b-collapse>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-table
            :items="items.eday4"
            :fields="efields"
            selectable
            @row-selected="onRowSelected"
          >
            <template #cell(vietnamese)="row">
              <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                {{ row.detailsShowing ? "Hide" : "Show" }} Details
              </b-button>
            </template>
            <template #row-details="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Vietnamese:</b></b-col>
                  <b-col>{{ row.item.vietnamese }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Example:</b></b-col>
                  <b-col>{{ row.item.example }}</b-col>
                </b-row>
              </b-card>
            </template>
          </b-table>
          <b-table
            :items="items.vday4"
            :fields="vfields"
            selectable
            @row-selected="onRowSelected"
          >
            <template #cell(english)="row">
              {{ row.index + 1 }}
              <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                {{ row.detailsShowing ? "Hide" : "Show" }} Details
              </b-button>
            </template>
            <template #row-details="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>English:</b></b-col>
                  <b-col>{{ row.item.english }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Spell:</b></b-col>
                  <b-col>{{ row.item.spell }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Example:</b></b-col>
                  <b-col>{{ row.item.example }}</b-col>
                </b-row>
              </b-card>
            </template>
          </b-table>
        </b-card-body>
      </b-collapse>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-table
            :items="items.eday5"
            :fields="efields"
            selectable
            @row-selected="onRowSelected"
          >
            <template #cell(vietnamese)="row">
              <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                {{ row.detailsShowing ? "Hide" : "Show" }} Details
              </b-button>
            </template>
            <template #row-details="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Vietnamese:</b></b-col>
                  <b-col>{{ row.item.vietnamese }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Example:</b></b-col>
                  <b-col>{{ row.item.example }}</b-col>
                </b-row>
              </b-card>
            </template>
          </b-table>
          <b-table
            :items="items.vday5"
            :fields="vfields"
            selectable
            @row-selected="onRowSelected"
          >
            <template #cell(english)="row">
              {{ row.index + 1 }}
              <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                {{ row.detailsShowing ? "Hide" : "Show" }} Details
              </b-button>
            </template>
            <template #row-details="row">
              <b-card>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>English:</b></b-col>
                  <b-col>{{ row.item.english }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Spell:</b></b-col>
                  <b-col>{{ row.item.spell }}</b-col>
                </b-row>
                <b-row class="mb-2">
                  <b-col sm="3" class="text-sm-right"><b>Example:</b></b-col>
                  <b-col>{{ row.item.example }}</b-col>
                </b-row>
              </b-card>
            </template>
          </b-table>
        </b-card-body>
      </b-collapse>
    </b-row>
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
      efields: ["english", "spell", "vietnamese"],
      vfields: ["english", "vietnamese"],
      items: {
        eday1: [],
        vday1: [],
        eday2: [],
        vday2: [],
        eday3: [],
        vday3: [],
        eday4: [],
        vday4: [],
        eday5: [],
        vday5: [],
      },
      selected: [],
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `,
      days: [1, 2, 3, 4, 5],
      form: {
        english: "",
        vietnamese: "",
        example: "",
      },
    };
  },
  mounted() {
    this.login();
  },
  methods: {
    login: function () {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .get("/api/english/vocabulary")
          .then((response) => {
            console.log(response);
            this.items.eday1 = JSON.parse(response.data[1][0]);
            this.items.vday1 = JSON.parse(response.data[1][1]);
            this.items.eday2 = JSON.parse(response.data[2][0]);
            this.items.vday2 = JSON.parse(response.data[2][1]);
            this.items.eday3 = JSON.parse(response.data[3][0]);
            this.items.vday3 = JSON.parse(response.data[3][1]);
            this.items.eday4 = JSON.parse(response.data[4][0]);
            this.items.vday4 = JSON.parse(response.data[4][1]);
            this.items.eday5 = JSON.parse(response.data[5][0]);
            this.items.vday5 = JSON.parse(response.data[5][1]);
          })
          .catch(function (error) {
            console.log(error);
          });
        console.log(response);
      });
    },

    onRowSelected(items) {
      this.selected = items;
      console.log(items);
    },

    selectAllRows() {
      axios
        .post("/api/english/vocabulary/forward", this.selected)
        .then((response) => {
          console.log("success", response);
          this.$router.go();
        })
        .catch(function (error) {
          console.log("ERRRR", error);
        });
    },

    deleteAllRows() {
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post("/api/english/vocabulary/delete", this.selected)
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

    onSubmit() {
      console.log(this.form);
      axios.get("/sanctum/csrf-cookie").then((response) => {
        axios
          .post("/api/english/vocabulary", this.form)
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