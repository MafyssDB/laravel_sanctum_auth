<script>
export default {
    name: "Login",
    data() {
        return {
            email: null,
            password: null
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/login', {email: this.email, password: this.password})
                        .then(res => {
                            localStorage.setItem('x_xsrf_token',res.config.headers['X-XSRF-TOKEN']);
                            this.$router.push({ name: 'user.personal'})
                        })
                        .catch(err => {
                            console.log(err.response);
                        })
                })
        }
    }
}
</script>

<template>
    <div class="w-25 mt-5">
        <input v-model="email" type="email" placeholder="Email" class="form-control mb-2">
        <input v-model="password" type="password" placeholder="Password" class="form-control mb-2">
        <input @click.prevent="login" type="submit" class="btn btn-success" value="Login">
    </div>
</template>

<style scoped>

</style>
