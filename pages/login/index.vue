<template>
    <div id="login">
        <b-form @submit="onSubmit" v-if="show">
            <div class="form-header">
                <h3>Login</h3>
            </div>
            <b-form-group id="email">
                <b-form-input id="emailInput"
                              type="email"
                              v-model="form.email"
                              required
                              placeholder="Enter email">
                </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2">
                <b-form-input id="exampleInput2"
                              type="password"
                              v-model="form.password"
                              required
                              placeholder="Enter password">
                </b-form-input>
            </b-form-group>
            <b-button type="submit">Login</b-button>
        </b-form>
    </div>
</template>

<script>
    import {auth} from "~/assets/controllers/auth";

    export default {
        middleware: 'anonimus',
        data(){
            return {
                form: {
                    email: '',
                    password: '',
                },
                show: true
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault()

                auth.login(this.form).then(res => {
                    this.$router.push('/home')
                }, err => {
                    console.log(err)
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
    #login {
        padding-top: 47px;

        h3 {
            font-size: 1.17em;
            font-weight: 700;
            text-transform: uppercase;
        }

        form {
            margin: 50px auto 0;
            width: 40%;
            min-width: 300px;

            button {
                background: #395378;
                width: 100px;
                font-size: 11px;
                line-height: 20px;
                color: #fff;
                font-weight: 700;
                text-shadow: 1px 1px 1px rgba(0,0,0,.5);
                text-transform: uppercase;
            }
        }
    }
</style>