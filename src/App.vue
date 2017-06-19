<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="">Username</label>
          <input type="text" class="form-control " v-model="user.username">
        </div>
        <div class="form-group">
          <label for="">Email</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <button class="btn btn-primary" @click="showData">Show data</button>
      </div>
    </div>
        <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <ul>
          <li v-for="user in users">{{user.username}}  {{user.email}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        },
        message: '',
        users: []
      }
    },
    methods: {
      submit() {
        this.$http.post('', this.user)
          .then(respu => {
            this.message = 'user sent and saved.'
            console.log(respu)
          })
          .catch(err => {
            this.message = err
          })
      },
      showData() {
        this.$http.get('')
          .then(result => result.json())
          .then(respu2 => {
            this.users = Object.keys(respu2).map(x => respu2[x])
          })
      }
    }
  }

</script>

<style>

</style>