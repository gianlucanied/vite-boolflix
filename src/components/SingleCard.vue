<script>
export default {
    name: 'SingleFilm',
    props: {
        info: Object,
        type: String
    },
    data() {
        return {
            languageFlags: {
                'en': '/en.webp',
                'it': '/it.png',
            },
            defaultFlag: '/bandiera-mondo.jpg', 
        };
    },
    methods: {
        getLanguageFlag(language) {
            return this.languageFlags[language] || this.defaultFlag;
        }
    }
}

</script>

<template>
    <div class="card" v-if="type==='film'">
        <h4>{{ info.original_title }}</h4>
        <h4>{{ info.title }}</h4>
        <img :src="getLanguageFlag(info.original_language)" alt="">
        <h4>{{ info.vote_average }}</h4>
    </div>
    <div class="card" v-else>
        <h4>{{ info.original_name }}</h4>
        <h4>{{ info.name }}</h4>
        <img :src="getLanguageFlag(info.original_language)" alt="">
        <h4>{{ info.vote_average }}</h4>
    </div>
</template>


<style lang="scss" scoped>
img {
    width: 20px;
}

.card {
    border: 1px black solid;
    padding: 10px;
    margin: 20px;
}

</style>