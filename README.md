CIMSpace
======

Common Information Model (CIM) visualization and tools.

#Overview
Standard interchange format based on IEC standards 61968 & 61970.
See [CIM users group](http://cimug.ucaiug.org/default.aspx) for additional details.
These are a set of tools to read and analyze CIM files.

#Online
The program is available online [https://derrickoswald.github.io/CIMSpace/](https://derrickoswald.github.io/CIMSpace/).

#WebGL

CIMSpace requires WebGL to be enabled in your browser.

**FireFox**

Alter the browser default settings in the configuration

- Browse page about:config
- Set webgl.force-enabled to true

**Chrome**

Modify the startup command to include the parameter: --ignore-gpu-blacklist

- Find and right click on the Chrome shortcut you use (normally on the desktop or in the start menu) .
- Select 'Properties' or 'Eigenschaften'
- Add the '--ignore-gpu-blacklist' flag without the quotes at the end of the 'Target' or 'Zeil' box:
- For me the command is thus: "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --ignore-gpu-blacklist 

 