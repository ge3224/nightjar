/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/object module
 */

import { test, assert } from "vitest"; // Destructure test and assert from vitest
import { DEL, OBJECT, PARAM } from "@/_lib/node_names";
import NewObject from "./object";

// @vitest-environment happy-dom

test("Basic construction test for NewObject", () => {
  // Test case: Testing basic construction with no children and no attributes
  const obj = NewObject()();
  assert.equal(obj.tagName, OBJECT);
  assert.equal(obj.childNodes.length, 0);
});

test("Construction with attributes test for NewObject", () => {
  // Test case: Testing construction with attributes only
  const attributes = {
    id: "obj1",
    class: "obj-class",
    autofocus: true,
    data: "foo",
    form: "bar",
    height: "100px",
    name: "baz",
    type: "foobarbaz",
    width: "100px",
  };
  const obj = NewObject(undefined, attributes)();
  assert.equal(obj.tagName, OBJECT);
  assert.equal(obj.getAttribute("id"), "obj1");
  assert.equal(obj.getAttribute("class"), "obj-class");
  assert.equal(obj.autofocus, true);
  assert.equal(obj.getAttribute("data"), "foo");
  assert.equal(obj.getAttribute("form"), "bar");
  assert.equal(obj.getAttribute("height"), "100px");
  assert.equal(obj.getAttribute("name"), "baz");
  assert.equal(obj.getAttribute("type"), "foobarbaz");
  assert.equal(obj.getAttribute("width"), "100px");
  assert.equal(obj.childNodes.length, 0);
});

test("Construction with children test for NewObject", () => {
  // Test case: Testing construction with children only
  const child1 = document.createElement(DEL);
  const child2 = document.createElement(PARAM);
  const obj = NewObject([child1, child2])();
  assert.equal(obj.tagName, OBJECT);
  assert.equal(obj.childNodes.length, 2);
  assert.equal(obj.childNodes[0], child2);
  assert.equal(obj.childNodes[1], child1);
});
