// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import Br from "./br";

test("basic construction", () => {
  const mock = Br({});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("BR");
});

test("construction with attributes", () => {
  const mock = Br({
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
