## Getting Starting

```html
<!DOCTYPE html>
<html lang="en">
   <head>
      <title>Bootstrap Example</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
   </head>
   <body>
    </body>
</html>

```

## Library CDN

```html
<link href="./css/jasny-bootstrap.min.css" rel="stylesheet">
<link href="./css/navmenu.css" rel="stylesheet">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="../js/jasny-bootstrap.min.js"></script>

```

## Off Canvas Reveal Menu Design Navigation

<img width="600" src="https://github.com/didesigngroup/leapfrog-offcanvas/blob/master/designs/pattern-empty-state.png" alt="Style Icon Usage">

View New Working Prototype (CSS3) - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/default.html">Demo</a>


## Centered Dynamic Tabs and Pills

<img width="600" src="https://github.com/didesigngroup/leapfrog-offcanvas/blob/master/designs/screen-shot-2016-10-0516.59.57.png" alt="Style Icon Usage">

View New Working Prototype - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/dynamic-pills-tabs.html">Example</a>


```html
<ul class="nav nav-pills">
    <li class="active"><a data-toggle="pill" href="#usage">Usage</a></li>
    <li><a data-toggle="pill" href="#codeview">Code View</a></li>
  </ul>

```

Conflict with .nav-justified

```html
<ul class="nav nav-pills nav-justified">
    <li class="active"><a data-toggle="pill" href="#usage">Usage</a></li>
    <li><a data-toggle="pill" href="#codeview">Code View</a></li>
  </ul>

```

# Libraries

## CSS Pattern Library

Original CSS Library Component - <a href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html">Example</a>

View New Working Prototype - <a href="http://leapfrog-offcanvas.netlify.com/upgrade/default.html">Example</a>


## React Pattern Library

Original React Library Component - <a href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-react.html">Example</a>

View New Working Prototype - <a href="http://leapfrog-offcanvas.netlify.com/upgrade/react.html">Example</a>

Note: glitch accordion multi-level list group menu working out the errors in progress.

# Components

## Badges

Original Library - <a href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html#badgeIcon">Example</a>

Updates: Badges (Left & Right Icon)

```html
<button class="btn btn-default btn-lg btn-link icon-size">
<span class="glyphicon glyphicon-bell"> </span>
</button>
<span class="badge badge-notify-left">3 </span>
```

```html
<button class="btn btn-lg btn-link icon-size">
  <span class="glyphicon glyphicon-bell"></span>
</button>
<span class="badge badge-notify-right">3</span>

```

Prototype Library WORK IN PROGRESS - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/badges.html">Example</a>


## Toggle Switch


Original Library - <a target="_blank" href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html#toggleSwitch">Example</a>

```html
<div class="checkbox">
   <label>
     <input type="checkbox" data-toggle="toggle">
       Option one is enabled
   </label>
</div>

```

Prototype Library WORK IN PROGRESS - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/toggle-switch.html">Example</a>


## Typography

Original Library - <a target="_blank" href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html#customTypography">Example</a>


```html
  <h1>h1 Bootstrap heading (36px)</h1>
  <h2>h2 Bootstrap heading (30px)</h2>
  <h3>h3 Bootstrap heading (24px)</h3>
  <h4>h4 Bootstrap heading (18px)</h4>
  <h5>h5 Bootstrap heading (14px)</h5>
  <h6>h6 Bootstrap heading (12px)</h6>

```


Prototype Library WORK IN PROGRESS - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/typography.html">Example</a>
      
## SVG Icons

Original Library - <a target="_blank" href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html#customFontIcon">Example</a>


Prototype Library WORK IN PROGRESS - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/svg-icons.html">Example</a>

## Colors

Original Library - <a target="_blank" href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html#defaultColor">Example</a>


Prototype Library WORK IN PROGRESS  - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/colors.html">Example</a>

## Tooltips

Original Library - <a target="_blank" href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html#popover">Example</a>


```html
<ul class="list-inline">
    <li><a href="#" data-toggle="tooltip" data-placement="top" title="Hooray!">Top</a></li>
    <li><a href="#" data-toggle="tooltip" data-placement="bottom" title="Hooray!">Bottom</a></li>
    <li><a href="#" data-toggle="tooltip" data-placement="left" title="Hooray!">Left</a></li>
    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Hooray!">Right</a></li>
  </ul>

```

Requires additional Javascript

```html
<script>
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});
</script>

```


Prototype Library WORK IN PROGRESS  - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/tooltips.html">Example</a>

## Drop down

Original Library - <a target="_blank" href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html#dropdown">Example</a>



```html
 <div class="dropdown">
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
    <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">JavaScript</a></li>
    </ul>
  </div>

```


Prototype Library WORK IN PROGRESS  - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/dropdown.html">Example</a>

## CheckBox / Radio Buttons

Original Library - <a target="_blank" href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html#radioCheckbox">Example</a>



```html
<form>
    <label class="radio-inline">
      <input type="radio" name="optradio">Option 1
    </label>
    <label class="radio-inline">
      <input type="radio" name="optradio">Option 2
    </label>
    <label class="radio-inline">
      <input type="radio" name="optradio">Option 3
    </label>
  </form>

```


Prototype Library WORK IN PROGRESS  - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/radio-buttons-checkbox.html">Example</a>

## Callouts

Original Library - <a target="_blank" href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html#callout">Example</a>


```html
<div class="bs-callout bs-callout-default">
  <h4>Default Callout</h4>
  This is a default callout.
</div>

<div class="bs-callout bs-callout-primary">
  <h4>Primary Callout</h4>
  This is a primary callout.
</div>

<div class="bs-callout bs-callout-success">
  <h4>Success Callout</h4>
  This is a success callout.
</div>

<div class="bs-callout bs-callout-info">
  <h4>Info Callout</h4>
  This is an info callout.
</div>

<div class="bs-callout bs-callout-warning">
  <h4>Warning Callout</h4>
  This is a warning callout.
</div>

<div class="bs-callout bs-callout-danger">
  <h4>Danger Callout</h4>
  This is a danger callout.
</div>

```


Prototype Library WORK IN PROGRESS  - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/callout.html">Example</a>


## Alerts

Original Library - <a target="_blank" href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html#alert">Example</a>


```html
 <div class="alert alert-success">
    <strong> Payments were scheduled.</strong> You can cancel until it processes.
  </div>
  <div class="alert alert-info">
    <strong> Payments were scheduled.</strong> You can cancel until it processes.
  </div>
  <div class="alert alert-warning">
    <strong> Payments were scheduled.</strong> You can cancel until it processes.
  </div>
  <div class="alert alert-danger">
    <strong> Payments were scheduled.</strong> You can cancel until it processes.
  </div>

```


Prototype Library WORK IN PROGRESS  - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/alerts.html">Example</a>

## Buttons

Original Library - <a target="_blank" href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html#buttons">Example</a>



```html
 <button type="button" class="btn btn-primary btn-lg">Large</button>
  <br clear="all" /> <br /> 
  <button type="button" class="btn btn-primary btn-sm">Small</button>
  <br clear="all" /> <br /> 
  <button type="button" class="btn btn-primary disabled">Disabled Primary</button>
  <br clear="all" /> <br /> 
<a href="#" class="btn btn-primary btn-lg">
      <span class="glyphicon glyphicon-print"></span> Print
    </a>

```

Prototype Library WORK IN PROGRESS  - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/buttons.html">Example</a>


## Form

Original Library - <a target="_blank" href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html#form">Example</a>


```html
<form>
    <div class="form-group">
      <label for="email">Email Address:</label>
      <input type="email" class="form-control" id="email" placeholder="Email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Password">
    </div>
    <div class="checkbox">
      <label><input type="checkbox"> Remember me</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>

```

Prototype Library WORK IN PROGRESS  - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/forms.html">Example</a>

## Modal

Original Library - <a target="_blank" href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html#model">Example</a>


```html
          <!-- Trigger the modal with a button -->
  <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  

```


Prototype Library WORK IN PROGRESS - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/modal.html">Example</a>

## Tables

Original Library - <a target="_blank" href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html#tables">Example</a>


```html
      <table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
   

```


Prototype Library WORK IN PROGRESS - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/table.html">Example</a>

## Tabs

Original Library - <a target="_blank" href="https://resource.digitalinsight.com/leapfrog/latest/doc/components-css.html#tab">Example</a>

```html
  <h2>Dynamic Tabs</h2>
  <ul class="nav nav-tabs">
    <li class="active"><a data-toggle="tab" href="#home">Home</a></li>
    <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
    <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
    <li><a data-toggle="tab" href="#menu3">Menu 3</a></li>
  </ul>

  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h3>HOME</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <div id="menu1" class="tab-pane fade">
      <h3>Menu 1</h3>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div id="menu2" class="tab-pane fade">
      <h3>Menu 2</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="menu3" class="tab-pane fade">
      <h3>Menu 3</h3>
      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
  </div>


```


Prototype Library WORK IN PROGRESS - <a target="_blank" href="http://leapfrog-offcanvas.netlify.com/upgrade/components/tabs.html">Example</a>
