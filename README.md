CIMSpace
======

Common Information Model (CIM) visualization and tools.

# Overview
CIMSpace allows you to read, display and analyze CIM files, which are a data interchange format based on IEC standards 61968 & 61970.
See [CIM users group](http://cimug.ucaiug.org/default.aspx) for additional details on the CIM format.

# Online
The program is available online [https://derrickoswald.github.io/CIMSpace/](http://derrickoswald.github.io/CIMSpace/).

# Operation

**Upload**

View a CIM file from local disk storage.

- click *Upload Files* in the upper nav bar, *Browse* or *Drag n' Drop* to select CIM file (.rdf, .xml or .zip extension),

*note: large files may take significant time to load, files larger than 1 GB may exceed available browser RAM*

**Download**

View a CIM file from the internet.

- click *Download Files* in the upper nav bar, enter the URL in the text box, e.g. http://9code.ch/data/sample.zip,
and click the *Download* button

*note: the specified server must have Cross Origin Resource Sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)) enabled*

**Navigation**

- Zoom *mouse wheel* or *click arrows in upper right hand corner* or *shift-left-click and hold, drag window, release*
- Pan *left-click and hold, drag, release*
- Rotate *control-left-click and hold, drag, release* or reset North to vertical by *clicking compas icon in upper right hand corner*
- toggle *Internal features* in *Options* drop down in upper nav bar to hide or show station/distribution-box internals
- coordinate display in upper nav bar shows cursor longitude,latitude (x,y)

**Attributes**

- click on an element, e.g. ACLineSegment, Switch
- click through links in attribute display
- to deselect, click in a blank area of the map, or choose *Un-Highlight* from *Options* drop down in upper nav bar

**Search**

- enter mRID, name or aliasName in the search box in upper nav bar, *press Enter* or *click magnifying glass icon*

**Trace**

- select the start feature, *click Trace* in *Options* drop down in upper nav bar
- options for tracing in *Options* drop down in upper nav bar:
    * toggle Trace through open switches *ignore/honor normalOpen attribute of Switch derived objects for trace stopping conditions*
    * toggle Trace through voltage levels *ignore/honor transformer voltage changes for trace stopping conditions*

# WebGL

CIMSpace uses [Mapbox GL](https://www.mapbox.com/mapbox-gl-js/api/) and requires WebGL to be enabled in your browser.

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


