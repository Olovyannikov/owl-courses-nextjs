
module.exports = {
    reactStrictMode: true,
    sassOptions: {
        prependData: `
        @import "./src/client/resources/styles/general/mixins.scss";
        `,
    },
}
