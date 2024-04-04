/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/address module.
 */

import { expect, test } from "vitest";
import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";
import NewAddress from "./address";
import { ADDRESS } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewAddress("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(ADDRESS);
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  let mockParent: string | Node;
  let mockChild: string | Node;
  let mockChildren: Array<string | Node>;

  mockChild = "foo";
  mockParent = NewAddress(mockChild, {});

  expect(mockParent.textContent).toBe("foo");

  mockChild = document.createElement("p");
  mockParent = NewAddress(mockChild, {});

  expect(mockParent.childNodes.length).toBe(1);

  mockChildren = [
    "foo",
    document.createElement("p"),
    document.createElement("a"),
    document.createElement("abbr"),
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
    document.createElement("form"),
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

  mockChildren.forEach((child) => {
    mockParent = NewAddress(child, {});
    if (typeof child === "string") {
      expect(mockParent.textContent).toBe(child);
    } else {
      expect(mockParent.firstChild?.nodeName).toBe(child.nodeName);
    }
  });

  mockParent = NewAddress(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(mockChildren.length);
});

test("construction with attributes", () => {
  const mock = NewAddress("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementGlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
