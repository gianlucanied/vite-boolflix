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
        },
        divide(value) {
            return value / 2;
        },
    }
}

</script>

<template>
    <div class="card" v-if="type==='film'">
        <img :src="info.poster_path" alt="">
        <h4>{{ info.original_title }}</h4>
        <h4>{{ info.title }}</h4>
        <img class="language" :src="getLanguageFlag(info.original_language)" alt="">
        <h4>{{ divide(info.vote_average) }}</h4>
    </div>
    <div class="card" v-else>
        <h4>{{ info.original_name }}</h4>
        <h4>{{ info.name }}</h4>
        <img class="language" :src="getLanguageFlag(info.original_language)" alt="">
        <h4>{{ divide(info.vote_average) }}</h4>
    </div>
</template>


<style lang="scss" scoped>
.language {
    width: 20px;
}

.card {
    border: 1px black solid;
    padding: 10px;
    margin: 20px;
}

</style>