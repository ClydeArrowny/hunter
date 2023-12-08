// Import necessary types and styles
import { QuartzComponentConstructor, QuartzComponentProps } from "./types";
import style from "./styles/footer.scss";
import { version } from "../../package.json";
import * as Component from "./quartz/components";
import Graph, { GraphOptions } from "./quartz/components";

interface Options {
  links: Record<string, string>;
}

export default ((opts?: Options & GraphOptions) => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const year = new Date().getFullYear();
    const links = opts?.links ?? [];

    const graphComponent = Graph(opts);

    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          Clyde Arrowny, © {year}
        </p>
        {graphComponent} {Component.Graph()}
      </footer>
    );
  }

  Footer.css = style;
  return Footer;
}) satisfies QuartzComponentConstructor;
