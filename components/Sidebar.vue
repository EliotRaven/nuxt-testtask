<template>
    <aside>
        <div class="flex-container">
            <div class="flex-item">
                <a href="#">
                    <img src="/pad.d4e0ffc.svg" alt="grid">
                </a>
            </div>
            <div v-for="project in projects" :key="project.id" class="flex-item">
                <a href="#">
                    <img v-if="project.logo_url" :src="project.logo_url" alt="project.name">
                    <avatar v-else :size="30" :username="project.name"></avatar>
                </a>
            </div>
        </div>
    </aside>
</template>

<script>
    import Avatar from 'vue-avatar'

    export default {
        components: {
            Avatar
        },
        props: ['projects'],
    }
</script>

<style lang="scss">
    aside {
        background: #fafafa;
        padding-top: 46px;
        border-right: 1.5px solid #ccc;
        border-top-color: transparent;
        width: 70px;
        height: 100%;
        z-index: 2;
        position: fixed;

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
            -webkit-justify-content: space-between;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-align-content: stretch;
            -ms-flex-line-pack: stretch;
            align-content: stretch;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            padding: 10px 0;

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
                padding: 5px 0;

                a {
                    display: block;
                    width: 30px;
                    height: 30px;
                    margin: 0 auto;
                    text-decoration: none;
                    -webkit-border-radius: 100%;
                    -moz-border-radius: 100%;
                    border-radius: 100%;
                    -webkit-transition: all .3s;
                    -moz-transition: all .3s;
                    -ms-transition: all .3s;
                    -o-transition: all .3s;
                    transition: all .3s;

                    &:hover {
                        -webkit-box-shadow: 0 0 15px rgba(0,0,0,.4);
                        -moz-box-shadow: 0 0 15px rgba(0,0,0,.4);
                        box-shadow: 0 0 15px rgba(0,0,0,.4);
                    }

                    span {
                        line-height: 24px;
                    }
                }

                img {
                    width: 30px;
                    height: 30px;
                }

                &:first-child {
                    text-align: center;
                    img {
                        display: inline-block;
                        vertical-align: middle;
                        width: 20px;
                        margin-top: 5px;
                        height: 20px;
                    }

                    a:hover {
                        background: #dbdbdb;
                    }
                }
            }
        }
    }
</style>