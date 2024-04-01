/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/datalist module
 */

import { expect, test } from "vitest";
import NewDatalist from "./datalist";
import { DATALIST } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewDatalist("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toBe(DATALIST);
});

test("construction with phrasing content", () => {
  let mock: HTMLDataListElement;
  let content: string | Node | Array<string | Node>;

  content = document.createElement("span");
  mock = NewDatalist(content, {});

  expect(mock.childNodes.length).toBe(1);

  content = [
    "foo",
    document.createElement("span"),
    document.createElement("strong"),
    document.createElement("em"),
  ];
  mock = NewDatalist(content, {});
  expect(mock.childNodes.length).toBe(content.length);
});

test("construction with <option> children", () => {
  let mock: HTMLDataListElement;
  let content: Node | Array<Node>;

  content = document.createElement("option");
  mock = NewDatalist(content, {});

  expect(mock.childNodes.length).toBe(1);

  content = [
    document.createElement("option"),
    document.createElement("option"),
    document.createElement("option"),
  ];
  mock = NewDatalist(content, {});

  expect(mock.childNodes.length).toBe(content.length);
});

test("construction with mix of phrasing and <option> content", () => {
  let mock: HTMLDataListElement;
  let content: string | Node | Array<string | Node>;

  content = [document.createElement("span"), document.createElement("option")];
  mock = NewDatalist(content, {});

  expect(mock.childNodes.length).toBe(0);
});
