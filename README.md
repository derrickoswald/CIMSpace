CIMSpace
======

Common Information Model (CIM) visualization and tools.

# Overview
CIMSpace allows you to read, display and analyze CIM files, which are a data interchange format based on IEC standards 61968 & 61970.
See [CIM users group](http://cimug.ucaiug.org/default.aspx) for additional details on the CIM format.

# Online
The program is available online [http://derrickoswald.github.io/CIMSpace/](http://derrickoswald.github.io/CIMSpace/).

# Operation

**Load**

*View a CIM file from local disk storage*

- click *Load* menu item in the upper nav bar
- *Browse* or *Drag n' Drop* to select CIM file (.rdf, .xml or .zip extension)

<code>note: large files may take significant time to load, files larger than 1 GB may exceed available browser RAM</code>

*View a CIM file from the internet*

- click *Load* menu item in the upper nav bar
- enter the URL in the text box, e.g. http://9code.ch/data/sample.zip
- click the *Load* button

<code>note: the specified server must have Cross Origin Resource Sharing ([CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)) enabled</code>

**Navigation**

- Zoom *mouse wheel* or *click _+_ or _-_ in upper right hand corner* or *shift-left-click and hold, drag window, release*
- Pan *left-click and hold, drag, release*
- Rotate *control-left-click and hold, drag left or right, release*, reset North to vertical by *clicking compass icon in upper right hand corner*
- 3D *control-left-click and hold, drag up or down, release*

**Controls**

The controls toolbox in the upper right hand corner has the following features:

- ![Zoom extents](css/font/src/zoome.svg?raw=true) to zoom the map view to include all CIM elements
- ![Info](css/font/src/info.svg?raw=true) to hide or show an info box containing the attributes of user selected, searched or traced elements
- ![Theme](css/font/src/themer.svg?raw=true) to hide or show the theme chooser
- ![Legend](css/font/src/legend.svg?raw=true) to hide or show the legend for the current theme
- ![Edit](css/font/src/edit.svg?raw=true) to hide or show the editor
- ![Connectivity](css/font/src/connectivity.svg?raw=true) to hide or show the connectivity editor

**Options**

The *Options* drop down in the upper nav bar has the following features:

- toggle *Internals* to hide or show station/distribution-box internals
- toggle *3D buildings* to enable or disable building depth in 3D
- toggle *Scale bar* to hide or show a scale bar in the lower left hand corner
- toggle *Coordinates* to hide or show cursor longitude,latitude (x,y) in the lower left hand corner
- toggle *Streetview* to add a Google Streetview link at the top of the Info box when possible

**Attributes**

- toggle the *Info* box on
- click on an element, e.g. ACLineSegment, Switch
- click through links in attribute display
- to deselect, click in a blank area of the map

**Edit**

Selecting an element loads it into the edit box, along with its child elements (those that solely reference the parent selected element).
The elements are shown as links. Attributes can be edited by expanding the link and enetering new information in the provided edit boxes.
Buttons at the bottom allow:

- *Save* persists the edited CIM elements (only in memory - see Save below)
- *Delete* the selected elements (this is a "cascade delete" where all loaded elements are deleted)
- *Cancel* discards edits
- *Create new* creates a copy (with a new mRID) of the main element and begins the process of editing it

For some classes of CIM elements there are *Makers*, which programatically assist you in creating some of the more
complex CIM elements. When no element is currently being edited, there are two selection drop-downs:

- choose from the *Maker* drop-down to select the type of CIM element
- fill in the Maker specific form
- click the *Create* button
- follow the on-screen prompts to complete the procedure
- edit the attributes of the created elements as appropriate
- click *Save* or *Cancel* to keep or discard the new elements

For other classes of CIM elements for which no Maker exists:

- choose from the *Class* drop-down to select the class of CIM element
- edit the attributes of the created element as appropriate
- click *Save* or *Cancel* to keep or discard the new element


**Save**

To persist the in-memory CIM elements to disk, click the *Save* menu item fin the upper nav bar.
Fields for *File name* and internal "rdf:about" and "description" attributes are provided.

<code>note: after editing these fields, you will need to click outside the field before clicking *Save*, otherwise you will get a "not ready yet message"</code>

Three options for saving are provided:

- *Full model* saves the full CIM file with elements as they are currently in memory
- *Difference model* saves a CIM difference model file with new, changed and deleted elements only
- *Only new elements as full model* saves new elements as if the CIM file were empty before these were added

The file is downloaded as a .zip file with the CIM file enclosed. Save the file to your persistent storage.

**Search**

- enter mRID, name or aliasName in the search box in upper nav bar, *press Enter* or *click magnifying glass icon*
- if the element has a geographic location, the map is centered on it and it is highlighted
- otherwise it will only be shown in the Info, Edit or Connectivity boxes if they are visible

**Trace**

- select the start element, *click Trace* in the *Trace* drop down in the upper nav bar
- options for tracing in the *Trace* drop down in upper nav bar:
    * toggle *Trace through open switches* to ignore/honor normalOpen attribute of Switch derived objects for trace stopping conditions
    * toggle *Trace through voltage levels* to ignore/honor transformer voltage changes for trace stopping conditions
    * enter a number in the *# elements* field to limit the maximum number of elements to trace
    * click *Un-Highlight* to restore the map

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


