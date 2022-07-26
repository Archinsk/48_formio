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
      "extTypeCheckbox": false,
      "epgu_selected_vs": {},
      "components": [
        {
          "extTypeCheckbox": false,
          "epgu_selected_vs": {},
          "components": [
            {
              "extTypeCheckbox": false,
              "epgu_selected_vs": {},
              "input": false,
              "columns": [
                {
                  "pull": 0,
                  "components": [
                    {
                      "input": true,
                      "dataGridLabel": false,
                      "hideOnChildrenHidden": false,
                      "tableView": true,
                      "labelWidth": 25,
                      "disabled": true,
                      "require": [
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {}
                      ],
                      "label": "Номер",
                      "type": "textfield",
                      "key": "params_handler_application"
                    }
                  ],
                  "offset": 0,
                  "size": "md",
                  "width": 2,
                  "push": 0
                },
                {
                  "pull": 0,
                  "components": [
                    {
                      "input": true,
                      "dataGridLabel": false,
                      "hideOnChildrenHidden": false,
                      "tableView": true,
                      "disabled": true,
                      "require": [
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {}
                      ],
                      "labelWidth": 10,
                      "label": "Статус",
                      "type": "textfield",
                      "key": "params_handler_state_string"
                    }
                  ],
                  "offset": 0,
                  "size": "md",
                  "width": 3,
                  "push": 0
                },
                {
                  "pull": 0,
                  "components": [
                    {
                      "extTypeCheckbox": false,
                      "epgu_selected_vs": {},
                      "enableMaxDateInput": false,
                      "widget": {
                        "minDate": null,
                        "enableTime": false,
                        "format": "dd.MM.yyyy",
                        "displayInTimezone": "viewer",
                        "noCalendar": false,
                        "type": "calendar",
                        "locale": "ru",
                        "time_24hr": false,
                        "allowInput": true,
                        "minuteIncrement": 1,
                        "mode": "single",
                        "useLocaleSettings": false,
                        "maxDate": null,
                        "disableWeekdays": false,
                        "disableWeekends": false,
                        "hourIncrement": 1
                      },
                      "dataGridLabel": false,
                      "hideOnChildrenHidden": false,
                      "format": "dd.MM.yyyy",
                      "enableTime": false,
                      "tableView": false,
                      "datePicker": {
                        "disableWeekdays": false,
                        "disableWeekends": false
                      },
                      "require": [
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {}
                      ],
                      "labelWidth": 26,
                      "label": "Дата",
                      "type": "datetime",
                      "enableMinDateInput": false,
                      "input": true,
                      "smev_req": {},
                      "disabled": true,
                      "placeholder": "ДД.ММ.ГГГГ",
                      "key": "params_handler_application_start",
                      "esiaKey": {}
                    }
                  ],
                  "size": "md",
                  "offset": 0,
                  "width": 3,
                  "push": 0
                },
                {
                  "pull": 0,
                  "components": [],
                  "size": "md",
                  "offset": 0,
                  "width": 4,
                  "push": 0
                }
              ],
              "dataGridLabel": false,
              "smev_req": {},
              "tableView": false,
              "require": [
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {},
                {}
              ],
              "label": "Столбцы",
              "type": "columns",
              "key": "columns18",
              "esiaKey": {}
            }
          ],
          "collapsed": false,
          "dataGridLabel": false,
          "allowPrevious": false,
          "tableView": false,
          "require": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
          ],
          "label": "",
          "type": "panel",
          "breadcrumbClickable": true,
          "collapsible": false,
          "buttonSettings": {
            "cancel": true,
            "next": true,
            "previous": true
          },
          "input": false,
          "smev_req": {},
          "disabled": true,
          "key": "panel12",
          "esiaKey": {},
          "hideLabel": true
        },
        {
          "extTypeCheckbox": false,
          "epgu_selected_vs": {},
          "input": true,
          "dataGridLabel": false,
          "tableView": true,
          "smev_req": {},
          "label": "Текстовое поле",
          "type": "textfield",
          "key": "textField",
          "esiaKey": {},
          "validate": {
            "required": true
          }
        },
        {
          "extTypeCheckbox": false,
          "epgu_selected_vs": {},
          "input": true,
          "defaultValue": "123",
          "dataGridLabel": false,
          "tableView": true,
          "smev_req": {},
          "label": "Текстовое поле",
          "type": "textfield",
          "key": "textField1",
          "esiaKey": {}
        },
        {
          "extTypeCheckbox": false,
          "epgu_selected_vs": {},
          "enableMaxDateInput": false,
          "widget": {
            "minDate": null,
            "enableTime": true,
            "format": "yyyy-MM-dd hh:mm a",
            "displayInTimezone": "viewer",
            "noCalendar": false,
            "type": "calendar",
            "locale": "ru",
            "time_24hr": false,
            "allowInput": true,
            "minuteIncrement": 1,
            "mode": "single",
            "useLocaleSettings": false,
            "maxDate": null,
            "disableWeekdays": false,
            "disableWeekends": false,
            "hourIncrement": 1
          },
          "dataGridLabel": false,
          "tableView": false,
          "datePicker": {
            "disableWeekdays": false,
            "disableWeekends": false
          },
          "label": "Дата / Время",
          "type": "datetime",
          "enableMinDateInput": false,
          "input": true,
          "smev_req": {},
          "key": "dateTime",
          "esiaKey": {}
        },
        {
          "extTypeCheckbox": false,
          "epgu_selected_vs": {},
          "enableMaxDateInput": false,
          "widget": {
            "minDate": null,
            "enableTime": false,
            "format": "yyyy-MM-dd",
            "displayInTimezone": "viewer",
            "noCalendar": false,
            "type": "calendar",
            "locale": "ru",
            "time_24hr": false,
            "allowInput": true,
            "minuteIncrement": 1,
            "mode": "single",
            "useLocaleSettings": false,
            "maxDate": null,
            "disableWeekdays": false,
            "disableWeekends": false,
            "hourIncrement": 1
          },
          "dataGridLabel": false,
          "format": "yyyy-MM-dd",
          "enableTime": false,
          "tableView": false,
          "datePicker": {
            "disableWeekdays": false,
            "disableWeekends": false
          },
          "label": "Дата",
          "type": "datetime",
          "enableMinDateInput": false,
          "input": true,
          "smev_req": {},
          "key": "dateTime2",
          "esiaKey": {}
        },
        {
          "enableDate": false,
          "extTypeCheckbox": false,
          "epgu_selected_vs": {},
          "enableMaxDateInput": false,
          "widget": {
            "minDate": null,
            "enableTime": true,
            "format": "hh:mm a",
            "displayInTimezone": "viewer",
            "noCalendar": true,
            "type": "calendar",
            "locale": "ru",
            "time_24hr": false,
            "allowInput": true,
            "minuteIncrement": 1,
            "mode": "single",
            "useLocaleSettings": false,
            "maxDate": null,
            "disableWeekdays": false,
            "disableWeekends": false,
            "hourIncrement": 1
          },
          "dataGridLabel": false,
          "format": "hh:mm a",
          "tableView": false,
          "datePicker": {
            "disableWeekdays": false,
            "disableWeekends": false
          },
          "label": "Время",
          "type": "datetime",
          "enableMinDateInput": false,
          "input": true,
          "smev_req": {},
          "key": "dateTime3",
          "esiaKey": {}
        }
      ],
      "collapsed": false,
      "dataGridLabel": false,
      "allowPrevious": false,
      "tableView": false,
      "label": "Panel",
      "type": "panel",
      "breadcrumbClickable": true,
      "collapsible": false,
      "buttonSettings": {
        "cancel": true,
        "next": true,
        "previous": true
      },
      "input": false,
      "smev_req": {},
      "key": "panel",
      "esiaKey": {}
    }
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
