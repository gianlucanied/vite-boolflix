<script>
export default {
    name: 'SingleFilm',
    props: {
        info: Object
    },
    data() {
        return {
            languageFlags: {
                'en': '',
                'it': '',
            }
        };
    },
    methods: {
        getLanguageFlag(language) {
            return this.languageFlags[language] || '';
        }
    }
}
</script>

<template>
    <div>
        <img :src="getLanguageFlag(info.original_language)" alt="">
        <h4>{{ info.original_title }}</h4>
        <h4>{{ info.title }}</h4>
        <h4>{{ info.original_language }}</h4>
        <h4>{{ info.vote_average }}</h4>
    </div>
</template>


<style lang="scss" scoped>


</style>