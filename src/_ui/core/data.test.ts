/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/data module
 */

import { expect, test } from "vitest";
import NewData from "./data";
import { DATA } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewData("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(DATA);
});

test("construction with attributes", () => {
  const mock = NewData("foo", {
    id: "foo",
    value: "bar",
  });

  expect(mock.getAttribute("id")).toBe("foo");
  expect(mock.getAttribute("value")).toBe("bar");
});

test("construction with permitted children", () => {
  let permitted: string | Node | Array<string | Node>;

  permitted = "foo";
  expect(NewData(permitted, {}).textContent).toBe(permitted);

  permitted = document.createElement("span");
  expect(NewData(permitted, {}).childNodes.length).toBe(1);

  permitted = [
    document.createElement("span"),
    document.createElement("strong"),
  ];
  expect(NewData(permitted, {}).childNodes.length).toBe(2);
});

test("construction with unpermitted children", () => {
  let prohibited: string | Node | Array<string | Node>;

  prohibited = document.createElement("style");
  expect(NewData(prohibited, {}).childNodes.length).toBe(0);

  prohibited = [
    document.createElement("style"),
    document.createElement("html"),
  ];
  expect(NewData(prohibited, {}).childNodes.length).toBe(0);
});
