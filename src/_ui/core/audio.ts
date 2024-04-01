/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLAudioElementAttributes } from "@/_definitions/attributes";
import { NewHTMLAudioElement } from "@/_definitions/constructors";
import { isTransparent } from "@/_lib/content";
import { AUDIO, SOURCE, TRACK, VIDEO } from "@/_lib/node_names";

/**
 * Returns a constructor for the HTML <audio> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
 */
export default function NewAudio(
  children?: string | Node | Array<string | Node> | undefined,
  attributes: HTMLAudioElementAttributes = {}
): NewHTMLAudioElement {
  return (): HTMLAudioElement => {
    const audio = document.createElement(AUDIO) as HTMLAudioElement;

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          audio.autofocus = value;
          return;
        case "inert":
          audio.inert = value;
          return;
        case "autoplay":
          audio.autoplay = value;
          return;
        case "controls":
          audio.controls = value;
          return;
        case "disableremoteplayback":
          audio.disableRemotePlayback = value;
          return;
        case "loop":
          audio.loop = value;
          return;
        case "muted":
          audio.muted = value;
          return;
        default:
          audio.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return audio;

    const hasSrc = audio.getAttribute("src") !== null;

    // If the element has a src attribute: zero or more <track> elements followed
    // by transparent content that contains no <audio> or <video> media
    // elements. Else: zero or more <source> elements followed by zero or more
    // <track> elements followed by transparent content that contains no
    // <audio> or <video> media elements.
    //
    // [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#technical_summary)
    const isPermitted = (input: string | Node): boolean => {
      if (typeof input === "string") return true;

      if (input.nodeName === AUDIO || input.nodeName === VIDEO) return false;

      const specialNodeNames = [TRACK, SOURCE];

      if (hasSrc) {
        return input.nodeName === specialNodeNames[0] || isTransparent(input);
      }

      return specialNodeNames.includes(input.nodeName) || isTransparent(input);
    };

    const append = (child: string | Node) => {
      if (typeof child === "string") {
        audio.appendChild(document.createTextNode(child));
      } else if (child instanceof Node && child) {
        audio.appendChild(child);
      }
    };

    if (!Array.isArray(children)) {
      if (isPermitted(children)) {
        append(children);
      }
      return audio;
    }

    const { sources, tracks, transparents } = children.reduce(
      (
        collect: {
          sources: Array<Node>;
          tracks: Array<Node>;
          transparents: Array<string | Node>;
        },
        child: string | Node
      ) => {
        if (!isPermitted(child)) {
          return collect;
        }

        const { sources, tracks, transparents } = collect;

        if (typeof child === "string" || isTransparent(child)) {
          transparents.push(child);
          return { ...collect, transparents };
        }

        if (child.nodeName === TRACK) {
          tracks.push(child);
          return { ...collect, tracks };
        }

        if (hasSrc) {
          sources.length = 0;
          return { ...collect, sources };
        }

        if (child.nodeName === SOURCE) {
          sources.push(child);
          return { ...collect, sources };
        }

        return collect;
      },
      { sources: [], tracks: [], transparents: [] }
    );

    const combined: Array<string | Node> = [
      ...sources,
      ...tracks,
      ...transparents,
    ];

    combined.forEach((child) => append(child));

    return audio;
  };
}
