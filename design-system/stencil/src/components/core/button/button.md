---
name: Button
category: Core Components
---

Buttons can be used with `<yoo-button>` HTML tag. Standard buttons have four main sizes: x-small, small, medium, default and large.

## Attributes

|Name|Type|Default|Description|
|---|---|---|---|
|`text`|string|   |Text to be displayed in the button|
|`disabled`|boolean| `false`|Enable/Disable the button|
|`isLoading`|boolean|`false`|Displays loader animation in button|
|`icon`|string|     |Icon to add to the button|


```yoo-button-v-6.html
    <yoo-button text="Log In" class="large gradient-success"></yoo-button>
    <br>
    <yoo-button text="Leave"></yoo-button>
    <br>
    <yoo-button class="medium" text="post"></yoo-button>
    <br>
    <yoo-button text="Read More" class="small gradient-success"></yoo-button>
    <br>
    <yoo-button text="New" class="gradient-success x-small"></yoo-button>
```

## CSS

Multiple button types may be specified via the class attribute.

|Type|Class|Usage|
|---|---|--------|
|X-Small|`x-small`|Extra Small button|
|Small|`small`|Small button|
|Large|`large`|large button|
|Icon Only|`icon-only`|Styles icon for icon-only format|
|Block|`block`|Block button|
|Squared|`squared`|Squared button|
|Accent|`accent`| Provides extra visual weight and identifies the accent action in a set of buttons|
|Dark|`dark`|dark buttons are used for dark actions|
|Clear|`clear`|clear button with border|
|Link|`link`| Standard, trasnparent link button
|Link transparent|`link transparent`|Toolbar transparent link button
|Danger|`danger`|Danger buttons are used for critical actions which are usually irreversible|
|Success|`success`| Indicates a successful or positive action|
|Info|`info`|Indicates an action that will provide information to the user|
|Gradient Accent|`gradient-accent`|button gradient accent|
|Gradient Danger|`gradient-danger`|button gradient danger|
|Gradient Info|`gradient-info`|button gradient info|
|Gradient Warning|`gradient-warning`|button gradient warning|
|Gradient Success|`gradient-success`|button gradient success|
|Gradient dark|`gradient-dark`|button gradient dark|


```yoo-button.html
<div style="padding:10px;">
    <yoo-button text="Plain Button"></yoo-button>
    <br>
    <yoo-button text="Button Disabled" disabled="true" class="success-gradient"></yoo-button>
    <br>
    <yoo-button text="Button with icon" icon="yo-fire" class="success"></yoo-button>
    <br>
    <yoo-button text="Button loading" is-loading="true"  class="success"></yoo-button>
    <br>
</div>
```

```yoo-button.css hidden 
     yoo-button {
        margin-bottom: 5px;
    }
```

```yoo-button-types.html
<div style="padding:10px;">
  <div attr-layout="row">
    <div attr-flex>
        <yoo-button text="Button accent" class="accent"></yoo-button>
        <br/>
        <yoo-button text="Button dark" class="dark"></yoo-button>
        <br/>
        <yoo-button text="Button clear" class="clear"></yoo-button>
        <br/>
        <yoo-button text="Button link" class="link"></yoo-button>
        <br/>
        <yoo-button text="Button link transparent " class="link-transparent-success"></yoo-button>
        <br/>
        <yoo-button text="Button danger" class="danger"></yoo-button>
        <br/>
        <yoo-button text="Button warning" class="warning"></yoo-button>
        <br/>
        <yoo-button text="Button info" class="info"></yoo-button>
        <br/>
        <yoo-button text="Button gradient-accent" class="gradient-accent"></yoo-button>
        <br/>
        <yoo-button text="Button gradient-danger" class="gradient-danger"></yoo-button>
        <br/>
        <yoo-button text="Button gradient-info" class="gradient-info"></yoo-button>
        <br/>
        <yoo-button text="Button gradient-warning" class="gradient-warning"></yoo-button>
        <br/>
        <yoo-button text="Button gradient-success" class="gradient-success"></yoo-button>
        <br/>
        <yoo-button text="Button gradient-dark " class="gradient-dark"></yoo-button>
        <br/>
        <yoo-button icon="yo-calendar" class="icon-only accent"></yoo-button>
        </br>
        <yoo-button icon="yo-calendar" class="icon-only success"></yoo-button>
        <br/>
    </div>
    <div attr-flex>
        <yoo-button text="Button accent" class="squared accent"></yoo-button>
        <br/>
        <yoo-button text="Button dark" class="squared dark"></yoo-button>
        <br/>
        <yoo-button text="Button clear" class="squared clear"></yoo-button>
        <br/>
        <yoo-button text="Button link" class="squared link"></yoo-button>
        <br/>
        <yoo-button text="Button link transparent " class="squared link-transparent-success"></yoo-button>
        <br/>
        <yoo-button text="Button danger" class="squared danger"></yoo-button>
        <br/>
        <yoo-button text="Button warning" class="squared warning"></yoo-button>
        <br/>
        <yoo-button text="Button info" class="squared info"></yoo-button>
        <br/>
        <yoo-button text="Button gradient-accent" class="squared gradient-accent"></yoo-button>
        <br/>
        <yoo-button text="Button gradient-danger" class="squared gradient-danger"></yoo-button>
        <br/>
        <yoo-button text="Button gradient-info" class="squared gradient-info"></yoo-button>
        <br/>
        <yoo-button text="Button gradient-warning" class="squared gradient-warning"></yoo-button>
        <br/>
        <yoo-button text="Button gradient-success" class="squared gradient-success"></yoo-button>
        <br/>
        <yoo-button text="Button gradient-dark" class="squared gradient-dark"></yoo-button>
        <br/>
        <yoo-button icon="yo-calendar" class="squared icon-only accent"></yoo-button>
        </br>
        <yoo-button icon="yo-calendar" class="squared icon-only success"></yoo-button>
    </div>
  </div>
</div>
```

```yoo-button-types.css hidden
     yoo-button {
        display: block;
        margin-bottom: 5px;
    }
```

### Size Variations: 

**Block:**

Add `class="block"` for a block button:

```yoo-button-block.html
<div style="padding:10px;">
    <yoo-button text="Button Block" class="accent block"></yoo-button>
    <br/>
</div>
```

## Events

|Attr|Description|
|---|---|
|`buttonClicked`|Event triggered on button click|
