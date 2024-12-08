import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="https://munifilemanager.vercel.app/_next/image?url=%2Fmuni-guadalupe-logo.png&w=256&q=75" width="95px" />,
  project: {
    link: 'https://github.com/myshoefitter/',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/myshoefitter/',
  footer: {
    text: '© mySHOEFITTER GmbH',
  },
  nextThemes: {
    defaultTheme: 'light'
  },
}

export default config
