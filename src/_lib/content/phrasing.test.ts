/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the content/phrasing module.
 */

// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { isPhrasingContent } from "./phrasing";

test("isHeadingContent helper function", () => {
  const valid = [
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
    document.createElement("dfn"),
    document.createElement("em"),
    document.createElement("embed"),
    document.createElement("i"),
    document.createElement("iframe"),
    document.createElement("img"),
    document.createElement("input"),
    document.createElement("kbd"),
    document.createElement("label"),
    document.createElement("mark"),
    document.createElement("math"),
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
    document.createElement("wbr"),
  ];

  valid.forEach((node) => {
    expect(isPhrasingContent(node)).toBe(true);
  });

  const invalid = [
    document.createElement("div"),
    document.createElement("meta"),
    document.createElement("p"),
    document.createElement("style"),
  ];

  invalid.forEach((node) => {
    expect(isPhrasingContent(node)).toBe(false);
  });
});
