let path = require("path");
const MiniExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

let config = {
  entry: ["babel-polyfill", "./src/components/index.js"],
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "index.js",
    publicPath: "build/"
  },
  devServer: {
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /(node_modules)/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          MiniExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
              publicPath: "images"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts",
          publicPath: "fonts"
        }
      }
    ]
  },
  plugins: [
    new MiniExtractPlugin({ filename: "styles.css" }),
    new OptimizeCSSPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      }
    })
  ]
};

module.exports = (environment, options) => {
  let production = options.mode === "production";

  config.devtool = production ? false : "eval-sourcemap";

  return config;
};
