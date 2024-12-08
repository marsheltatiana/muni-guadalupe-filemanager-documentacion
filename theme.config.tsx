import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <img src="https://munifilemanager.vercel.app/_next/image?url=%2Fmuni-guadalupe-logo.png&w=256&q=75" width="95px" />,
  project: {
    link: 'https://munifilemanager.vercel.app/',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://munifilemanager.vercel.app/',
  footer: {
    text: '© Municipalidad Distrital de Guadalupe',
  },
  nextThemes: {
    defaultTheme: 'light'
  },
}

export default config
