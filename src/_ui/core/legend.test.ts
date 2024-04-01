/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/legend module
 */

import { expect, test } from "vitest";
import { H1, H2, H3, HGROUP, HTML, LEGEND } from "@/_lib/node_names";
import NewLegend from "./legend";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewLegend()();

  expect(mock).not.toBeNull();

  expect(mock.tagName).toEqual(LEGEND);
});

test("construction with attributes", () => {
  const attributes = {
    id: "bar",
    class: "foo bar baz",
    for: "foo-bar-baz",
  };
  const mock = NewLegend(null, attributes)();

  expect(mock.getAttribute("id")).toBe(attributes.id);
  expect(mock.getAttribute("class")).toBe(attributes.class);
  expect(mock.getAttribute("for")).toBe(attributes.for);
});

test("construction with phrasing content", () => {
  const content = (() => {
    const em = document.createElement("em");
    em.textContent = "foo";

    const br = document.createElement("br");

    const abbr = document.createElement("abbr");
    abbr.title = "Hypertext Markup Language";
    abbr.textContent = HTML;

    const style = document.createElement("style"); // not phrasing content

    return [em, br, abbr, style];
  })();

  const mock = NewLegend(content)();
  expect(mock.childNodes.length).toBe(3);
});

test("construction with permitted heading content", () => {
  const content = (() => {
    const h1 = document.createElement(H1);
    h1.textContent = "foo";

    const h2 = document.createElement(H2);
    h2.textContent = "bar";

    const h3 = document.createElement(H3);
    h3.textContent = "baz";

    const hgroup = document.createElement(HGROUP);
    hgroup.innerHTML = `<p>foo</p><h1>bar</h1><p>baz</p>`;

    return [h1, h2, h3, hgroup];
  })();

  const mock = NewLegend(content)();

  expect(mock.childNodes.length).toBe(3);
});
