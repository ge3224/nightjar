/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/i module
 */

import { assert, test } from "vitest";
import i from "./i";
import { I } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("i should create an idiomatic text element", () => {
  const idiomaticText = i().create();
  assert.equal(idiomaticText.tagName, I);
});

test("i should set attributes for the idiomatic text element", () => {
  const idiomaticText = i()
    .attributes({ class: "italic-text", title: "Italic Text" })
    .create();
  assert.equal(idiomaticText.getAttribute("class"), "italic-text");
  assert.equal(idiomaticText.getAttribute("title"), "Italic Text");
});

test("i should set children for the idiomatic text element", () => {
  const idiomaticText = i().children("This is ", "italic", " text.").create();
  assert.equal(idiomaticText.innerHTML, "This is italic text.");
});

test("i should set attributes and children for the idiomatic text element", () => {
  const idiomaticText = i()
    .attributes({ class: "italic-text", title: "Italic Text" })
    .children("This is ", "italic", " text.")
    .create();
  assert.equal(idiomaticText.tagName, "I");
  assert.equal(idiomaticText.getAttribute("class"), "italic-text");
  assert.equal(idiomaticText.getAttribute("title"), "Italic Text");
  assert.equal(idiomaticText.innerHTML, "This is italic text.");
});
