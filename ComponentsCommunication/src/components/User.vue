<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName"> Change my name </button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail v-bind:name="name"></app-user-detail> <!-- v-bind:name="name" = :name="name" où "name" est la donnée name au sein de l'instance, utiliser name="Charles" pour passer une valeur en dure -->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
      data() {
        return {
          name: "Charles"
        }
      },
      methods: {
        changeName() {
          this.name = "Robert"
        }
      },
      components: {
          appUserDetail: UserDetail,
          appUserEdit: UserEdit
      }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
