
// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import Caption from "./caption";

test("basic construction", () => {
  const mock = Caption("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("CAPTION");
});

test("construction with permitted children", () => {
  const text = "foo";
  const strong = document.createElement("strong");
  strong.textContent = "bar";
  const em = document.createElement("em");
  em.textContent = "baz";

  const allowedChildrenTypes = [text, strong, em];

  const mockParent = Caption(allowedChildrenTypes, {});

  expect(mockParent.childNodes.length).toBeGreaterThan(2);
});

test("construction with attributes", () => {
  const mockAttributes: HTMLElementAttributes = {
  };

  const mock = Caption("foo", mockAttributes);

  Object.entries(mockAttributes).forEach(([key, value]) => {
    switch (key) {
      default:
        expect(mock.getAttribute(key)).toBe(
          typeof value === "number" ? value.toString() : value
        );
    }
  });
});

test("construction with prohibited children", () => {
  const prohibited = [
    document.createElement("style"),
    document.createElement("title"),
  ];

  let mock: HTMLTableCaptionElement;

  prohibited.forEach(node => {
    mock = Caption(node, {});
    expect(mock.childNodes.length).toBeLessThan(1);
  });

  mock = Caption(prohibited, {});

  expect(mock.childNodes.length).toBeLessThan(1);
});
