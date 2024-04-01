/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/label module
 */

import { expect, test } from "vitest";
import NewLabel from "./label";
import { ABBR, EM, HTML, I, INPUT, LABEL } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewLabel()();

  expect(mock).not.toBeNull();

  expect(mock.tagName).toEqual(LABEL);
});

test("construction with attributes", () => {
  const attributes = {
    id: "bar",
    class: "foo bar baz",
    for: "foo-bar-baz",
  };
  const mock = NewLabel(undefined, attributes)();

  expect(mock.getAttribute("id")).toBe(attributes.id);
  expect(mock.getAttribute("class")).toBe(attributes.class);
  expect(mock.getAttribute("for")).toBe(attributes.for);
});

test("construction with simple phrasing content", () => {
  const mock = NewLabel("foo")();
  expect(mock.childNodes.length).toBe(1);
});

test("constuction with permitted phrasing content", () => {
  const content = (() => {
    const abbr = document.createElement(ABBR);
    abbr.title = "Hypertext Markup Language";
    abbr.textContent = HTML;

    const em = document.createElement(EM);
    em.textContent = "foo";

    const i = document.createElement(I);
    i.textContent = "bar";

    const label = document.createElement(LABEL);
    label.textContent = "this is unallowed phrasing content";

    return [abbr, em, i, label];
  })();

  const mock = NewLabel(content)();

  // Phrasing content, but no descendant label elements.
  expect(mock.childNodes.length).toBe(3);
});

test("construction with labelable content", () => {
  const content = (() => {
    const input1 = document.createElement(INPUT);
    input1.id = "foo";
    input1.setAttribute("type", "text");

    const input2 = document.createElement(INPUT);
    input2.id = "bar";
    input2.setAttribute("type", "checkbox");

    return [input1, input2];
  })();

  const mock = NewLabel(content)();

  // No labelable elements other than the labeled control are allowed.
  expect(mock.childNodes.length).toBe(1);
});
