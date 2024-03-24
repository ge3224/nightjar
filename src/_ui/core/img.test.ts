// @vitest-environment happy-dom

import { expect, test } from "vitest";
import {
  HTMLImageElementAttributes,
  ImageAttributeCrossorigin,
  ImageAttributeDecoding,
  ImageAttributeFetchpriority,
  ImageAttributeLoading,
  ImageAttributeReferrerpolicy,
} from "@/_definitions/attributes";
import Img from "./img";

test("basic construction", () => {
  const mock = Img({ src: "https://foo.jpg" });

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("IMG");
});

test("construction with attributes", () => {
  const mockAttributes: HTMLImageElementAttributes = {
    alt: "A mock image.",
    class: "foo bar baz",
    crossorigin: ImageAttributeCrossorigin.anonymous,
    decoding: ImageAttributeDecoding.async,
    elementtiming: "label for mock element",
    fetchpriority: ImageAttributeFetchpriority.low,
    height: 100,
    id: "foo",
    ismap: true,
    loading: ImageAttributeLoading.lazy,
    referrerpolicy: ImageAttributeReferrerpolicy.noReferrer,
    sizes: "(max-width: 600px) 100vw, 50vw",
    src: "https://foo.jpg",
    srcset: "mock-320w.jpg 320w, mock-480w.jpg 480w, mock-800w.jpg 800w",
    usemap: "#mock-map",
    width: 100,
  };

  const mock = Img(mockAttributes);

  Object.entries(mockAttributes).forEach(([key, value]) => {
    if (key === "width" || key === "height") {
      expect(mock.getAttribute(key)).toBe(value.toString());
      return;
    } else if (key === "ismap") {
      expect(mock.isMap).toBe(value);
      return;
    }
    expect(mock.getAttribute(key)).toBe(value);
  });
});
