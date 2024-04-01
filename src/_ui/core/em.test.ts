// @vitest-environment happy-dom

import { expect, test } from "vitest";
import NewEm from "./em";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import { EM, SPAN } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewEm("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(EM);
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChild = document.createElement("span");
  mockChild.textContent = "foo";

  const mockParent = NewEm(mockChild, {});

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe(SPAN);
  expect(mockParent.firstElementChild?.textContent).toEqual(
    mockChild.textContent
  );
});

test("construction with attributes", () => {
  const mock = NewEm("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
