<template>
    <div id="home">
        <div class="flex-container">
            <div v-for="project in projects" :key="project.id" class="flex-item project">
                <div :class="['item-content', project.is_active ? 'active' : 'inactive']" :style="[project.is_active ? {opacity: 1} : {opacity: .5}]">
                    <div class="flex-container">
                        <div class="flex-item">
                            <div class="avatar-name">
                                <div class="flex-container">
                                    <div class="flex-item">
                                        <img v-if="project.logo_url" :src="project.logo_url" alt="project.name">
                                        <avatar v-else :size="40" :username="project.name"></avatar>
                                    </div>
                                    <div class="flex-item">
                                        <div class="name">
                                            {{project.name}}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-item">
                            <div class="is-active">
                                <div :class="[project.is_active ? 'active' : 'inactive']">
                                    {{project.is_active | isActive}}
                                </div>
                                <div class="users">
                                    {{(project.users.length) ? 'users' : 'No users'}}
                                </div>
                            </div>
                        </div>
                        <div class="flex-item">
                            <div class="timer">
                                <div class="flex-container">
                                    <div class="flex-item">
                                        <div class="time-text">
                                            <div>time this week</div>
                                            <div>this month</div>
                                            <div>total</div>
                                        </div>
                                    </div>
                                    <div class="flex-item">
                                        <div class="time">
                                            <div>{{project.spent_time_week | timeFormat}}</div>
                                            <div>{{project.spent_time_month | timeFormat}}</div>
                                            <div>{{project.spent_time_all | timeFormat}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="link" :href="`/projects-manage/${project.id}`"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {resource} from '~/assets/controllers/resource'
    import Avatar from 'vue-avatar'

    export default {
        middleware: 'auth',
        components: {
            Avatar
        },
        data(){
            return {
                projects: [],
                error: ''
            }
        },
        filters:{
            isActive(isActive){
                return isActive ? 'Active' : 'Inactive'
            },
            timeFormat(time){
                return time ? time : '00:00:00'
            }
        },
        methods: {
            getProjectList(){
                resource.index().then(res => {
                    this.projects = res.projects
                }, err => {
                    this.error = err.toString()
                })
            },

        },
        mounted(){
            this.getProjectList()
        }
    }
</script>

<style lang="scss">
    #home {
        padding-top: 55px;

        .flex-container {
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: column;
            -ms-flex-direction: column;
            flex-direction: column;
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

        .project {
            margin-bottom: 20px;
            width: 80%;
            position: relative;

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
                -webkit-align-content: center;
                -ms-flex-line-pack: center;
                align-content: center;
                -webkit-align-items: center;
                -ms-flex-align: center;
                align-items: center;
            }

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

                &:first-child {
                    max-width: 300px;
                }
            }

            .item-content {
                background-color: #fff;
                border-radius: 3px;
                border: 1px solid #dedede;
                padding: 18px 20px 20px 25px;
                cursor: pointer;
                font-size: .9em;
                height: 90px;
                -webkit-transition: all .3s;
                -moz-transition: all .3s;
                -ms-transition: all .3s;
                -o-transition: all .3s;
                transition: all .3s;
                position: relative;

                &:hover {
                    background: #ececec;
                    cursor: pointer;
                    text-decoration: none;
                    -webkit-box-shadow: 0 0 15px rgba(0,0,0,.2);
                    -moz-box-shadow: 0 0 15px rgba(0,0,0,.2);
                    box-shadow: 0 0 15px rgba(0,0,0,.2);
                }

                &.inactive:hover {
                    -webkit-box-shadow: none;
                    -moz-box-shadow: none;
                    box-shadow: none;
                    background: transparent;
                    cursor: inherit;
                }

                .avatar-name {
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
                        -webkit-align-content: center;
                        -ms-flex-line-pack: center;
                        align-content: center;
                        -webkit-align-items: center;
                        -ms-flex-align: center;
                        align-items: center;
                    }

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

                .name {
                    text-overflow: ellipsis;
                    overflow: hidden;
                    padding-left: 15px;
                    font-weight: 700;
                    font-size: .9em;
                }

                .is-active {
                    font-weight: 700;
                    font-size: .9em;

                    .flex-container {
                        display: -ms-flexbox;
                        display: -webkit-flex;
                        display: flex;
                        -webkit-flex-direction: column;
                        -ms-flex-direction: column;
                        flex-direction: column;
                        -webkit-flex-wrap: nowrap;
                        -ms-flex-wrap: nowrap;
                        flex-wrap: nowrap;
                        -webkit-justify-content: center;
                        -ms-flex-pack: center;
                        justify-content: center;
                        -webkit-align-content: stretch;
                        -ms-flex-line-pack: stretch;
                        align-content: stretch;
                        -webkit-align-items: stretch;
                        -ms-flex-align: stretch;
                        align-items: stretch;
                    }

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
                    .active {
                        color: #008000;
                    }
                    .inactive {
                        color: #777;
                    }
                }

                .timer {
                    .time-text {
                        padding-right: 30px;
                    }

                    .time {
                        font-weight: 700;
                    }
                }
                .link {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    z-index: 9;
                    display: block;
                }
            }
        }


    }
</style>