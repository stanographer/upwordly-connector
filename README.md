# Upword.ly Connector
Allows you to connect your proprietary court reporting software to Upword.ly using a virtual com port connection and ANSI output. capacity this is just a working prototype. In the future this will be a fully GUI app.

### Installation

*Prerequisites:* You must have [Node.js](https://nodejs.org/en/) installed.

- Clone repo.
- Run `npm install`.
- Edit `settings.txt`.
- Run using `node app` or `npm start`.

### CAT System Usage

For now, you have to download [Eltima Virtual Serial Port Emulator](https://www.eltima.com/products/vspdxp/) to create the necessary COM ports on your computer. Make a COM port on any two ports of your choosing. I suggest 5 and 6 as the in and out ports, respectively.

#### Eclipse

If you're on Eclipse software, enter Translate Notes. Click the gear icon. Under "Realtime", which should already be highlighted, click "Add" under "Output Formats."

Now from the dropdown menu, select ANSI as your output protocol, choose the COM port you just created with Eltima, and set your flush-word delay to at least 1000 ms.

Click OK and begin translation and start writing. It doesn't matter if you start Upword.ly Connector before or after translation begins.


#### CaseCATalyst

On CaseCATalyst, first hit Translate. Then at the bottom right corner of the Translate dialogue, click on options. Under "Output to ASCII/ANSI," check the "Output over comm port" option and set the port you created in Eltima. Leaving "Direct (Cable)" selected is fine. Make sure you uncheck "Wrap Lines at Margins."

Now begin translation and start writing. It doesn't matter if you start Upword.ly Connector before or after translation begins.
