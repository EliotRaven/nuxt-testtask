<template>
    <span class="fa toggle"
          :class="{
              'fa-toggle-on': toggled,
              'fa-toggle-off': !toggled,
              'text-success': toggled,
              'text-muted': !toggled
          }"
          @click="toggle">
    </span>
</template>

<script>
export default {
    props: ['is_active','label'],
    data(){
        return {
            toggled: false
        }
    },
    methods:{
        toggle(){
            this.$emit('toggle', this.toggled = !this.toggled)
        }
    },
    mounted(){
        this.toggled = this.is_active
    }
}
</script>

<style lang="scss" scoped>
    .fa {
        font-size: 30px;
        cursor: pointer;
        -webkit-transition: all .3s;
        -moz-transition: all .3s;
        -ms-transition: all .3s;
        -o-transition: all .3s;
        transition: all .3s;
    }
</style>