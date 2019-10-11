<template>
  <div>
    <ul>
      <li v-for="item in articlesList" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
import { getArticles } from '@/api/home'
export default {
  name: 'home',
  data() {
    return {
      articlesList: [],
      count: 0
    }
  },
  methods: {
    getArticlesList () {
      getArticles().then(res => {
        this.articlesList = res.articlesList || []
        this.count = res.count || 0
      }).catch(err => console.log(err))
    }
  },
  created () {
    this.getArticlesList()
  }
}
</script>
