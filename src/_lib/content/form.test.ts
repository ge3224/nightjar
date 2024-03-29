/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the content/form module.
 */

// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { isFormContent } from "./form";

test("isHeadingContent helper function", () => {
  const valid = [
    document.createElement("button"),
    document.createElement("fieldset"),
    document.createElement("input"),
    document.createElement("label"),
    document.createElement("meter"),
    document.createElement("object"),
    document.createElement("output"),
    document.createElement("progress"),
    document.createElement("select"),
    document.createElement("textarea"),
  ];

  valid.forEach((node) => {
    expect(isFormContent(node)).toBe(true);
  });

  const invalid = [
    document.createElement("div"),
    document.createElement("p"),
    document.createElement("a"),
  ];

  invalid.forEach((node) => {
    expect(isFormContent(node)).toBe(false);
  });
});
