import webpack from "webpack";

import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const tsloader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/
  };

  const babelLoader = {
    test: /\.m?ts$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"]
      }
    }
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: "file-loader"
      }
    ]
  };

  const svgLoader = buildSvgLoader();
  const cssLoader = buildCssLoader(isDev);

  return [babelLoader, tsloader, cssLoader, svgLoader, fileLoader];
}
