"use strict";

const userForm = new UserForm();

userForm.loginFormCallback = data => ApiConnector.login(data, response => response.success ? location.reload() : userForm.setLoginErrorMessage(response.error));

userForm.registerFormCallback = data => ApiConnector.register(data, response => response.success ? location.reload() : userForm.setRegisterErrorMessage(response.error));




// userForm.registerFormCallback = function (data) {
//     ApiConnector.register(data, function (response) {
//         if (response.success) {
//             location.reload();
//         } else {
//             userForm.setRegisterErrorMessage(response.error);
//         }
//     });
// };