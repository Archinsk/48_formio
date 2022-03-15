let someform = Formio.createForm(
  document.getElementById("formio"),
  "https://dkpwtpfnbsdzufs.form.io/fioformwithdata"
).then((form) => {
  form.submission = {
    data: {
      firstname: "Mary",
      lastname: "Thompson",
    },
  };
});

let arr = {
  components: [
    {
      extTypeCheckbox: false,
      epgu_selected_vs: {},
      input: true,
      dataGridLabel: false,
      tableView: true,
      smev_req: {},
      require: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      label: "Name",
      type: "textfield",
      key: "textField",
    },
    {
      extTypeCheckbox: false,
      epgu_selected_vs: {},
      input: true,
      dataGridLabel: false,
      tableView: true,
      smev_req: {},
      require: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      label: "Last name",
      type: "textfield",
      key: "textField1",
      validate: {
        required: true,
      },
    },
    {
      allowUserAssign: false,
      extTypeCheckbox: false,
      epgu_selected_vs: {},
      widget: "choicesjs",
      data: {
        values: [
          {
            label: "",
            value: "",
          },
        ],
        url: "https://open-newtemplate.isands.ru/api/prometheus/getDict?data=aHR0cHM6Ly9uZXd0ZW1wbGF0ZS5pc2FuZHMucnUvby90ZW1wbGF0ZS9lbnRpdHkvRGljdGlvbmFyeVBvcnRsZXRFbmRwb2ludC8/ZW50aXR5TmFtZT1kaWN0X2VudGl0eV9kZWZhdWx0X3JvbGVzJmNvbHVtbj1kaWN0X2VudGl0eV9kZWZhdWx0X3JvbGVzJmZvclNlbGVjdD10cnVl",
      },
      indexeddb: {
        filter: {},
        database: "",
        table: "",
      },
      type: "select",
      valueProperty: "value",
      reference: false,
      addResource: false,
      disableLimit: false,
      smev_req: {},
      key: "select",
      dataSrc: "url",
      validate: {
        select: false,
      },
      dataGridLabel: false,
      tableView: true,
      require: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
      label: "dict",
      selectedDictCode: {
        endpoint: "DictionaryPortletEndpoint",
        columns: [
          {
            name: "dict_entity_default_roles",
            label: "Роли портала",
            type: "STRING",
            value: "dict_entity_default_roles",
          },
        ],
        name: "dict_entity_default_roles",
        label: "Роли портала",
        value: "dict_entity_default_roles",
      },
      selectedDictColumn: {
        name: "dict_entity_default_roles",
        label: "Роли портала",
        type: "STRING",
        value: "dict_entity_default_roles",
      },
      input: true,
      idPath: "value",
      isSelectDict: true,
      selectThreshold: 0.3,
    },
  ],
};

let formcamundasubmission = {
  data: {
    textField: "Рональд",
    textField1: "Куман",
  },
};

let formcamundaoptions = {
  // readOnly: true,
  // noDefaults: true,
  language: "ru",
  i18n: {
    ru: {
      "Name": "Имя",
      "Last name": "Фамилия",
      "dict": "Тип заявителя",
      "Type to search": "Поиск...",
    },
  },
};

let someformcamunda = Formio.createForm(
  document.getElementById("formiocamunda"),
  arr,
  formcamundaoptions
).then((form) => {
  form.submission = formcamundasubmission;
  form.on("change", (changed) => {
    form.checkValidity(null, true, null, false);
    console.log("Data was changed!", changed);
    console.log(form);
  });
});
