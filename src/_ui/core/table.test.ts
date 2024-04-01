// @vitest-environment happy-dom

import { expect, test } from "vitest";
import NewTable from "./table";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import { TABLE } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewTable(document.createElement("tr"), {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(TABLE);
});

test("construct with children", () => {
  const allowedChildrenTypes = [
    document.createElement("caption"),
    document.createElement("thead"),
    document.createElement("tbody"),
    document.createElement("tfoot"),
    document.createElement("tr"),
  ];

  let mockParent: HTMLTableElement;

  allowedChildrenTypes.forEach((mockChild) => {
    mockParent = NewTable(mockChild, {});
    expect(mockParent.firstElementChild).not.toBeNull();
  });

  mockParent = NewTable(allowedChildrenTypes, {});

  expect(mockParent.firstElementChild).not.toBeNull();

  const unallowed = document.createElement("td");

  mockParent = NewTable(unallowed, {});

  expect(mockParent.childNodes.length).toBe(0);
});

test("construction with attributes", () => {
  const mock = NewTable(document.createElement("tr"), {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
