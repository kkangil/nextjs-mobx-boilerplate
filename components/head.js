import React from "react";
import NextHead from "next/head";

export default class Head extends React.Component {
  render() {
    return (
      <NextHead>
        <meta charSet="UTF-8" />
        <title>{this.props.title || 'nextjs'}</title>
      </NextHead>
    )
  }
}

