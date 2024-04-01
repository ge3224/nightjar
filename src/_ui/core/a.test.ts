// @vitest-environment happy-dom

import { expect, test } from "vitest";
import NewA from "./a";
import {
  HTMLAnchorElementAttributeTarget,
  HTMLAnchorElementAttributes,
} from "@/_definitions/attributes";
import { A } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewA()();

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(A);
});

test("construction with a child node", () => {
  const mockChild = document.createElement("span");
  mockChild.textContent = "foo";

  const mockParent = NewA(mockChild, {})();

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe("SPAN");
  expect(mockParent.firstElementChild?.textContent).toEqual(
    mockChild.textContent
  );
});

test("construction with attributes", () => {
  const mock = NewA("foo", {
    id: "bar",
    href: "https://baz.com",
    target: HTMLAnchorElementAttributeTarget.blank,
    autofocus: true,
    inert: true,
  } as HTMLAnchorElementAttributes)();

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("href")).toBe("https://baz.com");
  expect(mock.getAttribute("target")).toBe(
    HTMLAnchorElementAttributeTarget.blank
  );
  expect(mock.autofocus).toBe(true);
  expect(mock.inert).toBe(true);
});
