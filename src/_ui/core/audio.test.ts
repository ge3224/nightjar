/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/audio module
 */

import { expect, test } from "vitest";
import NewAudio from "./audio";
import { AUDIO, SOURCE, TRACK } from "@/_lib/node_names";
import { HTMLAudioElementAttributes } from "@/_definitions/attributes";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewAudio()();

  expect(mock).not.toBeNull();

  expect(mock.tagName).toEqual(AUDIO);
});

test("construction with attributes", () => {
  const attributes = {
    id: "bar",
    class: "foo bar baz",
    autoplay: true,
    controls: true,
    disableremoteplayback: true,
    loop: true,
    muted: true,
    crossorigin: "anonymous",
    controlslist: "nodownload",
    src: "https://foo.ogg",
  } as HTMLAudioElementAttributes;
  const mock = NewAudio(undefined, attributes)();

  expect(mock.getAttribute("id")).toBe(attributes.id);
  expect(mock.getAttribute("class")).toBe(attributes.class);
  expect(mock.getAttribute("crossorigin")).toBe(attributes.crossorigin);
  expect(mock.getAttribute("controlslist")).toBe(attributes.controlslist);
  expect(mock.getAttribute("src")).toBe(attributes.src);
  expect(mock.autoplay).toBe(attributes.autoplay);
  expect(mock.controls).toBe(attributes.controls);
  expect(mock.disableRemotePlayback).toBe(attributes.disableremoteplayback);
  expect(mock.loop).toBe(attributes.loop);
  expect(mock.muted).toBe(attributes.muted);
});

test("construction when 'src' attribute is present", () => {
  const content = (() => {
    //transparent content should follow track
    const wrongPosition = "Your browser does not support the audio element";

    const track = document.createElement(TRACK) as HTMLTrackElement;
    track.setAttribute("kind", "captions");
    track.setAttribute("srclang", "en");
    track.setAttribute("src", "/foo/bar/baz.vtt");

    // source content is not included if the 'src' attribute is present.
    const unallowed = document.createElement(SOURCE);
    unallowed.setAttribute("src", "foo.mp4");
    unallowed.setAttribute("type", "video/mp4");

    return [wrongPosition, track, unallowed];
  })();

  const mock = NewAudio(content, { src: "https://foo.bar.baz" })();

  expect(mock.childNodes.length).toBe(2);
  expect(mock.firstChild?.nodeName).toBe(TRACK);
});

test("construction without the 'src' attribute", () => {
  const content = (() => {
    const wrongPosition = "Your browser does not support the audio element";

    const track = document.createElement(TRACK) as HTMLTrackElement;
    track.setAttribute("kind", "captions");
    track.setAttribute("srclang", "en");
    track.setAttribute("src", "/foo/bar/baz.vtt");

    // source elements should be first, before track elements
    const shouldLead = document.createElement(SOURCE);
    shouldLead.setAttribute("src", "foo.mp4");
    shouldLead.setAttribute("type", "video/mp4");

    return [wrongPosition, track, shouldLead];
  })();

  const mock = NewAudio(content)();

  expect(mock.childNodes.length).toBe(3);
  expect(mock.firstChild?.nodeName).toBe(SOURCE);
  expect(mock.firstChild?.nextSibling?.nodeName).toBe(TRACK);
});
