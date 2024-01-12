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
    }
}

</script>

<template>
    <div class="card" v-if="type==='film'">
        <img :src="info.poster_path" alt="">
        <h4>{{ info.original_title }}</h4>
        <h4>{{ info.title }}</h4>
        <img class="language" :src="getLanguageFlag(info.original_language)" alt="">
        <div class="stelle">
            <span v-if="info.vote_average >= 8">⭐⭐⭐⭐⭐</span>
            <span v-else-if="info.vote_average >= 6">⭐⭐⭐⭐</span>
            <span v-else-if="info.vote_average >= 4">⭐⭐⭐</span>
            <span v-else-if="info.vote_average >= 2">⭐⭐</span>
            <span v-else>⭐</span>
        </div>
    </div>
    <div class="card" v-else>
        <h4>{{ info.original_name }}</h4>
        <h4>{{ info.name }}</h4>
        <img class="language" :src="getLanguageFlag(info.original_language)" alt="">
        <div class="stelle">
            <span v-if="info.vote_average >= 8">⭐⭐⭐⭐⭐</span>
            <span v-else-if="info.vote_average >= 6">⭐⭐⭐⭐</span>
            <span v-else-if="info.vote_average >= 4">⭐⭐⭐</span>
            <span v-else-if="info.vote_average >= 2">⭐⭐</span>
            <span v-else>⭐</span>
        </div>
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