import request from '@/utils/request'

// 获取文章列表
export function getArticles (params) {
  return request({
    url: '/v0/articles',
    params
  })
}