/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/optgroup module
 */

import { test, assert } from "vitest"; // Destructure test and assert from vitest
import NewOutput from "./output";
import { OUTPUT } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("Basic construction test for NewOutput", () => {
  // Test case: Testing basic construction with no children and no attributes
  const output = NewOutput()();
  assert.equal(output.tagName, OUTPUT);
  assert.equal(output.childNodes.length, 0);
});

test("Construction with attributes test for NewOutput", () => {
  // Test case: Testing construction with attributes only
  const attributes = { id: "output1", class: "output-class", autofocus: true };
  const output = NewOutput(undefined, attributes)();
  assert.equal(output.tagName, "OUTPUT");
  assert.equal(output.getAttribute("id"), "output1");
  assert.equal(output.getAttribute("class"), "output-class");
  assert.equal(output.autofocus, true);
  assert.equal(output.childNodes.length, 0);
});

test("Construction with children test for NewOutput", () => {
  // Test case: Testing construction with children only
  const child1 = document.createElement("SPAN");
  const child2 = "Some text content";
  const output = NewOutput(child1, {})();
  assert.equal(output.tagName, "OUTPUT");
  assert.equal(output.childNodes.length, 1);
  assert.equal(output.childNodes[0], child1);

  // Test case: Testing construction with array of children
  const output2 = NewOutput([child1, child2], {})();
  assert.equal(output2.tagName, "OUTPUT");
  assert.equal(output2.childNodes.length, 2);
  assert.equal(output2.childNodes[0], child1);
  assert.equal(output2.childNodes[1].textContent, "Some text content");
});
