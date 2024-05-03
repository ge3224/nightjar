// @vitest-environment happy-dom

import { expect, test } from "vitest";
import {
  GlobalAttributes,
  NumberingTypeAttribute,
} from "@/_definitions/attributes";
import NewOl from "./ol";
import { LI, OL } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewOl(document.createElement("li"), {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(OL);
});

test("construction with multiple child nodes", () => {
  const mockChildren = ["foo", "bar", "baz"].map((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  });

  const mockParent = NewOl(mockChildren, {});

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe(LI);
  expect(mockParent.firstElementChild?.textContent).toEqual("foo");
});

test("construction with attributes", () => {
  const mockChildren = ["foo", "bar", "baz"].map((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  });

  const mock = NewOl(mockChildren, {
    id: "bar",
    class: "foo bar baz",
    reversed: true,
    start: 4,
    type: NumberingTypeAttribute.lowercaseLetters,
  } as GlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
  expect(mock.reversed).toBe(true);
  expect(mock.getAttribute("start")).toBe("4");
  expect(mock.getAttribute("type")).toBe("a");
});
