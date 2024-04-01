/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/ins module
 */

import { expect, test } from "vitest";
import Ins from "./ins";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = Ins()();

  expect(mock).not.toBeNull();

  expect(mock.tagName).toEqual("INS");
});

test("construction with attributes", () => {
  const attributes = {
    id: "bar",
    class: "foo bar baz",
    datetime: "1970-01-01",
    cite: "https://foo.bar.baz",
  };
  const mock = Ins(null, attributes)();

  expect(mock.getAttribute("id")).toBe(attributes.id);
  expect(mock.getAttribute("class")).toBe(attributes.class);
  expect(mock.getAttribute("datetime")).toBe(attributes.datetime);
  expect(mock.getAttribute("cite")).toBe(attributes.cite);
});

test("construction with transparent content", () => {
  let element: HTMLModElement;
  let content: string | Node | Array<string | Node>;

  content = document.createElement("a");
  element = Ins(content)();

  expect(element.childNodes.length).toBe(1);

  content = ["foo", document.createElement("a"), document.createElement("ins")];
  element = Ins(content)();

  expect(element.childNodes.length).toBe(content.length);
});

test("construction with non-transparent content", () => {
  let element: HTMLModElement;
  let content: string | Node | Array<string | Node>;

  content = document.createElement("style");
  element = Ins(content)();

  expect(element.childNodes.length).toBe(0);

  content = [
    document.createElement("style"),
    document.createElement("p"),
    document.createElement("div"),
  ];
  element = Ins(content)();
  expect(element.childNodes.length).toBe(0);
});
