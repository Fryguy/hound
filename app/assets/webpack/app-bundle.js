webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _account_credit_card_updater = __webpack_require__(2);

	var _account_credit_card_updater2 = _interopRequireDefault(_account_credit_card_updater);

	var _account_email_updater = __webpack_require__(39);

	var _account_email_updater2 = _interopRequireDefault(_account_email_updater);

	var _account_email_updater_message = __webpack_require__(40);

	var _account_email_updater_message2 = _interopRequireDefault(_account_email_updater_message);

	var _empty_repo_list = __webpack_require__(41);

	var _empty_repo_list2 = _interopRequireDefault(_empty_repo_list);

	var _organization = __webpack_require__(42);

	var _organization2 = _interopRequireDefault(_organization);

	var _organizations_list = __webpack_require__(47);

	var _organizations_list2 = _interopRequireDefault(_organizations_list);

	var _populated_repo_list = __webpack_require__(44);

	var _populated_repo_list2 = _interopRequireDefault(_populated_repo_list);

	var _repo = __webpack_require__(45);

	var _repo2 = _interopRequireDefault(_repo);

	var _repo_activation_button = __webpack_require__(46);

	var _repo_activation_button2 = _interopRequireDefault(_repo_activation_button);

	var _repo_list = __webpack_require__(43);

	var _repo_list2 = _interopRequireDefault(_repo_list);

	var _repo_tools = __webpack_require__(48);

	var _repo_tools2 = _interopRequireDefault(_repo_tools);

	var _repo_tools_private = __webpack_require__(50);

	var _repo_tools_private2 = _interopRequireDefault(_repo_tools_private);

	var _repo_tools_refresh = __webpack_require__(51);

	var _repo_tools_refresh2 = _interopRequireDefault(_repo_tools_refresh);

	var _repo_tools_search = __webpack_require__(49);

	var _repo_tools_search2 = _interopRequireDefault(_repo_tools_search);

	var _repos_container = __webpack_require__(52);

	var _repos_container2 = _interopRequireDefault(_repos_container);

	var _repos_sync_spinner = __webpack_require__(54);

	var _repos_sync_spinner2 = _interopRequireDefault(_repos_sync_spinner);

	var _repos_view = __webpack_require__(53);

	var _repos_view2 = _interopRequireDefault(_repos_view);

	var _tier_change_notifier = __webpack_require__(58);

	var _tier_change_notifier2 = _interopRequireDefault(_tier_change_notifier);

	var _tier_plan = __webpack_require__(59);

	var _tier_plan2 = _interopRequireDefault(_tier_plan);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Setup a global app scope
	var app = window.app = global.app = {};

	// Expose components to global scope
	app.AccountCreditCardUpdater = _account_credit_card_updater2.default;
	app.AccountEmailUpdater = _account_email_updater2.default;
	app.AccountEmailUpdaterMessage = _account_email_updater_message2.default;
	app.EmptyRepoList = _empty_repo_list2.default;
	app.Organization = _organization2.default;
	app.OrganizationsList = _organizations_list2.default;
	app.PopulatedRepoList = _populated_repo_list2.default;
	app.Repo = _repo2.default;
	app.RepoActivationButton = _repo_activation_button2.default;
	app.RepoList = _repo_list2.default;
	app.RepoTools = _repo_tools2.default;
	app.RepoToolsPrivate = _repo_tools_private2.default;
	app.RepoToolsRefresh = _repo_tools_refresh2.default;
	app.RepoToolsSearch = _repo_tools_search2.default;
	app.ReposContainer = _repos_container2.default;
	app.ReposSyncSpinner = _repos_sync_spinner2.default;
	app.ReposView = _repos_view2.default;
	app.TierChangeNotifier = _tier_change_notifier2.default;
	app.TierPlan = _tier_plan2.default;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccountCreditCardUpdater = function (_React$Component) {
	  _inherits(AccountCreditCardUpdater, _React$Component);

	  function AccountCreditCardUpdater() {
	    _classCallCheck(this, AccountCreditCardUpdater);

	    return _possibleConstructorReturn(this, (AccountCreditCardUpdater.__proto__ || Object.getPrototypeOf(AccountCreditCardUpdater)).apply(this, arguments));
	  }

	  _createClass(AccountCreditCardUpdater, [{
	    key: "componentWillMount",
	    value: function componentWillMount() {
	      $.ajaxSetup({
	        headers: {
	          "X-XSRF-Token": this.props.authenticity_token
	        }
	      });
	    }
	  }, {
	    key: "updateCustomerCreditCard",
	    value: function updateCustomerCreditCard(stripeToken) {
	      $.ajax({
	        url: "/credit_card.json",
	        type: "PUT",
	        data: { card_token: stripeToken.id },
	        dataType: "json"
	      });
	    }
	  }, {
	    key: "onUpdateCreditCard",
	    value: function onUpdateCreditCard(event) {
	      event.preventDefault();

	      StripeCheckout.configure({
	        key: Hound.settings.stripePublishableKey,
	        image: Hound.settings.iconPath,
	        email: $("input[type=email]").attr("placeholder"),
	        token: this.updateCustomerCreditCard
	      }).open({
	        panelLabel: "Update Card",
	        allowRememberMe: false
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      if (this.props.stripe_customer_id_present) {
	        return _react2.default.createElement(
	          "h3",
	          null,
	          "Monthly Billing",
	          _react2.default.createElement(
	            "a",
	            { href: "#", className: "update-card", onClick: this.onUpdateCreditCard },
	            _react2.default.createElement("i", { className: "fa fa-credit-card" }),
	            "Update Credit Card"
	          )
	        );
	      } else {
	        return _react2.default.createElement(
	          "h3",
	          null,
	          "Monthly Billing"
	        );
	      }
	    }
	  }]);

	  return AccountCreditCardUpdater;
	}(_react2.default.Component);

	module.exports = AccountCreditCardUpdater;

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _account_email_updater_message = __webpack_require__(40);

	var _account_email_updater_message2 = _interopRequireDefault(_account_email_updater_message);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccountEmailUpdater = function (_React$Component) {
	  _inherits(AccountEmailUpdater, _React$Component);

	  function AccountEmailUpdater() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, AccountEmailUpdater);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AccountEmailUpdater.__proto__ || Object.getPrototypeOf(AccountEmailUpdater)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      emailAddress: null,
	      emailInput: null,
	      addressChanged: null
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(AccountEmailUpdater, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      $.ajaxSetup({
	        headers: {
	          "X-XSRF-Token": this.props.authenticity_token
	        }
	      });
	    }
	  }, {
	    key: 'onUpdateEmail',
	    value: function onUpdateEmail(event) {
	      var _this2 = this;

	      event.preventDefault();

	      $.ajax({
	        url: "/account.json",
	        type: "PUT",
	        data: { billable_email: this.state.emailInput },
	        dataType: "text",
	        success: function success() {
	          _this2.setState({
	            addressChanged: true,
	            emailAddress: _this2.state.emailInput
	          });
	        },
	        error: function error() {
	          _this2.setState({ addressChanged: false });
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var billable_email = this.props.billable_email;

	      var placeholder = this.state.emailAddress || billable_email;

	      return _react2.default.createElement(
	        'article',
	        { className: 'account-details' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Update account settings'
	        ),
	        _react2.default.createElement(
	          'form',
	          null,
	          _react2.default.createElement(
	            'div',
	            { className: 'form-group' },
	            _react2.default.createElement(
	              'label',
	              null,
	              'Email address for receipts'
	            ),
	            _react2.default.createElement('input', {
	              type: 'email',
	              placeholder: placeholder,
	              onChange: function onChange(event) {
	                return _this3.setState({
	                  emailInput: event.target.value,
	                  addressChanged: null
	                });
	              }
	            }),
	            _react2.default.createElement(_account_email_updater_message2.default, {
	              addressChanged: this.state.addressChanged
	            })
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-actions' },
	            _react2.default.createElement(
	              'button',
	              { className: 'button-small', onClick: function onClick(event) {
	                  return _this3.onUpdateEmail(event);
	                } },
	              'Update Email'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return AccountEmailUpdater;
	}(_react2.default.Component);

	module.exports = AccountEmailUpdater;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccountEmailUpdaterMessage = function (_React$Component) {
	  _inherits(AccountEmailUpdaterMessage, _React$Component);

	  function AccountEmailUpdaterMessage() {
	    _classCallCheck(this, AccountEmailUpdaterMessage);

	    return _possibleConstructorReturn(this, (AccountEmailUpdaterMessage.__proto__ || Object.getPrototypeOf(AccountEmailUpdaterMessage)).apply(this, arguments));
	  }

	  _createClass(AccountEmailUpdaterMessage, [{
	    key: "render",
	    value: function render() {
	      if (this.props.addressChanged == null) {
	        return null;
	      }

	      if (this.props.addressChanged) {
	        return _react2.default.createElement(
	          "p",
	          { className: "inline-flash inline-flash--success" },
	          _react2.default.createElement(
	            "i",
	            { className: "fa fa-check" },
	            "Email address updated!"
	          )
	        );
	      } else {
	        return _react2.default.createElement(
	          "p",
	          { className: "inline-flash inline-flash--error" },
	          _react2.default.createElement(
	            "i",
	            { className: "fa fa-exclamation-circle" },
	            "There was a problem updating your email. Please try again."
	          )
	        );
	      }
	    }
	  }]);

	  return AccountEmailUpdaterMessage;
	}(_react2.default.Component);

	module.exports = AccountEmailUpdaterMessage;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EmptyRepoList = function (_React$Component) {
	  _inherits(EmptyRepoList, _React$Component);

	  function EmptyRepoList() {
	    _classCallCheck(this, EmptyRepoList);

	    return _possibleConstructorReturn(this, (EmptyRepoList.__proto__ || Object.getPrototypeOf(EmptyRepoList)).apply(this, arguments));
	  }

	  _createClass(EmptyRepoList, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement("ul", { className: "repos" });
	    }
	  }]);

	  return EmptyRepoList;
	}(_react2.default.Component);

	module.exports = EmptyRepoList;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _repo_list = __webpack_require__(43);

	var _repo_list2 = _interopRequireDefault(_repo_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Organization = function (_React$Component) {
	  _inherits(Organization, _React$Component);

	  function Organization() {
	    _classCallCheck(this, Organization);

	    return _possibleConstructorReturn(this, (Organization.__proto__ || Object.getPrototypeOf(Organization)).apply(this, arguments));
	  }

	  _createClass(Organization, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          name = _props.name,
	          onRepoClicked = _props.onRepoClicked,
	          isProcessingId = _props.isProcessingId,
	          repos = _props.repos,
	          filterTerm = _props.filterTerm;


	      return _react2.default.createElement(
	        'div',
	        { className: 'organization', 'data-org-name': name },
	        _react2.default.createElement(
	          'header',
	          { className: 'organization-header' },
	          _react2.default.createElement(
	            'h2',
	            { className: 'organization-header-title' },
	            name
	          )
	        ),
	        _react2.default.createElement(
	          'section',
	          { className: 'repo_listing' },
	          _react2.default.createElement(_repo_list2.default, {
	            repos: repos,
	            onRepoClicked: onRepoClicked,
	            isProcessingId: isProcessingId,
	            filterTerm: filterTerm
	          })
	        )
	      );
	    }
	  }]);

	  return Organization;
	}(_react2.default.Component);

	module.exports = Organization;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _populated_repo_list = __webpack_require__(44);

	var _populated_repo_list2 = _interopRequireDefault(_populated_repo_list);

	var _empty_repo_list = __webpack_require__(41);

	var _empty_repo_list2 = _interopRequireDefault(_empty_repo_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RepoList = function (_React$Component) {
	  _inherits(RepoList, _React$Component);

	  function RepoList() {
	    _classCallCheck(this, RepoList);

	    return _possibleConstructorReturn(this, (RepoList.__proto__ || Object.getPrototypeOf(RepoList)).apply(this, arguments));
	  }

	  _createClass(RepoList, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          repos = _props.repos,
	          onRepoClicked = _props.onRepoClicked,
	          isProcessingId = _props.isProcessingId,
	          filterTerm = _props.filterTerm;


	      if (repos.length > 0) {
	        return _react2.default.createElement(_populated_repo_list2.default, {
	          repos: repos,
	          onRepoClicked: onRepoClicked,
	          isProcessingId: isProcessingId,
	          filterTerm: filterTerm
	        });
	      } else {
	        return _react2.default.createElement(_empty_repo_list2.default, null);
	      }
	    }
	  }]);

	  return RepoList;
	}(_react2.default.Component);

	module.exports = RepoList;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _repo = __webpack_require__(45);

	var _repo2 = _interopRequireDefault(_repo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PopulatedRepoList = function (_React$Component) {
	  _inherits(PopulatedRepoList, _React$Component);

	  function PopulatedRepoList() {
	    _classCallCheck(this, PopulatedRepoList);

	    return _possibleConstructorReturn(this, (PopulatedRepoList.__proto__ || Object.getPrototypeOf(PopulatedRepoList)).apply(this, arguments));
	  }

	  _createClass(PopulatedRepoList, [{
	    key: 'canShow',
	    value: function canShow(repo) {
	      var filterTerm = this.props.filterTerm;


	      if (filterTerm == null) {
	        return true;
	      } else {
	        var repoName = repo.name.toLowerCase();
	        return repoName.indexOf(filterTerm.toLowerCase()) !== -1;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          repos = _props.repos,
	          onRepoClicked = _props.onRepoClicked,
	          isProcessingId = _props.isProcessingId;


	      return _react2.default.createElement(
	        'ul',
	        { className: 'repos' },
	        repos.filter(function (repo) {
	          return _this2.canShow(repo);
	        }).map(function (repo) {
	          return _react2.default.createElement(_repo2.default, {
	            repo: repo,
	            key: repo.id,
	            onRepoClicked: onRepoClicked,
	            isProcessingId: isProcessingId
	          });
	        })
	      );
	    }
	  }]);

	  return PopulatedRepoList;
	}(_react2.default.Component);

	module.exports = PopulatedRepoList;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _repo_activation_button = __webpack_require__(46);

	var _repo_activation_button2 = _interopRequireDefault(_repo_activation_button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Repo = function (_React$Component) {
	  _inherits(Repo, _React$Component);

	  function Repo() {
	    _classCallCheck(this, Repo);

	    return _possibleConstructorReturn(this, (Repo.__proto__ || Object.getPrototypeOf(Repo)).apply(this, arguments));
	  }

	  _createClass(Repo, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          isProcessingId = _props.isProcessingId,
	          repo = _props.repo,
	          onRepoClicked = _props.onRepoClicked;


	      var showPrivate = !repo.active && repo.price_in_cents > 0;

	      return _react2.default.createElement(
	        'li',
	        { className: classNames("repo", { "repo--active": repo.active }, { "repo--processing": isProcessingId === repo.id })
	        },
	        _react2.default.createElement(
	          'div',
	          { className: 'repo-name' },
	          repo.name
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: classNames("repo-activation-toggle", { "repo-activation-toggle--private": showPrivate }) },
	          _react2.default.createElement(
	            'span',
	            { className: 'repo-private-label' },
	            'Private - $',
	            repo.price_in_dollars
	          ),
	          _react2.default.createElement(_repo_activation_button2.default, {
	            repo: repo,
	            onRepoClicked: onRepoClicked,
	            isProcessingId: isProcessingId
	          })
	        )
	      );
	    }
	  }]);

	  return Repo;
	}(_react2.default.Component);

	module.exports = Repo;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RepoActivationButton = function (_React$Component) {
	  _inherits(RepoActivationButton, _React$Component);

	  function RepoActivationButton() {
	    _classCallCheck(this, RepoActivationButton);

	    return _possibleConstructorReturn(this, (RepoActivationButton.__proto__ || Object.getPrototypeOf(RepoActivationButton)).apply(this, arguments));
	  }

	  _createClass(RepoActivationButton, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props,
	          repo = _props.repo,
	          onRepoClicked = _props.onRepoClicked,
	          isProcessingId = _props.isProcessingId;


	      if (repo.admin) {
	        return _react2.default.createElement("button", {
	          className: "repo-toggle",
	          onClick: function onClick() {
	            return onRepoClicked(repo.id);
	          },
	          disabled: this.disabledState
	        });
	      } else {
	        return _react2.default.createElement(
	          "div",
	          { className: "repo-restricted" },
	          "Only repo admins can activate"
	        );
	      }
	    }
	  }, {
	    key: "disabledState",
	    get: function get() {
	      return this.props.isProcessingId === this.props.repo.id ? "disabled" : null;
	    }
	  }]);

	  return RepoActivationButton;
	}(_react2.default.Component);

	module.exports = RepoActivationButton;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _organization = __webpack_require__(42);

	var _organization2 = _interopRequireDefault(_organization);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OrganizationsList = function (_React$Component) {
	  _inherits(OrganizationsList, _React$Component);

	  function OrganizationsList() {
	    _classCallCheck(this, OrganizationsList);

	    return _possibleConstructorReturn(this, (OrganizationsList.__proto__ || Object.getPrototypeOf(OrganizationsList)).apply(this, arguments));
	  }

	  _createClass(OrganizationsList, [{
	    key: 'reposForOrg',
	    value: function reposForOrg(org) {
	      var _this2 = this;

	      if (_.has(org, "id")) {
	        return _.filter(this.props.repos, function (repo) {
	          return repo.owner.id === org.id;
	        });
	      } else {
	        return _.filter(this.props.repos, function (repo) {
	          return _this2.orgName(repo.name) === org.name;
	        });
	      }
	    }
	  }, {
	    key: 'orgName',
	    value: function orgName(name) {
	      return _.split(name, "/")[0];
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var _props = this.props,
	          repos = _props.repos,
	          onRepoClicked = _props.onRepoClicked,
	          filterTerm = _props.filterTerm,
	          isProcessingId = _props.isProcessingId,
	          organizations = _props.organizations;


	      return _react2.default.createElement(
	        'ul',
	        { className: 'organizations' },
	        organizations.map(function (org) {
	          return _react2.default.createElement(_organization2.default, {
	            name: org.name,
	            key: org.id || org.name,
	            repos: _this3.reposForOrg(org) || null,
	            onRepoClicked: onRepoClicked,
	            filterTerm: filterTerm,
	            isProcessingId: isProcessingId
	          });
	        })
	      );
	    }
	  }]);

	  return OrganizationsList;
	}(_react2.default.Component);

	module.exports = OrganizationsList;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _repo_tools_search = __webpack_require__(49);

	var _repo_tools_search2 = _interopRequireDefault(_repo_tools_search);

	var _repo_tools_private = __webpack_require__(50);

	var _repo_tools_private2 = _interopRequireDefault(_repo_tools_private);

	var _repo_tools_refresh = __webpack_require__(51);

	var _repo_tools_refresh2 = _interopRequireDefault(_repo_tools_refresh);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RepoTools = function (_React$Component) {
	  _inherits(RepoTools, _React$Component);

	  function RepoTools() {
	    _classCallCheck(this, RepoTools);

	    return _possibleConstructorReturn(this, (RepoTools.__proto__ || Object.getPrototypeOf(RepoTools)).apply(this, arguments));
	  }

	  _createClass(RepoTools, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          _onSearchInput = _props.onSearchInput,
	          showPrivateButton = _props.showPrivateButton,
	          isSyncing = _props.isSyncing,
	          onRefreshClicked = _props.onRefreshClicked;


	      return _react2.default.createElement(
	        'div',
	        { className: 'repo-tools' },
	        _react2.default.createElement(_repo_tools_search2.default, { onSearchInput: function onSearchInput(event) {
	            return _onSearchInput(event);
	          } }),
	        showPrivateButton ? _react2.default.createElement(_repo_tools_private2.default, null) : null,
	        _react2.default.createElement(_repo_tools_refresh2.default, {
	          isSyncing: isSyncing,
	          onRefreshClicked: onRefreshClicked
	        })
	      );
	    }
	  }]);

	  return RepoTools;
	}(_react2.default.Component);

	module.exports = RepoTools;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RepoToolsSearch = function (_React$Component) {
	  _inherits(RepoToolsSearch, _React$Component);

	  function RepoToolsSearch() {
	    _classCallCheck(this, RepoToolsSearch);

	    return _possibleConstructorReturn(this, (RepoToolsSearch.__proto__ || Object.getPrototypeOf(RepoToolsSearch)).apply(this, arguments));
	  }

	  _createClass(RepoToolsSearch, [{
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        "div",
	        { className: "repo-tools-search" },
	        _react2.default.createElement("input", {
	          className: "repo-search-tools-input",
	          placeholder: Hound.settings.searchPlaceholder,
	          type: "text",
	          onChange: function onChange(event) {
	            return _this2.props.onSearchInput(event.target.value);
	          }
	        })
	      );
	    }
	  }]);

	  return RepoToolsSearch;
	}(_react2.default.Component);

	module.exports = RepoToolsSearch;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RepoToolsPrivate = function (_React$Component) {
	  _inherits(RepoToolsPrivate, _React$Component);

	  function RepoToolsPrivate() {
	    _classCallCheck(this, RepoToolsPrivate);

	    return _possibleConstructorReturn(this, (RepoToolsPrivate.__proto__ || Object.getPrototypeOf(RepoToolsPrivate)).apply(this, arguments));
	  }

	  _createClass(RepoToolsPrivate, [{
	    key: "render",
	    value: function render() {
	      var onPrivateClicked = this.props.onPrivateClicked;


	      return _react2.default.createElement(
	        "div",
	        { className: "repo-tools-private" },
	        _react2.default.createElement(
	          "form",
	          { className: "button_to", method: "post", action: "/auth/github?access=full" },
	          _react2.default.createElement(
	            "button",
	            {
	              className: "repo-tools-private-button",
	              type: "submit",
	              onClick: onPrivateClicked
	            },
	            _react2.default.createElement(
	              "span",
	              null,
	              "Include private repos"
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return RepoToolsPrivate;
	}(_react2.default.Component);

	module.exports = RepoToolsPrivate;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RepoToolsRefresh = function (_React$Component) {
	  _inherits(RepoToolsRefresh, _React$Component);

	  function RepoToolsRefresh() {
	    _classCallCheck(this, RepoToolsRefresh);

	    return _possibleConstructorReturn(this, (RepoToolsRefresh.__proto__ || Object.getPrototypeOf(RepoToolsRefresh)).apply(this, arguments));
	  }

	  _createClass(RepoToolsRefresh, [{
	    key: "render",
	    value: function render() {
	      var onRefreshClicked = this.props.onRefreshClicked;


	      if (this.isSyncing) {
	        var buttonText = Hound.settings.syncingButtonText;
	      } else {
	        var buttonText = Hound.settings.syncNowButtonText;
	      }

	      return _react2.default.createElement(
	        "div",
	        { className: "repo-tools-refresh" },
	        _react2.default.createElement(
	          "button",
	          {
	            className: "repo-tools-refresh-button",
	            disabled: this.disabledState,
	            onClick: onRefreshClicked
	          },
	          _react2.default.createElement(
	            "span",
	            null,
	            buttonText
	          )
	        )
	      );
	    }
	  }, {
	    key: "isSyncing",
	    get: function get() {
	      return this.props.isSyncing;
	    }
	  }, {
	    key: "disabledState",
	    get: function get() {
	      return this.isDisabled ? "disabled" : null;
	    }
	  }]);

	  return RepoToolsRefresh;
	}(_react2.default.Component);

	module.exports = RepoToolsRefresh;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _repo_tools = __webpack_require__(48);

	var _repo_tools2 = _interopRequireDefault(_repo_tools);

	var _repos_view = __webpack_require__(53);

	var _repos_view2 = _interopRequireDefault(_repos_view);

	var _jquery = __webpack_require__(55);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReposContainer = function (_React$Component) {
	  _inherits(ReposContainer, _React$Component);

	  function ReposContainer() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, ReposContainer);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReposContainer.__proto__ || Object.getPrototypeOf(ReposContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      isSyncing: false,
	      isProcessingId: null,
	      filterTerm: null,
	      repos: [],
	      organizations: []
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(ReposContainer, [{
	    key: 'fetchReposAndOrgs',
	    value: function fetchReposAndOrgs() {
	      var _this2 = this;

	      _jquery2.default.ajax({
	        url: "/repos.json",
	        type: "GET",
	        dataType: "json",
	        success: function success(data) {
	          _this2.onFetchReposAndOrgsSuccess(data);
	        },
	        error: function error() {
	          alert("Your repos failed to load.");
	        }
	      });
	    }
	  }, {
	    key: 'onFetchReposAndOrgsSuccess',
	    value: function onFetchReposAndOrgsSuccess(data) {
	      var _this3 = this;

	      if (data.length == 0) {
	        this.onRefreshClicked();
	      } else {
	        this.setState({ repos: data });

	        var organizations = data.map(function (repo) {
	          return repo.owner || {
	            name: _this3.orgName(repo.name)
	          };
	        });
	        this.setState({
	          organizations: _.uniqWith(organizations, _.isEqual)
	        });

	        this.setState({ isSyncing: false });
	      }
	    }
	  }, {
	    key: 'orgName',
	    value: function orgName(name) {
	      return _.split(name, "/")[0];
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      _jquery2.default.ajaxSetup({
	        headers: {
	          "X-XSRF-Token": this.props.authenticity_token
	        }
	      });
	      this.setState({ isSyncing: true });
	      this.fetchReposAndOrgs();
	    }
	  }, {
	    key: 'createSubscription',
	    value: function createSubscription(options) {
	      return _jquery2.default.ajax({
	        url: '/repos/' + options.repo_id + '/subscription.json',
	        type: "POST",
	        data: options,
	        dataType: "json"
	      });
	    }
	  }, {
	    key: 'deleteSubscription',
	    value: function deleteSubscription(repo) {
	      return _jquery2.default.ajax({
	        url: '/repos/' + repo.id + '/subscription',
	        type: "DELETE",
	        dataType: "json"
	      });
	    }
	  }, {
	    key: 'deactivateRepo',
	    value: function deactivateRepo(repo) {
	      return _jquery2.default.ajax({
	        url: '/repos/' + repo.id + '/deactivation',
	        type: "POST",
	        dataType: "text"
	      });
	    }
	  }, {
	    key: 'activateRepo',
	    value: function activateRepo(repo) {
	      return _jquery2.default.ajax({
	        url: '/repos/' + repo.id + '/activation',
	        type: "POST",
	        dataType: "text"
	      });
	    }
	  }, {
	    key: 'commitRepoToState',
	    value: function commitRepoToState(repo) {
	      repoIdx = _.findIndex(this.state.repos, { id: repo.id });

	      var newRepos = _react2.default.addons.update(this.state.repos, _defineProperty({}, repoIdx, { $set: repo }));
	      this.setState({ repos: newRepos });
	    }
	  }, {
	    key: 'deactivateSubscribedRepo',
	    value: function deactivateSubscribedRepo(repo) {
	      var _this4 = this;

	      this.deleteSubscription(repo).then(function () {
	        repo.active = false;
	        repo.stripe_subscription_id = null;
	        _this4.commitRepoToState(repo);
	      }).catch(function () {
	        alert("Your repo could not be disabled.");
	      });
	    }
	  }, {
	    key: 'deactivateUnsubscribedRepo',
	    value: function deactivateUnsubscribedRepo(repo) {
	      var _this5 = this;

	      this.deactivateRepo(repo).then(function () {
	        repo.active = false;
	        _this5.commitRepoToState(repo);
	      }).catch(function () {
	        alert("Your repo could not be disabled.");
	      });
	    }
	  }, {
	    key: 'activatePaidRepo',
	    value: function activatePaidRepo(repo) {
	      var _this6 = this;

	      if (this.props.userHasCard) {
	        this.createSubscriptionWithExistingCard(repo);
	      } else {
	        this.showCreditCardForm(repo, function (token) {
	          return _this6.createSubscriptionWithNewCard(repo, token);
	        });
	      }
	    }
	  }, {
	    key: 'activateAndTrackRepoSubscription',
	    value: function activateAndTrackRepoSubscription(repo, stripeSubscriptionId) {
	      repo.active = true;
	      repo.stripe_subscription_id = stripeSubscriptionId;
	      this.trackRepoActivated(repo);

	      this.commitRepoToState(repo);
	    }
	  }, {
	    key: 'onSubscriptionError',
	    value: function onSubscriptionError(repo, error) {
	      if (error.status === 402) {
	        document.location.href = '/pricing?repo_id=' + repo.id;
	      } else {
	        alert("Your subscription could not be activated.");
	      }
	    }
	  }, {
	    key: 'createSubscriptionWithExistingCard',
	    value: function createSubscriptionWithExistingCard(repo) {
	      var _this7 = this;

	      this.createSubscription({
	        repo_id: repo.id
	      }).then(function (resp) {
	        _this7.activateAndTrackRepoSubscription(repo, resp.stripe_subscription_id);
	      }).catch(function (error) {
	        return _this7.onSubscriptionError(repo, error);
	      });
	    }
	  }, {
	    key: 'createSubscriptionWithNewCard',
	    value: function createSubscriptionWithNewCard(repo, stripeToken) {
	      var _this8 = this;

	      this.createSubscription({
	        repo_id: repo.id,
	        card_token: stripeToken.id,
	        email_address: stripeToken.email
	      }).then(function (resp) {
	        _this8.activateAndTrackRepoSubscription(repo, resp.stripe_subscription_id);
	      }).catch(function (error) {
	        return _this8.onSubscriptionError(repo, error);
	      });
	    }
	  }, {
	    key: 'activateFreeRepo',
	    value: function activateFreeRepo(repo) {
	      var _this9 = this;

	      this.activateRepo(repo).then(function (resp) {
	        repo.active = true;
	        _this9.trackRepoActivated(repo);
	        _this9.commitRepoToState(repo);
	      }).catch(function () {
	        alert("Your repo could not be enabled.");
	      });
	    }
	  }, {
	    key: 'onRepoClicked',
	    value: function onRepoClicked(id) {
	      this.setState({ isProcessingId: id });
	      var repo = _.find(this.state.repos, { id: id });

	      if (repo.active) {
	        if (repo.stripe_subscription_id) {
	          this.deactivateSubscribedRepo(repo);
	        } else {
	          this.deactivateUnsubscribedRepo(repo);
	        }
	      } else {
	        if (repo.price_in_dollars > 0) {
	          this.activatePaidRepo(repo);
	        } else {
	          this.activateFreeRepo(repo);
	        }
	      }

	      this.setState({ isProcessingId: null });
	    }
	  }, {
	    key: 'showCreditCardForm',
	    value: function showCreditCardForm(options, successCallback) {
	      StripeCheckout.configure({
	        key: Hound.settings.stripePublishableKey,
	        image: Hound.settings.iconPath,
	        token: successCallback
	      }).open({
	        name: options.full_plan_name,
	        amount: options.price_in_cents,
	        email: Hound.settings.userEmailAddress,
	        panelLabel: options.buttonText || "{{amount}} per month",
	        allowRememberMe: false
	      });
	    }
	  }, {
	    key: 'handleSync',
	    value: function handleSync() {
	      var _this10 = this;

	      _jquery2.default.ajax({
	        url: "/user.json",
	        type: "GET",
	        dataType: "json",
	        success: function success(data) {
	          if (data.refreshing_repos) {
	            setTimeout(function () {
	              _this10.handleSync();
	            }, 1000);
	          } else {
	            _this10.fetchReposAndOrgs();
	          }
	        }
	      });
	    }
	  }, {
	    key: 'onRefreshClicked',
	    value: function onRefreshClicked(event) {
	      var _this11 = this;

	      this.setState({ isSyncing: true });

	      _jquery2.default.ajax({
	        url: "/repo_syncs.json",
	        type: "POST",
	        dataType: "text", // to trigger success() on 201 and empty response
	        success: function success() {
	          _this11.handleSync();
	        },
	        error: function error() {
	          _this11.setState({ isSyncing: false });
	          alert("Your repos failed to sync.");
	        }
	      });
	    }
	  }, {
	    key: 'onPrivateClicked',
	    value: function onPrivateClicked(event) {
	      _jquery2.default.post("/auth/github?access=full");
	    }
	  }, {
	    key: 'onSearchInput',
	    value: function onSearchInput(term) {
	      this.setState({ filterTerm: term });
	    }
	  }, {
	    key: 'trackRepoActivated',
	    value: function trackRepoActivated(repo) {
	      if (repo.private) {
	        var eventName = "Private Repo Activated";
	        var price = repo.price_in_dollars;
	      } else {
	        var eventName = "Public Repo Activated";
	        var price = 0.0;
	      }

	      window.analytics.track(eventName, {
	        properties: {
	          name: repo.name,
	          revenue: price
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this12 = this;

	      var has_private_access = this.props.has_private_access;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_repo_tools2.default, {
	          showPrivateButton: !has_private_access,
	          onSearchInput: function onSearchInput(event) {
	            return _this12.onSearchInput(event);
	          },
	          onRefreshClicked: function onRefreshClicked(event) {
	            return _this12.onRefreshClicked(event);
	          },
	          onPrivateClicked: function onPrivateClicked(event) {
	            return _this12.onPrivateClicked(event);
	          },
	          isSyncing: this.state.isSyncing
	        }),
	        _react2.default.createElement(_repos_view2.default, {
	          isSyncing: this.state.isSyncing,
	          organizations: this.state.organizations,
	          repos: this.state.repos,
	          filterTerm: this.state.filterTerm,
	          onRepoClicked: function onRepoClicked(event) {
	            return _this12.onRepoClicked(event);
	          },
	          isProcessingId: this.state.isProcessingId
	        })
	      );
	    }
	  }]);

	  return ReposContainer;
	}(_react2.default.Component);

	module.exports = ReposContainer;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _repos_sync_spinner = __webpack_require__(54);

	var _repos_sync_spinner2 = _interopRequireDefault(_repos_sync_spinner);

	var _organizations_list = __webpack_require__(47);

	var _organizations_list2 = _interopRequireDefault(_organizations_list);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReposView = function (_React$Component) {
	  _inherits(ReposView, _React$Component);

	  function ReposView() {
	    _classCallCheck(this, ReposView);

	    return _possibleConstructorReturn(this, (ReposView.__proto__ || Object.getPrototypeOf(ReposView)).apply(this, arguments));
	  }

	  _createClass(ReposView, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          isSyncing = _props.isSyncing,
	          organizations = _props.organizations,
	          repos = _props.repos,
	          filterTerm = _props.filterTerm,
	          _onRepoClicked = _props.onRepoClicked,
	          isProcessingId = _props.isProcessingId;


	      if (isSyncing) {
	        return _react2.default.createElement(_repos_sync_spinner2.default, null);
	      } else {
	        return _react2.default.createElement(_organizations_list2.default, {
	          organizations: organizations,
	          repos: repos,
	          filterTerm: filterTerm,
	          onRepoClicked: function onRepoClicked(evt) {
	            return _onRepoClicked(evt);
	          },
	          isProcessingId: isProcessingId
	        });
	      }
	    }
	  }]);

	  return ReposView;
	}(_react2.default.Component);

	module.exports = ReposView;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ReposSyncSpinner = function (_React$Component) {
	  _inherits(ReposSyncSpinner, _React$Component);

	  function ReposSyncSpinner() {
	    _classCallCheck(this, ReposSyncSpinner);

	    return _possibleConstructorReturn(this, (ReposSyncSpinner.__proto__ || Object.getPrototypeOf(ReposSyncSpinner)).apply(this, arguments));
	  }

	  _createClass(ReposSyncSpinner, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "repos-syncing" },
	        _react2.default.createElement("div", { className: "dot" }),
	        _react2.default.createElement("div", { className: "dot" }),
	        _react2.default.createElement("div", { className: "dot" })
	      );
	    }
	  }]);

	  return ReposSyncSpinner;
	}(_react2.default.Component);

	module.exports = ReposSyncSpinner;

/***/ },
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _tier_plan = __webpack_require__(59);

	var _tier_plan2 = _interopRequireDefault(_tier_plan);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TierChangeNotifier = function (_React$Component) {
	  _inherits(TierChangeNotifier, _React$Component);

	  function TierChangeNotifier() {
	    _classCallCheck(this, TierChangeNotifier);

	    return _possibleConstructorReturn(this, (TierChangeNotifier.__proto__ || Object.getPrototypeOf(TierChangeNotifier)).apply(this, arguments));
	  }

	  _createClass(TierChangeNotifier, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          plans = _props.plans,
	          repo_id = _props.repo_id,
	          repo_name = _props.repo_name;


	      var currentPlanIdx = _.findIndex(plans, { current: true });

	      var currentPlan = plans[currentPlanIdx];
	      var newPlan = plans[currentPlanIdx + 1];

	      var tierUsage = currentPlan.upto;

	      var extraCharge = newPlan.price - currentPlan.price;

	      return _react2.default.createElement(
	        'section',
	        { className: 'tier-change-container' },
	        _react2.default.createElement(
	          'aside',
	          { className: 'tier-change-plans' },
	          _react2.default.createElement(
	            'h3',
	            null,
	            'Plans'
	          ),
	          plans.map(function (plan) {
	            return _react2.default.createElement(_tier_plan2.default, {
	              plan: plan,
	              isCurrent: plan === currentPlan,
	              isNew: plan === newPlan
	            });
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'tier-change-content' },
	          _react2.default.createElement(
	            'h1',
	            null,
	            'Pricing: Change of Plans'
	          ),
	          _react2.default.createElement(
	            'section',
	            { className: 'tier-change-description' },
	            _react2.default.createElement(
	              'div',
	              { className: 'allowance large' },
	              'Private Repos ',
	              _react2.default.createElement(
	                'strong',
	                null,
	                tierUsage,
	                '/',
	                tierUsage
	              )
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              _react2.default.createElement(
	                'strong',
	                null,
	                'Activating "',
	                repo_name,
	                '" will change the price you pay per month.',
	                _react2.default.createElement('br', null)
	              ),
	              'You\'ll be charged an extra $',
	              extraCharge,
	              ' a month ($',
	              newPlan.price,
	              ' total).'
	            ),
	            _react2.default.createElement(
	              'p',
	              null,
	              'Upgrade to continue or cancel to deactivate "',
	              repo_name,
	              '"'
	            )
	          ),
	          _react2.default.createElement(
	            'a',
	            { className: 'repo-toggle tier-change-accept', href: '#' },
	            'Upgrade'
	          ),
	          _react2.default.createElement(
	            'a',
	            { className: 'button tier-change-cancel', href: '#' },
	            'Cancel'
	          )
	        )
	      );
	    }
	  }]);

	  return TierChangeNotifier;
	}(_react2.default.Component);

	module.exports = TierChangeNotifier;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TierPlan = function (_React$Component) {
	  _inherits(TierPlan, _React$Component);

	  function TierPlan() {
	    _classCallCheck(this, TierPlan);

	    return _possibleConstructorReturn(this, (TierPlan.__proto__ || Object.getPrototypeOf(TierPlan)).apply(this, arguments));
	  }

	  _createClass(TierPlan, [{
	    key: "render",
	    value: function render() {
	      var _props = this.props,
	          plan = _props.plan,
	          isCurrent = _props.isCurrent,
	          isNew = _props.isNew;


	      return _react2.default.createElement(
	        "div",
	        { className: classNames("plan", "plan-vertical", { "current": this.isCurrent }, { "new": this.isNew })
	        },
	        this.isCurrent && _react2.default.createElement(
	          "div",
	          { className: "marker-wrapper" },
	          _react2.default.createElement(
	            "span",
	            { className: "current-plan" },
	            "Current Plan"
	          )
	        ),
	        this.isNew && _react2.default.createElement(
	          "div",
	          { className: "marker-wrapper" },
	          _react2.default.createElement(
	            "span",
	            { className: "new-plan" },
	            "New Plan"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "plan-divider" },
	          _react2.default.createElement(
	            "h5",
	            { className: "plan-title" },
	            plan.name
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "plan-allowance" },
	            "Up to ",
	            _react2.default.createElement(
	              "strong",
	              null,
	              plan.upto
	            ),
	            " Repos"
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "plan-price" },
	          "$",
	          plan.price,
	          " ",
	          _react2.default.createElement(
	            "small",
	            null,
	            "month"
	          )
	        )
	      );
	    }
	  }, {
	    key: "isCurrent",
	    get: function get() {
	      return this.props.isCurrent;
	    }
	  }, {
	    key: "isNew",
	    get: function get() {
	      return this.props.isNew;
	    }
	  }]);

	  return TierPlan;
	}(_react2.default.Component);

	module.exports = TierPlan;

/***/ }
]);