<template>
    <div class="paints">
        <div class="col-md-6" v-for="image in imagesPath">
            <gallery-card :title="image.title" :time="image.time" :type="image.type">
                <img :src="image.url" alt="">
            </gallery-card>
        </div>
    </div>
</template>

<script>
    import { GalleryCard } from '../widget/index';
    import imagesPath from '../resource/images';

    export default {
        data() {
            return {
                imagesPath
            }
        },

        components: {
            GalleryCard
        }
    }
</script>

<style scoped>
    .paints {
        position: relative
    }

</style>