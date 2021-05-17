import { axios } from 'taro-axios'
// 自版本 0.7.0 起你也可以这样引入:
// import axios from 'taro-axios'

axios
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => {
    console.log(res.data)
  })
