// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import NewHr from "./hr";
import { HR } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewHr({});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(HR);
});

test("construction with attributes", () => {
  const mock = NewHr({
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
