/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the content/embedded module.
 *
 */

// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { isEmbeddedContent } from "./embedded";

test("isHeadingContent helper function", () => {
  const valid = [
    document.createElement("audio"),
    document.createElement("canvas"),
    document.createElement("embed"),
    document.createElement("iframe"),
    document.createElement("img"),
    document.createElement("math"),
    document.createElement("object"),
    document.createElement("picture"),
    document.createElement("svg"),
    document.createElement("video"),
  ];

  valid.forEach((node) => {
    expect(isEmbeddedContent(node)).toBe(true);
  });

  const invalid = [
    document.createElement("p"),
    document.createElement("div"),
    document.createElement("a"),
  ];

  invalid.forEach((node) => {
    expect(isEmbeddedContent(node)).toBe(false);
  });
});
