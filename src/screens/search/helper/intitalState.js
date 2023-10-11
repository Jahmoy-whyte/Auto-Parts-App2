const intitalState = {
  modelShow: false,
  modelOptions: [],
  modelIsLoading: false,
  modelIsDisabled: false,
  modelTitle: "",
  modelOptionsKey: "",
  modelselectedDropDownKey: "",
  modelNextDropDownKey: "",
  isSearching: false,
  disableAllDropdown: false,
  productsData: [],
  isLoading: true,

  makeDropDownBox: {
    selectedValue: "",
    selectedValueId: "",
    isDisabled: false,
  },

  modelDropDownBox: {
    selectedValue: "",
    selectedValueId: "",
    isDisabled: true,
  },
  yearDropDownBox: {
    selectedValue: "",
    selectedValueId: "",
    isDisabled: true,
  },

  categoriesDropDownBox: {
    selectedValue: "",
    selectedValueId: "",
    isDisabled: false,
  },
};

export default intitalState;
