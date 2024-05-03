import { GlobalAttributes } from ".";

export interface HTMLDetailsElementAttributes extends GlobalAttributes {
  /**
   * This Boolean attribute indicates whether the details — that is, the
   * contents of the <details> element — are currently visible. The details are
   * shown when this attribute exists, or hidden when this attribute is absent.
   * By default this attribute is absent which means the details are not visible.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#open)
   */
  open?: boolean;
  /**
   * This attribute enables multiple <details> elements to be connected, with
   * only one open at a time.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name)
   */
  name?: string;
}
