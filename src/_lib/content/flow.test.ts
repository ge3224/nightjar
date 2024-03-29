/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the content/flow module
 */

// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { isFlowContent } from "./flow";

test("isHeadingContent helper function", () => {
  const valid = [
    document.createElement("a"),
    document.createElement("abbr"),
    document.createElement("address"),
    document.createElement("article"),
    document.createElement("aside"),
    document.createElement("audio"),
    document.createElement("b"),
    document.createElement("bdo"),
    document.createElement("bdi"),
    document.createElement("blockquote"),
    document.createElement("br"),
    document.createElement("button"),
    document.createElement("canvas"),
    document.createElement("cite"),
    document.createElement("code"),
    document.createElement("data"),
    document.createElement("datalist"),
    document.createElement("del"),
    document.createElement("details"),
    document.createElement("dfn"),
    document.createElement("dialog"),
    document.createElement("div"),
    document.createElement("dl"),
    document.createElement("em"),
    document.createElement("embed"),
    document.createElement("fieldset"),
    document.createElement("figure"),
    document.createElement("footer"),
    document.createElement("form"),
    document.createElement("h1"),
    document.createElement("h2"),
    document.createElement("h3"),
    document.createElement("h4"),
    document.createElement("h5"),
    document.createElement("h6"),
    document.createElement("header"),
    document.createElement("hgroup"),
    document.createElement("hr"),
    document.createElement("i"),
    document.createElement("iframe"),
    document.createElement("img"),
    document.createElement("input"),
    document.createElement("ins"),
    document.createElement("kbd"),
    document.createElement("label"),
    document.createElement("main"),
    document.createElement("map"),
    document.createElement("mark"),
    document.createElement("math"),
    document.createElement("menu"),
    document.createElement("meter"),
    document.createElement("nav"),
    document.createElement("noscript"),
    document.createElement("object"),
    document.createElement("ol"),
    document.createElement("output"),
    document.createElement("p"),
    document.createElement("picture"),
    document.createElement("pre"),
    document.createElement("progress"),
    document.createElement("q"),
    document.createElement("ruby"),
    document.createElement("s"),
    document.createElement("samp"),
    document.createElement("search"),
    document.createElement("script"),
    document.createElement("section"),
    document.createElement("select"),
    document.createElement("slot"),
    document.createElement("small"),
    document.createElement("span"),
    document.createElement("strong"),
    document.createElement("sub"),
    document.createElement("sup"),
    document.createElement("svg"),
    document.createElement("table"),
    document.createElement("template"),
    document.createElement("textarea"),
    document.createElement("time"),
    document.createElement("u"),
    document.createElement("ul"),
    document.createElement("var"),
    document.createElement("video"),
    document.createElement("wbr"),
  ];

  valid.forEach((node) => {
    expect(isFlowContent(node)).toBe(true);
  });

  const invalid = [
    document.createElement("body"),
    document.createElement("html"),
    document.createElement("meta"),
    document.createElement("style"),
  ];

  invalid.forEach((node) => {
    expect(isFlowContent(node)).toBe(false);
  });
});
