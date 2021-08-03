<template>
  <div>
    <div>
      <b-button size="sm" @click="selectAllRows">Select all</b-button>
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
            :items="items.day1"
            :fields="fields"
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
              </b-card>
            </template>
          </b-table>
        </b-card-body>
      </b-collapse>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-table
            :items="items.day2"
            :fields="fields"
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
              </b-card>
            </template>
          </b-table>
        </b-card-body>
      </b-collapse>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-table
            :items="items.day3"
            :fields="fields"
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
              </b-card>
            </template>
          </b-table>
        </b-card-body>
      </b-collapse>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-table
            :items="items.day4"
            :fields="fields"
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
              </b-card>
            </template>
          </b-table>
        </b-card-body>
      </b-collapse>
      <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-table
            :items="items.day5"
            :fields="fields"
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
export default {
  data() {
    return {
      fields: ["english", "spell", "vietnamese"],
      items: {
        day1: [],
        day2: [],
        day3: [],
        day4: [],
        day5: [],
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
    };
  },
  mounted() {
    this.login();
  },
  methods: {
    login: function () {
      axios
        .get("http://127.0.0.1:8000/api/english/vocabulary")
        .then((response) => {
          this.items.day1 = JSON.parse(response.data[1]);
          this.items.day2 = JSON.parse(response.data[2]);
          this.items.day3 = JSON.parse(response.data[3]);
          this.items.day4 = JSON.parse(response.data[4]);
          this.items.day5 = JSON.parse(response.data[5]);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    onRowSelected(items) {
      this.selected = items;
      console.log(items);
    },

    selectAllRows() {
      axios
        .post(
          "http://127.0.0.1:8000/api/english/vocabulary/forward",
          this.selected
        )
        .then((response) => {
          console.log("success", response);
          this.$router.go();
        })
        .catch(function (error) {
          console.log("ERRRR", error);
        });
    },
  },
};
</script>