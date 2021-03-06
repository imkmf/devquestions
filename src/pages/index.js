import React from 'react'
import Helmet from 'react-helmet'
import Link, { withPrefix } from 'gatsby-link'

import { Emoji } from 'emoji-mart'

import data from '../data'
import favicon from './favicon.ico'
import loadTheme from '../styles/loadTheme'

const IndexPage = () => {
  const title = [data.question.text, 'devquestions'].join(' - ')
  const theme = loadTheme(data.question.text)
  const cssPath = `/static/css/${theme}.css?v=${data.meta.assetVersion}`
  const oneSignalPath = `/static/js/onesignal.js?v=${data.meta.assetVersion}`
  const coverPath = `https://devquestions.co/static/img/cover.png?v=${
    data.meta.assetVersion
  }`

  return (
    <article className="helvetica">
      <Helmet
        title={title}
        meta={[{ name: 'description', content: data.meta.text }]}
      >
        <link rel="manifest" href={withPrefix('/manifest.json')} />
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async="" />
        <script src={withPrefix(oneSignalPath)} async="" />
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

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={data.meta.text} />
        <meta property="og:url" content={'https://devquestions.co'} />
        <meta property="og:site_name" content={'devquestions.co'} />
        <meta property="og:image" content={coverPath} />
        <meta property="og:image:secure_url" content={coverPath} />
        <meta name="twitter:card" content="summary" />

        <meta name="twitter:description" content={data.meta.text} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content={`@byteconf`} />
        <meta name="twitter:image" content={coverPath} />
      </Helmet>

      <header className="vh-100 dt w-100">
        <div className="dtc v-mid cover ph3 ph4-m ph5-l">
          <h1 className="f2 f-subheadline-l measure lh-title fw9">
            <a className="link dim base07" href={data.question.url}>
              <Emoji emoji={data.question.emoji} native={true} />{' '}
              {data.question.text} →
            </a>
          </h1>
          <h2 className="base03">{data.meta.text}</h2>

          <div className="w-100 h1 base03-bg" />

          <h3 className="base03">
            <a className="link dim base05" href={data.meta.mailer.url}>
              <Emoji emoji="envelope" native={true} /> {data.meta.mailer.text} →
            </a>
          </h3>

          <h3 className="base03">
            <a className="link dim base05" href={data.meta.archive.url}>
              <Emoji emoji="book" native={true} /> {data.meta.archive.text} →
            </a>
          </h3>

          <h3 className="base03">
            <a className="link dim base06" href={data.meta.tagline.url}>
              <Emoji emoji="muscle" native={true} /> {data.meta.tagline.text} →
            </a>
          </h3>
        </div>
      </header>
    </article>
  )
}

export default IndexPage
