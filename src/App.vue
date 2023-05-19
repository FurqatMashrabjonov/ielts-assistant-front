<template>
    <div id="app" style="margin-top: 10px">
        <van-nav-bar
                :title="$store.state.title"
                :left-text="isHome ? 'Back' : 'Back'"
                right-text="Next"
                left-arrow
                class="always_on_top"
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />
        <router-view/>
    </div>
</template>


<script>
import {Toast} from 'vant';

export default {
    created() {
        this.$store.commit('setTitle', 'Home')
    },

    computed: {
        isHome() {
            return this.$route.name === 'home'
        }
    },
    methods: {
        onClickLeft() {
            Toast('Back');
            this.$router.push({name: 'home'})

        },
        onClickRight() {
            Toast('Button');
            this.$router.push({name: 'speaking.categories'})
        },
    }
}
</script>


<style>
.always_on_top {
    position: sticky !important;
    top: 0;
    z-index: 50;
}
</style>