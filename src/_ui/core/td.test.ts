// @vitest-environment happy-dom

import { expect, test } from "vitest";
import Td from "./td";
import { HTMLTableCellElementAttributes } from "@/_definitions/attributes";

test("basic construction", () => {
  const mock = Td("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("TD");
});

test("construct with children", () => {
  const text = "foo";
  const strong = document.createElement("strong");
  strong.textContent = "bar";
  const em = document.createElement("em");
  em.textContent = "baz";

  const allowedChildrenTypes = [text, strong, em];

  const mockParent = Td(allowedChildrenTypes, {});

  expect(mockParent.childNodes.length).toBeGreaterThan(2);
});

test("construction with attributes", () => {
  const mockAttributes: HTMLTableCellElementAttributes = {
    colspan: 2,
    rowspan: 3,
    headers: "header1 header2",
  };

  const mock = Td("foo", mockAttributes);

  Object.entries(mockAttributes).forEach(([key, value]) => {
    switch (key) {
      default:
        expect(mock.getAttribute(key)).toBe(
          typeof value === "number" ? value.toString() : value
        );
    }
  });
});
