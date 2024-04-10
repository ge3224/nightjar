// @vitest-environment happy-dom

import { expect, test } from "vitest";
import NewUl from "./ul";
import { GlobalAttributes } from "@/_definitions/attributes";
import { LI, UL } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewUl(document.createElement("li"), {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(UL);
});

test("construction with multiple child nodes", () => {
  const mockChildren = ["foo", "bar", "baz"].map((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  });

  const mockParent = NewUl(mockChildren, {});

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe(LI);
  expect(mockParent.firstElementChild?.textContent).toEqual("foo");
});

test("construction with attributes", () => {
  const mock = NewUl(document.createElement("li"), {
    id: "bar",
    class: "foo bar baz",
  } as GlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
