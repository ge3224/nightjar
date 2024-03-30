/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the content/heading module.
 */

import { expect, test } from "vitest";
import { isTransparent } from "./transparent";

// @vitest-environment happy-dom

test("isHeadingContent helper function", () => {
  const valid = [
    document.createElement("a"),
    document.createElement("abbr"),
    document.createElement("audio"),
    document.createElement("b"),
    document.createElement("bdi"),
    document.createElement("bdo"),
    document.createElement("br"),
    document.createElement("button"),
    document.createElement("canvas"),
    document.createElement("cite"),
    document.createElement("code"),
    document.createElement("data"),
    document.createElement("datalist"),
    document.createElement("del"),
    document.createElement("dfn"),
    document.createElement("em"),
    document.createElement("i"),
    document.createElement("iframe"),
    document.createElement("img"),
    document.createElement("input"),
    document.createElement("ins"),
    document.createElement("kbd"),
    document.createElement("label"),
    document.createElement("map"),
    document.createElement("mark"),
    document.createElement("meter"),
    document.createElement("noscript"),
    document.createElement("object"),
    document.createElement("output"),
    document.createElement("picture"),
    document.createElement("progress"),
    document.createElement("q"),
    document.createElement("ruby"),
    document.createElement("s"),
    document.createElement("samp"),
    document.createElement("script"),
    document.createElement("select"),
    document.createElement("slot"),
    document.createElement("small"),
    document.createElement("span"),
    document.createElement("strong"),
    document.createElement("sub"),
    document.createElement("sup"),
    document.createElement("svg"),
    document.createElement("template"),
    document.createElement("textarea"),
    document.createElement("time"),
    document.createElement("u"),
    document.createElement("var"),
    document.createElement("video"),
  ];

  valid.forEach((node) => {
    expect(isTransparent(node)).toBe(true);
  });

  const invalid = [
    document.createElement("title"),
    document.createElement("header"),
    document.createElement("style"),
  ];

  invalid.forEach((node) => {
    expect(isTransparent(node)).toBe(false);
  });
});
