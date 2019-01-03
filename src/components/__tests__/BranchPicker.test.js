/* eslint-disable no-undef */
import { createLocalVue, mount } from "@vue/test-utils";
import { getQueriesForElement, prettyDOM } from "dom-testing-library";
import Vuex from "vuex";
import BranchPicker from "../BranchPicker.vue";
import { mutations, getters, actions, state } from "../../store";
//import { mokingGet } from "./moking";
jest.mock("../../store");
function render(component, options) {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store({ state, getters, actions, mutations });
  const wrapper = mount(component, {
    localVue,
    attachToDocument: true,
    ...options,
    store
  });

  return {
    wrapper,
    ...getQueriesForElement(wrapper.element),
    debug: () => console.log(prettyDOM(wrapper.element))
  };
}

const setCompaniesList = jest.fn(() => [
  {
    company_id: 17,
    emitter: {
      id: 11,
      tax_id: "JAR1106038RA",
      business_name: "Soluciones Eléctricas",
      commercial_name: "Soluciones Eléctricas Ibarra Updated S.A. de C.V."
    }
  }
]);

describe("BranchPicker", () => {
  test("componente", async () => {
    const data = [
      {
        company_id: 17,
        emitter: {
          id: 11,
          tax_id: "JAR1106038RA",
          business_name: "Soluciones Eléctricas",
          commercial_name: "Soluciones Eléctricas Ibarra Updated S.A. de C.V."
        }
      }
    ];
    actions.getCompaniesList.mockResolvedValue(data);
    const commit = jest.fn();
    await actions.mokingGet({ commit });
    expect(commit).toHaveBeenCalledWith("setCompaniesList", { data });

    // const { getByText } = render(BranchPicker);
    // expect(getByText("Empresas")).toBeTruthy();
    // expect(getByText("Soluciones Eléctricas")).toBeTruthy()
    //actions.getCompaniesList({commit: mutations.setCompaniesList})

    // let data;
    // let mockCommit = (state, payload) => {
    //   data = payload;
    // };
    // actions.getCompaniesList({ commit: mockCommit }).then(() => {
    //   expect(data).toEqual({ title: "Mock with Jest" });
    // });
  });
});

/*describe("BranchPicker", () => {
  test("Updates active company correctly", () => {
    const { wrapper } = render(BranchPicker);

    wrapper.vm.handleSelectedItem(wrapper.vm.companies[2].id);
    expect(wrapper.vm.companies[0].selected).toBe(false);
    expect(wrapper.vm.companies[2].selected).toBe(true);
  });

  test("It always has ONE and only ONE active company", () => {
    const { wrapper } = render(BranchPicker);

    wrapper.vm.handleSelectedItem(wrapper.vm.companies[0].id);
    let trueCount = 0;
    for (let index = 0; index < wrapper.vm.companies.length; index++) {
      if (wrapper.vm.companies[index].selected) {
        trueCount++;
      }
    }
    expect(trueCount).toEqual(1);

    wrapper.vm.handleSelectedItem(wrapper.vm.companies[2].id);
    let secondTrueCount = 0;
    for (let index = 0; index < wrapper.vm.companies.length; index++) {
      if (wrapper.vm.companies[index].selected) {
        secondTrueCount++;
      }
    }
    expect(secondTrueCount).toEqual(1);
  });

  test("it highlights the currently selected company", async () => {
    const { getByText, wrapper } = render(BranchPicker);

    const oneCompany = wrapper.vm.companies[0];
    wrapper.vm.handleSelectedItem(oneCompany.id);
    const activeItem = wrapper.find(".active");
    expect(activeItem.text()).toContain(oneCompany.name);

    const anotherCompany = wrapper.vm.companies[2];
    const companyName = getByText(anotherCompany.name);

    await fireEvent.click(companyName);

    const activeItem2 = wrapper.find(".active");
    expect(activeItem2.text()).toContain(anotherCompany.name);
  });

  test("branches shown when the company is selected", async () => {
    const { getByText, wrapper } = render(BranchPicker);
    const oneCompany = wrapper.vm.companies[0];
    const companyName = getByText(oneCompany.name);

    await fireEvent.click(companyName);
    const oneBranch = oneCompany.branches[0];
    expect(getByText(oneBranch.name)).toBeTruthy();

    const anotherBranch = oneCompany.branches[3];
    expect(getByText(anotherBranch.name)).toBeTruthy();
  });

  test("it renders the disabled companies correctly", () => {
    const { wrapper } = render(BranchPicker);
    let disabledCount = 0;
    wrapper.vm.companies.forEach(company => {
      if (company.active === false) {
        disabledCount++;
      }
    });
    const disabledCompanies = wrapper.findAll("button:disabled");
    expect(disabledCompanies.length).toEqual(disabledCount);
  });

  test("it changes the selected propety when the branch is active", () => {
    const { wrapper } = render(BranchPicker);

    wrapper.vm.handleSelectedItem(wrapper.vm.companies[0].id);
    expect(wrapper.vm.branches[0].selected).toBe(false);

    wrapper.vm.handleSelectedBranch(wrapper.vm.branches[0].id);
    expect(wrapper.vm.branches[0].selected).toBe(true);
  });

  test("locations shown when the branch is selected", async () => {
    const { getByText, wrapper } = render(BranchPicker);

    wrapper.vm.handleSelectedItem(wrapper.vm.companies[0].id);
    const selectedBranch = wrapper.vm.branches[0];
    await fireEvent.click(getByText(selectedBranch.name));
    expect(getByText(selectedBranch.locations[0].name)).toBeTruthy();
  });

  test("Request is shown for disabled companies", () => {
    const { wrapper, getByText, debug } = render(BranchPicker);

    expect(wrapper).not.toContain("Solicitar permiso para");
    wrapper.vm.handleSelectedRequest(wrapper.vm.companies[0].id);
    const disabledCompany = wrapper.findAll(".fa-question-circle");
    const companyKey = wrapper.vm.companies[0].rfc;
    disabledCompany.at(0).trigger("click");
    expect(
      getByText(`¿Solicitar permiso para la Tienda ${companyKey}?`)
    ).toBeTruthy();
  });
});*/
