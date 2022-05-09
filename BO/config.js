/**
 * Author Ares DN
 * 
 * Website: https://www.iskydn.online
 *
 */

let USE_SSL = true;
 
 module.exports = {
	USE_SSL,
	CF_SSL: {
		key: 'certs/panazic.key',
		cert: 'certs/panazic.crt'
	},

	DOMAIN: 'https://winbo.trade',
	TITLE_SITE: 'WINBO.trade',
	CONTACT: 'support@winbo.trade',

	MAIL_USERNAME: 'dola79usdt@gmail.com',
	MAIL_PASSWORD: '9(&g2g!^5P/62fH_',
	MAIL_LOGO: 'https://winbo.trade/logo.png',
	MAIL_IMG_FOOTER: 'https://winbo.trade/line.png',
	
	IS_PLAY_SPOT: true, // mặc địng false -> FUTURES, Sử dụng BINANCE SPOT ( check được sàn ) hoặc FUTURE ( không bào giờ bảo trì, không check được sàn )

	SO_GIAY_DEM_NGUOC: 30,
	RATE_NHA_THUONG: 95,
	BET_MAX: 1,

	BINANCE_APIKEY: 'GttFevqraZ93h0dXfVGB364SMu8E4by27XaWzNZppIkxv1pCpdN1JOopAsGv7tqg',
  BINANCE_APISECRET: '4fH0hYEgReJpXlyx7l24180z3wMvPsXUDVCDIDN8Y1gaMWcBtWczYwgLRpILPYnb',

	// THANH TOÁN PAYPAL
	//PAYPAL_MODE: 'live', //sandbox or live
	//PAYPAL_CLIENT_ID: 'AbubWI5Cc-21tFJnqK7B6cFuSa2es3nqJYY0McPI9EBLiCyDQjJEJ7_vUcZTBNdiHVhfOEWUsTPL0mcf',//'AakUAPg0hA5WSN5IdhfLV_VsPWd8kLktvesDPEDgbsdzOLwI9UPQj9NAYEyVIVKKzRsdC_2HbnAFy10p',
	//PAYPAL_CLIENT_SECRET: 'EFX50IOpCcqREF8npYA9iavGBvqeW8W7zZ1wfM_dn147xyelQyGwSa9U-WJrl44BrSmnj7JFNqMcY8fk',//'EMEZw9QceAhl2UztIWGH62xh95z7---kuu6npJTRj09TVJRQnG-hyIfKUfsptfPIGcBvuwxeBhCtjYT_',
	
	PAYPAL_MODE: 'sandbox', //sandbox or live
	PAYPAL_CLIENT_ID: 'AakUAPg0hA5WSN5IdhfLV_VsPWd8kLktvesDPEDgbsdzOLwI9UPQj9NAYEyVIVKKzRsdC_2HbnAFy10p',//'',
	PAYPAL_CLIENT_SECRET: 'EMEZw9QceAhl2UztIWGH62xh95z7---kuu6npJTRj09TVJRQnG-hyIfKUfsptfPIGcBvuwxeBhCtjYT_',//'',
	// KẾT THÚC THANH TOÁN PAYPAL

	DATA_HOST: 'localhost',
	DATA_USER: 'username',
	DATA_PASS: 'FCL#Y6qhxfGqLc5afk!SQPP',
	DATA_DB: 'sanbovip',
	DATA_PORT: 3306,

	PORT_TRADE: 2096, // default 443 ssl
	PORT_SYS: 2087,
	PORT_NAP: 2083,
	PORT_NOTIFY: 2053,
	PORT_SERVER: 8888,

	TOKEN_KEY: 'winbotrade2022pro',

	PATH_SYS_CONFIG: 'stSys', 
	PATH_SYS_COMMISSION: 'stCommission',
	PATH_SYS_COMMISSION_VIP: 'stCommissionVip',

	ABI_USDT_MAINNET: 'USDT_BEP20_mainnet',
	ABI_USDT_TESTNNET: 'USDT_BEP20_testnet',
}


