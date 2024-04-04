// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";
import NewBr from "./br";
import { BR } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewBr({});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(BR);
});

test("construction with attributes", () => {
  const mock = NewBr({
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementGlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
