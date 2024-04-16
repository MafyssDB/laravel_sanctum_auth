<script>
export default {
    name: "Registration",
    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
        }
    },
    methods: {
        register() {
            axios.get('/sanctum/csrf-cookie')
                .then(response => {
                    axios.post('/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation
                    }).then(res => {
                        localStorage.setItem('x_xsrf_token',res.config.headers['X-XSRF-TOKEN']);
                        this.$router.push({ name: 'user.personal'})
                    })
                })
        }
    }
}
</script>

<template>
    <div class="w-25 mt-5">
        <input v-model="name" type="text" placeholder="Name" class="form-control mb-2">
        <input v-model="email" type="email" placeholder="Email" class="form-control mb-2">
        <input v-model="password" type="password" placeholder="Password" class="form-control mb-2">
        <input v-model="password_confirmation" type="password" placeholder="Password Confirm"
               class="form-control mb-2">
        <input @click.prevent="register" type="submit" class="btn btn-success" value="Register">
    </div>
</template>

<style scoped>

</style>
