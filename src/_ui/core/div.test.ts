// @vitest-environment happy-dom

import { expect, test } from "vitest";
import NewDiv from "./div";
import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";
import { DIV, SPAN } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewDiv("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(DIV);
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChild = document.createElement("span");
  mockChild.textContent = "foo";

  const mockParent = NewDiv(mockChild, {});

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe(SPAN);
  expect(mockParent.firstElementChild?.textContent).toEqual(
    mockChild.textContent
  );
});

test("construction with attributes", () => {
  const mock = NewDiv("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementGlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
