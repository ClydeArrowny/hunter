// Import necessary types and styles
import { QuartzComponentConstructor, QuartzComponentProps } from "./types";
import style from "./styles/footer.scss";
import { version } from "../../package.json";
import * as Component from "./quartz/components";
import Graph, { GraphOptions } from "./path/to/GraphComponent"; // Adjust the import path accordingly

interface Options {
  links: Record<string, string>;
}

export default ((opts?: Options & GraphOptions) => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const year = new Date().getFullYear();
    const links = opts?.links ?? [];

    // Include Component.Graph() in the footer
    const graphComponent = Graph(opts); // Pass the options to the Graph component

    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          Clyde Arrowny, © {year}
        </p>
        {graphComponent} {/* Include the graph component here */}
      </footer>
    );
  }

  Footer.css = style;
  return Footer;
}) satisfies QuartzComponentConstructor;
