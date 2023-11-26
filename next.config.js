const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.wgu.edu',
                port: '',
                pathname: '/content/**',
            },
        ],
    },
    theme:{
        extend:{
            backgroundImage: {
                'bg' : "url('/bg.png')",
                'bg2' : "url('/bg2.png')",
            }
        }
    }
}

module.exports = nextConfig
