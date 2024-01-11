<script>
export default {
    name: 'SingleFilm',
    props: {
        info: Object
    },
    data() {
        return {
            languageFlags: {
                'en': '/en.webp',
                'it': '/it.png',
            },
            defaultFlag: '/bandiera-pirata.jpg', 
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
    <div>
        <h4>{{ info.original_title }}</h4>
        <h4>{{ info.title }}</h4>
        <img :src="getLanguageFlag(info.original_language)" alt="">
        <h4>{{ info.vote_average }}</h4>
    </div>
</template>


<style lang="scss" scoped>
img {
    width: 20px;
}

</style>