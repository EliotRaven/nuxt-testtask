<template>
    <header>
        <div class="flex-container">
            <div class="flex-item logo-item">
                <nuxt-link to="/home" class="logo">Q</nuxt-link>
            </div>
            <div class="flex-item">
                <div class="flex-container top-menu">
                    <div class="flex-item" v-if="is_auth"><nuxt-link to="/home">Projects</nuxt-link></div>
                    <div class="flex-item" v-if="is_auth"><a href="#" @click="logout">Logout</a></div>
                    <div class="flex-item" v-if="!is_auth"><nuxt-link to="/login">Login</nuxt-link></div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import { auth } from '~/assets/controllers/auth'
    export default {
        data(){
            return {
                is_auth: ''
            }
        },
        methods: {
            logout(e){
                e.preventDefault()
                auth.logout().then(res => {
                    this.$router.push('/login')
                }, err => {

                })
            }
        },
        mounted(){
            this.is_auth = auth.getToken()
        }
    }
</script>

<style lang="scss">
    header {
        background: #fafafa;
        -webkit-box-shadow: 0 1px 1px #7c7c7c;
        box-shadow: 0 1px 1px #7c7c7c;
        height: 46px;
        position: fixed;
        width: 100%;
        z-index: 103;

        .flex-container {
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-flex-wrap: nowrap;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-align-content: stretch;
            -ms-flex-line-pack: stretch;
            align-content: stretch;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;

            .flex-item {
                -webkit-order: 0;
                -ms-flex-order: 0;
                order: 0;
                -webkit-flex: 0 1 auto;
                -ms-flex: 0 1 auto;
                flex: 0 1 auto;
                -webkit-align-self: auto;
                -ms-flex-item-align: auto;
                align-self: auto;
            }
        }
        
        .logo {
            font-weight: 900;
            color: #2b2b2b;
            text-decoration: none;
            font-size: 30px;
            line-height: 24px;
            text-align: center;
            width: 44px;
            height: 44px;
            display: inline-block;
            padding: 10px 0;
            margin: 0 13px;

            &:hover {
                color: #000;
            }
        }

        .top-menu {
            padding: 10px 0;

            a {
                text-decoration: none;
                text-transform: uppercase;
                font-size: .8em;
                color: #636363;
                padding: 0 15px;
                height: 46px;
            }
        }
    }


</style>