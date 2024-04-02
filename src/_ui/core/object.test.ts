/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/menu module
 */

import { test, assert } from "vitest"; // Destructure test and assert from vitest
import { DEL, OBJECT, PARAM } from "@/_lib/node_names";
import NewObject from "./object";

// @vitest-environment happy-dom

test("Basic construction test for NewMenu", () => {
  // Test case: Testing basic construction with no children and no attributes
  const menu = NewObject()();
  assert.equal(menu.tagName, OBJECT);
  assert.equal(menu.childNodes.length, 0);
});

test("Construction with attributes test for NewMenu", () => {
  // Test case: Testing construction with attributes only
  const attributes = {
    id: "menu1",
    class: "menu-class",
    autofocus: true,
    data: "foo",
    form: "bar",
    height: "100px",
    name: "baz",
    type: "foobarbaz",
    width: "100px",
  };
  const menu = NewObject(undefined, attributes)();
  assert.equal(menu.tagName, OBJECT);
  assert.equal(menu.getAttribute("id"), "menu1");
  assert.equal(menu.getAttribute("class"), "menu-class");
  assert.equal(menu.autofocus, true);
  assert.equal(menu.getAttribute("data"), "foo");
  assert.equal(menu.getAttribute("form"), "bar");
  assert.equal(menu.getAttribute("height"), "100px");
  assert.equal(menu.getAttribute("name"), "baz");
  assert.equal(menu.getAttribute("type"), "foobarbaz");
  assert.equal(menu.getAttribute("width"), "100px");
  assert.equal(menu.childNodes.length, 0);
});

test("Construction with children test for NewMenu", () => {
  // Test case: Testing construction with children only
  const child1 = document.createElement(DEL);
  const child2 = document.createElement(PARAM);
  const menu = NewObject([child1, child2])();
  assert.equal(menu.tagName, OBJECT);
  assert.equal(menu.childNodes.length, 2);
  assert.equal(menu.childNodes[0], child2);
  assert.equal(menu.childNodes[1], child1);
});
