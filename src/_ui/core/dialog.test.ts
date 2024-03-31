/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/dialog module
 */

import { expect, test } from "vitest";
import Dialog from "./dialog";
import { isFlowContent } from "@/_lib/content";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = Dialog("foo");

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("DIALOG");
  expect(mock.textContent).toBe("foo");
});

test("construction with attributes", () => {
  const mock = Dialog("foo", {
    id: "bar",
    class: "foo bar baz",
    open: true,
  });

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
  expect(mock.open).toBe(true);
});

test("construction with flow content", () => {
  let content: string | Node | Array<string | Node>;
  let mock: HTMLElement;

  content = document.createElement("p");
  mock = Dialog(content);

  expect(mock.childNodes.length).toBe(1);

  content = [
    "foo",
    "bar",
    "baz",
    document.createElement("span"),
    document.createElement("em"),
  ];
  mock = Dialog(content);

  expect(mock.childNodes.length).toBe(content.length);
});

test("construction with non-flow content", () => {
  let content: string | Node | Array<string | Node>;
  let mock: HTMLElement;

  content = document.createElement("html");

  expect(isFlowContent(content)).toBe(false);

  mock = Dialog(content);

  expect(mock.childNodes.length).toBe(0);

  content = [document.createElement("html"), document.createElement("head")];

  mock = Dialog(content);

  expect(mock.childNodes.length).toBe(0);
});
