/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/meter module
 */

import { test, assert } from "vitest"; // Destructure test and assert from vitest
import NewMeter from "./meter";

// @vitest-environment happy-dom
//
test("Basic construction test for NewMeter", () => {
  // Test case: Testing basic construction with no children and no attributes
  const meter = NewMeter()();
  assert.equal(meter.tagName, "METER");
  assert.equal(meter.childNodes.length, 0);
});

test("Construction with attributes test for NewMeter", () => {
  // Test case: Testing construction with attributes only
  const attributes = { id: "meter1", class: "meter-class", autofocus: true };
  const meter = NewMeter(undefined, attributes)();
  assert.equal(meter.tagName, "METER");
  assert.equal(meter.getAttribute("id"), "meter1");
  assert.equal(meter.getAttribute("class"), "meter-class");
  assert.equal(meter.autofocus, true);
  assert.equal(meter.childNodes.length, 0);
});

test("Construction with children test for NewMeter", () => {
  // Test case: Testing construction with children only
  const child1 = document.createElement("SPAN");
  const child2 = "Some text content";
  const meter = NewMeter([child1, child2])();
  assert.equal(meter.tagName, "METER");
  assert.equal(meter.childNodes.length, 2);
  assert.equal(meter.childNodes[0], child1);
  assert.equal(meter.childNodes[1].textContent, "Some text content");
});
