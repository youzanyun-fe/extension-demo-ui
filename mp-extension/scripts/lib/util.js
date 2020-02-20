module.exports = {
  setSubPackageCacheGroup(ctx, appJSON) {
    let {
      subPackages
    } = appJSON
    let groups = {}

    const fn = (module, root) => {
      return ctx.moduleOnlyUsedBySubPackage(module, root)
    }

    for (const {
      root
    } of subPackages) {
      let name = root.replace('/', '')

      groups[`${name}Commons`] = {
        name: `${root}/commonchunks`,
        chunks: 'initial',
        minSize: 0,
        minChunks: 1,
        test: module => fn(module, root + '/'),
        priority: 3
      }
    }

    return groups
  }
}