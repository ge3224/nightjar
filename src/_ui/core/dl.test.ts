/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/dl module
 */

import { expect, test } from "vitest";
import NewDl from "./dl";
import { DL } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewDl();

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(DL);
});

test("construction with attributes", () => {
  const mock = NewDl(null, {
    id: "bar",
    class: "foo bar baz",
  });

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});

test("constuction with minimum permitted content", () => {
  expect(NewDl(document.createElement("div")).childNodes.length).toBe(1);
});

test("construction with a leading <dt>, followed by a <dd>", () => {
  const content = (() => {
    const dt = document.createElement("dt");
    dt.textContent = "Name";
    const dd = document.createElement("dd");
    dd.textContent = "foo";

    return [dt, dd];
  })();

  expect(NewDl(content).childNodes.length).toBe(2);
});

test("construction with a leading <dt>, followed by a mix of permitted elements", () => {
  const content = (() => {
    const dt = document.createElement("dt");
    dt.textContent = "Name";

    const script = document.createElement("script");

    const dd = document.createElement("dd");
    dd.textContent = "foo";

    const template = document.createElement("template");

    return [dt, script, dd, template];
  })();

  expect(NewDl(content).childNodes.length).toBe(4);
});

test("construction with a leading <div> followed by another <div>", () => {
  const content = (() => {
    const div1 = document.createElement("div");
    div1.innerHTML = `<dt>Name</dt><dd>Foo</dd>`;

    const div2 = document.createElement("div");
    div2.innerHTML = `<dt>Type</dt><dd>Bar</dd>`;

    return [div1, div2];
  })();

  expect(NewDl(content).childNodes.length).toBe(2);
});

test("construction with a leading <div>, followed by a mix of permitted elements", () => {
  const content = (() => {
    const div1 = document.createElement("div");
    div1.innerHTML = `<dt>Name</dt><dd>Foo</dd>`;

    const script = document.createElement("script");

    const div2 = document.createElement("div");
    div2.innerHTML = `<dt>Type</dt><dd>Bar</dd>`;

    const template = document.createElement("template");

    return [div1, script, div2, template];
  })();

  expect(NewDl(content).childNodes.length).toBe(4);
});

test("construction with a non-permitted content type", () => {
  expect(NewDl(document.createElement("p")).childNodes.length).toBe(0);
});

test("construction with a mix of permitted and non-permitted content", () => {
  const content = (() => {
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    const p = document.createElement("p");

    return [dt, p, dd];
  })();

  expect(NewDl(content).childNodes.length).toBe(2);
});

test("construction with a mix of permitted but unrelated elements", () => {
  let content = (() => {
    const div = document.createElement("div");

    // The <dd> element must be grouped with a leading <dt> element.
    const dd = document.createElement("dd");

    return [div, dd];
  })();

  expect(NewDl(content).childNodes.length).toBe(1);

  content = (() => {
    const dt = document.createElement("dt");

    // The <div> is not part of the <dt><dd> grouping.
    const div = document.createElement("div");
    return [dt, div];
  })();

  expect(NewDl(content).childNodes.length).toBe(1);
});
