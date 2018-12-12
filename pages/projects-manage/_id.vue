<template>
    <div class="single-project">
        <div class="project-title">
            <b-container>
                <b-row>
                    <h2>{{project.name}}</h2>
                </b-row>
            </b-container>
        </div>
        <b-container>
            <b-row>
                <b-form class="edit" v-if="project.name" @submit="onSubmit">
                    <b-container class="bv-example-row">
                        <b-row>
                            <b-col cols="8">
                                <!--input checkbox-->
                                <b-form-group id="exampleGroup4">
                                    <b-container class="bv-example-row">
                                        <b-row>
                                            <b-col cols="2"><label>Active</label></b-col>
                                            <b-col cols="10">
                                                <toggle @toggle="toggle" :is_active="project.is_active"></toggle>
                                            </b-col>
                                        </b-row>
                                    </b-container>
                                </b-form-group>
                                <!--input title-->
                                <b-form-group id="project-name">
                                    <b-container class="bv-example-row">
                                        <b-row>
                                            <b-col cols="2">
                                                <label>Name</label>
                                            </b-col>
                                            <b-col cols="10">
                                                <b-form-input id="name"
                                                              type="text"
                                                              v-model="project.name"
                                                              :value="project.name"
                                                              required
                                                              placeholder="Enter name">
                                                </b-form-input>
                                            </b-col>
                                        </b-row>
                                    </b-container>
                                </b-form-group>
                            </b-col>
                            <b-col class="avatar">
                                <avatar :size="80" :username="project.name"></avatar>
                            </b-col>
                        </b-row>
                    </b-container>
                    <b-container>
                        <b-col>
                            <b-form-group>
                                <div class="add-watcher">
                                    <toggle :toggled="false"></toggle>
                                    <label>Add me as watcher to tickets created by others</label>
                                </div>
                            </b-form-group>
                        </b-col>
                        <b-col class="button-container">
                            <b-row>
                                <b-col cols="6">
                                    <b-alert
                                            @dismissed="dismissCountDown=0"
                                            @dismiss-count-down="countDownChanged"
                                            :show="dismissCountDown"
                                            variant="success">
                                        Project successfully saved
                                    </b-alert>
                                </b-col>
                                <b-col cols="6" class="text-right">
                                    <b-link class="btn btn-secondary" href="/home">Back</b-link>
                                    <b-button type="submit" variant="primary">Submit</b-button>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-container>
                </b-form>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import {resource} from '~/assets/controllers/resource'
    import Avatar from 'vue-avatar'
    import Toggle from '~/components/common/toggle'

    export default {
        middleware: 'auth',
        components: {
            Avatar,
            Toggle
        },
        data() {
            return {
                project: {},
                error: '',
                form: {
                    name: '',
                    is_active: false
                },
                dismissSecs: 3,
                dismissCountDown: 0
            }
        },
        methods: {
            getProject(id) {
                resource.store(id).then(res => {
                    this.project = res.project
                }, err => {
                    this.error = err.toString()
                })
            },
            onSubmit (evt) {
                evt.preventDefault();
                resource.update(this.project.id, this.project).then(res => {
                    this.project = res.project
                    this.dismissCountDown = this.dismissSecs
                }, err => {
                    this.error = err.toString()
                })
            },
            countDownChanged (dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            toggle(val){
                // uncomment for update active status
                // this.project.is_active = val
            }
        },
        created() {
            this.getProject(this.$route.params.id)
        }
    }
</script>

<style lang="scss">
    .single-project {
        padding-top: 47px;

        .project-title {
            background-color: #c1c8d2;
            border-bottom: 1.5px solid #fff;
            h2 {
                line-height: 50px;
                font-size: 18px;
                font-weight: 700;
                margin: 0;
                text-transform: capitalize;
            }
        }

        .edit {
            margin-top: 20px;
            display: block;
            width: 100%;
            padding: 20px;
            color: #000;
            background: #fff;
            -webkit-box-shadow: 0 0 5px 0 rgba(0,0,0,.44);
            box-shadow: 0 0 5px 0 rgba(0,0,0,.44);

            label {
                margin: 0;
                font-size: 14px;
                line-height: 30px;
                display: inline-block;
            }

            .avatar {
                margin: 0 auto;
            }

            #project-name label {
                line-height: 38px;
            }

            .add-watcher {
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-flex-direction: row;
                -ms-flex-direction: row;
                flex-direction: row;
                -webkit-flex-wrap: nowrap;
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
                -webkit-justify-content: flex-start;
                -ms-flex-pack: start;
                justify-content: flex-start;
                -webkit-align-content: center;
                -ms-flex-line-pack: center;
                align-content: center;
                -webkit-align-items: center;
                -ms-flex-align: center;
                align-items: center;

                .toggle, label {
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

                label {
                    padding-left: 10px;
                }
            }

            .button-container {
                .alert {

                    margin: 0;
                    padding: 0 15px;
                    line-height: 36px;
                }
                .btn {
                    width: 100px;
                }
            }
        }
    }
</style>