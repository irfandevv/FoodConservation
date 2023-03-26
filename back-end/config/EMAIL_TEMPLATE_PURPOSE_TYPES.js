function Purpose(code, text) {
	this.code = code;
	this.text = text;
}

let EMAIL_TEMPLATE_PURPOSE_TYPES = {};

EMAIL_TEMPLATE_PURPOSE_TYPES.EMAIL_SALE_TO_BUSINESS_OWNER =
	new Purpose(1, 'EMAIL_SALE_TO_BUSINESS_OWNER');
EMAIL_TEMPLATE_PURPOSE_TYPES.EMAIL_RECEIVE_PAYMENT_TO_BUSINESS_OWNER =
	new Purpose(2, 'EMAIL_RECEIVE_PAYMENT_TO_BUSINESS_OWNER');


module.exports = EMAIL_TEMPLATE_PURPOSE_TYPES;