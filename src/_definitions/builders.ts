import { HTMLElementGlobalAttributes } from "./attributes";

/**
 * Interface for the paragraph element builder object.
 */
export interface ParagraphBuilder {
  attributes: (
    attributes: HTMLElementGlobalAttributes
  ) => ParagraphBuilder;
  children: (
    ...children: Array<string | Node>
  ) => ParagraphBuilder;
  build: () => HTMLParagraphElement;
}
