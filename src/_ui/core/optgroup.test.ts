/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/optgroup module
 */

import { test, assert } from "vitest"; // Destructure test and assert from vitest
import { DEL, OBJECT, OPTGROUP, OPTION, P, PARAM } from "@/_lib/node_names";
import NewOptgroup from "./optgroup";

// @vitest-environment happy-dom

test("Basic construction test for NewOptgroup", () => {
  // Test case: Testing basic construction with no children and no attributes
  const optgroup = NewOptgroup()();
  assert.equal(optgroup.tagName, OPTGROUP);
  assert.equal(optgroup.childNodes.length, 0);
});

test("Construction with attributes test for NewOptgroup", () => {
  // Test case: Testing construction with attributes only
  const attributes = {
    id: "optgroup1",
    class: "optgroup-class",
    autofocus: true,
    disabled: true,
    label: "foo",
  };
  const optgroup = NewOptgroup(undefined, attributes)();
  assert.equal(optgroup.tagName, OPTGROUP);
  assert.equal(optgroup.getAttribute("id"), "optgroup1");
  assert.equal(optgroup.getAttribute("class"), "optgroup-class");
  assert.equal(optgroup.getAttribute("label"), "foo");
  assert.equal(optgroup.autofocus, true);
  assert.equal(optgroup.disabled, true);
  assert.equal(optgroup.childNodes.length, 0);
});

test("Construction with children test for NewOptgroup", () => {
  // Test case: Testing construction with children only
  const child1 = document.createElement(OPTION);
  const child2 = document.createElement(OPTION);
  const child3 = document.createElement(P);
  const optgroup = NewOptgroup([child1, child2, child3])();
  assert.equal(optgroup.tagName, OPTGROUP);
  assert.equal(optgroup.childNodes.length, 2);
  assert.equal(optgroup.childNodes[0], child1);
  assert.equal(optgroup.childNodes[1], child2);
});
