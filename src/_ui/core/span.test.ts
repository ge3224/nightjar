// @vitest-environment happy-dom

import { expect, test } from "vitest";
import NewSpan from "./span";
import { GlobalAttributes } from "@/_definitions/attributes";
import { SPAN } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewSpan("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(SPAN);
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChild = document.createElement("span");
  mockChild.textContent = "foo";

  const mockParent = NewSpan(mockChild, {});

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe(SPAN);
  expect(mockParent.firstElementChild?.textContent).toEqual(
    mockChild.textContent
  );
});

test("construction with attributes", () => {
  const mock = NewSpan("foo", {
    id: "bar",
    class: "foo bar baz",
  } as GlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
