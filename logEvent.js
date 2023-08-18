// import modules, both  inbuilt and thirdparty.
const { v4: uuid } = require("uuid");
const { format } = require("date-fns");

const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");

//wite log event
const logPath = path.join(__dirname, "logs");
const logEvents = async (message) => {
	//initalize dateformat
	const dateFormat = `${format(new Date(), "yyyy,mm,dd\thh:mm:ss")}`;
	//set the logitem
	const logItem = `${dateFormat}\t${uuid()}\t${message}`;
	//check if folder exists already exists
	try {
		if (fs.existsSync(logPath)) {
			await fsPromise.mkdir(logPath);
		}

		await fsPromise.appendFile(
			path.join(__dirname, "logs", "logFile.txt"),
			logItem
		);
	} catch (err) {
		console.err(err);
	}
};

//export eventsfunction
module.exports =  logItem;