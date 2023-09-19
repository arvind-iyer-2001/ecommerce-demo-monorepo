const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },    
}

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
      return {
        /* development only config options here */
        ...nextConfig
      }
    }
   
    return {
      /* config options for all phases except development here */
        ...nextConfig
    }
  }
