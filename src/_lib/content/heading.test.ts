/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the content/heading module.
 */

import { expect, test } from "vitest";
import { isDescendantOfHeader, isHeadingContent } from "./heading";

// @vitest-environment happy-dom

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

test("isDescendantOfHeader should return true if node is a descendant of header content", () => {
  // Create header element and nested element
  const headerElement = document.createElement("h1");
  const nestedElement = document.createElement("div");
  headerElement.appendChild(nestedElement);

  // Check if nested element is descendant of header content
  expect(isDescendantOfHeader(nestedElement)).toBe(true);
});

test("isDescendantOfHeader should return false if node is not a descendant of header content", () => {
  // Create non-header element
  const element = document.createElement("div");

  // Check if non-header element is descendant of header content
  expect(isDescendantOfHeader(element)).toBe(false);
});

test("isDescendantOfHeader should handle nested non-header elements correctly", () => {
  // Create header element and nested non-header elements
  const headerElement = document.createElement("h1");
  const nestedDiv = document.createElement("div");
  const nestedSpan = document.createElement("span");
  headerElement.appendChild(nestedDiv);
  nestedDiv.appendChild(nestedSpan);

  // Check if nested span is descendant of header content
  expect(isDescendantOfHeader(nestedSpan)).toBe(true);
});

test("isDescendantOfHeader should handle text nodes correctly", () => {
  // Create header element with a text node as its child
  const headerElement = document.createElement("h1");
  const textNode = document.createTextNode("Header Content");
  headerElement.appendChild(textNode);

  // Check if text node is descendant of header content
  expect(isDescendantOfHeader(textNode)).toBe(true);
});

test("isDescendantOfHeader should return false if node is not provided", () => {
  // Check with null node
  // @ts-ignore
  expect(isDescendantOfHeader(null)).toBe(false);
});
