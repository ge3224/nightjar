/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/dfn module
 */

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import Dfn from "./dfn";
import { isPhrasingContent } from "@/_lib/content";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = Dfn("foo");

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("DFN");
  expect(mock.textContent).toBe("foo");
});

test("construction with attributes", () => {
  const mock = Dfn("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});

test("construction with permitted phrasing content", () => {
  let content: string | Node | Array<string | Node>;
  let mock: HTMLElement;

  content = "foo";
  mock = Dfn(content);

  expect(mock.childNodes.length).toBe(1);

  content = document.createElement("span");
  mock = Dfn(content);

  expect(mock.childNodes.length).toBe(1);

  content = [
    "foo",
    "bar",
    "baz",
    document.createElement("span"),
    document.createElement("em"),
  ];
  mock = Dfn(content);

  expect(mock.childNodes.length).toBe(content.length);
});

test("construction with prohibited phrasing content", () => {
  let content: string | Node | Array<string | Node>;
  let mock: HTMLElement;

  content = document.createElement("dfn");

  expect(isPhrasingContent(content)).toBe(true);

  mock = Dfn(content);

  content = [document.createElement("dfn"), document.createElement("dfn")];

  mock = Dfn(content);

  expect(mock.childNodes.length).toBe(0);
});
