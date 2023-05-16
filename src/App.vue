<template>
    <div id="app" style="margin-top: 10px">
        <van-nav-bar
                title="Title"
                left-text="Back"
                right-text="Button"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />
        <van-popup v-model="show" round position="bottom"  :style="{ height: height + '%' }" >
            <h6 style="margin: 10px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores cumque dolores eaque illo quam. Amet ducimus eaque natus perspiciatis quia quo recusandae repellendus veniam. Accusantium dolore eius rerum ut voluptatibus.</h6>
            <van-divider />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi delectus deleniti harum illo nam praesentium quasi reprehenderit. Aut doloremque ea esse ex molestias officiis omnis pariatur possimus tempore ut?
        </van-popup>
    </div>
</template>


<script>
import {Toast} from 'vant';

export default {
    data() {
        return {
            show: false,
            height: 45
        }
    },
    created() {

    },
    methods: {
        onClickLeft() {
            Toast('Back');
        },
        onClickRight() {
            Toast('Button');
            this.show = true
        },
    }
}
</script>

