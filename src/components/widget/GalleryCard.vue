<template>
    <div class="gallery-card">
        <div class="card-image">
            <slot></slot>
        </div>
        <div class="card-content">
            <div class="card-type">
                <span class="category">{{ type }}</span>
            </div>
            <div class="card-title">
                <h2><a href="">{{ title }}</a></h2>
            </div>
            <div class="card-timestamp">
                <p>{{ time }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            type: String,
            time: String
        },

        data() {
            return {

            }
        },

        computed: {

        }
    }
</script>

<style lang="scss">
    .gallery-card {
        background-color: white;
        text-align: center;
        padding: 10px 15px;
        margin: 10px 0px;
        max-height: 960px;
        min-height: 600px;
        .card-image {
            /*height: 360px;*/
            img {
                max-width: 100%;
                max-height: 100%;
                width: auto;
                height: auto;
            }
        }
        .card-content {
            min-height: 100px;
            margin-top: 10px;
            padding: 11px 22px 22px;
            .card-type {
                text-transform: uppercase;
                letter-spacing: .15em;
                .category {
                    display: block;
                    font-size: 11px;
                    color: #b5b5b5;
                    letter-spacing: .05em;
                    padding: 2px 0 7px;
                }
            }
            h2 {
                font: 22px/28px 'minion-pro-n4','minion-pro','Times New Roman',serif;
                margin: 0;
                padding: 4px 0 11px;
            }
            a {
                color: #035ba5;
                text-decoration: none;
            }
        }
    }
</style>