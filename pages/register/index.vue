<template>
  <div class="md-layout md-alignment-center-center" style="height: 100vh!important;">
    <md-card class="md-layout-item md-size-50">
      <md-card-header>
        <div class="md-title">Register</div>
      </md-card-header>
      <!-- register form -->
      <form @submit.prevent="registerUsers">
        <md-card-content>
          <md-field md-clearable>
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" />
          </md-field>

          <md-field>
            <label for="password">Password</label>
            <md-input type="password" id="password" name="password" />
          </md-field>
        </md-card-content>
        <md-card-actions>
          <md-button to="/login">Go to Login</md-button>
          <md-button class="md-primary-md-raised" type="submit">Submit</md-button>
        </md-card-actions>
      </form>
    </md-card>
  </div>
</template>

<script>
    export default {
        data: () => ({
          form: {
            email:'',
            password:'',
          }
        }),
      methods: {
          async registerUsers() {
            await this.$store.dispatch('authenticateUser', {
              email: this.form.email,
              password: this.form.password,
              returnSecureToken: true
            })
          }
      }
    }
</script>

<style scoped>

</style>
