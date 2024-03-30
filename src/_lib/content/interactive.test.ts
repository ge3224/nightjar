/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the content/interactive module
 */

// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { isInteractiveContent } from "./interactive";

test("isInteractiveContent passed unconditionally interactive content", () => {
  const valid = [
    document.createElement("button"),
    document.createElement("details"),
    document.createElement("embed"),
    document.createElement("iframe"),
    document.createElement("label"),
    document.createElement("select"),
    document.createElement("textarea"),
  ];

  valid.forEach((node) => {
    expect(isInteractiveContent(node)).toBe(true);
  });
});

test("isInteractiveContent passed conditionally interactive content", () => {
  /**
   * <a>, if the href attribute is present
   */
  const a = document.createElement("a");
  a.setAttribute("href", "#");

  expect(isInteractiveContent(a)).toBe(true);

  /**
   * <audio>, if the controls attribute is present
   */
  const audio = document.createElement("audio");
  audio.controls = true;

  expect(isInteractiveContent(audio)).toBe(true);

  /**
   * <img>, if the usemap attribute is present
   */
  const img = document.createElement("img");
  img.setAttribute("usemap", "#foo");

  expect(isInteractiveContent(img)).toBe(true);

  /**
   * <input>, if the type attribute is not in the hidden state
   */
  const input = document.createElement("input");
  input.setAttribute("type", "radioi");

  expect(isInteractiveContent(input)).toBe(true);

  /**
   * <object>, if the usemap attribute is present
   */
  const object = document.createElement("object");
  object.setAttribute("usemap", "#bar");

  expect(isInteractiveContent(object)).toBe(true);

  /**
   * <video>, if the controls attribute is present
   */
  const video = document.createElement("video");
  video.controls = true;

  expect(isInteractiveContent(video)).toBe(true);
});

test("isInteractiveContent passed unconditionally non-interactive inputs", () => {
  const invalid = [
    document.createElement("p"),
    document.createElement("div"),
    document.createElement("a"),
  ];

  invalid.forEach((node) => {
    expect(isInteractiveContent(node)).toBe(false);
  });
});

test("isInteractiveContent passed conditionally non-interactive content", () => {
  /**
   * <a>, if the href attribute is present
   */
  const a = document.createElement("a");
  expect(isInteractiveContent(a)).toBe(false);

  /**
   * <audio>, if the controls attribute is present
   */
  const audio = document.createElement("audio");
  expect(isInteractiveContent(audio)).toBe(false);

  /**
   * <img>, if the usemap attribute is present
   */
  const img = document.createElement("img");
  expect(isInteractiveContent(img)).toBe(false);

  /**
   * <input>, if the type attribute is not in the hidden state
   */
  const input = document.createElement("input");
  expect(isInteractiveContent(input)).toBe(false);

  /**
   * <object>, if the usemap attribute is present
   */
  const object = document.createElement("object");
  expect(isInteractiveContent(object)).toBe(false);

  /**
   * <video>, if the controls attribute is present
   */
  const video = document.createElement("video");
  expect(isInteractiveContent(video)).toBe(false);
});
