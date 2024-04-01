// @vitest-environment happy-dom

import { expect, test } from "vitest";
import NewP from "./p";
import { P, SPAN } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewP()();

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(P);
});

test("construction with a child node", () => {
  const mockChild = document.createElement("span");
  mockChild.textContent = "foo";

  const mockParent = NewP(mockChild)();

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe(SPAN);
  expect(mockParent.firstElementChild?.textContent).toEqual(
    mockChild.textContent
  );
});

test("construction with attributes", () => {
  const mock = NewP("foo", {
    id: "bar",
    class: "foo bar baz",
  })();

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
