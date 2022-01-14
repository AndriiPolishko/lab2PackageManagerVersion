/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./css/index.css":
/*!***********************!*\
  !*** ./css/index.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "error": function() { return /* binding */ error; },
/* harmony export */   "name": function() { return /* binding */ name; },
/* harmony export */   "email": function() { return /* binding */ email; },
/* harmony export */   "message": function() { return /* binding */ message; },
/* harmony export */   "submit": function() { return /* binding */ submit; },
/* harmony export */   "sendMail": function() { return /* binding */ sendMail; }
/* harmony export */ });
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ "./css/index.css");


let error = document.querySelector("#error")

let name = document.getElementById("name")

let email = document.getElementById("email")

let message = document.getElementById("message")

const submit = document.querySelector(".submit");

const spinner = document.getElementById('spinner');
console.log("user_au6fYZ2B6X1emeNjnPSTP" )
function sanitize(element) {
    let unsanitizedHTML = element.innerHTML
    let tempElement = document.createElement('div');
    tempElement.innerText = unsanitizedHTML;
    element.innerHTML = tempElement.innerHTML;
    return element
}

function sendMail(event) {
    submit.setAttribute('disabled','true')
    event.preventDefault();
    let tempParams = {
        from_name: sanitize(name).value,
        from_email: sanitize(email).value,
        message: sanitize(message).value
    }

    emailjs.send('service_r6f0duy','template_3qvjzop',tempParams)
        .then(()=>{
                spinner.classList.remove('hide');
                error.style.backgroundColor = "green"
                error.innerText = "Great Success!!!"
                name.value='';
                email.value='';
                message.value='';
                setTimeout(()=> {
                    spinner.classList.add('hide');
                    submit.removeAttribute('disabled')
                    document.querySelector(".error-message").innerText=""
                },5*1000)},
            (error)=>{console.log("Error :",error)})
}

//////////////////

let form = document.querySelector(".contact-form")
name.addEventListener('input',function(event) {
    if(name.validity.valid) {
        error.textContent="";
        error.style.backgroundColor="var(--black)";
    }
    else {
        showError();
    }
});

email.addEventListener('input',function(event) {
    if(email.validity.valid) {
        error.textContent="";
        error.style.backgroundColor="var(--black)";
    }
    else {
        showError();
    }
});

message.addEventListener('input',function(event) {
    if(message.validity.valid) {
        error.textContent="";
        error.style.backgroundColor="var(--black)";
    }
    else {
        showError();
    }
});

form.addEventListener('submit', function(event) {
    if(!name.validity.valid || !email.validity.valid || !message.validity.valid) {
        showError();
        event.preventDefault();
    }
    else {
        sendMail(event)
    }
})

function showError() {
    if(name.validity.valueMissing) {
        error.textContent = "Enter your name, please";
    }
    else if(name.validity.tooShort) {
        error.textContent = "Your name is too short";
    }
    else if(email.validity.valueMissing) {
        error.textContent = "Enter your Email, please";
    }
    else if(email.validity.typeMismatch) {
        error.textContent = "Enter correct Email, please";
    }
    else if(email.validity.tooShort) {
        error.textContent = "Your Email is too short";
    }
    else if(message.validity.valueMissing) {
        error.textContent = "Enter your message, please";
    }
    else if(message.validity.tooShort) {
        error.textContent = "Your message is too short";
    }
    error.style.backgroundColor="var(--red)"
}

(function() {
    let init = "user_au6fYZ2B6X1emeNjnPSTP";
    emailjs.init(init);
})();
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map