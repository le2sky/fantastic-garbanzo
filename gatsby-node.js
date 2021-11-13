// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }
exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage.startsWith("build-javascript")) {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /react-spring/,
                        sideEffects: true
                    }
                ]
            }
        })
    }
}