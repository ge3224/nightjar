/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the content/metadata module.
 */

// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { isMetadataContent } from "./metadata";

test("isHeadingContent helper function", () => {
  const valid = [
    document.createElement("base"),
    document.createElement("link"),
    document.createElement("meta"),
    document.createElement("noscript"),
    document.createElement("script"),
    document.createElement("style"),
    document.createElement("title"),
  ];

  valid.forEach((node) => {
    expect(isMetadataContent(node)).toBe(true);
  });

  const invalid = [
    document.createElement("p"),
    document.createElement("div"),
    document.createElement("a"),
  ];

  invalid.forEach((node) => {
    expect(isMetadataContent(node)).toBe(false);
  });
});
