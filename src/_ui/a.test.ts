// @vitest-environment happy-dom

import { expect, test } from "vitest";
import A from "./a";
import {
  HTMLAnchorElementAttributeTarget,
  HTMLAnchorElementAttributes,
} from "../_definitions/attributes";

test("basic construction", () => {
  const mock = A("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("A");
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChild = document.createElement("span");
  mockChild.textContent = "foo";

  const mockParent = A(mockChild, {});

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe("SPAN");
  expect(mockParent.firstElementChild?.textContent).toEqual(
    mockChild.textContent
  );
});

test("construction with attributes", () => {
  const mock = A("foo", {
    id: "bar",
    href: "https://baz.com",
    target: HTMLAnchorElementAttributeTarget.blank,
  } as HTMLAnchorElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("href")).toBe("https://baz.com");
  expect(mock.getAttribute("target")).toBe(HTMLAnchorElementAttributeTarget.blank);
});
