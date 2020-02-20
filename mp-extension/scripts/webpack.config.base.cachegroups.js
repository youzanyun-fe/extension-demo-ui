const subpackageNames = [
  'card',
  'paidcontent',
  'shop',
  'trade',
  'ump',
  'user',
  'group-center',
  'member-benefit'
]

const groups = {
  commons: {
    name: 'commons',
    chunks: 'initial',
    minSize: 0,
    minChunks: 2,
    priority: 1,
    maxInitialRequests: 10
  },

  vendors: {
    test: module => !module.isEntryModule() && /\.js$/.test(module.resource) && /[\\/]node_modules[\\/]/.test(module.resource),
    name: 'vendors',
    chunks: 'all',
    maxInitialRequests: 10,
    priority: 1
  },

  // 先强制指定 mobx 只在下单中使用
  // buyStore: {
  //   name: 'packages/order/buy-store',
  //   test: (module) => /mobx/.test(module.resource),
  //   chunks: 'all',
  //   priority: 2
  // },

  showcaseCommons: {
    name: 'showcase',
    test: (module) => /\.js$/.test(module.resource) && (
      /components\/showcase/.test(module.resource) ||
      /node_modules\/@youzan\/feature-adaptor/.test(module.resource) ||
      /node_modules\/@youzan\/captain-weapp/.test(module.resource)
    ),
    chunks: 'all',
    minSize: 0,
    minChunks: 1,
    priority: 3
  }
}

module.exports = groups
