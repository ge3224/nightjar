// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { GlobalAttributes } from "@/_definitions/attributes";
import NewCaption from "./caption";
import { CAPTION } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewCaption("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(CAPTION);
});

test("construction with permitted children", () => {
  const text = "foo";
  const strong = document.createElement("strong");
  strong.textContent = "bar";
  const em = document.createElement("em");
  em.textContent = "baz";

  const allowedChildrenTypes = [text, strong, em];

  const mockParent = NewCaption(allowedChildrenTypes, {});

  expect(mockParent.childNodes.length).toBeGreaterThan(2);
});

test("construction with attributes", () => {
  const mockAttributes: GlobalAttributes = {};

  const mock = NewCaption("foo", mockAttributes);

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

  prohibited.forEach((node) => {
    mock = NewCaption(node, {});
    expect(mock.childNodes.length).toBeLessThan(1);
  });

  mock = NewCaption(prohibited, {});

  expect(mock.childNodes.length).toBeLessThan(1);
});
