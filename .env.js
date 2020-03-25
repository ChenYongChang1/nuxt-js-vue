export default {
  dev: {
    server: {
      port: 3000, // default: 3000
      host: '0.0.0.0' // default: localhost
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
      host: '172.19.203.25' // default: localhost
    },
    api: {
      port: 3000, // default: 3000
      host: '' // default: localhost
    } // 接口路径
  },
  generate: {
    server: {
      port: 3000, // default: 3000
      host: '172.19.203.25' // default: localhost
    },
    api: {
      port: 3000, // default: 3000
      host: '' // default: localhost
    } // 接口路径
  },
};
