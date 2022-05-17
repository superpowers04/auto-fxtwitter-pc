const { Plugin } = require('powercord/entities');
const { inject, uninject } = require('powercord/injector');
const { messages } = require('powercord/webpack');

module.exports = class vxtwitterauto extends Plugin {
	startPlugin() {
		inject('vxtwitterauto', messages, 'sendMessage', args => {
			if (args[1].content.search(/https?:\/\/twitter/g) !== -1) args[1].content = args[1].content.replace(/https?:\/\/twitter/g,"https://vxtwitter");
			return args;
		}, true);
	}
	pluginWillUnload() {
		uninject('vxtwitterauto');
	}
};
