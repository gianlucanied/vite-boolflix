<script>
export default {
    name: 'SingleFilm',
    props: {
        info: Object
    }
}
</script>

<template>
<h4>{{ info.original_title }}</h4>
<h4>{{ info.title }}</h4>
<h4>{{ info.original_language }}</h4>
<h4>{{ info.vote_average }}</h4>

</template>

<style lang="scss" scoped>


</style>