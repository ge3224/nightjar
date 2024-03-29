/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Tests for the content/sectioning module.
 */

// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { isSectioningContent } from "./sectioning";

test("isHeadingContent helper function", () => {
  const valid = [
    document.createElement("article"),
    document.createElement("aside"),
    document.createElement("nav"),
    document.createElement("section"),
  ];

  valid.forEach((node) => {
    expect(isSectioningContent(node)).toBe(true);
  });

  const invalid = [
    document.createElement("title"),
    document.createElement("header"),
  ];

  invalid.forEach((node) => {
    expect(isSectioningContent(node)).toBe(false);
  });
});
