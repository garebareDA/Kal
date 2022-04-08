/**
 * @type {import('@remix-run/dev').AppConfig}
 */
 module.exports = {
  serverBuildTarget: "netlify",
  server: "./server.js",
  ignoredRouteFiles: [".*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "netlify/functions/server/index.js",
  // publicPath: "/build/",
  // devServerPort: 8002

  serverDependenciesToBundle: [
    /^rehype.*/,
    /^remark.*/,
    /^unified.*/,
    "@zip.js/zip.js",
    "@uiw/react-markdown-preview",
    "@uiw/react-markdown-preview/react-markdown",
    "react-markdown",
    "vfile",
    "vfile-message",
    "unist-util-stringify-position",
    "bail",
    "trough",
    /mark*/,
    /mdast*/,
    /unist*/,
    "space-separated-tokens",
    /comma*/,
    "hast-util-whitespace",
    "property-information",
    "decode-named-character-reference",
    "character-entities",
    "extract-colors",
    "change-image-color",
  ]
};