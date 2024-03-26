// @vitest-environment happy-dom

import { expect, test } from "vitest";
import Iframe from "./iframe";
import {
  HTMLIFrameElementAttributes,
  IFrameAttributeReferrerPolicy,
  IFrameAttributeSandbox,
} from "@/_definitions/attributes/iframe";

test("basic construction", () => {
  const mock = Iframe({});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("IFRAME");
});

test("construction with attributes", () => {
  const mockAttributes: HTMLIFrameElementAttributes = {
    id: "bar",
    class: "foo bar baz",
    allow:
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    src: "https://example.com",
    srcdoc: "<h1>Hello, world!</h1>",
    name: "frame1",
    width: 500,
    height: 300,
    sandbox: IFrameAttributeSandbox.allowSameOrigin,
    loading: "lazy",
    referrerpolicy: IFrameAttributeReferrerPolicy.sameOrigin,
  };

  const mock = Iframe(mockAttributes);

  Object.entries(mockAttributes).forEach(([key, value]) => {
    switch (key) {
      default:
        expect(mock.getAttribute(key.toLowerCase())).toBe(
          typeof value === "number" ? value.toString() : value
        );
    }
  });
});
