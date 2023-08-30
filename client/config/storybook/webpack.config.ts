import path from "path";
import webpack from "webpack";

import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src")
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  if (config.module?.rules)
    config.module.rules = config.module.rules.map((rule: any) => {
      if (/svg/.test(rule.test as string)) {
        return {
          ...rule,
          exclude: /svg/
        };
      }
      return rule;
    });

  config.module?.rules?.push(buildCssLoader(true));
  config.module?.rules?.push(buildSvgLoader());

  return config;
};
