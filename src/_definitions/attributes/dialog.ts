import { HTMLElementAttributes } from "./global";

export interface HTMLDialogElementAttributes extends HTMLElementAttributes {
  /**
   * Indicates that the dialog box is active and is available for interaction.
   */
  open?: boolean;
}
