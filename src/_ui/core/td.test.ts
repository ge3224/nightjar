// @vitest-environment happy-dom

import { expect, test } from "vitest";
import NewTd from "./td";
import { HTMLTableCellElementAttributes } from "@/_definitions/attributes";
import { TD } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewTd("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(TD);
});

test("construct with children", () => {
  const text = "foo";
  const strong = document.createElement("strong");
  strong.textContent = "bar";
  const em = document.createElement("em");
  em.textContent = "baz";

  const allowedChildrenTypes = [text, strong, em];

  const mockParent = NewTd(allowedChildrenTypes, {});

  expect(mockParent.childNodes.length).toBeGreaterThan(2);
});

test("construction with attributes", () => {
  const mockAttributes: HTMLTableCellElementAttributes = {
    colspan: 2,
    rowspan: 3,
    headers: "header1 header2",
  };

  const mock = NewTd("foo", mockAttributes);

  Object.entries(mockAttributes).forEach(([key, value]) => {
    switch (key) {
      default:
        expect(mock.getAttribute(key)).toBe(
          typeof value === "number" ? value.toString() : value
        );
    }
  });
});
