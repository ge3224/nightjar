/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit test for the _ui/core/p module
 */

import { assert, test } from "vitest";
import p from "./p";
import { EM, P, SPAN } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const paragraph = p().create();

  assert.equal(paragraph.tagName, P);
});

test("construction with attributes", () => {
  const paragraph = p().attributes({ id: "foo" }).create();

  assert.equal(paragraph.id, "foo");
});

test("construction with basic contents", () => {
  const paragraph = p().children("foo").create();

  assert.equal(paragraph.textContent, "foo");
});

test("construction with multiple child nodes", () => {
  const foo = "foo";

  const bar = document.createElement("span");
  bar.textContent = "bar";

  const baz = document.createElement("em");
  baz.textContent = "baz";

  const paragraph = p().children(foo, bar, baz).create();

  assert.equal(paragraph.childNodes.length, 3);

  assert.equal(paragraph.childNodes[0].textContent, "foo");

  assert.equal(paragraph.childNodes[1].nodeName, SPAN);
  assert.equal(paragraph.childNodes[1].textContent, "bar");

  assert.equal(paragraph.childNodes[2].nodeName, EM);
  assert.equal(paragraph.childNodes[2].textContent, "baz");
});

test("construction with boolean attributes", () => {
  const paragraph = p().attributes({ autofocus: true, inert: false }).create();

  assert.isTrue(paragraph.autofocus);
  assert.isFalse(paragraph.inert);
});

test("construction with numeric attributes", () => {
  const paragraph = p().attributes({ tabindex: 3 }).create();

  assert.equal(paragraph.getAttribute("tabindex"), "3");
});

// TODO: define event attributes
//
// test("construction with event attributes", () => {
//   const onClick = () => {
//     console.log("Paragraph clicked");
//   };
//
//   const paragraph = p().attributes({ onclick: onClick }).build();
//
//   assert.isFunction(paragraph.onclick);
// });

test("construction with nested elements", () => {
  const nestedContent = [
    "Nested text content",
    document.createElement(SPAN),
    document.createElement(EM),
  ];

  const result = p()
    .children(...nestedContent)
    .create();

  assert.equal(result.tagName, P);
  assert.equal(result.childNodes.length, 3);

  // Check the nested phrasing content
  assert.equal(result.childNodes[0].textContent, "Nested text content");
  assert.equal(result.childNodes[1].nodeName, SPAN);
  assert.equal(result.childNodes[2].nodeName, EM);
});

// TODO: account for null and undefined arguments being passed to p functions
//
// test("construction with null or undefined attributes and children", () => {
//   const paragraphWithNullAttributes = p(null).build();
//   const paragraphWithUndefinedAttributes = p(undefined).build();
//   const paragraphWithNullChildren = p().children(null).build();
//   const paragraphWithUndefinedChildren = p().children(undefined).build();
//
//   assert.equal(paragraphWithNullAttributes.childNodes.length, 0);
//   assert.equal(paragraphWithUndefinedAttributes.childNodes.length, 0);
//   assert.equal(paragraphWithNullChildren.childNodes.length, 0);
//   assert.equal(paragraphWithUndefinedChildren.childNodes.length, 0);
// });
