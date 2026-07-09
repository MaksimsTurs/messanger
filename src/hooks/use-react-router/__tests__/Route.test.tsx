import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Fragment } from "react/jsx-runtime";

import IndexRouteIsUsedError from "../utils/Index-Route-Is-Used-Error.util";
import ExecutionOutsideContextError from "../utils/Execution-Outside-Context-Error.util";

import { Routes, Route } from "../use-react-router.hook";

test("Test if error is throwing when defining multiple Routes as index.", function() {
  expect(() =>
    render(
      <Routes>
        <Route index path="/"/>
        <Route index path="/"/>
      </Routes>
    )
  ).toThrow(IndexRouteIsUsedError);
});

test("Test if error is throwing when rendering component outside the Context.", function() {
  expect(() =>
    render(
      <Fragment>
        <Route index path="/"/>
        <Route path="/"/>
      </Fragment>
    )
  ).toThrow(ExecutionOutsideContextError);
});

test("Test if children that is setted as index is rendered.", function() {
  const VDOM = render(
    <Routes>
      <Route index path="/" children="Home"/>
      <Route path="/about" children="About"/>
    </Routes>
  );

  expect(VDOM.getByText("Home"))
    .toBeInstanceOf(HTMLElement);
});
