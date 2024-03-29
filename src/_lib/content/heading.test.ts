/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the content/heading module.
 */

// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { isHeadingContent } from "./heading";

test("isHeadingContent helper function", () => {
  const valid = [
    document.createElement("h1"),
    document.createElement("h2"),
    document.createElement("h3"),
    document.createElement("h4"),
    document.createElement("h5"),
    document.createElement("h6"),
    document.createElement("hgroup"),
  ];

  valid.forEach((node) => {
    expect(isHeadingContent(node)).toBe(true);
  });

  const invalid = [
    document.createElement("title"),
    document.createElement("header"),
  ];

  invalid.forEach((node) => {
    expect(isHeadingContent(node)).toBe(false);
  });
});
