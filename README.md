User Feedback
============

A simple but powerful AngularJS directive that allows you to quickly add a sliding contact us / feedback box on your website. The user feedback can slide out with smooth animation effect when clicking the FEEDBACK link.


To see a demo go here: http://ankitdhir.github.io/userfeedback/

###Key Features
* Show just a title (feedback,connect us etc)
* Animated ui for feedback window
* Get user name, email and message 
* post object to specified url

###Library dependency
* Angular
* JQuery
* Bootstrap

### Getting Started
Download the code, and include the userfeedback.js,userfeedback.css files in your page. Then add the userfeedback module to your Angular App file, e.g.
```html
var app = angular.module('app', ["userfeedback"]);
```

### Usage

```html
<userfeedback title="Feedback" url="http://habilesoft.com/feedback"/>
```
on clicking submit userfeedback will post below object
{name : <username>
email : <user email>
messages : <user message>}

### Description of attributes
| Attribute        | Description           | Required | Example  |
| :------------- |:-------------| :-----:| :-----|
| title | Title for the feedback panel | Yes | feedback |
| url | The remote URL to post user information, it must be a POST request | Yes | http://habilesoft.com/feedback |


### License
The userfeedback project is covered by the [MIT License](http://opensource.org/licenses/MIT "MIT License").

The MIT License (MIT)

Copyright (c) 2014 Ankit Dhir, and contributors to the userfeedback project.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

