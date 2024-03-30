/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/canvas module
 */

import { expect, test } from "vitest";
import Canvas from "./canvas";
import { HTMLCanvasElementAttributes } from "@/_definitions/attributes/canvas";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = Canvas("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("CANVAS");
  expect(mock.textContent).toBe("foo");
});

test('a transparent child with permitted content', () => {
  const mockChild = document.createElement("del");
  mockChild.appendChild(document.createElement("del"));
  mockChild.innerHTML = `<a href="#">Link</a>`;
  // TODO: Fix this
  expect(Canvas(mockChild, {}).childNodes.length).toBe(1);
});

test('returns false for a transparent element with non-permitted interactive content', () => {
  const mockChild = document.createElement("del");
  mockChild.innerHTML = `<a href="#">Link</a><input type="text" /><button>Button</button>`;
  expect(Canvas(mockChild, {}).childNodes.length).toBe(0);
});

test("construction with attributes", () => {
  const mock = Canvas("foo", {
    id: "bar",
    class: "foo bar baz",
    height: 150,
    width: 150,
  } as HTMLCanvasElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
