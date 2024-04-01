/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/fieldset module
 */

import { expect, test } from "vitest";
import Fieldset from "./fieldset";
import { HTMLFieldSetElementAttributes } from "@/_definitions/attributes";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = Fieldset()();

  expect(mock).not.toBeNull();

  expect(mock.tagName).toEqual("FIELDSET");
});

test("construction with attributes", () => {
  const attributes = {
    id: "foo",
    disabled: true,
    form: "#foo",
    name: "foobarbaz",
  } as HTMLFieldSetElementAttributes;

  const mock = Fieldset(null, attributes)();

  expect(mock.id).toBe(attributes.id);
  expect(mock.disabled).toBe(attributes.disabled);
  expect(mock.getAttribute("form")).toBe(attributes.form);
  expect(mock.getAttribute("name")).toBe(attributes.name);
});

test("construction with a <legend> element", () => {
  const content = (() => {
    const legend = document.createElement("legend");
    return [legend];
  })();

  const mock = Fieldset(content)();

  expect(mock.childNodes.length).toBe(1);
});

test("construction with a <legend> element, followed by flow content", () => {
  const content = (() => {
    const legend = document.createElement("legend");
    const p = document.createElement("p");
    p.textContent = "foo";
    return [legend, p];
  })();

  const mock = Fieldset(content)();

  expect(mock.childNodes.length).toBe(2);
});

test("construction with flow content, followed by a <legend> element", () => {
  const content = (() => {
    const p = document.createElement("p");
    p.textContent = "foo";

    const legend = document.createElement("legend");
    legend.textContent = "bar";

    return [p, legend];
  })();

  const mock = Fieldset(content)();

  expect(mock.firstChild?.nodeName).toBe("LEGEND");
});

test("construction with non-permitted content", () => {
  const content = (() => {
    const legend = document.createElement("legend");
    legend.textContent = "bar";

    const p = document.createElement("p");
    p.textContent = "foo";

    const style = document.createElement("style");

    return [legend, p, style];
  })();

  const mock = Fieldset(content)();

  expect(mock.childNodes.length).toBe(2);
});
