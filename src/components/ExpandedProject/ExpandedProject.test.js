import App from "../App/App";
import ExpandedProject from "./ExpandedProject";
import React from "react";
import ApiContext from "../../context/ApiContext";
import { BrowserRouter } from "react-router-dom";
import { mount } from "enzyme";

global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};

describe("Project", () => {
  beforeAll(() => {
    const htmlNode = document.createElement("html");
    htmlNode.setAttribute("id", "html");
    document.body.appendChild(htmlNode);
  });
  afterAll(() => {
    const htmlNode = document.getElementById("html");
    if (htmlNode) {
      document.body.removeChild(htmlNode);
    }
  });

  it("renders without crashing", () => {
    const wrapper = mount(
      <BrowserRouter>
        <ApiContext.Provider>
          <App>
            <ExpandedProject />
          </App>
        </ApiContext.Provider>
      </BrowserRouter>,
      document.getElementById("html")
    );
  });
});
