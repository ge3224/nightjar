// @vitest-environment happy-dom

import { expect, test } from "vitest";
import NewH from "./h";
import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";
import { H1, SPAN } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewH(1, "foo", {})();

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(H1);
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChild = document.createElement(SPAN);
  mockChild.textContent = "foo";

  const mockParent = NewH(1, mockChild, {})();

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe(SPAN);
  expect(mockParent.firstElementChild?.textContent).toEqual(
    mockChild.textContent
  );
});

test("construction with attributes", () => {
  const mock = NewH(1, "foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementGlobalAttributes)();

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
