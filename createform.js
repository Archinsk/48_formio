let firstform;

// Переопределение поведения
var onClick = Formio.Components.components.button.prototype.onClick;
Formio.Components.components.button.prototype.onClick = function(event) {
  if (window.confirm('Are you sure you want to press this button?')) {
    onClick.call(this, event);
  }
};

Formio.createForm(
  document.getElementById("formio"),
  "https://dkpwtpfnbsdzufs.form.io/fioformwithdata"
).then((form) => {
  form.submission = {
    data: {
      firstname: "Mary",
      lastname: "Thompson",
    }
  };
  firstform = form;
  form.on("change", () => {
    console.log(firstform);
  });
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
      "Last name is required": "Фамилия - это обязательное поле",
      "No results found": "Поиск не дал результатов",
      "is required": "обязательное поле",
    },
  },
};

let secondform = Formio.createForm(
  document.getElementById("formiocamunda"),
  arr,
  formcamundaoptions
).then((form) => {
  // form.submission = formcamundasubmission;
  form.on("change", (changed) => {
    form.checkValidity(null, true, null, false);
    console.log("Data was changed!", changed);
    console.log(form);
  });
});

//Создание элемента формы
// var formInstance = null;
// var formData = null;
//
// loadApplication(4002, 0);
//
//Загрузить форму заявки по модели и номеру заявки (если номер = 0 будет создано новое заявление)
// async function loadApplication(modelId, appId) {
//   let payload = await axios.get("/o/prometheus/v1/action/getApplicationData?modelId=" + modelId + "&applicationId=" + appId);
//   if (payload) {
//     console.debug(payload);
//     await createForm(payload.data.applicationDTO)
//   }
// }
//
//Обновить данные формы после выполнения действия
// async function loadFromResponse(response) {
//   console.debug("loading from response")
//   console.debug(response);
//   if (response){
//     await createForm(response)
//   }
// }
//
//Создание формы с данными заявки
// async function createForm(fullObject){
//   console.debug(fullObject)
//   try{
//     document.getElementById("actions").innerHTML = '';
//   } catch (e){}
//   let actionsDiv = document.getElementById("actions");
//   if (fullObject.form.actions && fullObject.form.actions.length > 0) {
//     actionsDiv.innerHTML = '';
//     fullObject.form.actions.forEach(action => {
//       if (fullObject.active || action.alwaysActive) actionsDiv.innerHTML += `<a class="btn btn-primary" style="min-width: 12rem;" href="javascript:void(0)" onclick="invokeAction(` + action.id + `)">` + action.name + `</a>`;
//     })
//   }
//   if (fullObject.form.scheme) {
//     formInstance = Formio.createForm(document.getElementById('egorformio'), JSON.parse(fullObject.form.scheme), {
//       language: 'ru',
//       readOnly : !fullObject.active
//     }).then(function (form) {
//       form.submission = {
//         data: JSON.parse(fullObject.data)
//       };
//       form.on('change', function (submission) {
//         var myData = submission;
//         isDataValid = submission.isValid;
//         formData = JSON.stringify(myData.data);
//         console.debug(formData);
//       });
//     });
//     document.getElementById('formTitle').innerHTML = fullObject.form.name;
//   }
// }
//
//Выполнение действия
// async function invokeAction(actionId) {
//   console.debug("invokeAction")
//   if (actionId) {
//     console.debug("invoking action");
//     let payload = {};
//     payload.modelId = 4002;
//     payload.appId = 0;
//     payload.actionId = actionId;
//     payload.data = formData;
//     let result = await axios.post("/o/prometheus/v1/action/invoke", payload, {headers: {'Content-Type': 'text/plain; charset=UTF-8'}});
//     console.debug(result);
//     if (result.data.errors.length === 0) {
//       console.debug("no errors")
//       await loadFromResponse(result.data.applicationDTO);
//     } else {
//       console.error(result.data.errors)
//     }
//   }
// }
