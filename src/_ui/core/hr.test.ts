// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import Hr from "./hr";

test("basic construction", () => {
  const mock = Hr({});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("HR");
});

test("construction with attributes", () => {
  const mock = Hr({
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
