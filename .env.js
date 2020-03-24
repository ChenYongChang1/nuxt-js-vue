export default {
  dev: {
    server: {
      port: 3000, // default: 3000
      host: 'localhost' // default: localhost
    }, // 项目访问路径
    api: {
      port: '', // default: 3000
      // host: 'https://schoolapi.uat.tifang.online/schoolEdge' // default: localhost
      host: ''
    } // 接口路径
  },
  prod: {
    server: {
      port: 3000, // default: 3000
      host: '0.0.0.0' // default: localhost
    },
    api: {
      port: 3000, // default: 3000
      host: '' // default: localhost
    } // 接口路径
  }
};
