/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/col module
 */

import { expect, test } from "vitest";
import { HTMLCanvasElementAttributes } from "@/_definitions/attributes/canvas";
import Colgroup from "./colgroup";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = Colgroup(null, {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("COLGROUP");
});

test("construction with attributes", () => {
  const mock = Colgroup(null, {
    id: "bar",
    class: "foo bar baz",
    span: 150,
  } as HTMLCanvasElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
  expect(mock.getAttribute("span")).toBe("150");
});

test("construction with a single permitted child.", () => {
  const mock = Colgroup(document.createElement("col"), {});
  expect(mock.childNodes.length).toBe(1);
});

test("construction with multiple permitted children", () => {
  const children = [
    document.createElement("col"),
    document.createElement("col"),
    document.createElement("col"),
  ];

  const mock = Colgroup(children, {});
  expect(mock.childNodes.length).toBe(children.length);
});

test("construction with a single unpermitted child", () => {
  // @ts-ignore: testing invalid input
  const mock = Colgroup(document.createElement("span"), {});
  expect(mock.childNodes.length).toBe(0);
});

test("construction with multiple permitted and unpermitted children", () => {
  const children = [
    document.createElement("col"),
    document.createElement("span"),
    document.createElement("col"),
    document.createElement("span"),
  ];

  //@ts-ignore: testing invalid input
  const mock = Colgroup(children, {});
  expect(mock.childNodes.length).toBe(2);
});

test("construction with span attributes and a child", () => {
  const mock = Colgroup(document.createElement("col"), { span: 150 });
  expect(mock.childNodes.length).toBe(0);
});

test("construction with the span attribute and children", () => {
  const children = [
    document.createElement("col"),
    document.createElement("col"),
    document.createElement("col"),
  ];

  const mock = Colgroup(children, { span: 150 });
  expect(mock.childNodes.length).toBe(0);
});
