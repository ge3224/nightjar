/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/hgroup module
 */

import { expect, test } from "vitest";
import { HGROUP } from "@/_lib/node_names";
import NewHgroup from "./hgroup";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewHgroup()();

  expect(mock).not.toBeNull();

  expect(mock.tagName).toEqual(HGROUP);
});

test("construction with attributes", () => {
  const mock = NewHgroup(null, {
    id: "bar",
    class: "foo bar baz",
  })();

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});

test("construction with a heading", () => {
  const mock = NewHgroup(document.createElement("h1"))();

  expect(mock.childNodes.length).toBe(1);
});

test("construction with a paragraph followed by a heading", () => {
  const content = (() => {
    const p = document.createElement("p");
    const h2 = document.createElement("h2");
    return [p, h2];
  })();

  const mock = NewHgroup(content)();

  expect(mock.childNodes.length).toBe(2);
});

test("construction with a paragraph followed by a heading, followed by a paragraph", () => {
  const content = (() => {
    const p = document.createElement("p");
    const h2 = document.createElement("h2");
    const p2 = document.createElement("p");
    return [p, h2, p2];
  })();

  const mock = NewHgroup(content)();

  expect(mock.childNodes.length).toBe(3);
});

test("construction with a paragraphs and no heading", () => {
  const content = (() => {
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    return [p, p2];
  })();

  const mock = NewHgroup(content)();

  expect(mock.childNodes.length).toBe(0);
});

test("construction with paragraphs and two headings", () => {
  const content = (() => {
    const p = document.createElement("p");
    const h2 = document.createElement("h2");
    const _h2 = document.createElement("h2");
    return [h2, p, _h2];
  })();

  const mock = NewHgroup(content)();

  expect(mock.childNodes.length).toBe(2);
});
