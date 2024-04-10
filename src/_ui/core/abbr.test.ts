/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/abbr module
 */

import { assert, test } from "vitest";
import { ABBR } from "@/_lib/node_names";
import abbr from "./abbr";

// @vitest-environment happy-dom

test("abbr should create an abbreviation element", () => {
  const abbreviation = abbr().create();
  assert.equal(abbreviation.tagName, ABBR);
});

test("abbr should set attributes for the abbreviation element", () => {
  const abbreviation = abbr().attributes({ title: "Abbreviation" }).create();
  assert.equal(abbreviation.getAttribute("title"), "Abbreviation");
});

test("abbr should set children for the abbreviation element", () => {
  const abbreviation = abbr()
    .children("HTML", "HyperText Markup Language")
    .create();
  assert.equal(abbreviation.innerHTML, "HTMLHyperText Markup Language");
});

test("abbr should set attributes and children for the abbreviation element", () => {
  const abbreviation = abbr()
    .attributes({ title: "Abbreviation" })
    .children("HTML", "HyperText Markup Language")
    .create();
  assert.equal(abbreviation.tagName, "ABBR");
  assert.equal(abbreviation.getAttribute("title"), "Abbreviation");
  assert.equal(abbreviation.innerHTML, "HTMLHyperText Markup Language");
});
