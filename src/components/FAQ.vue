<template>
  <div>
    <b-row class="my-4">
      <b-col class="mt-4">
        <h1 class="primary">Preguntas Frecuentes</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" lg="6">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.faq-1 variant="primary">
              <b-row>
                <b-col cols="10">
                  {{question1}}
                </b-col>
                <b-col cols="2">
                  <b-icon-caret-down-fill v-if="!visible1"/>
                  <b-icon-caret-up-fill v-if="visible1"/>
                </b-col>
              </b-row>
            </b-button>
          </b-card-header>
          <b-collapse id="faq-1" accordion="my-accordion-faq-1" role="tabpanel" v-model="visible1">
            <b-card-body>
              <b-card-text>{{answer1}}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.faq-2 variant="primary">
              <b-row>
                <b-col cols="10">
                  {{question2}}
                </b-col>
                <b-col cols="2">
                  <b-icon-caret-down-fill v-if="!visible2"/>
                  <b-icon-caret-up-fill v-if="visible2"/>
                </b-col>
              </b-row>
            </b-button>
          </b-card-header>
          <b-collapse id="faq-2" accordion="my-accordion-faq-1" role="tabpanel" v-model="visible2">
            <b-card-body>
              <b-card-text>{{answer2}}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.faq-3 variant="primary">
              <b-row>
                <b-col cols="10">
                  {{question3}}
                </b-col>
                <b-col cols="2">
                  <b-icon-caret-down-fill v-if="!visible3"/>
                  <b-icon-caret-up-fill v-if="visible3"/>
                </b-col>
              </b-row>
            </b-button>
          </b-card-header>
          <b-collapse id="faq-3" accordion="my-accordion-faq-1" role="tabpanel" v-model="visible3">
            <b-card-body>
              <b-card-text>{{answer3}}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
      <b-col md="12" lg="6">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.faq-4 variant="primary">
              <b-row>
                <b-col cols="10">
                  {{question4}}
                </b-col>
                <b-col cols="2">
                  <b-icon-caret-down-fill v-if="!visible4"/>
                  <b-icon-caret-up-fill v-if="visible4"/>
                </b-col>
              </b-row>
            </b-button>
          </b-card-header>
          <b-collapse id="faq-4" visible accordion="my-accordion" role="tabpanel" v-model="visible4">
            <b-card-body>
              <b-card-text>{{answer4}}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.faq-5 variant="primary">
              <b-row>
                <b-col cols="10">
                  {{question5}}
                </b-col>
                <b-col cols="2">
                  <b-icon-caret-down-fill v-if="!visible5"/>
                  <b-icon-caret-up-fill v-if="visible5"/>
                </b-col>
              </b-row>
            </b-button>
          </b-card-header>
          <b-collapse id="faq-5" accordion="my-accordion" role="tabpanel" v-model="visible5">
            <b-card-body>
              <b-card-text>{{answer5}}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle.faq-6 variant="primary">
              <b-row>
                <b-col cols="10">
                  {{question6}}
                </b-col>
                <b-col cols="2">
                  <b-icon-caret-down-fill v-if="!visible6"/>
                  <b-icon-caret-up-fill v-if="visible6"/>
                </b-col>
              </b-row>
            </b-button>
          </b-card-header>
          <b-collapse id="faq-6" accordion="my-accordion" role="tabpanel" v-model="visible6">
            <b-card-body>
              <b-card-text>{{answer6}}</b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'FAQ',
    data(){
      return{
        question1: '',
        answer1: '',
        visible1: false,
        question2: '',
        answer2: '',
        visible2: false,
        question3: '',
        answer3: '',
        visible3: false,
        question4: '',
        answer4: '',
        visible4: false,
        question5: '',
        answer5: '',
        visible5: false,
        question6: '',
        answer6: '',
        visible6: false,
      }
    }
  }
</script>