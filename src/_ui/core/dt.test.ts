/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/dt module
 */

import { expect, test } from "vitest";
import Dt from "./dt";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = Dt()();

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("DT");
});

test("construction with attributes", () => {
  const mock = Dt(null, {
    id: "bar",
    class: "foo bar baz",
  })();

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});

test("constuction with permitted content", () => {
  const content = (() => {
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.textContent = "foo";

    const p = document.createElement("p");
    p.textContent = "bar";

    const div = document.createElement("div");
    div.setAttribute("id", "baz");

    return [a, p, div];
  })();

  expect(Dt(content)().childNodes.length).toBe(content.length);
});

test("construction with non-permitted flow content", () => {
  const content = (() => {
    // prohibited flow content
    const header = document.createElement("header");
    const footer = document.createElement("footer");

    // sectional content
    const article = document.createElement("article");
    const aside = document.createElement("aside");
    const nav = document.createElement("nav");
    const section = document.createElement("section");

    // flow content that is a descendant of header content
    const b = document
      .createElement("h1")
      .appendChild(document.createElement("b"));

    return [header, footer, article, aside, nav, section, b];
  })();

  expect(Dt(content)().childNodes.length).toBe(0);
});
