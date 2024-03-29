/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the content/interactive module
 */

// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { isInteractiveContent } from "./interactive";

test("isHeadingContent helper function", () => {
  const valid = [
    document.createElement("button"),
    document.createElement("details"),
    document.createElement("embed"),
    document.createElement("iframe"),
    document.createElement("label"),
    document.createElement("select"),
    document.createElement("textarea"),
  ];

  valid.forEach((node) => {
    expect(isInteractiveContent(node)).toBe(true);
  });

  const invalid = [
    document.createElement("p"),
    document.createElement("div"),
    document.createElement("a"),
  ];

  invalid.forEach((node) => {
    expect(isInteractiveContent(node)).toBe(false);
  });
});
