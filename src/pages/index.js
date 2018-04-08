import React from 'react'
import Helmet from 'react-helmet'
import Link, { withPrefix } from 'gatsby-link'

import { Emoji } from 'emoji-mart'

import data from '../data'
import favicon from './favicon.ico'
import loadTheme from '../styles/loadTheme'

const IndexPage = () => {
  const theme = loadTheme(data.question.text)
  const cssPath = `/static/css/${theme}.css?v=${data.meta.assetVersion}`

  return (
    <article className="helvetica">
      <Helmet
        title={[data.question.text, 'devquestions'].join(' - ')}
        meta={[{ name: 'description', content: data.meta.text }]}
      >
        <link rel="shortcut icon" type="image/png" href={favicon} />
        <link
          async
          rel="stylesheet"
          href="https://unpkg.com/tachyons@4.9.1/css/tachyons.min.css"
        />
        <link
          async
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
          rel="stylesheet"
        />
        <link async href={withPrefix(cssPath)} rel="stylesheet" />
      </Helmet>
      <header className="vh-100 base00-bg dt w-100">
        <div className="dtc v-mid cover ph3 ph4-m ph5-l">
          <h1 className="f2 f-subheadline-l measure lh-title fw9">
            <a className="link dim base07" href={data.question.url}>
              <Emoji emoji={data.question.emoji} native={true} />{' '}
              {data.question.text} →
            </a>
          </h1>
          <h3 className="base03">{data.meta.text}</h3>
          <h3 className="base03">
            <a className="link dim base08" href={data.meta.tagline.url}>
              {data.meta.tagline.text}
            </a>
          </h3>
        </div>
      </header>
    </article>
  )
}

export default IndexPage
