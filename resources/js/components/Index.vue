<script>
export default {
    name: "Index",

    data() {
        return {
            token: null
        }
    },
    mounted() {
        this.getToken()
    },
    updated() {
        this.getToken()
    },

    methods: {
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
        },

        logout() {
            axios.post('/logout')
                .then(res => {
                    localStorage.removeItem('x_xsrf_token');
                    this.$router.push({name: 'user.login'})
                })
        }
    }
}
</script>

<template>
    <div>
        <router-link class="me-2" :to="{name: 'get.index'}">Get</router-link>
        <router-link v-if="!token" class="me-2" :to="{name: 'user.login'}">Login</router-link>
        <router-link v-if="!token" class="me-2" :to="{name: 'user.registration'}">Registration</router-link>
        <router-link v-if="token" class="me-2" :to="{name: 'user.personal'}">Personal</router-link>
        <input v-if="token" type="submit" value="Logout" @click.prevent="logout">
        <router-view  :key="$route.fullPath"></router-view>
    </div>
</template>

<style scoped>

</style>
