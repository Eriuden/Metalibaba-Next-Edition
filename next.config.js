/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        ppr: "incremental"
    },
    devIndicators: {
        appIsrStatus: true,
            buildActivity: true,
            buildActivityPosition: "bottom-right"
    }
}

module.exports = nextConfig
