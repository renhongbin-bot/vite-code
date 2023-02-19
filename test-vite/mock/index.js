import mockjs from "mockjs"

const userList = mockjs.mock({
  "data|100": [
    {
      cname: '@cname', //'@cname' 表示生成100个不同的中文名
      ename: '@name',  //'@cname' 表示生成100个不同的英文名
      "id|+1": 1 //id自增
    }
  ]
})

module.exports = [
  {
    method: 'post',
    url: '/api/users',
    response: ({ body }) => {
      return {
        code: 200,
        msg: 'success',
        data: userList
      }
    }
  }
]