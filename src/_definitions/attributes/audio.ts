/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementGlobalAttributes } from "./global";

/**
 * Dfefines attributes specific to the HTML <audio> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#attributes)
 */
export interface HTMLAudioElementAttributes extends HTMLElementGlobalAttributes {
  /**
   * A Boolean attribute: if specified, the audio will automatically begin
   * playback as soon as it can do so, without waiting for the entire audio
   * file to finish downloading.
   */
  autoplay?: boolean;
  /**
   * If this attribute is present, the browser will offer controls to allow the
   * user to control audio playback, including volume, seeking, and
   * pause/resume playback.
   */
  controls?: boolean;
  /**
   * The controlslist attribute, when specified, helps the browser select what
   * controls to show for the audio element whenever the browser shows its own
   * set of controls (that is, when the controls attribute is specified).
   */
  controlslist?: string;
  /**
   * This enumerated attribute indicates whether to use CORS to fetch the
   * related audio file. CORS-enabled resources can be reused in the <canvas>
   * element without being tainted. The allowed values are:
   */
  crossorigin?: "anonymous" | "use-credentials";
  /**
   * A Boolean attribute used to disable the capability of remote playback in
   * devices that are attached using wired (HDMI, DVI, etc.) and wireless
   * technologies (Miracast, Chromecast, DLNA, AirPlay, etc.).
   **/
  disableremoteplayback?: boolean;
  /**
   * A Boolean attribute: if specified, the audio player will automatically
   * seek back to the start upon reaching the end of the audio.
   */
  loop?: boolean;
  /**
   * A Boolean attribute that indicates whether the audio will be initially
   * silenced.
   */
  muted?: boolean;
  /**
   * This enumerated attribute is intended to provide a hint to the browser
   * about what the author thinks will lead to the best user experience.
   */
  preload?: "none" | "metadata" | "auto" | "";
  /**
   * The URL of the audio to embed. This is subject to HTTP access controls.
   */
  src?: string;
}
