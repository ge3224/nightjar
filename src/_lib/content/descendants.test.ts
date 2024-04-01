/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _lib/content/descendants module
 */

import { test } from "vitest";
import { DIV } from "../node_names";
import { hasMeterDescendants } from "./descendants";

// @vitest-environment happy-dom

test("No <meter> descendants", () => {
  const div = document.createElement(DIV);
  div.innerHTML = "<p>This is a paragraph</p><span>This is a span</span>";
  const result = hasMeterDescendants(div);
  return !result;
});

test("Single <meter> descendant", () => {
  const div = document.createElement(DIV);
  div.innerHTML = "<meter></meter>";
  const result = hasMeterDescendants(div);
  return result;
});

test("Multiple levels of descendants with <meter>", () => {
  const div = document.createElement(DIV);
  div.innerHTML = "<div><p><meter></meter></p></div>";
  const result = hasMeterDescendants(div);
  return result;
});

test("Nested <meter> descendants", () => {
  const div = document.createElement(DIV);
  div.innerHTML = "<div><meter></meter><div><meter></meter></div></div>";
  const result = hasMeterDescendants(div);
  return result;
});

test("No descendants provided", () => {
  //@ts-ignore
  const result = hasMeterDescendants(null);
  return !result;
});
