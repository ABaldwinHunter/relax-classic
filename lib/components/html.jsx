import React from 'react';

export default class Html extends React.Component {
  renderTag (tag) {
    tag.props = tag.props || {};
    if (tag.content) {
      tag.props.dangerouslySetInnerHTML = {__html: tag.content};
    }
    return (
      <tag.tag {...tag.props} />
    );
  }

  renderHeader () {
    if (this.props.locals && this.props.locals.header) {
      return this.props.locals.header.map(this.renderTag, this);
    }
  }

  renderFooter () {
    if (this.props.locals && this.props.locals.footer) {
      return this.props.locals.footer.map(this.renderTag, this);
    }
  }

  render () {
    return (
      <html>
        <head>
          {this.renderHeader()}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
          <div id='view' dangerouslySetInnerHTML={{__html: this.props.body}} />
          <script dangerouslySetInnerHTML={{__html: `window.__initialState = ${this.props.props};`}} />
          {this.renderFooter()}
        </body>
      </html>
    );
  }
}
