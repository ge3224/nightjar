// @vitest-environment happy-dom

import { expect, test } from "vitest";
import H from "./h";
import { HTMLElementAttributes } from "../_definitions/attributes";

test("basic construction", () => {
  const mock = H(1, "foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("H1");
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChild = document.createElement("span");
  mockChild.textContent = "foo";

  const mockParent = H(1, mockChild, {});

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe("SPAN");
  expect(mockParent.firstElementChild?.textContent).toEqual(
    mockChild.textContent
  );
});

test("construction with attributes", () => {
  const mock = H(1, "foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
