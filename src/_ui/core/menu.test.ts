/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/menu module
 */

import { test, assert } from "vitest"; // Destructure test and assert from vitest
import NewMenu from "./menu";
import { LI, MENU, SCRIPT } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("Basic construction test for NewMenu", () => {
  // Test case: Testing basic construction with no children and no attributes
  const menu = NewMenu()();
  assert.equal(menu.tagName, MENU);
  assert.equal(menu.childNodes.length, 0);
});

test("Construction with attributes test for NewMenu", () => {
  // Test case: Testing construction with attributes only
  const attributes = { id: "menu1", class: "menu-class", autofocus: true };
  const menu = NewMenu(undefined, attributes)();
  assert.equal(menu.tagName, MENU);
  assert.equal(menu.getAttribute("id"), "menu1");
  assert.equal(menu.getAttribute("class"), "menu-class");
  assert.equal(menu.autofocus, true);
  assert.equal(menu.childNodes.length, 0);
});

test("Construction with children test for NewMenu", () => {
  // Test case: Testing construction with children only
  const child1 = document.createElement(LI);
  const child2 = document.createElement(SCRIPT);
  const menu = NewMenu([child1, child2])();
  assert.equal(menu.tagName, MENU);
  assert.equal(menu.childNodes.length, 2);
  assert.equal(menu.childNodes[0], child1);
  assert.equal(menu.childNodes[1], child2);
});
