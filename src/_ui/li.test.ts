// @vitest-environment happy-dom

import { expect, test } from "vitest";
import Li from "./li";
import { HTMLElementGlobalAttributes } from "../_definitions/element_attributes";

test("basic construction", () => {
  const mock = Li("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("LI");
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChild = document.createElement("span");
  mockChild.textContent = "foo";

  const mockParent = Li(mockChild, {});

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe("SPAN");
  expect(mockParent.firstElementChild?.textContent).toEqual(
    mockChild.textContent
  );
});

test("construction with attributes", () => {
  const mock = Li("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementGlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
