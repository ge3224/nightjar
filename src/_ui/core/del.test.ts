/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/del module
 */

import { expect, test } from "vitest";
import NewDel from "./del";
import { DEL } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewDel("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(DEL);
  expect(mock.textContent).toBe("foo");
});

test("construction with attributes", () => {
  const mock = NewDel("foo", {
    id: "bar",
    class: "foo bar baz",
    datetime: "1970-01-01",
    cite: "https://foo.bar.baz",
  });

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});

test("construction with transparent content", () => {
  let element: HTMLModElement;
  let content: string | Node | Array<string | Node>;

  content = document.createElement("a");
  element = NewDel(content);

  expect(element.childNodes.length).toBe(1);

  content = ["foo", document.createElement("a"), document.createElement("ins")];
  element = NewDel(content);

  expect(element.childNodes.length).toBe(content.length);
});

test("construction with non-transparent content", () => {
  let element: HTMLModElement;
  let content: string | Node | Array<string | Node>;

  content = document.createElement("style");
  element = NewDel(content);

  expect(element.childNodes.length).toBe(0);

  content = [
    document.createElement("style"),
    document.createElement("p"),
    document.createElement("div"),
  ];
  element = NewDel(content);
  expect(element.childNodes.length).toBe(0);
});
