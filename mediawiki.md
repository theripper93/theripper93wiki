<title>

3D Canvas

</title>
`3D Canvas is a module for viewing and creating maps in 3D.  `

Turn your maps into true 3D, load in 3D models, and play your games in
the glorious third dimension. Supports lighting and animated models. If
you don't have 3D models don't worry\! 3D canvas will turn your 2D
tokens into stand-up figures in 3D mode.

For people who want a quick and simple guide to get started with 3D
Canvas, read the [Getting Started](3D_Canvas_Getting_Started 'wikilink')
guide.

If you prefer Video Guides, you can check [3D Canvas
Installation](https://youtu.be/eHzUG64EMJk) and the
[Playlist](https://youtube.com/playlist?list=PLbNUuLLqMgaCpFyHQnTuOGLnljT22XWVp)
with the most recent 3D Canvas Video guides

## Tools

- [Terrascape](https://theripper93.com/terrascape/): A Tool to Sculpt
  and Paint 3D Terrain in an intuitive way

## Controls

While loading into a 3D scene, you will see a pop-up of the basic
controls. It can be closed or re-opened by selecting the **?** button on
the left of the Foundry sidebar.

All controls can be rebinded in the configure controls menu.

Actions marked \<code\>GC\</code\> are only availeble when Game Camera
is enabled

| Control                                              | Action                                                                                                                                                       |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \<code\>Left Mouse\</code\> + \<code\>Drag\</code\>  | Rotate Camera                                                                                                                                                |
| \<code\>WASD\</code\>                                | Pan Camera                                                                                                                                                   |
| \<code\>Right Mouse\</code\> + \<code\>Drag\</code\> | Pan Camera                                                                                                                                                   |
| \<code\>Scroll Wheel\</code\>                        | Zoom Camera                                                                                                                                                  |
| \<code\>Alt\</code\>                                 | Holding Alt while moving the camera will prevent regular mouse event (like selecting an entity)                                                              |
| \<code\>⇧ Shift\</code\> + \<code\>R\</code\>        | Reset camera to initial position                                                                                                                             |
| \<code\>⇧ Shift\</code\> + \<code\>X\</code\>        | If a token is selected, focus the camera on the selected token                                                                                               |
| \<code\>Spacebar\</code\>                            | \<code\>GC\</code\> Locks onto active target In combat, this is the last actor to do an action Outside of combat, it locks onto the currently selected token |
| \<code\>O\</code\>                                   | \<code\>GC\</code\> Toggles top-down view                                                                                                                    |

Camera Controls

| Control                                               | Action                               | Notes                                                                                                                                                                                                                 |
| ----------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \<code\>Left Mouse\</code\> + \<code\>Drag\</code\>   | Drag move entity                     | While dragging, \<code\>scroll wheel\</code\> will change by +-5 elevation by default. With \<code\>⇧ Shift\</code\> held, the scale is +-1 elevation. With \<code\>Crtl\</code\> held, the scale is +-0.1 elevation. |
| \<code\>⇧ Shift\</code\> + \<code\>Click\</code\>     | Select multiple                      |                                                                                                                                                                                                                       |
| \<code\>Ctrl\</code\> + \<code\>Scroll Wheel\</code\> | Rotate currently controlled entities |                                                                                                                                                                                                                       |
| \<code\>Click _(on empty spot)_\</code\>              | Deselect all entities                | GM Only.                                                                                                                                                                                                              |
| \<code\>Ctrl + Click _(on empty spot)_\</code\>       | Deselect all entities                |                                                                                                                                                                                                                       |
| \<code\>F\</code\>                                    | Re-enable ground snapping            | While held, can select multiple entities via box selection.                                                                                                                                                           |

Entity Interaction

| Control                                                  | Action                                        |
| -------------------------------------------------------- | --------------------------------------------- |
| \<code\>Scroll Wheel _(in template preview)_\</code\>    | Rotate the template                           |
| \<code\>Scroll Wheel _(while placing template)_\</code\> | Unsnap the second point and place it manually |
| \<code\>F\</code\>                                       | Re-enable snapping                            |

Measured Template

| Control                                       | Action                    |
| --------------------------------------------- | ------------------------- |
| \<code\>⇧ Shift\</code\> + \<code\>Q\</code\> | Ping and focus the camera |
| \<code\>⇧ Shift\</code\> + \<code\>E\</code\> | Ping location             |

Pings

| Control               | Action                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------------------- |
| \<code\>S\</code\>    | Scale                                                                                                    |
| \<code\>R\</code\>    | Rotate                                                                                                   |
| \<code\>T\</code\>    | Translate                                                                                                |
| \<code\>G\</code\>    | Toggle Gizmo                                                                                             |
| \<code\>Q\</code\>    | Cycle Fill Mode                                                                                          |
| \<code\>F\</code\>    | Hold and Click-Drag to box select                                                                        |
| \<code\>CTRL\</code\> | Hold when starting a Gizmo Transform to duplicate the currently selected tiles and leave a clone behind. |

Tile Editor

### Navigator

The 3D navigator is a new way for you and your players to navigate the
3D Scene with ease\!

To have the 3D Navigator show a slider with all it's options, you must
define Levels in the Levels UI. The navigator will use those names and
the top range for its clipping planes

To cut to a specific Level, simply move the slider to the Level you
prefer, the slider will automatically snap to the closest Level.

- **Sync:** If you are a GM, you will see a Sync button on top of the
  slider, by pressing the button you will sync your current level with
  all players.
- **Camera:** If you are a Player or GM you will see a Camera button,
  by pressing it the camera will focus on the currently selected token
  (the same as \<code\>Shift\</code\> + \<code\>X\</code\>). Doing
  this will automatically set the navigator to the closest level.
- **Follow Mode:** Click to toggle. Selecting a token or changing
  elevation will automatically set the navigator to the closest level
  while enabled. It is enabled on scene load for players and disabled
  for GMs by default. You can change this behaviour in the module
  settings under the misc tab.

## Scene Setup

### Module Settings

![3D_Canvas_Module_Settings.png](3D_Canvas_Module_Settings.png '3D_Canvas_Module_Settings.png')

#### Enable Screen Space Panning

#### Enable Damping

Adds damping to camera movements. Disabling this option is recommended
for people who experience motion sickness easily.

Press \<code\>Shift\</code\> + \<code\>R\</code\> in 3D View to reset
the camera and apply changes.

#### Soft Shadows

Adds softer shadows. Minor performance impact.

#### Shadow Quality

Affects the resolution of shadows. Set to \<code\>Disabled\</code\> to
disable shadows.

#### Anti-Aliasing

Adds anti-aliasing (reduced pixelation around edges). FXAA will have
very little impact on performance. SMAA will have better results but
with more performance impact.

#### Fog of War Quality

Sets the resolution of fog of war.

#### Resolution Multiplier

Sets the resolution scale.

### Global Settings

![Global_3D_Canvas_Settings.png](Global_3D_Canvas_Settings.png 'Global_3D_Canvas_Settings.png') Global 3D Canvas settings are accessed
from the module settings.

### Canvas

#### Prevent Negative Elevation

Prevents token movement that goes below the game board.

#### Template Style

The style for measured templates. Options are wireframe or solid.

#### Grid Draw Mode

How the grid is drawn. Fast is better in general, but only supports
square grids. Mirror will mirror the foundry grid 1:1 but will be more
expensive to render.

#### Range Finder

Shows the distance to tokens while hovering over them.

#### Auto Pan

Hooks the 3D Camera panning to the 2D one (i.e. moving a token will have
the camera follow it).

While disabled, you can pan to the selected token with
\<code\>CRTL\</code\> + \<code\>X\</code\>.

### Token

#### Stand-ups Face Camera

2D Tokens displayed in a stand-up style will always face the camera.

#### Combat Highlight

Highlight the current combatant.

#### Turn Start Marker

Place a marker where a token started its turn in combat. Visible only to
owners of the token.

#### Hide Target Indicator

Hides target indicator if the token has the base enabled. Targets will
be shown in the base ring highlight.

### Base

#### Base Style

The base style to use. Image will display the chosen image, solid will
draw a miniature-style base.

#### Solid Base Mode

The default solid base mode to use. On top will offset the model to the
top of the base. Merge will not move the original model.

#### Solid Base Color

Color of the solid base. Can be a hex value or a color name (e.g. any
CSS color). Default is \<code\>\#1C1C1C\</code\>.

#### Rotate Base

Rotate the 3D Base to match token rotation.

### Permissions

#### Players Can Ping

Enables the ability to ping location for players (Default Shift + E).

#### Players Can Send Camera Position

Enables the ability to send the camera position for players (Default
Shift + Q).

### Game Camera

Enable the 'video game'-like camera. Enabled for players by default; GM
is able to toggle it.

#### Min Angle

Minimum angle the camera can be rotated to.

#### Max Angle

Maximum angle the camera can be rotated to.

#### Clipping

Hide objects covering the current target while enabled.

#### Auto Re-Lock

When the game camera is unlocked from its target, automatically relock
it if the target changes.

#### GM Default On

GMs will have Game Camera toggled on when first loading a scene while
enabled.

#### Show Warnings

Display warnings for Game Camera functionality.

### Misc

#### Enable Camera Popout

Pop out the 2D Canvas into a separate window when 3D mode is activated.

#### Navigator Follow Mode

Automatically enables the follow mode for the 3D Navigator on scene
load.

#### Always Show Advanced Settings

Show the advanced settings in configuration menus by default.

#### Prevent Negative Camera

Prevent the camera from pivoting or panning below 0 elevation.

#### Shared Context

Enables shared context for all players. Performance will be improved
while disabled but mini canvas will be disabled.

#### Debug Mode

Shows helpful debug info for troubleshooting.

### Scene Configuration

![3D_Canvas_Scene_Settings.png](3D_Canvas_Scene_Settings.png '3D_Canvas_Scene_Settings.png') The scene configuration provides basic
and advanced settings that you can tweak to make your scene look the way
you want. Most scene configuration options are in the 3D Canvas tab of
scene settings.

#### Basics

##### Enable for Players

Allow players to open the 3D View by clicking the 3D Mode button
{{\#fas:cube}}

##### Enable 3D on Load

When the scene is loaded, automatically enter 3D Mode

##### Enable Grid

Show the grid in the 3D Scene

##### Enable Ruler

Show the ruler when dragging and placing objects

##### Initial view position

Set the default camera position when the scene loads, to properly set
the target for the view, use the ping option (\<code\>Shift\</code\> +
\<code\>Q\</code\>) to set the camera before saving the initial view
position.

##### Lock Camera Perspective

If you wish to force a certain perspective on this scene, you can lock
it. The camera will no longer rotate, the angle for the lock is the one
of the initial view position.

#### Environment

##### HDRI

If no skybox is selected, the HDRI will be used as the background. if
both skybox and HDRI are selected, the skybox will be used as the
background and the HDRI for lighting and reflections. Having and HDRI is
highly suggested for Metallic and Reflective surfaces to look correct.

##### Skybox Image

Set the skybox (or 3D background) for this scene. The file needs to be
in the same folder of 6 total files, files must contain
**\<code\>\_ft\</code\>**, **\<code\>\_bk\</code\>**,
**\<code\>\_up\</code\>**, **\<code\>\_dn\</code\>**,
**\<code\>\_rt\</code\>**, or **\<code\>\_lf\</code\>** in their name.

##### Enable Bloom

Toggles bloom effects for the scene.

#### Filter

Adds filter effects to the scene. Available filters are:

- Greyscale
- Sepia
- Invert
- Contrast
- Brightness
- Hue
- Saturation
- Custom

Custom will create an input box under filter intensity. You can create
your custom filter with CSS Filters and the syntax will be the same. See
the [MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/filter)
on CSS Filter for more information.

#### Particles

##### Particle Preset

Set the weather or effect for the scene, you can have up of 2 effects at
the same time and one of them can be custom (Particle Preset 2 has the
custom option).

#### Visibility

##### Render Walls

Whether or not to display the 2d Canvas Walls in the 3D Mode.

##### Render Doors

Whether or not to display walls marked as doors.

##### Render Tiles

Whether or not to display tiles.

##### Render Scene Lights

Whether or not to display lights.

##### Mirror Levels Tile Visibility

If enabled 3D Canvas will mirror the Levels tiles visibility. This
option is required if you want to make a multilevel 3D Map where floors
above tokens disappear automatically for easier navigation.

##### Use 3D Geometry for sight calculations

Instead of mirroring the 2D Canvas token visibility, use the 3D Geometry
of the scene. This means that if you simply load a 3D Model into the
scene, it's geometry will be used to block token visibility, meaning you
do not need to wall the scene and it will "just work". This setting also
applies to [Volumetric
Templates](Levels#Volumetric_Templates 'wikilink') Auto Targeting and 3D
Cover Calculations.

## Tiles

### 2D Tiles

Tiles are placed at the bottom elevation via the
[Levels](Levels 'wikilink') module. Background tiles are rendered but
it's highly suggested to instead use a single background image or
popping and flickering issues may occur.

[DF Architect](https://github.com/flamewave000/dragonflagon-arch) has an
option to merge all your background tiles and background image into a
single image.

### 3D Tiles

![3D_Tile_Menu.png](3D_Tile_Menu.png '3D_Tile_Menu.png') For props or
entire 3D Maps, use 3D Tiles\!

You can add metadata to your 3D Models in a way that 3D Canvas will be
able to read it and automatically make parts of your Mesh Doors or set
collision/sight blocking on submeshes separately.

#### Placing 3D Tiles

To place a 3D Tile, open the filepicker while in 3D Mode and in the
Tiles Layer. The file picker will now show 3D Files instead of 2D
Images. Drag and drop a file from the filepicker to the scene to create
a 3D Tile, 3D Canvas will give your tile a placeholder 2D Image as well,
required for Levels to adjust visibility when needed and to make it
clear that you have 3D Tiles on the map, you can change this placeholder
image but it's not suggested to leave it Blank.

If you wish to see 3D Models previews in the file picker, you will need
the [Filepicker+](Filepicker+ 'wikilink') and [3D
Portraits](3D_Portraits 'wikilink') modules.

#### Tile Editor

Once a Tile is on the scene you can select it and use the quick tile
editor controls to manipulate the tile. All the shortcuts are documented
in the [controls](3D_Canvas#Controls 'wikilink').

### Tile Configuration

The 3D Tab contains all the settings to manipulate the tile manually
through numbers, although most of these settings are self explanatory,
we will focus on some that could be confusing:

##### Block Sight/Movement

This option tells 3D Canvas if the tile should be included in collision
and/or vision calculations.

For example, if one of your tiles represents water, you would need to
disable both options.

##### Door Options

These options behave the same as core foundry. Tile Doors also do a
range check against players so they will need to be no more than 1
square away from the door to be able to open it.

##### Fill Type

This will change how the tile is displayed:

- **Single:** Will stretch the 3D Model to fill the box defined by the
  tile.
- **Repeat:** Will make multiple copies of this tile, "tiling" it
  inside the tile bounds. This option is considerably more performant
  than having multiple copies of a \<code\>Single\</code\> fill tile.

##### Gap

This option will set the Gap between the repeated 3D Models. Will only
work with Repeat Fill Type

##### Randomization Options

All this options will only affect the Repeat Fill Type

##### Random Seed

The seed used to generate the randomization, you can change this seed to
some arbitrary characters if you want to re randomize the tile.

#### Supported Properties

| Property Name | Type    | Value           |
| ------------- | ------- | --------------- |
| collision     | Integer | 0/1             |
| sight         | Integer | 0/1             |
| isDoor        | Integer | 0/1/2           |
| doorId        | String  | Any Unique Name |
| ds            | Integer | 0/1/2           |

## 3D Entities

### Lights

#### Creating Lights

![Creating_Lights_Video.webm](Creating_Lights_Video.webm 'Creating_Lights_Video.webm') To create a light, simply go to the light
layer and drag to create a light, all the standard foundry interactions
are the same.

#### Particle Effects

You can enable Particle Effect emission on Lights in the 3D Tab, if you
want more information on what every option does, check the Particle
Effects wiki page\!

### Sun

The sun's position and lighting is determined by the time of day.

#### Limitations

3D Lights will not be blocked by walls or cast shadows because of a
WebGL limitation. It's also incredibly expensive on performance.

You can enable Shadow Casting/Wall Blocking in the 3D Tab for specific
lights, but it's highly suggested to not use more than 2-3 lights per
scene while enabled. Enabling this option on a large number of lights
will crash the scene.

If the scene crashes because of the settings, and you are not able to
access the 3D or 2D Scene, disable 3D Canvas (or launch your world in
safe mode) and delete the shadow casting lights.

### Fog of War

#### Shared Context

Shared Context is a global setting. If enabled, it allows for fog of war
to be rendered in real-time with better performance and better quality.
It is **not recommended** to be disabled.

#### Fog Exploration

If you have both **Token Vision** and **Fog Exploration** enabled in the
scene settings, 3D Canvas will mirror the 2D Canvas fog. This means that
fog bounds are solely determined by walls in the scene.

If you have **Token Vision** enabled but **Fog Exploration** disabled,
the whole scene will be revealed but walls and geometry (if set in the
scene settings) will prevent tokens from seeing each other if blocked by
obstacles.

#### Limitations

**Fog is not 3D\!** Fog exploration is 2 dimensional. Exploring any
space will explore the full vertical space of that location. There are
no current plans for 'true' 3D fog exploration because of performance
costs.

#### Manual Fog of War

If you wish to have some semblance of a "3D Fog", you can use Box
Measure templates to create Fog of War boxes. It will mimic the "use a
piece of paper to cover the map" table experience—but in 3D.

Simply place a Box Measured Template, open it's configuration, and
enable **Is Fog of War Box?**

Players will see this box as solid black. GMs will see it semi
transparent. Moving the camera inside the box will obscure the view. The
GM can move or remove these boxes during the exploration.

### Measured Templates

#### Creating a Measured Template

To create a Measured Template simply drag while in the Template
Controls, to see all the Keyboard and Mouse controls for template
placement, check the Controls Wiki Page

#### Making a Cylinder

Since this is not obvious, to create a cylinder, head over to the Token
Controls {{\#fas:user}} and click the **Set Elevation for next placed
Template** button {{\#fas:sort}}. In the **Special** field, set the
height of the cylinder (in grid units). Then place a circle template.

## Special Effects

### Token Animations

#### Start an Animation with the UI

![Token_HUD_for_Token_Animations.png](Token_HUD_for_Token_Animations.png 'Token_HUD_for_Token_Animations.png') You can access Token Animations by
right clicking your token to open the Token Hud. You will see a Magic
Wand icon on the right.

Click it to open the available animations. Clicking on an animation will
play the animation for all clients. Some animations might not work if
the token is _Prone_ or _Defeated_.

#### Start an Animation with Macros

To play an animation with a macro, first create a script macro, then use
the following commands to play your desired animation. \<syntaxhighlight
lang="javascript"\>game.Levels3DPreview.playTokenAnimation(tokens,
animationId, options)\</syntaxhighlight\>

##### Arguments

\<code\>tokens\</code\>

This parameter can be a single token object, an array of token objects,
a single token ID or an array of token IDs, the animation will play on
all these targets.

\<code\>animationId\</code\>

The identifier for the animation, you can find all the animation IDs by
typing \<syntaxhighlight
lang="javascript"\>game.Levels3DPreview.CONFIG.tokenAnimations\</syntaxhighlight\>
in the console and hitting Enter.

\<code\>options\</code\>

This argument is optional, an object containing additional parameters.

\<syntaxhighlight lang="js"\> {

repeats: 1, // How many times you want the animation to play

resetTime: milliseconds, // Force the time that the animation takes to
reset to the original position once it ends

} \</syntaxhighlight\>

##### Example Macro

This macro will play the Twirl animation, 3 Times, on all Selected
Tokens.

\<syntaxhighlight
lang="javascript"\>game.Levels3DPreview.playTokenAnimation(canvas.tokens.controlled,
"twirl", {repeats: 3})\</syntaxhighlight\>

### Particle System

3D Canvas includes a particle system meant for spell effects, the system
is highly customizable but also very simple to use for basic
projectiles.

You can also set the **Weather** of your 3D Scene in the 3D Tab of the
scene configuration under the "Particles" Section.

#### Without Scripts

If you don't want to dig into the scripting aspect, the module
[Automated Animations](https://foundryvtt.com/packages/autoanimations)
provides a graphical interface to setup 3D Canvas Particle Effects.
![AA_3D.png](AA_3D.png 'AA_3D.png')

#### Creating an Effect

First create a \<code\>Script Macro\</code\>, then to start creating
your effect simply call\<syntaxhighlight lang="javascript"\> new
Particle3D(type) \</syntaxhighlight\>\<code\>type\</code\> is the type
of particle effect, at the moment the options are:

| Effect     | type         | type (short) |
| ---------- | ------------ | ------------ |
| Projectile | "projectile" | "p"          |
| Sprite     | "sprite"     | "s"          |
| Ray        | "ray"        | "r"          |
| Explosion  | "explosion"  | "e"          |

Options

If no type is provided the default is \<code\>"p"\</code\>

Note that "Sprite" also accepts 3D Models as particles\!

Now you can start chaining properties, similar to how Sequencer works.
Every time you call a \<code\>.method()\</code\> on a
\<code\>Particle3D\</code\> it will always return the
\<code\>Particle3D\</code\> object, allowing for chaining. The only
exception is the \<code\>.start()\</code\> method that will return the
ID if the \<code\>Particle3D\</code\> First we must provide an origin
and a destination.\<syntaxhighlight lang="python"\> new Particle3D(type)

` .from(origin)`  
` .to(destination)`

\</syntaxhighlight\>\<code\>.from()\</code\> & \<code\>.to()\</code\>

These two methods are required on every effects, each one can take a
single \<code\>Token\</code\> or an array of \<code\>Tokens\</code\> or
a single \<code\>Position\</code\> or an array of them. Non
\<code\>Token\</code\> placeables are also supported. A
\<code\>Position\</code\> is defined by \<code\>{ x:0, y:0, z:0
}\</code\> where \<code\>z\</code\> is in elevation units.
\<code\>Explosion\</code\> effects are the exception as they do not
require a \<code\>.from()\</code\>

Note: You can omit both \<code\>.from()\</code\> and
\<code\>.to()\</code\> when creating an effect inside
\<code\>.onEnd()\</code\>. In that case the \<code\>.to()\</code\> will
be set as the target of that particular effect (useful for exploding
bolts for example)

Let's set up our origin as the selected token and the destination as our
targets.\<syntaxhighlight lang="javascript"\> new Particle3D(type)

` .from(token)`  
` .to(Array.from(game.user.targets))`

\</syntaxhighlight\>At this point we can \<code\>.start()\</code\> our
\<code\>Particle3D\</code\> to play the effect and the default settings
will be used (it will look like a firebolt).\<syntaxhighlight
lang="javascript"\> new Particle3D(type)

` .from(token)`  
` .to(Array.from(game.user.targets))`

.start()

\</syntaxhighlight\>\<code\>.start()\</code\>

The \<code\>.start()\</code\> method takes no arguments and will simply
start the effect. After using this method you should **NOT** interact
with the \<code\>Particle3D\</code\> anymore. Use the returned ID
instead if you wish to stop the effect, see the \<code\>Stopping an
Effect\</code\> section below. If you wish you can call
\<code\>.start(false)\</code\> to only play the effect locally.

##### Stopping an effect

When creating an effect, the effect will return it's id. You can use
this Id later to stop the effect. You can also execute
\<code\>Particle3D.stop("all")\</code\> to stop all effects. If you used
the \<code\>.name()\</code\> property on effect creation you can also
\<code\>.stop(name)\</code\> to stop all effects with that name.

##### Try it yourself\!

These are several examples showcasing the \<code\>Particle3D\</code\>
system that are a good starting point for understanding the system and
creating your own custom effects.

Create new \<code\>Script Macros\</code\> in your game with the code
blocks [on this page](3D_Canvas_Animation_Macros 'wikilink') to try them
out in 3D Canvas and see the different effects. You can adjust the
variables to see how those influence the effects.

These macros are also all available to import directly in the \<code\>3D
Canvas Particle Effects\</code\> macro compendium\! Simply select a
token, target some tokens and run the macros, you will see them in
action\!

#### Particles Properties & Behaviours

We can now add properties to the effect in any order to alter it's
appearance

\<code\>.alpha(start,end)\</code\>

This property requires start and end to be numbers between 0 and 1 -
sets the starting and ending opacity of particles

\<code\>.arc(integer)\</code\>

This property takes an integer and indicates how many times the
projectile will curve before reaching its destination. Default is 0.

\<code\>.color(start,end)\</code\>

This will determine the starting and ending color of the effect, only
start can be provided. start and end can also be arrays of colors (eg
\<code\>.color(\[color1,color2\],\[color3,color4\])\</code\>.

If an array of colors is provided for start and/or end, the system will
pick one of those colors randomly as the starting\\ending color—it will
NOT create a multicolor gradient.

The colors can be in any format, HEX is recommended but you can use any
CSS compatible color—even using \<code\>"red"\</code\> will work.

\<code\>.delay(milliseconds)\</code\>

If \<code\>.repeat()\</code\> is set, this will be the delay between
each repeat.

\<code\>.duration(milliseconds)\</code\>

Duration in milliseconds of the effect, valid only for "ray". Default is
300 milliseconds

\<code\>.emitterSize(number)\</code\>

Radius of the area of emission in grid squares (so 1 would be 1 grid
square), the larger the number the more spread out the particles will be
in their starting point. Default is 0

\<code\>.force(number)\</code\>

If using an explosion, set the force of the explosion, default is 15.
This will determine the force with which the particles are propelled
from the origin. Higher numbers will result in faster particles.

\<code\>.gravity(number)\</code\>

Gravity affecting the particles - 1 is Earth gravity. Higher numbers
means particles will travel down faster depending on their mass.
Negative gravity is also possible if you want particles to go up
instead.

\<code\>.life(min, max)\</code\>

Range in milliseconds of the lifetime of a particle, bigger numbers will
equal to longer trails. default (100,500). A single value is also
accepted.

\<code\>.mass(number)\</code\>

The Mass of the particle, this will affect how much gravity pulls down
the particle. Default is 100.

\<code\>.miss()\</code\>

If added to the effect, it will miss the target. You can also call
\<code\>.miss(Boolean)\</code\> if you prefer.

\<code\>.name(string)\</code\>

You can give a name to an effect, if you do so, you can call the
\<code\>.stop()\</code\> method using this name and all effects with
this name will be stopped.

\<code\>.onEnd(particle3D)\</code\>

You can pass another \<code\>particle3D\</code\> or an array of
\<code\>particle3d\</code\> to the \<code\>.onEnd\</code\> method, if
you do so, these effects will be played when the main effect ends, you
can nest this how many times you want but DO NOT call the
\<code\>.start()\</code\> method on \<code\>Particle3D\</code\> inside
the \<code\>.onEnd()\</code\> method. Does not trigger when the effect
is terminated by \<code\>.stop()\</code\>

\<code\>.playAnimation(animationData)\</code\>

Play a 3D Animation, the animation data is formatted as
follows:\<syntaxhighlight lang="js"\> {

` from: { // The from property specifies which animation should be played on the origin of the particle effect (usually the caster or attacker)`  
`   id: "twirl", // The id of the animation to play`  
`   start: true, //If the animation should be played on start of the effect`  
`   end: false, // If the animation should be played when the effect ends (like a projectile reaching it's target)`  
` },`  
` to: { // The from property specifies which animation should be played on the origin of the particle effect (usually the caster or attacker)`  
`   id: "shake",`  
`   start: true,`  
`   end: false,`  
` },`

} \</syntaxhighlight\>\<code\>.push(dx,dy,dz)\</code\>

The pushing force affecting the particles, this is a method generally
used internally for fixed emitters - it will create an effect on the
particles as if a force was pushing them in a specific direction.
Default is (0,0,0).

\<code\>.rate(particles,milliseconds)\</code\>

The Rate of the emitter, where particles is the amount of particles in
the system and milliseconds is how often the system creates a particle.
Default (12, 16)

\<code\>.repeat(integer)\</code\>

The number of times to repeat the effect

\<code\>.rotation(x,y,z)\</code\>

Rotation in degrees of the particle, only used if using a 3D Model as
particle

\<code\>.up(x,y,z)\</code\>

A unit vector (eg \<code\>.up(1,0,1)\</code\> ) representing the
direction of the "tip" of the model (eg, an arrow or a dagger), only
used if using a 3D Model as particle

\<code\>.rotateTowards()\</code\>

Instead of a projectile, do a swinging motion, only used if using a 3D
Model as particle

\<code\>.scale(min,max)\</code\>

The starting and ending size in in grid squares of a single particle.
Default is (0.8,0)

\<code\>.speed(number)\</code\>

The speed of the projectile. Default is 10.

\<code\>.sprite(pathToFile)\</code\>

The path to the image to be used as particle. Default is
\<code\>modules/levels-3d-preview/assets/particles/emberssmall.png\</code\>
you can find many particles in that same folder.

\<code\>.startAfter(milliseconds)\</code\>

Delay the start of the effect by the specified milliseconds

## Files

### Supported File Formats

#### 3D File Formats

You can use **\<code\>GLB\</code\>**, **\<code\>GLTF\</code\>** and
**\<code\>FBX\</code\>** files, other formats can be easily converted,
Blender is suggested to perform this operation.

#### 2D File Formats

3D Canvas supports all the file formats supported by Foundry, including
animated **\<code\>webm\</code\>** files. Due to how 3D Canvas handles
transparency, semi-transparent images might be completely cut of by the
processing.

While the weather system supports animated file formats, the particle
effect system does not.

##### Animated Images

While 3D Canvas supports animated webm, it's possible that your browser,
or some browser extension blocks video autoplay. Because the 3D Library
loads animated images differently than 2D it might bump into that block,
if they don't work for you, try to switch browser or disable extensions.

### PBR Materials

#### Material Browser

If you installed the 3D Canvas Mapmaking Pack, you will have access to
more than 1000 Materials and the Material Browser.

To access the material browser simply click the circular icon left of
the Filepicker+ icon ({{\#fas:file-import}}).
![Material_Browser_Icon.png](Material_Browser_Icon.png 'Material_Browser_Icon.png') You will then be welcomed by the material
browser. To apply the material simply click on the desired one. Keep in
mind that if you intend to use these materials on tokens, you need to
select PBR in the material option.

#### Loading a PBR Material

![Material_Browser.png](Material_Browser.png 'Material_Browser.png')
Tokens, walls, tiles and the scene table support PBR Materials. To load
a pbr material you need a specific file naming stuctures. The files must
be named as follows and be all in the same folder.

[Example:\<blockquote\>\<code\>Wood077_1K_AmbientOcclusion.jpg\</code\>](Example:%3Cblockquote%3E%3Ccode%3EWood077_1K_AmbientOcclusion.jpg%3C/code%3E);

\<code\>Wood077_1K_Color.jpg\</code\>

\<code\>Wood077_1K_Emissive.jpg\</code\>

\<code\>Wood077_1K_Metalness.jpg\</code\>

\<code\>Wood077_1K_NormalGL.jpg\</code\>

\<code\>Wood077_1K_Roughness.jpg\</code\>\</blockquote\>As you can see
all the files share a root name then keywords to differentiate the
different textures. You can find materials already set up this way here
AmbientCG.

You need to select one of the files in the image field to use them in 3D
Canvas. **For the full material to be loaded you can pick any of the
images but _not_ color, otherwise only the color texture will be used.**

For walls you can load the image in it's texture field, same for tokens,
tiles and the scene table. Tokens also require that the material is set
to PBR.

Displacement maps are not supported due to performance and optimization.

## Other

### Resources

#### Content Creators

If you wish to purchase premade content for 3D Canvas, some content
creators have it available on their Patreons

- **[Baileywiki](https://www.patreon.com/baileywiki)** has a vast
  collection of 3D Prefabs, Heightmaps, and Maps with heavy use of
  built in tools from the Mapmaking Pack.
- **[Swift Cartography](https://www.patreon.com/Swift)** has 3D Models
  of complete maps and Props.

#### 3D Canvas Compendium

The [compendium](https://github.com/theripper93/canvas3dcompendium)
includes premade maps and tokens and a vast collection of 3D tiles, the
assets included are continuously updated.

#### Heroforge

By using the [3D Portraits](3D_Portraits 'wikilink') module, you can
import your purchased 3D minis from [Hero
Forge](https://www.heroforge.com/). Hero Forge also offers a $15 a month
subscription service that lets you use all the pro customization and
includes 5 minis purchases per month.

#### 3D Models

- [Quaternius](https://quaternius.com/index.html) has a lot of great
  models, require conversion to gltf:
  \<nowiki\>[https://quaternius.com/index.html\</nowiki\>](https://quaternius.com/index.html%3C/nowiki%3E);
- [Shapeways](https://www.shapeways.com/shops/dmworkshop) has free
  miniatures (account required). Only the 3D Printing models are paid
  materials.
- [How to convert STLs](https://youtu.be/2UwQ5v1uQy0)

#### HDRIs

- [Polyhaven](https://polyhaven.com/hdris)
- [iHDRI](https://www.ihdri.com/hdri-skies-outdoor/)
- [HDRMaps](https://hdrmaps.com/)
- [Location Textures](https://locationtextures.com/panoramas/)

#### Skyboxes

- [Skyboxes by Zachery “skiingpenguins”
  Slocum](https://opengameart.org/content/skiingpenguins-skybox-pack)

#### HDRI

- [Polyhaven](https://polyhaven.com/hdris)
- [iHDRI](https://www.ihdri.com/hdri-skies-outdoor/)
- [HDRMaps](https://hdrmaps.com/)
- [Location Textures](https://locationtextures.com/panoramas/)

#### Utility

- [Model
  Converter](https://products.aspose.app/3d/conversion/fbx-to-gltf)
- [Model Editor](https://threejs.org/editor/)

#### Other

- [Sketchfab](https://sketchfab.com/) has tons of free 3D assets that
  you can download already in the correct format

### Modules

#### Required Modules

The following modules are all required for 3D Canvas to function, you
must install them or you will not be able to enable 3D Canvas:

- [Lib Wrapper](https://foundryvtt.com/packages/lib-wrapper): Library
  module for multi module interaction
- [Socketlib](https://foundryvtt.com/packages/socketlib): Library
  module for sending commands between clients
- [Wall Height](Wall_Height 'wikilink'): To handle wall size
- [Better Roofs](Better_Roofs 'wikilink'): For tile logic and for
  Levels to function
- [Levels](Levels 'wikilink'): To handle 3D vision and other 3D logic

#### Supported Modules

Modules that are [Levels](Levels 'wikilink') compatible will likely be
compatible with 3D Canvas as well. There are a few modules that have
specific 3D Canvas integration.

- [Monk's Active Tile
  Triggers](https://github.com/ironmonk88/monks-active-tiles/): 3D
  Canvas supports MATT click and double click events on tiles.

#### Recommended Modules

The following modules are not strictly required but all provide
enhancements to the 3D Experience:

- [3D Canvas
  Compendium](https://github.com/theripper93/canvas3dcompendium):
  Highly Recommended. Contains assets that you can use in 3D Canvas,
  such as 3D Tiles, Skyboxes, HDRIs and Miniatures.
- [3D Canvas Token
  Collection](https://github.com/theripper93/canvas3dtokencompendium):
  Highly Recommended. A collection with 1000+ Hero tokens and every
  DnD5e creature and more.
- [3D Portraits](3D_Portraits 'wikilink'): With this module you can
  have 3D Portraits on your sheets, Import HeroForge miniatures both
  in portraits and as tokens on the board and enable 3D Models
  previews in the filepicker (if you have
  [Filepicker+](Filepicker+ 'wikilink')).
- [Levels - Automatic Cover
  Calculator](Levels#Automatic_Cover_Calculator 'wikilink'): With this
  module you will be able to calculate cover in 3D, the module is
  customizable and compatible with all systems.
- [Levels - Volumetric
  Templates](Levels#Volumetric_Templates 'wikilink'): This module will
  automatically target in 3D when you place a template (AoE)
  calculating spheres, cones etc...
- [Auto-Rotate](https://github.com/Varriount/fvtt-autorotate): This
  module will automatically set the rotation of tokens when moving or
  targeting, this will reflect in 3D and give your minis the correct
  orientation.
- [Automated
  Animations](https://github.com/otigon/automated-jb2a-animations):
  Set up Special Effects on item use without the need to fiddle with
  macros.
- [Drag
  Ruler](https://github.com/manuelVo/foundryvtt-drag-ruler/tree/master):
  Change the 3D Ruler color based on how much movement that specific
  token has.
- [Splatter](Splatter 'wikilink'): Adds special effects (e.g. blood
  splatters) when a token is damaged.

#### Incompatible Modules

There are no known modules that will cause issues.

However, modules that create visual effects in 2D will likely not carry
over effects to 3D. Other types of modules will likely be compatible
with 3D Canvas.

### Tutorials

#### [Getting Started](3D_Canvas_Getting_Started 'wikilink')

A page for new users to quickly get started with 3D Canvas.

#### General Information

theripper93 has created a
[playlist](https://www.youtube.com/playlist?list=PLduZW_yiWVamLWiXPW4KjiduTXhU5z8zV)
of 3D Canvas tutorials. Keep in mind that some may be outdated, but the
general concepts will likely apply for current or future versions of 3D
Canvas.

#### Converting a Spherical HDRI map to a Cube Map for 3D Canvas

_A guide by \<code\>@simulacrum\</code\>_

- Go to <https://matheowis.github.io/HDRI-to-CubeMap/>
- Upload you image. It doesn't take \<code\>EXR\</code\> so you'll
  have to convert those to HDRI's, \<code\>PNG\</code\> or
  \<code\>JPEG\</code\>.
- Once it's uploaded it will appear in the 3D view. You can now see
  how the Cube map will look.
  - It's possible to move the image by dragging on it but **don't**
    or it won't line up with your HDRI.
- Adjust the Exposure. Make it darker.
  - The HDRI lights the cube map so you will have to compensate for
    this, either now or in your image editor later.
- Choose \<code\>Export\</code\> and choose the bottom option
  \<code\>export as PNG\</code\> choosing the size you want for the
  individual sides
  - 2k is normally enough but you can try 4k if your machine can
    handle it or 1k if not
- Click \<code\>Process\</code\>
- Once it's finished, download them
- The names of the files don't match up with 3D Canvas so use a file
  renamer to swap them.
  - Remember that your prefix must match on every file (i.e.
    **\<code\>name_bk\</code\>**, **\<code\>name_ft\</code\>**,
    etc.)
- All the images will need to be flipped horizontally.
  - You will also have to rotate the **\<code\>\_up\</code\>** and
    **\<code\>\_dn\</code\>** images clockwise 90 degrees.
  - Altering the images in an editor like Photoshop or Gimp is
    recommended.
- Save all of the files.
- You can get the file size down by changing them to
  \<code\>JPEG\</code\>
  - Don't use much, if any, compression as it shows.
  - \<code\>webp\</code\> looks very compressed so I don't use it.
- That's it. You now have an 8bit cube map that matches you 32 bit
  HDRI that will be a much smaller file size that the equivalent HDRI.
  Now you can use a 1k hdri to give you the lighting and reflections
  and use the 8bit Cube Map as the background image.

#### [Importing Maps from Townscaper by **Chryron\#3457**](Townscaper 'wikilink')

#### Special Mentions

- \<code\>@dev7355608\</code\> for tons of help and suggestions on
  many parts of the 3D Canvas developement
- \<code\>@Otigon\#2010\</code\> for the wonderful Automated
  Animations integration ([Patreon](https://www.patreon.com/otigon))
- \<code\>@arcanist\#4317\</code\> for testing and code tips
  ([Patreon](https://www.patreon.com/arcanistzed))

</text>

`     `<sha1>`r57e6u7uobp0o6kn1efpz2j9bsddsoq`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

3D Portraits

</title>

`   `<ns>`0`</ns>  
`   `<id>`14`</id>  
`   `<revision>  
`     `<id>`2187`</id>  
`     `<parentid>`473`</parentid>  
`     `<timestamp>`2022-10-31T12:04:39Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<comment>`/* How to use */`</comment>  
`     `<origin>`2187`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="2264" sha1="bghxs3v9ukf9lmd8je8vetwr06hwini" xml:space="preserve">`  `

Show 3D Files as actor portraits and items

## How to use

![3D Portraits header button](3dpheader.png '3D Portraits header button') ![3D Portraits Configuration
Window](3dpconfig.png '3D Portraits Configuration Window')

### Setting a 3D file as actor or item portrait

- Open the 3D Portraits configuration in the Window Header
- In the configuration window select a 3D File, only
  \<code\>glb\</code\> and \<code\>gltf\</code\> are supported. If you
  have setup the Heroforge integration, you can use the Heroforge
  Browser to select a mini from your Heroforge Collection
- If you wish set a background image for the 3D Portrait

### Hero Forge Integration

Accepting the Terms of Services via enabling the respective option in
the module settings is required for Hero Forge integration. It is also
required to input the Hero Forge authentication key in the module
settings. ![Filepicker+ integration](3dpfilepickerplus.png 'Filepicker+ integration')

### Filepicker+ Integration

If you have Filepicker+ installed you can preview 3D Files directly in
the Filepicker by hovering over them. ![Argon Combat HUD
integration](3dpargon.png 'Argon Combat HUD integration')

### Argon Integration

If you have Argon Combat HUD installed, the 3D Portrait will show in the
HUD as well ![3D Canvas integration](3dp3dc.png '3D Canvas integration')

### 3D Canvas Integration

If you have 3D Canvas installed, you can use the Heroforge Browser for
3D Tokens

## Generating Thumbnails for 3D Files

If you have a folder of your own 3D Models, you can generate Thumbnails
that will be used by Filepicker+ to display. To do so, simply run this
in the console or as a script macro replacing the path accordingly.

\<code\>game.threeportrait.ThreePortraitPreview.generateThumbnails("your/path/")\</code\>

Example:

\<code\>game.threeportrait.ThreePortraitPreview.generateThumbnails("assets/3dModels")\</code\>

By default this command will skip generating a thumbnail if it already
exists, if you wish to generate anyways (for example to replace old
thumbnails) you can set the second argument to false

\<code\>game.threeportrait.ThreePortraitPreview.generateThumbnails("your/path/",
false)\</code\>

Thubnail generation requires **Chrome** or the **Desktop App**, it won't
work in other browsers\!</text>

`     `<sha1>`bghxs3v9ukf9lmd8je8vetwr06hwini`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Automatic Cover Calculator

</title>

`   `<ns>`0`</ns>  
`   `<id>`15`</id>  
`   `<revision>  
`     `<id>`2186`</id>  
`     `<parentid>`487`</parentid>  
`     `<timestamp>`2022-10-31T11:55:17Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<comment>`/* How to use */`</comment>  
`     `<origin>`2186`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="2632" sha1="i16kebbhe2gr7fohatw3u09qb4z6syr" xml:space="preserve">

**Automatic Cover Calculator** _(Levels - Automatic Cover Calculator in
releases)_ is a submodule for [Levels](Levels 'wikilink'). It calculates
a precise cover percentage for tokens and can display their cover value
above tokens.

Options include defeated enemies as cover but at a reduced height and
more. Preconfigured for dnd5e but works with all systems. Also adds the
ability to duck\!

## How to use

![Cover Item Location](Acitem.png 'Cover Item Location')

### Quick configuration (DND5E)

- After enabling the module import the cover item from the compendium
- In the Module Settings enable \<code\>Automatically Apply Active
  Effects\</code\>
- Drop some NPCs and Players onto the map
- Enter Combat
- Target a Creature

### Why is the cover calculation not working?

- Make sure the combat is started and that you are targeting with the
  current turn creature.
- As a GM, Targeting from a Player's token will not calculate cover to
  avoid database update concurrency issues
- Make sure there is a wall or floor that provides cover
- You can test this easly by placing a wall that completely obstructs
  vision, then, disable vision on the token (so that it can see tokens
  beyond the wall) and try targeting (you should get 3\\4 cover)

![Ignore Cover Active Effect example](Autocovernocover.png 'Ignore Cover Active Effect example')

### Ignoring Cover

If you have an actor for which you wish to ignore the cover active
effect application, you can do so with an active effect on the actor or
on the specific feature, the necessary flag to ignore cover is
\<code\>flags.levelsautocover.noae\</code\> set the Mode to
\<code\>Override\</code\> and Value to \<code\>1\</code\>

### Custom Configuration and other settings

The Automatic Cover Calculator can be heavly customized, head to the
module settings to see all the customization options.

All settings are described in details in the Settings hints. ![Ducking
Button](Achudbtn.png 'Ducking Button')

## Ducking

Ducking will allow tokens to duck, changing their sight elevation and
therefore beeing able to hide behind tables and the like.

To toggle ducking, simply click the button in the token HUD ![Location
to set the "Walls Block Ranged Attacks" and "Calculate Cover"
settings](MidiQol_Settings.png 'Location to set the "Walls Block Ranged Attacks" and "Calculate Cover" settings')

## Midi-qol Integration

If you are using Midi-qol it's suggested that you let it take over cover
handling, Automatic Cover Calculator will just act as a library module
handling the math. To do so, simply enable these 2 settings in the
Midi-qol configuration</text>

`     `<sha1>`i16kebbhe2gr7fohatw3u09qb4z6syr`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Depth Blur

</title>

`   `<ns>`0`</ns>  
`   `<id>`16`</id>  
`   `<revision>  
`     `<id>`460`</id>  
`     `<parentid>`195`</parentid>  
`     `<timestamp>`2022-09-06T16:18:05Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`460`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="710" sha1="7eoc4n13ebq0hj4zr4n2vsitbdyfofp" xml:space="preserve">

**Depth Blur** _(Levels - Depth Blur in releases)_ is a submodule of
[Levels](Levels 'wikilink'). Applies a blur effect to layers in and
tokens depending on the current elevation. The farther you are from a
level, the more blurrier it will be. ![Depth Blur
Configuration](Depthblurconfig.png 'Depth Blur Configuration')

## How to use

- Open the scene configuration
- Head to the Ambience tab
- In the bottom, check \<code\>Enable Levels Automatic Blur\</code\>
- If you wish, configure the Blur Factor as you like

If your map is configured with Levels and you have a \<code\>token
selected\</code\> you will see that images will be blurred depending on
the distance from them.</text>

`     `<sha1>`7eoc4n13ebq0hj4zr4n2vsitbdyfofp`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Volumetric Templates

</title>

`   `<ns>`0`</ns>  
`   `<id>`17`</id>  
`   `<revision>  
`     `<id>`467`</id>  
`     `<parentid>`216`</parentid>  
`     `<timestamp>`2022-09-06T20:31:56Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`467`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="2230" sha1="qllixh9m4cxg2z9m17vkbec36soh8sn" xml:space="preserve">

**Volumetric Templates** _(Levels - Volumetric Templates in releases)_
is a submodule of [Levels](Levels 'wikilink'). It allows for compute
Foundry templates in 3D with autotargeting. Automatic mode to
dynamically switch between 2D and 3D depending on the information
provided. Works with all systems and is [MIDI
QOL](https://gitlab.com/tposney/midi-qol) compatible.

## How to use

Volumetric templates will work automatically with normal templates
placement.

The module will automatically figure out if a template needs 3D
Calculations or not if \<code\>Dynamic auto swap\</code\> is enabled in
the module settings.

By default, circles will be spheres, and cones will be calculated as
cones. Other shapes (boxes, cylinders, hight for rays) will need the
special field to work in 3D. ![Template Configuration
Button](Vtmanual.png 'Template Configuration Button')

### Manually configuring a template

![Configure Template Prompt](Vtconfigscreen.png 'Configure Template Prompt') If you need to set the Special field, or
manually set the elevation at which the template is placed you can do so
with the configure template button.

#### Elevation

If you don't set an elevation, the elevation of your currently selected
token will be used

#### Special

This field will tell Volumetric Templates the 3rd dimension of the
template. Spheres and cones don't need it so that's why you don't need
to set it for those.

- **Circle**: If a Special is set, the circle will be calculated as a
  cylinder with the Special beeing it's height
- **Cone**: Special will be ignored for cones
- **Rectangle**: The special field will determine the height (or
  depth) of the Rectangle
- **Ray**: The special field will determine the height (or depth) of
  the Ray

![The 3rd Dimension shown on the template](Vtspecialtemp.png 'The 3rd Dimension shown on the template') When a special field is set,
it will be shown in the template dimensions.

## Configuration

In the module settings you can find many options to customize Volumetric
Templates, the most important field is the \<code\>Volume
Percentage\</code\>, this will determine how much a token needs to
overlap with a template to count as a target. Tokens are simplified to
Cubes for intersections.</text>

`     `<sha1>`qllixh9m4cxg2z9m17vkbec36soh8sn`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Category:3D Canvas

</title>

`   `<ns>`14`</ns>  
`   `<id>`13`</id>  
`   `<revision>  
`     `<id>`103`</id>  
`     `<parentid>`80`</parentid>  
`     `<timestamp>`2022-07-15T12:29:00Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`103`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="66" sha1="iioi4a5zpv2i2vmmv8yv40wforray47" xml:space="preserve">`A category for pages pertaining to 3D Canvas.`

</text>

`     `<sha1>`iioi4a5zpv2i2vmmv8yv40wforray47`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Category:Levels

</title>

`   `<ns>`14`</ns>  
`   `<id>`18`</id>  
`   `<revision>  
`     `<id>`104`</id>  
`     `<parentid>`99`</parentid>  
`     `<timestamp>`2022-07-15T12:29:13Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`104`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="91" sha1="orupse7fxhba42mpdk5hyo73yzka6o8" xml:space="preserve">`A category for all Levels related pages, including Levels submodules.`

</text>

`     `<sha1>`orupse7fxhba42mpdk5hyo73yzka6o8`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Dig Down

</title>

`   `<ns>`0`</ns>  
`   `<id>`27`</id>  
`   `<revision>  
`     `<id>`349`</id>  
`     `<parentid>`343`</parentid>  
`     `<timestamp>`2022-09-03T15:09:57Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<minor/>  
`     `<comment>`Formatting`</comment>  
`     `<origin>`349`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="2605" sha1="apwv3rsnhlcu3fq5177yr8hx9deaeho" xml:space="preserve">` `

![The Rebuild Cache button (needed if you move\add
files)](Ddrebuildcache.png 'The Rebuild Cache button (needed if you move\\add files)') Perform deep
searches inside folder structures and sidebars and fuzzy searches on
compendiums and sidebars. ![The text in this journals contains the word
"Tips"](Ddtips.png 'The text in this journals contains the word "Tips"') ![These scenes
have tiles with images that include cobbler in their
name](Ddimagescene.png 'These scenes have tiles with images that include cobbler in their name')
![Search for CR in dnd5e using the deep search](Ddcrsearch.png 'Search for CR in dnd5e using the deep search')

## Basics

### Searches

![The Excavation button](Ddexcavate.png 'The Excavation button')

#### Deep Folder Search

If enabled, it will allow you to search in subfolders while using the
file picker.

For this feature to work you must enable \<code\>Deep File
Search\</code\> in the module settings then click the \<code\>Rebuild
Cache\</code\> button in the settings sidebar

#### Fuzzy Search

Fuzzy Searches are done automatically. It will find the closest matches
to your search (e.g. searching for accolite will show "Acolyte" in the
results). They are enabled by default and will work for compendiums and
the actor sidebar.

#### Deep Search

The deep search starts with \<code\>&\</code\>. It will look into the
items to find a property or value that matches the search. For example:
Searching for the name of an image will filter for any entity that is
using that image.

Note that this feature works on all sidebar directories and will search
inside the JSON itself. If you are looking for a scene with zombies you
can search in your scene sidebar for \<code\>\&zombie\</code\>.

#### Prop Search

Starting a search with \<code\>\!\</code\> will search in the properties
defined in the settings. **Prop Search may be slow for huge
directories.** If \<code\>data.details.cr\</code\> is a property defined
in the settings, searching for \<code\>\!1\</code\> will filter for
creatures with a cr of 1. ![A more advanced search for compendium (these
creatures where imported from the dndsrd monsters
compendium)](Ddcompendium.png 'A more advanced search for compendium (these creatures where imported from the dndsrd monsters compendium)')

### Other Features

#### Cache Rebuilding

To rebuild the cache (needed if you move\\add files) use this button:

#### Excavating Tokens

This option will find the closest match image based on the token name.

To use it, simply click the excavation button to the right of the token
image field.

## Credits

### Fuzzyset.js

This package is licensed under the Prosperity Public License 3.0.

That means that this package is free to use for non-commercial projects

See <https://github.com/Glench/fuzzyset.js> for more details

</text>

`     `<sha1>`apwv3rsnhlcu3fq5177yr8hx9deaeho`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Category:Free

</title>

`   `<ns>`14`</ns>  
`   `<id>`28`</id>  
`   `<revision>  
`     `<id>`131`</id>  
`     `<parentid>`130`</parentid>  
`     `<timestamp>`2022-07-15T12:40:07Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<minor/>  
`     `<origin>`131`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="52" sha1="f4pgnkuea2x1wormk717eph0qsvbrgz" xml:space="preserve">`A subcategory of free modules.`

</text>

`     `<sha1>`f4pgnkuea2x1wormk717eph0qsvbrgz`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Category:Premium

</title>

`   `<ns>`14`</ns>  
`   `<id>`29`</id>  
`   `<revision>  
`     `<id>`134`</id>  
`     `<parentid>`133`</parentid>  
`     `<timestamp>`2022-07-15T12:41:17Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`134`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="54" sha1="oay1obc5odeinyja9ewmzs7krnqvff9" xml:space="preserve">`A subcategory of premium modules.`

</text>

`     `<sha1>`oay1obc5odeinyja9ewmzs7krnqvff9`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Levels

</title>

`   `<ns>`0`</ns>  
`   `<id>`2`</id>  
`   `<revision>  
`     `<id>`810`</id>  
`     `<parentid>`514`</parentid>  
`     `<timestamp>`2022-10-16T19:15:11Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`810`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="18129" sha1="tpawgw1j33r7s4eeqehipnbjs8x82gr" xml:space="preserve">`Levels is a Foundry VTT module for creating maps with multiple vertical levels.`

## Basics

### Dependencies

- [libWrapper](https://github.com/ruipin/fvtt-lib-wrapper)
- [Wall Height](Wall_Height 'wikilink')

### Recommended

- [Perfect Vision](https://foundryvtt.com/packages/perfect-vision)

### Before we Begin

Levels heavly relies on vision. If vision is disabled on the map or you
have selected a token without vision, you might experience undesired
effects\!

### Your First Levels Map

While Levels is capable of handling full multilevel maps, we will start
with something simple: Adding a multilevel barn to an existing map. This
approach is scalable to any map you might want to build in the future.

1.  Open any scene or create a new scene and set a background. This
    tutorial assumes you have a standard grid size of 5ft, if that is
    not the case adjust the Levels size accordingly (usually 2 times the
    size of 1 square). Setting a background is not strictly required and
    you can use a blank map if you prefer.
2.  Open the Levels UI (also known as the _Levels Layer Tool_) by
    pressing the {{\#fas:layer-group}} button.
3.  Press the {{\#far:pen-to-square}}button to go into edit mode, extend
    the window vertically to have some extra space
4.  Press the \<code\>+\</code\> button two times to add two levels.
5.  Set the bottom one at 0/10 elevation and the top one at 10/20. Name
    your Levels \<code\>Ground Floor\</code\> and \<code\>First
    Floor\</code\>. Giving a name to your Levels is not strictly
    required.
6.  Head out of edit mode by pressing the button again and select the
    0/10 Level by clicking on it. Your UI should now match the Levels UI
    screenshot below.
7.  While you have a Level selected in the UI, anything you place will
    be placed on that Level. Now head to the \<code\>Tiles
    Layer\</code\>.
8.  Open the \<code\>Tile Browser\</code\> and navigate to
    \<code\>modules/levels/sample-maps/baileywiki/\</code\>, drag and
    drop the \<code\>barn-lvl1.webp\</code\> file onto the scene.
9.  Head to the \<code\>Walls Layer\</code\> and wall this ground floor
    tile appropriatelly.
10. Now select the First Floor (10/20) in the Levels UI. In the
    \<code\>Tile Browser\</code\> grab the
    \<code\>barn-lvl2.webp\</code\> file from the same folder and drag
    it on top of the other tile alligning them correctly. As before,
    head to the \<code\>Walls Layer\</code\> and wall this floor
    appropriatelly.
11. We will enable an additional settings on this floor so we can see it
    when we are on the Ground Floor. Double click the First Floor tile
    to open it's configuration, head to the Levels Tab and enable
    \<code\>Show Even When Below?\</code\> and save your changes
12. Let's add a roof\! Toggle roof view\\placement by clicking
    **{{\#fas:archway}}**
13. Drag and drop the roof tile \<code\>barn-roof.webp\</code\> i the
    correct position
14. Head back to the Ground Floor with the Roof mode still enabled and
    place \<code\>barn-shed-roof.webp\</code\> on top of the shed on the
    left side of the barn.
15. Last step is connecting the floors. Toggle the Roof View\\Placement
    off, and on the ground floor head to the \<code\>Drawings
    Layer\</code\>
16. Place a square drawing where the ladder is located on the top of the
    barn. This will create a stair.
17. Done\! Place a token and move around to explore the barn\! Remember
    to use Tokens with vision and have vision enabled in the scene
    settings\! Feel free to play with multiple tokens (selecting one at
    a time) to see how floors block vision. While we don't have Stairs
    to connect us to the roofs, you can manually change the elevation of
    your tokens to 10 or 20 to explore them. Maybe experiment by
    creating your own star connections to the roofs\!

### Levels UI

![A screenshot of the Levels UI](Levels_UI.png 'A screenshot of the Levels UI') Open the Levels UI (also known as the
_Levels Layer Tool_) by pressing the {{\#fas:layer-group}} button.

You will see a small semi-transparent black box open in the top-right of
Foundry.

Layers can be manually created with the {{\#fas:plus}} button on the
bottom of the row or automatically generated from entities with
elevation values with the {{\#far:map}} button on the bottom row.

While the Levels UI is open, the view will show all tiles and entities
in the elevation range of the layer. Any tiles or tokens added to the
scene while on a layer in the UI will automatically set the tile or
token to its height.

To rename or change the elevation values of a layer, press the
{{\#far:pen-to-square}}button. You will now be in edit mode for the
Levels UI window. Click on the layer you wish to edit, then modify the
name or values. The downwards arrow represents the lowest elevation and
the upwards arrow represents the highest for the layer. Click the button
again to confirm and save your edit.

There are 3 additional toggles at the leftmost of the bottom row:

**{{\#fas:users}} Show Players in the UI**

Shows icons of the players in the UI, the icons will be placed in the
corresponding level. You can click the icons to select the corresponding
player.

**{{\#fas:fa-sort-amount-up-alt}} Place Drawings as Stairs**

While toggled on, place drawings as stairs, toggle it off to create
labels or descriptions to place in your levels.

**{{\#fas:archway}} Enable Levels Roofs View/Placement**

Displays roofs above the current level. Placing tiles while this toggle
is active will place them as roofs above the current level.

**{{\#fas:tree}} Place Tiles as Overhead Tiles Inside the Current
Level**

Tiles placed with this toggle active will be placed as overhead tiles
inside the level. For example you could use this to place a chandelier
inside the current level.

To view every tile and token or exit the layers view, close the Levels
UI. You can also clear all levels layers with the {{\#fas:trash}}
button. This will not delete tiles or tokens.

If you create a drawing while the Levels UI is active, the drawing will
be set automatically as a Stair and it will be set as Hidden. The Stair
will be configured to move you from the current Level to the one above
it and vice versa.

The Levels UI is a tool to help you place and visualize your Levels
setup. Levels does not require levels in the UI to be defined to work,
for example if you deleted all your levels in the UI after building your
map, the map will still work exactly the same. Removing levels from the
UI or changing their range will not modify or remove entities in the
scene.

### Tiles

Tiles are a core aspect of Levels. Every tile can be assigned an
elevation and sight is based on tile transparency.

It is generally recommended for Levels tiles to be overhead tiles. Tiles
not set as overhead will all be placed at the background elevation.

The background is counted as a solid plane (i.e. a single overhead tile
at a defined elevation) with a default elevation of 0. The elevation of
the background can be adjusted in scene settings. Keep in mind that the
background layer and it's tiles will not account for transparency and
will count instead as a solid scene sized plane.

### Tokens

Token height is handled by [Wall Height](Wall_Height 'wikilink'). It's
higly suggested to read the \<code\>Token Height\</code\> section of the
Wall Height page before using Levels.

### Drawings

![Drawing_config_menu.png](Drawing_config_menu.png 'Drawing_config_menu.png') In Levels, drawings are used to create stairs
and elevators. Their purpose is to allow travel between elevations.
However, _how_ they handle travel between elevations is handled
differently.

To create or edit a stair or elevator, double click on an existing
drawing to open the drawing configuration menu.

You will see a few settings added by Levels.

\<code\>Levels Drawing Mode\</code\> determines the purpose of the
drawing. \<code\>None\</code\> treats it as a vanilla Foundry drawing,
\<code\>Stair\</code\> sets it as a stair, and \<code\>Elevator\</code\>
sets it as an elevator.

\<code\>One Way Stairs\</code\> follow the same rules as regular Stairs
but work only One Way

Before V10, there was the \<code\>Hole\</code\> option as well. However,
holes have been deprecated from V10 onwards in favour of tile
transparency.

\<code\>Elevator Floors\</code\> set the floors an elevator can
transport entities between. The syntax for it is
\<code\>elevation,name|elevation,name\</code\> (e.g. \<code\>0,Ground
Floor|10, First Floor\</code\>).

\<code\>Height (Top)\</code\> sets the top height (i.e. highest point)
of the drawing.

\<code\>Height (Bottom)\</code\> sets the bottom height (i.e. lowest
point) of the drawing.

#### Stairs

Stairs allow tokens to travel **from** and **to** two set elevations.

- Stairs can only move tokens to its set elevations
- The token must be on one of the two elevations exactly (e.g. 0 or 10) to trigger
- Stairs will move tokens one value higher than its top elevation if
  entering from below

For example: a stair with a bottom of 0 and a top of 9. A token at an
elevation of 0 that enters the stair will now have an elevation of 10.
If they re-enter the stair while at an elevation of 10, they will then
have an elevation of 0. Any other elevation will not trigger the Stair.

#### One Way Stairs

One way stairs function the same way as regular stairs but don't allow
two-way movement.

For example: a one way stair with a bottom of 0 and a top of 9. If set
to \<code\>One Way - Down\</code\> will bring any token that enters it
while at an elevation of 10 to 0, and entering with an elevation of 0
will do nothing. \<code\>One Way - Up\</code\> will do the opposite

#### Elevators

Elevators allow tokens to travel between multiple set elevations.

Tokens that enter an elevator can freely travel between the elevations
set in \<code\>Elevator Floors\</code\> via a pop-up menu.

Elevators will trigger on any elevation in the range of the drawing. For
example an elevator set to 0 / 40 as it's top and bottom values will
trigger on any elevation between those (e.g. 25). The options you define
in the elevator don't affect the triggering range.

### Vision

![A simple diagram visualizing sight concepts](How_sight_work.jpg 'A simple diagram visualizing sight concepts') Token vision is best
understood three dimensionally ala our own physical world.

Imagine 3 tokens. Let's call them **Token A**, **B**, and **C**. **Token
A** is on top of a tower that is 60 units high. **Tokens B** and **C**
are at an elevation of 0.

However, **Token B** is 60 (horizontal) units away from **Token A** and
**Token C** is 10 (horizontal) units away from **Token A**.

**Token A** can see farther outwards than **Tokens B** and **C** because
it is viewing from a higher vantage point. It will also be able to look
over any tiles at an elevation of less than 60. In addition, **Token A**
and **Token B** can see each other.

However, **Token A** and **Token C** cannot see each other. This is
because the line of sight between **Token B** and **Token C** is blocked
by the tower. If **Token C** moves farther away from **Token A** and the
tower, then the two tokens will be visible to each other.

### Fog of War & Advanced Fog Exploration

Fog in foundry is monodimensional, the system itself is not build to
handle multiple layers of fog, for that reason, by default, if you
explored any elevation, all areas in that zone (independent of
elevation) will also be explored. For example if a player explored a
first floor of a building then went to the second floor, it would be
already fully explored.

Since the only way to make it work correctly would be to completely
rewrite the fog exploration system and even then there would be issues
of storing multiple fogs (as it would take up load time on startup).
Outside of this problem there would be even more issues because 'fog
layers' could not be completely separate as exploring an area open to
the sky would make it dark once you changed elevation.

Due to all this issues that currently have no solution levels implements
what's called 'Advanced Fog Exploration'.

What this does is simple, when a player is in the elevation range of a
tile, levels imposes a black shape of that tile onto the fog layer which
basically means that it disables fog exploration for that tile only.

Unfortunately there is no solution currently to solve this problem.

This is enabled by default, but you can globally disable it or even
toggle it per tile.

## Settings

### Scene Settings

#### Light Masking

![In this example the lighting looks correct at first
glance](Light_Masking_Fine.jpg 'In this example the lighting looks correct at first glance')
\<code\>Light Masking\</code\> can be toggled in the
\<code\>Lighting\</code\> tab in the scene settings. By enabling this
feature all lights below the current point of view will be visible and
masked with the tiles that are above them.

Disabling this setting will only show lights on the current level.![Here
we can see, by moving the roof slightly, that while the roof is covering
the "green" coloration of the light, the vision portion of the light is
still visible.](Light_masking_broken.jpg 'Here we can see, by moving the roof slightly, that while the roof is covering the "green" coloration of the light, the vision portion of the light is still visible.')If
you are **not** using the **[Perfect
Vision](https://foundryvtt.com/packages/perfect-vision)** module you
will encounter the limitations listed below:

- Light masking will mask the "visual" part of the light, as in it's
  color and animation. Unfortunatelly the "vision" part of the light
  cannot be masked at this point withouth radical changes to Foundry
  codebase. See images for an example.
- While this visual "glitch" will reveal the map in those locations,
  it will not reveal tokens.

#### Weather Elevation

Elevation for weather can be adjusted

#### Background Elevation

You can set the elevation for the background layer in the scene
settings. Default is 0.

Keep in mind that due to limitations and performance issues, the whole
Background layer will disregard any transparency vision calculations,
and count as a scene-sized vision blocking plane.

Example: If you make a blank new scene with no tiles or background
image, then place a token at 0 elevation and one at -10 you will notice
that they cannot see each other.

This works well for most use cases (eg. have your map as the background
of the scene, then add floors above and\\or basements below) but might
be a problem in some specific scenes that require transparency at 0
elevation.

In these cases, simply set the Background Elevation to an arbitrary
large negative number (eg -99999), ignore the background layer and just
use overhead tiles placed through the Levels UI. For example, after
creating your scene with your background image (so that the scene is
auto sized properly) remove the bakground image from the scene
configuration and set the background elevation to -99999. Then place
your "baground" image through the Levels UI at 0 elevation.

## Handling Multiple Tokens

When having multiple tokens selected, Levels needs to decide a single
point of view, for this reason, multiple tokens handling is not
supported.

While having multiple tokens selected will still merge their vision,
Levels will not be able to decide which floor to show if the tokens are
at different elevations. At the moment there is no solution to this so
stick with one selected token at a time if you have multiple at
different elevations.

## API

The API is available for viewing by entering
\<code\>CONFIG.Levels.API\</code\> in the Foundry console or in
[API.js](https://github.com/theripper93/Levels/blob/v9/scripts/API.js).

### Hooks

\<code\>levelsInit(levelsConfig)\</code\>

A hook that fires when levels has finished initializing, you should use
this hook if you want to subclass/wrap/override the levels handlers
levelsConfig.handlers. This fires before the levels Wrappers are
registered, giving you a chance to wrap or change said functions.

\<code\>levelsReady(levelsConfig)\</code\>

A hook that fires after levels has initialized all it's classes and
register wrappers and hooks.

\<code\>levelsUiChangeLevel()\</code\>

A hook that fires when a different level is selected in the Levels
Layers Tool, you can access the Layers Tool in CONFIG.Levels.UI

\<code\>levelsPerspectiveChanged(currentToken)\</code\>

A hook that fires when the token that Levels is using to render the
current point of view changes. Can be \<code\>null\</code\> for GMs when
no token is selected.

### Overrides

Levels overrides \<code\>MeasuredTemplate\#\_refreshRulerText\</code\>,
\<code\>Wall\#identifyInteriorState,\</code\>
\<code\>DetectionMode\#\_testRange\</code\> and
\<code\>CanvasOcclusionMask\#\_identifyOccludedTiles\</code\> if your
module or system overrides them as well, there could be conflicts.

If you wish to Override or Wrap the overrides you can do so in the
\<code\>levelsInit(levelsConfig)\</code\> hook.

## Other

### Submodules

#### [Automatic Cover Calculator](Automatic_Cover_Calculator 'wikilink')

#### [Depth Blur](Depth_Blur 'wikilink')

#### [Volumetric Templates](Volumetric_Templates 'wikilink')

### Tutorials

Levels 3.0 Tutorial

### V9 to V10

#### Changes

- Polygons and holes are deprecated
  - Levels will now automatically handle visibility based on the
    tile transparency. You can leave old holes in your maps, they
    simply won't do anything.
- [Better Roofs](Better_Roofs 'wikilink') is no longer a required
  dependency
- Light masking is now better but the [Perfect
  Vision](https://foundryvtt.com/packages/perfect-vision) module is
  highly reccomended.
- New \<code\>Allow Sight\</code\> option for tiles. If enabled on a
  tile, the tile will not block sight.
- New \<code\>Background Elevation\</code\> option in scene
  configuration. The background is now a Levels entity with a default
  elevation of 0.
  - This means you can now go under the background.
- New \<code\>Weather Elevation\</code\> option in scene settings.
  Allows for changing the elevation of weather effects.
- UI Revamp
  - Scene controls no longer have buttons
  - UI now has all the required buttons
  - Bug button removed
- Top Elevation Collision
  - Tiles will now only perform collision checks at their bottom
    elevation

#### Migration

- Tiles placed as overhead tiles inside Levels (aka tree icon) from V9
  will now render on the floor.
  - A macro is included to fix them, but you will need to select
    them and select the level they belong to. No automatic migration
    is possible for this issue.

</text>

`     `<sha1>`tpawgw1j33r7s4eeqehipnbjs8x82gr`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Wall Height

</title>

`   `<ns>`0`</ns>  
`   `<id>`34`</id>  
`   `<revision>  
`     `<id>`182`</id>  
`     `<parentid>`181`</parentid>  
`     `<timestamp>`2022-07-19T11:46:32Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<minor/>  
`     `<origin>`182`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="6277" sha1="6aclm8xsf22lixags24wtvto1mbvvbm" xml:space="preserve">`Wall Height is a module that allows setting vertical heights to walls. It allows tokens to look over or under walls and to move over or under them according to relative heights as well.`

## Basics

### Required Modules

- [libWrapper](https://github.com/ruipin/fvtt-lib-wrapper)

### Settings

![The scene setting for Wall Height](Scene_Config_Wall_Height.png 'The scene setting for Wall Height') \<code\>Enable Wall Height for
Scene\</code\> in scene settings is enabled by default. If you wish to
disable it, it can be done in scene settings. However, this will mean
Wall Height's features cannot be used in the scene.

### Tokens

![Token_Height_Adjustment.gif](Token_Height_Adjustment.gif 'Token_Height_Adjustment.gif') Tokens are able to see over walls which
are below them in elevation. Likewise, tokens cannot see through walls
that are higher than them in.

To change a token's elevation, right-click the token. You will see an
input box in the top left of the token HUD. This is the token's
elevation. Modify it by selecting the box and entering the desired
elevation for the token.

#### Token Height

![Token height input in token settings](Token_Height_Setting.png 'Token height input in token settings') The height of a token, which is
different than the elevation of it. It represents how tall a token is
and is used in sight calculation.

To modify the height of a specific token, go to token settings and
change its value. All non-0 values will override the default settings
for the token.

\<code\>Automatic Token Height\</code\> and \<code\>Default Token
Height\</code\> in module settings determine the default for all tokens.

### Walls

![The wall configuration menu](Wall_Config_Menu.png 'The wall configuration menu') Walls can be assigned a top elevation and
a bottom elevation, representing the highest and lowest point of the
wall respectively.

Their values can be edited in the wall configuration menu. To access the
wall configuration menu, double click the wall you wish to modify.

You will now see the Wall Height section at the bottom of the wall
configuration menu. There are two inputs available: \<code\>Wall Height
(Top)\</code\> and \<code\>Wall Height (Bottom)\</code\>. The default
values are \<code\>Infinity\</code\> and \<code\>-Infinity\</code\>
respectively.

## Settings

### Enable Tooltip

![The wall height tooltip](Wall_Height_Tooltip.png 'The wall height tooltip') The tooltip will display when a wall is
hovered, showing its lowest and highest elevation.

### Display Height on Walls

![Display Height on Walls|115x115px](Wall_Height_Display_Value.png 'Display Height on Walls|115x115px') While enabled, displays the
elevation values of a wall on the wall itself.

### Vaulting

Allows for tokens to move over walls at a lower elevation than their
height.

#### Example

Imagine a token at 0 elevation, with a token height of 5, and a 0, 3
Wall

- **Vaulting Enabled**: The movement of the token is not blocked
  because with a height of 5 the token can see over the wall.
- **Vaulting Disabled**: The movement of the token is blocked because
  its elevation (or its feet if you will) is at 0 and the wall blocks
  movement at 0 elevation.

### Automatic Token Height

Calculates the token's height by via token size and scale.

#### Example

A 1x1 token on a 5ft grid would be 5ft tall, a 2x2 token would be 10ft,
and a 1x1 token with a 0.75 scale would be 3.75 ft.

### Default Token Height

The default height of all tokens. Default height is 6. This value is
only used if \<code\>Automatic Token Height\</code\> is disabled.

### Enable Constrained by Elevation Globally

Area of effect sources will be constrained by walls corresponding the
elevation the source instead of the elevation of the controlled token
while enabled.

### Migrate Wall-Height Data On Startup

Migrates wall-height data from the old wall-height data (pre-4.0)
structure to the new one (4.0+) for users migrating from older versions.

This is only necessary once but you can enable this settings and refresh
the page if you need to run it again.

## Developers

### Elevation Helpers

To avoid data duplication, Wall Height uses a data path belonging to the
[Levels](Levels 'wikilink') module to store it's elevation. If
[Levels](Levels 'wikilink') is not enabled you can use these helpers to
read and set the elevation of a sound or light
document.\<syntaxhighlight lang="js"\>
WallHeight.setSourceElevationTop(document, value)
WallHeight.getSourceElevationTop(document)

WallHeight.setSourceElevationBottom(document, value)
WallHeight.getSourceElevationBottom(document) \</syntaxhighlight\>Or, if
you want to set/get both at the same time:\<syntaxhighlight lang="js"\>
WallHeight.setSourceElevationBounds(document, bottom, top)
WallHeight.getSourceElevationBounds(document) \</syntaxhighlight\>

## Other

### Migration to 4.0

Data structures were rewritten in version 4.0 of Wall Height. Scenes and
other entities from pre-4.0 Wall Height require migration.

During the first launch of Wall Height v4.0+, the module will auto
migrate the data on all your scenes and compendiums (this includes token
attacher data).

If you need to migrate the data again, you can always do so by enabling
the setting in the module settings and refreshing. Macros are also
included to run migrations if needed.

#### Content Creator Maps and Prefabs

To manually migrate content with the old data structure:

1.  Enable the modules that you wish to migrate (e.g. Baileywiki Maps
    Towns )
2.  Unlock **all** the actor compendiums containing Token Attacher
    Prefabs
3.  In the Wall Height Macro compendium \<code\>Wall Height
    Macros\</code\> run the \<code\>Wall Height - Migrate
    Everything\</code\> macro
4.  In the Token Attacher Macro compendium \<code\>Example
    Macros\</code\> run \<code\>(TA) Migrate Actors for Wall
    Height\</code\> and \<code\>(TA) Migrate Compendiums for Wall
    Height\</code\> macros
5.  It is now migrated to the new data structure

### Modules

Wall Height is very likely to incompatible with modules which modify
token vision.

#### Compatible

- Perfect Vision

## Credits

- Cole Schultz (cole\#9640) for the original implementation of the
  module
- Erithtotl (Erithtotl\#5139) for maintaining the module
- dev7355608 (EBER\#7243) for help on the 4.0 update

## External

- [Github Page](https://github.com/theripper93/wall-height)

</text>

`     `<sha1>`6aclm8xsf22lixags24wtvto1mbvvbm`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Better Roofs

</title>

`   `<ns>`0`</ns>  
`   `<id>`41`</id>  
`   `<revision>  
`     `<id>`633`</id>  
`     `<parentid>`632`</parentid>  
`     `<timestamp>`2022-10-08T18:24:40Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<comment>`/* Reveal in Fog */`</comment>  
`     `<origin>`633`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="2313" sha1="cbg8h5hqca7n5igvax46elyy4o5mggs" xml:space="preserve">**` Betters`` 
 ``Roofs `**` is a module for enhancing Foundry's overhead tile functionality.`

## Required Modules

- [libWrapper](https://foundryvtt.com/packages/lib-wrapper)

## Features

### Reveal in Fog

When this option is enabled, the full tile will be revealed in the Fog
of War and display as "explored". Keep in mind that this settings works
of the vision radius of the token, if the token has no vision radius the
roof will not show. This features uses the image itself for detection,
so if your roof tile is completely enclosed in walls, the roof will not
be revealed. In the same way, if a roof is illuminated by a light it
will not be revealed.

Note: If you are using \<code\>Levels\</code\>, the \<code\>Top\</code\>
of the tile needs to be set to \<code\>Infinity\</code\> for the tile to
count as a roof (**an this feature to work**)\<syntaxhighlight
lang="javascript"\> Due to V10 Core Changes, the Revealed roof (while
still visible) will look darkened compared to V9.
\</syntaxhighlight\>![Overhead Tile
Settings](Overhead_Tile_Settings_Better_Roofs.png 'Overhead Tile Settings')

### Occlusion ID

This id is used to create "groups" of tiles, imagine it as a tag, it can
be any text you wish, such as "house-1-canopy"

### Occlusion Links

With Occlusion Link you can link the occlusion state of tiles.

A tile marked as Occlusion Link Source will set all the tiles with
matching Occlusion Link ID to its occluded state

For example, let's say you have trees that are overlapping with the roof
of a building, when you are inside the building and the roof is occluded
(not visible) you don't want the trees to be visible inside the house.
Simply assign the same occlusion link id to the trees and the roof, then
set the roof as occlusion link source. When the roof is occluded, the
trees outside will disappear as well. Keep in mind that if you were to
enable Occlusion link source on the trees as well, going under one tree
will make all trees and the roof occluded.

### Occlusion Radius

This token setting will determine the size of the revealed radius when a
token is under a tile with "Radial" occlusion mode.![A screenshot of
Occlusion Radius settings](Occlusion_Radius.png 'A screenshot of Occlusion Radius settings')

## External Links

- [Github](https://github.com/theripper93/Better-Roofs/)

</text>

`     `<sha1>`cbg8h5hqca7n5igvax46elyy4o5mggs`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Argon Combat HUD

</title>

`   `<ns>`0`</ns>  
`   `<id>`74`</id>  
`   `<revision>  
`     `<id>`327`</id>  
`     `<parentid>`325`</parentid>  
`     `<timestamp>`2022-09-03T14:46:10Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`327`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="3508" sha1="0di8mhl4e4jmq7l4ald7vh8kc329qq7" xml:space="preserve">![`Argon`` 
 ``Combat``   ``HUD`](Argon_main_hud.png 'Argon Combat HUD')`A Solasta inspired HUD to make your games easier for your players and for teaching new players without a hitch. It is only D&D 5e compatible. `

## Basics

### Opening the HUD

![Spells Panel](Hudspells.png 'Spells Panel') To open the HUD, click the
crossed swords icon in the token controls (top left buttons) or click
the same button in the token hud (right click on a token). A macro is
also included to toggle the hud.

### Spells

Expanding the spells panel will show you how many maximum and remaining
spell slots you have for each level. You can customize visibility of
prepared spells in the module settings. ![Action
Tracking](Argonactiontracking.png 'Action Tracking')

### Action Tracking

Argon provides a basic action tracking, there is no option to undo or
manually change the tracking, opening and closing the hud will reset the
action tracking. The action tracking will **not** prevent you from using
actions. ![Weapon Sets](Weapon_Sets.png 'Weapon Sets')
![Tooltips](Argontooltips.png 'Tooltips')

### Save/Skills/Tools

This panel provides easy access to the respective checks and tools.

### Weapon Sets

Above the portrait are 3 sets of 2 boxes. The left boxes represents the
action and the right boxes represents bonus actions.

NPCs will have their sets created automatically. For PCs simply drag &
drop items from the character sheet to the weapon sets boxes.

To remove an item drag it from the weapon sets box to the character
portrait (a trash can will appear). Weapon sets are not limited to
weapons, for example a caster could use it for frequently used cantrips.

By default switching sets will also equip or unequip the items.

### Movement Tracker

A basic movement tracker will track remaining squares of movement during
a round. The tracker will turn yellow when getting to dash and turn red
when it's exceeded (the third red bar could be used for the rogue double
dash as well)

### Tooltips

Tooltips provide useful information on the items, you can change which
tooltips are shown (including no tooltips) in the module settings, these
are client side settings.

## Common Issues

![Saves/Skills/Tools Panel](Saveskilltoolshud.png 'Saves/Skills/Tools Panel') Argon was made for Chrome. If you experience
weird UI issues consider switching browser.

### Portraits not showing

If your image path has parenthesis "(" or ")" the image will fail to
load, this might be true for other special characters as well

## FAQs

### Can you add compatibility for X system?

No, Argon is hardcoded for dnd5e. If you want you can make a fork for a
specific system. You have to include the licence section and credit the
original authors (theripper93, Mouse0270) and include links to our
patreon page\\website (if provided).

### Why is xyz type of item not in the HUD?

We had to make a choice on what to include, anything that's not on those
categories is not included (a 1 minute cast time spell for example, or a
consumable that is used as bonus action). Those items will not be added.
You can use Sets for any item.

### Why the items in the HUD are not updating correctly?

Only a select number of elements are dynamically updated. To manually
update the HUD simply close and reopen the Argon HUD.

## Other

### Credits

UI/UX Design by [mouse0270](https://github.com/mouse0270)

### Licensing

All images used are from
[ttps://game-icons.net/](https://game-icons.net/)

</text>

`     `<sha1>`0di8mhl4e4jmq7l4ald7vh8kc329qq7`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Filepicker+

</title>

`   `<ns>`0`</ns>  
`   `<id>`25`</id>  
`   `<revision>  
`     `<id>`8519`</id>  
`     `<parentid>`401`</parentid>  
`     `<timestamp>`2022-11-05T10:05:16Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`8519`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="2881" sha1="q4arusjxff7l415jggy7vxjjlrvs8fh" xml:space="preserve">`Filepicker but better`

![Filepicker+ Window](Fppwindow.png 'Filepicker+ Window')

## Features

### Previews

- **Image\\Video Previews:** Hovering over an image in the filepicker
  will show a large preview on the top left of the screen. Videos are
  also previewed this way
- **Audio Previews:** Hovering an audio file will play it, you can
  tweak some settings in the module settings (as well as disable this
  feature)
- **3D Previews:** If you have [3D Portraits](3D_Portraits 'wikilink')
  installed, Filepicker+ will preview 3D glb\\gltf files the same way
  as images.

![Apply Button](Fppapply.png 'Apply Button')

### Favourites

Filepicker+ will let you add favourite folders to an easly accessible
list.

### Copy Path

Right clicking a file will copy it's full path in case you need it.

#### Apply Changes

Filepicker plus will add a handy Apply button to Objects configuration
sheets, so that you can apply the changes without closing the window if
needed.

## How to use

### Favourites

![Add Favourite Button](Fppaddfav.png 'Add Favourite Button')

#### Adding a Favourite

To add a Favourite, hover over the folder path on the top of the
Filepicker+ window, an \<code\>Add to Favourites\</code\> button will
appear ![Favourites List](Fppfavlist.png 'Favourites List')

#### Accessing the Favourites

To access your Favourites list simply click on the star icon, you can
then click any of your favourites folders to navigate to that location

#### Removing a Favourite

To remove an item from the Favourites list, click the \<code\>X\</code\>
button on the right of the item.

### Customization

You can customize the size of the Filepicker+ as well as what previews
are enabled in the Module settings ![Sidebar Picker](Sidebarpicker.png 'Sidebar Picker')

## Sidebar Picker

With this feature you can have the Filepicker+ as a sidebar tab, this is
enabled by default and can be disabled in the module settings.

The sidebar picker should have a familiar interface, with the only
difference that the folders are collapsed for extra space. Simply hover
over the folders to expand them.

The sidebar picker lets you do some extra things that the regular
filepicker does not:

### Image as Token

Drag n Dropping an image while on the token layer will create a Token.
The size of the token is determined by the \<code\>Size\</code\> field
(eg, 100 will make the token 1x1, 200 2x2 etc...)

### Sounds

Dropping a sound while on the sound layer will create it on the scene,
The sound will be created with a Diameter equal to the
\<code\>Size\</code\> (in units). Eg. With a asset grid size of 100 the
sound will be created with a 50ft radius.

### File Selection

If you have an input field focused (for example the Image Path field in
the Token Appeareance tab) and you click a file in the Sidebar Picker,
that file will be set into the currently focused input. </text>

`     `<sha1>`q4arusjxff7l415jggy7vxjjlrvs8fh`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Automated Evocations

</title>

`   `<ns>`0`</ns>  
`   `<id>`75`</id>  
`   `<revision>  
`     `<id>`592`</id>  
`     `<parentid>`335`</parentid>  
`     `<timestamp>`2022-09-27T19:53:40Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<comment>`/* Custom and non-SRD spells */`</comment>  
`     `<origin>`592`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="8822" sha1="tsvm59prfmkfhb65lp84dyl7ommtxfn" xml:space="preserve">`A user interface to manage companions with summoning animations and automated summoning for spells`

- The Companion Manager works on all Systems, while the automations
  only work on DnD5e, PF2E. To configure automations on other systems
  check \<code\>Manually invoking the companion manger on spell
  cast\</code\>
- For the summoning to work you need the actors imported in your world
  and your players need world level permission to create tokens. For
  the special spells\\actor you can import eveything from both the
  actor and macro compendiums of Automated Evocations
- While not a Dependency, Advanced Macros is required for the custom
  summons

## How to use

### Companion Manager

![Companion manger button](Aeheaderbtn.png 'Companion manger button')
Open any character sheet, in the header of the window you will see the
companions button ![Companion Manager Window](Companionmanager.png 'Companion Manager Window') Upon opening you will be welcomed by a
window, from here you can drag and drop actor into it to add them.

After adding actor to the window you will have some options:

- To summon click on the actor image, you will get a placement
  croshair, just click where you want to summon the token
- The number field represents how many tokens you will spawn
- The dropdown will let you chose the summoning animation

### Store companions on actor

By default companions are stored per user (so each actor will have the
same summon list).

You can set per actor storage in the module settings if you want each
different actor to have it's own companion list.

### Advanced

If you want a particular actor to have it's own summon list you can use
the included macro to switch the actor from global storage to local (on
the actor). Simply place a linked actor on the scene, select it and run
the macro. Using the other macro to switch it to global again will not
wipe the saved companions so setting it to local at a later date will
restore the previous list.

For more advanced users you can set the flag with the following command
: \<code\>actor.setFlag(AECONSTS.MN,"isLocal", false)\</code\> (set
true\\false to enable disable local storage)

## Custom Macros

The [Advanced
Marco](https://github.com/League-of-Foundry-Developers/fvtt-advanced-macros)
module is required for custom macros.

You can assign custom macros to specific actors

1.  Create a macro with this exact name
    \<code\>AE_Companion_Macro(ActorName)\</code\> eg.
    \<code\>AE_Companion_Macro(Bat)\</code\>, this will get fired any
    time a creature with that name is summoned
2.  Add code for the custom data, in the context of the macro
    \<code\>args\[0\]\</code\> contains the following data:

\<code\>summon\</code\>: the actor that's getting summoned

\<code\>spellLevel\</code\>: the level of the spell that triggered the
summoning

\<code\>duplicates\</code\>: how many creatures are getting summoned

\<code\>assignedActor\</code\>: the actor assigned to the player doing
the summoning (this will be the selected token actor if no assigned
actor is found, this is always the case for GMs)

The macro must return the custom data.

You can use the \<code\>getSummonInfo\</code\> API call
(\<code\>CompanionManager.api.getSummonInfo\</code\>), passing in
\<code\>args\</code\> and the base spell level, to get the following
information automatically calculated for you:

- \<code\>level\</code\>: how many levels above the base spell level
  the spell as cast at
- \<code\>maxHP\</code\>: the actor's max HP
- \<code\>modifier\</code\>: the actor's spellcasting ability modifier
- \<code\>dc\</code\>: the actor's spellcasting DC
- \<code\>attack.ms\</code\>: the melee spell attack bonus of the
  actor
- \<code\>attack.rs\</code\>: the ranged spell attack bonus of the
  actor

Example (Flaming Sphere auto scaling)

Macro name: \<code\>AE_Companion_Macro(Flaming Sphere)\</code\>

`const summon = CompanionManager.api.getSummonInfo(args, 2);`  
`const flamingSphere = {`  
``  sphere: [`${summon.level + 2}d6`, 'fire'],``  
`}`  
`return {`  
`  embedded: {`  
`    Item: {`  
`      "Flaming Sphere": {`  
``        "data.description.value": `Any creature that ends its turn within 5 feet of the sphere, or has the sphere rammed into it, must make a Dexterity saving throw (DC ${summon.dc}). The creature takes ${flamingSphere.sphere[0]} ${flamingSphere.sphere[1]} damage on a failed save, or half as much damage on a successful one.`,``  
`        "data.save.dc": summon.dc,`  
`        "data.damage.parts":[flamingSphere.sphere]`  
`      }`  
`    }`  
`  }`  
`}`

Every time an actor named \<code\>Arcane Hand\</code\> is summoned, the
custom data will be applied

### Supported Spells

To use the included automations you will need to import both the Actor
and the corresponding Macro from Automated Evocation compendiums\!
(these also require the module Advanced Macros for the autoscaling to
work)

The ever expanding list of spells currently includes: All the SRD spells
for dnd5e, if something is missing let me know

### Custom and non-SRD spells

![Custom Bindings Setting](Aecustombindingmenu.png 'Custom Bindings Setting') ![Configure Bindings
Menu](Aeconfigbindmenu.png 'Configure Bindings Menu') To add your custom
spell bindings use the Custom Bindings setting in the module settings.

- Open the \<code\>Configure Custom Bindings\</code\> menu
- Click \<code\>Add Binding\</code\>
- Rename the binding with the name of the spell or feature you want to
  bind by clicking on the name. This is \<code\>Case
  Sensitive\</code\>
- Click the \<code\>Edit\</code\> button
- A new window will open where you can configure this Binding
- Click the \<code\>Add Binding\</code\> button to add a new creature
- Edit the creature name to match the creature. This is \<code\>Case
  Sensitive\</code\>
- Edit the number to summon and the animation.
- Close the windows.

### Custom Animations

To add your own animations, you can merge your own configs to the
default one. Once you built the object you wanna merge, simply save it
to the hidden game setting \<code\>game.settings.set(AECONSTS.MN,
"customanimations", yourData)\</code\>

WARNING: Setting this hidden setting will override any previous value,
so you want to keep a file with all you custom setting and add to it
every time you want to apply it\!

Example:

Adding your animation to the list:

`const customanims = {`  
`  energy2: {`  
`    fn: "light2",`  
`    time: 650,`  
`    name: "Energy 2",`  
`    group: "My Group" //optional`  
`  },`  
`};`

`game.settings.set(AECONSTS.MN, "customanimations", customanims);`

\<code\>fn\</code\>: name of the macro to fire \<code\>time\</code\>:
how long to wait from the animation start before spwaning the token
\<code\>name\</code\>: the displayed name

Example macro:

`const template = args[0]`  
`const tokenData = args[1]`  
`await new Sequence()`  
`.effect()`  
`    .file("modules/automated-evocations/assets/animations/energy_spark_CIRCLE_01.webm")`  
`    .belowTokens()`  
`    .randomRotation()`  
`    .atLocation(template)`  
`    .randomOffset()`  
`    .repeats(6, 50, 25, 75, 60, 20)`  
`    .scale(Math.max(tokenData.width,tokenData.height)*tokenData.scale*0.15)`  
`.wait(500)`  
`.effect()`  
`    .file("modules/automated-evocations/assets/animations/energy_pulse_yellow_CIRCLE.webm")`  
`    .belowTokens()`  
`    .atLocation(template)`  
`    .scale(Math.max(tokenData.width,tokenData.height)*tokenData.scale*0.35)`  
`.play()`

### Manually invoking the companion manger on spell cast

If you are on non DND5E systems you can trigger the companion manager
for specific spells with a macro or the module Item Macro

`new SimpleCompanionManager([`  
`  {`  
`    id: "actorid", //id of the actor to summon, if you have the name use game.actors.getName(name).id`  
`    animation: "animationid",//id of the animation - set to undefined for default`  
`    number: 1,//number of creatures to spawn`  
`  },`  
`  {`  
`    id: "actorid",`  
`    animation: "animationid",`  
`    number: 1,`  
`  }`  
`], spellLevel, actor); //spell level is the spell level of the spell that summons the companions (will be passed to the companion macro), actor is the actor that summons the companions`

## Credits

### PF2E Support

TomChristoffer\#6777

### Jack Kerouac's

The Fire, Air, Lightning, Water, Energy, Magic, Heart, Crescendo, Four
Elements animations assets are from Jack Kerouac's amazing [Animated
Spell Effects:
Cartoon](https://github.com/jackkerouac/animated-spell-effects-cartoon)
module with his permission.

### JB2A

The Chord, Darkness, Ice, Conjuration, and Storm animations assets are
courtesy of JB2A with their permission.

Check out their [patreon](https://www.patreon.com/JB2A) and
[discord](https://discord.gg/A59GAZwB9M) for many more amazing
animations and variations.

### [Sequencer](https://github.com/fantasycalendar/FoundryVTT-Sequencer)

This module is used to play the animations

### [Warpgate](https://github.com/trioderegion/warpgate)

Warpgate is used for spawning.

### [Game Icons](https://game-icons.net/)

Some images used are from Games Icons.

</text>

`     `<sha1>`tsvm59prfmkfhb65lp84dyl7ommtxfn`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Boss Bar

</title>

`   `<ns>`0`</ns>  
`   `<id>`78`</id>  
`   `<revision>  
`     `<id>`339`</id>  
`     `<parentid>`338`</parentid>  
`     `<timestamp>`2022-09-03T14:55:01Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`339`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="597" sha1="pfct46st93q3bbm9f536c9mdkw2gwt8" xml:space="preserve">`Create a Dark Souls-like boss healthbar at top of the screen.`

![Boss bar and button location](Bossbarinterface.png 'Boss bar and button location')

## Activating the Boss Bar

To create the bar simply select one or multiple tokens and click the
button in the token controls.

## Customization

You can customize the Boss Bar position and appearance in the module
settings. You can also use your own custom image.

### Pan to Boss

In the module settings you can also choose if you want the camera to
focus on the boss when you activate the Boss Bar for dramatic effect.

</text>

`     `<sha1>`pfct46st93q3bbm9f536c9mdkw2gwt8`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Combat Booster

</title>

`   `<ns>`0`</ns>  
`   `<id>`81`</id>  
`   `<revision>  
`     `<id>`341`</id>  
`     `<parentid>`340`</parentid>  
`     `<timestamp>`2022-09-03T15:02:08Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<minor/>  
`     `<comment>`/* Credits */`</comment>  
`     `<origin>`341`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="1486" sha1="jf4zxp1noem0d43mxkbddbm2rv34ep3" xml:space="preserve">`Speed up your combat with recent actions, turn markers, and other smaller tweaks. D&D5 only.`

![Recent Actions](Cbrecentactions.png 'Recent Actions')

## Features

### Recent actions

Show the latest used actions, customize, how many, how many columns and
more. ![Turn Marker](Cbturnmarker.png 'Turn Marker')

### Turn Marker

Show a turn marker on the current combatant, customize size,
transparency, rotation - animated webms supported

### Other

#### Body Pile

Pile dead npcs on the top left corner of the canvas or create a token
named "pile" to pile them there.

#### Notifications

Play a sound on a player's turn, customize the volume and display a text
notification.

### Credits

- BlueRunes, tolkienmarker, and italianpride images by Simone
  - \<code\>Simone \[UTC +2\]\#6710\</code\> on discord
- Rune style images by Rin
  - \<code\>rin\#0002\</code\> on Discord
- DoubleSquare, Darkest and darksign images by Wassily
  - \<code\>Wassily\#8035\</code\> on Discord
  - [Discord server](https://discord.gg/A59GAZwB9M)
  - [Patreon](https://www.patreon.com/JB2A)
- BlueCircle image by Jinker
  - \<code\>Jinker\#8073\</code\> on Discord
  - [Patreon](https://www.patreon.com/jinker)
- Red, Yellow and Green circle images by Brimcon
  - \<code\>Brimcon\#1485\</code\> on Discord
- DoubleSquareMuted and PointedCircleMuted by hobolyra
  - \<code\>hobolyra\#0967\</code\> on Discord
- Cycle/oldwest/puzzle/rqhdg-6ypzz/runes.webm files by
  \<code\>cefasheli\</code\>

</text>

`     `<sha1>`jf4zxp1noem0d43mxkbddbm2rv34ep3`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Hurry Up

</title>

`   `<ns>`0`</ns>  
`   `<id>`90`</id>  
`   `<revision>  
`     `<id>`352`</id>  
`     `<parentid>`350`</parentid>  
`     `<timestamp>`2022-09-03T15:11:21Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<minor/>  
`     `<origin>`352`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="1112" sha1="jim4iswsh0d8w00quvf7657ru56ykih" xml:space="preserve">`A simple timer to hurry up your players in combat! Tired of those pesky players taking forever to then just swing a longsword after a 10 minute wait?`

![The Hurry Up! Timer](Hutimer.png 'The Hurry Up! Timer') ![Circle
Style Timer going critical](Hucirclecrit.png 'Circle Style Timer going critical') ![Sand style timer](Husand.png 'Sand style timer')

## Features

### Auto Start

The timer automatically starts when it's the turn of a token owned by a
player.

### Critical

Chose the duration of the timer and when it goes critical, at this point
the progress bar will turn red and start blinking.

### Sounds

Play a looping sound when the timer goes critical (defaults to ticking)
and a sound when the time is over.

### Go Next

Automatically advance the turn tracker when a timer ends.

### Styles

Choose between 3 Styles of timers.

### Custom Timer

You can create a timer out of combat with this simple script macro
\<code\>CombatTimer.Create(seconds)\</code\> with the desired amount of
seconds.

## Credits

The sounds included are from
[GameAudioGDC](https://sonniss.com/gameaudiogdc).

</text>

`     `<sha1>`jim4iswsh0d8w00quvf7657ru56ykih`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Maxwell's Manual of Malicious Maladies

</title>

`   `<ns>`0`</ns>  
`   `<id>`94`</id>  
`   `<revision>  
`     `<id>`367`</id>  
`     `<parentid>`356`</parentid>  
`     `<timestamp>`2022-09-03T15:22:10Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<minor/>  
`     `<origin>`367`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="2539" sha1="b8c0twsjz2phdwrfhtj2pepjvbv8iet" xml:space="preserve">`Maxwell's Manual of Malicious Maladies (MMMM) contains 208 lingering injuries based on the 13 different damage types. All with different severities, durations, and consequences. Based on the titular `[` Maxwell's`` 
 ``Manual``   ``of``   ``Malicious`` 
 ``Maladies `](https://www.reddit.com/r/DnDBehindTheScreen/comments/l4ags0/maxwells_manual_of_malicious_maladies_a_34_page/)`.`

The module contains compendiums of the injuries, effects, items, and
tables for rolling. Rolling for injuries can be automated through
settings, chat commands, and/or
[MidiQoL](https://foundryvtt.com/packages/midi-qol). ![Example Injury
with Virus button location](Mmminjury.png 'Example Injury with Virus button location')

## Basics

### Compendiums

Items and journals with the full content of the original homebrew are
available in compendiums. Injury tables are accessible and importable in
the tables compendium.

### Chat Commands

#### Rolling Injuries

- \<code\>/mmmm\</code\> will bring up a dialog with all the tables
- Specify a damage type to auto roll that table (e.g. \<code\>/mmmm
  radiant\</code\>)

#### Adding Injuries

The GM can click on the Red Virus button in the name of the injury (in
chat) to add it as an item to the target's character sheet.

Active effects will be added to items with the appropriate duration.
Note that these effects just serve as a reminder of the injury.

### Injury Automation

Injuries can be automated as well. Some will require
[MidiQoL](https://foundryvtt.com/packages/midi-qol).

MMMM can automatically prompt for injuries on:

- Critically failed saving throw
  ([**MidiQoL**](https://foundryvtt.com/packages/midi-qol) required)
- Critical hit
  ([**MidiQoL**](https://foundryvtt.com/packages/midi-qol) required)
- More than half hp of damage
- HP reaches 0

## Customization

This module will search tables by name, if the table is not found in
your sidebar the one in the compendium will be used.

You can import the tables and modify the injuries as you like, as long
as the name of the table remains the same.

## Credit

Based on the [original
homebrew](https://www.reddit.com/r/DnDBehindTheScreen/comments/l4ags0/maxwells_manual_of_malicious_maladies_a_34_page/)
by
[u/almostlucid](https://www.reddit.com/r/DnDBehindTheScreen/comments/l4ags0/maxwells_manual_of_malicious_maladies_a_34_page/).
Reading it (from the included journal entries or from the original PDF)
is highly suggested as it includes extra rules for healing injuries\!

Special thanks to ButtersTheNinja for the help in setting up the
tables\!

</text>

`     `<sha1>`b8c0twsjz2phdwrfhtj2pepjvbv8iet`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Module Hub

</title>

`   `<ns>`0`</ns>  
`   `<id>`95`</id>  
`   `<revision>  
`     `<id>`157741`</id>  
`     `<parentid>`359`</parentid>  
`     `<timestamp>`2022-11-29T15:24:11Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`157741`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="1601" sha1="a3ngek5znposuz2w38a29d15b293uxg" xml:space="preserve">`Automatically check for my premium modules updates and receive notifications for Critical Updates on my Free Modules and new Free and Premium Releases.`

Note that new releases are rare and you won't get notified about premium
releases more than 1 time per month (most likely less) You can check out
my website if you want to view my premium modules offering -
\<nowiki\>[https://theripper93.com/\</nowiki\>](https://theripper93.com/%3C/nowiki%3E);

## What is it for?

If you are not a patreon supporter you get notified by module updates
that can potentially save your impending game from disaster (because of
my mistakes ehm..) since the module will notify immediately when you
enter your foundry world. If you are a patreon supporter it will save
you the effort of having to check the discord for new updates as well\!
![The Module Hub allerting you of a critical update](Phnotif.png 'The Module Hub allerting you of a critical update')

## Notifications

Receive critical notifications on my free and paid modules and new
Premium Releases.

## Downloading

![The Module Hub Settings](Phsettings.png 'The Module Hub Settings')
Whenever an update for a premium module is detected you will be notified
about it and prompted with a download link that will bring you to the
Patreon post.

## Options

By default the module will check on startup and will also check for
modules that are installed but not enabled, you can change these options
in the module settings ![Documentation Button](Hubdocs.png 'Documentation Button')

## Documentation

The Hub will also add a button next to the module title in the configure
settings menu to quickly access the documentation\! </text>

`     `<sha1>`a3ngek5znposuz2w38a29d15b293uxg`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Patrol

</title>

`   `<ns>`0`</ns>  
`   `<id>`96`</id>  
`   `<revision>  
`     `<id>`378`</id>  
`     `<parentid>`373`</parentid>  
`     `<timestamp>`2022-09-03T15:38:33Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`378`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="4476" sha1="iqkit2iux5u4rxjuchhtuxm97nvyci9" xml:space="preserve">`Automatic Patrol Routes for NPCs.`

## Basics

![Multi Path Patrol](Patrolmulti.gif 'Multi Path Patrol')

### Patrols

#### Enable Random Patrol

![Single Path Patrol](Single_Path_Patrol.gif 'Single Path Patrol') If
enabled the token will patrol randomly. This option is mutually
exclusive to "Enable Path patrol"

#### Spot Player Characters

If enabled the token will spot player characters, pausing the game and
panning on the token when spotting. Only works for Random Patrol

Support for this feature outside dnd5e is not guaranteed. ![Patrol
Toggle](Patrol_Toggle.png 'Patrol Toggle')

#### Enable Path Patrol

If enabled the token will follow the given path/paths. This option is
mutually exclusive to "Enable Random patrol".

#### Use Multiple paths

If enabled the token will use multiple paths.

#### Patrol Path

The name(s) of the path(s) the token will follow if patrolling paths.

#### Path Node

The node of the path at which the token is currently on. This setting
can be changed to start tokens mid-way through paths. ![Patrol Token
Config](Patrol_Token_Config.png 'Patrol Token Config')

#### Alerting

When a player is spotted a question mark will appear on top of the enemy
token wich will then try to chase the intruder.

After a set time has passed the token will be spotted. You can configure
sad time in the module settings.

If the alert time is set to 0 the character will be immediately spotted.

#### Custom Patrols

You can have a token patrol a specific area by drawing a Polygon or
Rectangle (other shapes are not supported) and in its's text property
call it "Patrol" (upper case P). Any token in that area will patrol only
inside that area

You can also draw a Polygon or Rectangle, and in it's text property
include the word "Path" (upper case P) to select the drawing as a path
for patrolling tokens. You may add to the word, but it must include the
word "Path" somewhere. (eg. GuardPathA, GuardPathB). A token set to
patrol a path will reset back to the begginning of the path once it has
finished unless "Use Multiple Paths" is checked.

The speed for tokens patrolling paths will be determined by the "Patrol
speed for paths(ms)" module setting. This setting defines how long it
will take every token patrolling a path to arrive at the next node.
Thus, the actual animation speed will depend on the distance from the
current node to the next one. This means that tokens can "speed up" mid
path by drawing longer nodes or "slow down" by drawing shorter nodes.

Please ensure that only one of the patrol types is checked in the token
config.

#### Using Multiple Paths

If the "Use Multiple Paths" checkbox is enabled in the token config, You
can draw multiple paths with the same name. The token will randomly
select one of the other paths with the same name when it has finished
patrolling its current path. It will give preference to paths that are
not currently being patrolled by any tokens.

It is often a good idea to hit the "Remap paths and Reset Nodes" button
after making any changes to any paths or patrolling tokens. This will
reset the token's path node to either 0, or to a random path and node
within the group if the "Reset to Random Node" is checked.

## Auto Rotate

Patrol is compatible with the Auto Rotate module. Combine them for auto
rotating patrols\!

## Issues

### Patrol is not working\!

If patrol is not working, check this steps before opening an issue:

- If a token is selected it will stop patroling
- If you create a combat encounter the patrol will stop
- If you have the game paused, the patrol will stop
- If you haven't toggled the patrol button the patrol will not start
- If path patrol mode tokens will not spot players

### Integration

You can use Patrol's hooks to enable additional features. Use the hooks:

- "prePatrolSpotted", (spotter, spotted)
- "patrolSpotted", (spotter, spotted)
- "prePatrolAlerted", (spotter, spotted)
- "patrolAlerted", (spotter, spotted)

Example:

`Hooks.on("prePatrolSpotted", (spotter, spotted) => {`  
`  // Only actually spotted if the Spotter has a higher passive perception than the target's DC`  
`  return spotter.passivePerception >= spotted.passiveDC;`  
`});`

`Hooks.on("patrolSpotted", (spotter, spotted) => {`  
`  // Start a new combat if needed, then add the spotter to the spotted with a surprise round`  
`});`

## Tutorials

### [Video Tutorial by _Check the Rulebook_](https://youtu.be/Izx441zjtBs)

</text>

`     `<sha1>`iqkit2iux5u4rxjuchhtuxm97nvyci9`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Smart Target

</title>

`   `<ns>`0`</ns>  
`   `<id>`97`</id>  
`   `<revision>  
`     `<id>`361`</id>  
`     `<parentid>`345`</parentid>  
`     `<timestamp>`2022-09-03T15:20:51Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<minor/>  
`     `<origin>`361`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="2842" sha1="ch4yopbmnz8d2mhb2pfb5bfszluwhbr" xml:space="preserve">`Enhancements for the targeting feature   `

![Alternate Targeting Indicators](Stpips.png 'Alternate Targeting Indicators')

## Features

1.  Target with Alt+Click
2.  For players, target by just left clicking a non-owned token
    (Alt+Click to target owned token)
3.  Target all tokens in a template by Alt+Clicking the template (shift
    modifier and standard\\sticky behaviour apply)
4.  Show portraits instead of colored pips to indicate targets,
    positioning\\offset and size of the icons can be configured in the
    module settings
5.  Customize color\\shape of the targeting reticule

![Custom Targeting Reticules](Streticules.png 'Custom Targeting Reticules')

## Settings

- Targeting Mode:
  - Default: Default foundry behaviour.
  - Alt-click: Target tokens by pressing Alt+Click, add Shift to
    target multiple.
  - Always Target: Clicking on non-owned tokens automatically
    targets them"
- Release Behaviour: This setting determines how refresh target
  behaves when clicking multiple tokens.
  - 'Sticky' mode will target each clicked token without
    un-targeting anything, and you must click a token again to
    un-target it.
  - 'Standard' mode more closely matches the standard foundry
    behaviour where all previous tokens are automatically
    un-targeted when clicking a new token, and you must hold Shift
    while clicking in order to target multiple tokens.
- Show indicator portraits instead of colors: Uses avatar for GM,
  defaults to Token for players if no avatar is found for the assigned
  actor (requires refresh)
- Use Tokens instead of Avatars: Use tokens instead of avatars for
  players target indicators
- Gm image: The image to use on indicator portraits for the GM
  - Player Avatar
  - Token Portrait
  - Token Image
- Keep target indicators inside the token: Move the target indicators
  in a way that they remain inside the token border
- Target Icon Image Scale: Set the scale for the image used by the
  target icons (default: 1)
- Target Image Y Offset: Add a flat offset to the image in pixels
  (default: 0)
- Target Image X Offset: Add a flat offset to the image in pixels
  (default: 0)
- Target Icon Size: Set the size for the target icon in pixels
  (default: 12)
- Target Icon Offset: Set the distance between icons in pixels
  (default: 16)
- Border Thickness: Set the thickness of the border in pixels
  (default: 2)
- Bring Targeting Arrows Closer Together: Bring the targeting arrows
  closer together so that they are inside the token frame
- Targeting Arrows Color: Hex color for the targeting arrows (default:
  \#ff9829)
- Target indicator: Select the indicator for a targeted token
  - Default Foundry Indicator
  - CrossHair 1
  - CrossHair 2
  - BullsEye 1
  - BullsEye 2
  - Better Target
- Use player color for target indicator: Use player color for target
  indicator

## Credit

- Better Target thanks to sPOiDar
- Target Enhancements thanks to eadorin

</text>

`     `<sha1>`ch4yopbmnz8d2mhb2pfb5bfszluwhbr`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Splatter

</title>

`   `<ns>`0`</ns>  
`   `<id>`98`</id>  
`   `<revision>  
`     `<id>`1474`</id>  
`     `<parentid>`363`</parentid>  
`     `<timestamp>`2022-10-25T11:59:51Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<comment>`/* NOTICE: FEATURE REQUESTS */`</comment>  
`     `<origin>`1474`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="3757" sha1="ef2fcjk8zyvqd5i2dkdeqgyt1wok6pc" xml:space="preserve">`Add blood and gore to your games`

# V10 Data Path update

![Token Bleeding from a hit](Splatteronhit.png 'Token Bleeding from a hit') When updating to V10 you will probably need
to update your datapaths, this basically means removing any
\<code\>data\</code\> from the path, for example for dnd5e it would be
\<code\>attributes.hp.value\</code\> as you can see the
\<code\>data.\</code\> is no longer in the path.

## ATTENTION\!

On some systems the \<code\>Creature Type\</code\> and \<code\>Custom
Creature Type\</code\> options might cause Splatter to not work
correctly, simply go into the module settings for Splatter and empty
both those settings leaving them blank. ![Creature Type Blood Color
Macro](Splatterbloodsheet.png 'Creature Type Blood Color Macro')

## CONFIGURATIONS

If you manually added the data paths for your System to splatter, please
send in a PR for
[config.js](https://github.com/theripper93/Splatter/blob/main/scripts/config.js)

For information on how to configure Splatter for your system please read
[this](https://github.com/theripper93/Splatter/blob/main/CONFIGURATIONS.MD)

You are also free to send in PRs with configurations for missing
systems\!

## Add blood and gore to your games

Give that extra touch to your game, compatible with most game systems
(minor configuration required)

### Blood on hit

The bigger the hit, the more the blood. Configure manual blood scale,
violence level, and blood trails

### Blood by creature type

Set up a configuration for blood color and creature type, by default one
for dnd5e is included ![Customize Blood Color per
token](Splattertokenblood.png 'Customize Blood Color per token') ![Data
Path settings](Splatterdatapath.png 'Data Path settings')

### Per Token Blood color

Set the blood color differently for each token, if you want a token to
not bleed, you can set the color to transparent\!

### Custom Data Path

Set the data path of relevant data to adjust Splatter for your game
system

### 3D Canvas Integration

If you use 3D Canvas, Splatter will make tokens bleed also in 3D\!

## Manually Configuring Splatter for your System

Some systems are supported out of the box, others will require manual
configuration of the data paths, follow these instructions to configure
splatter for your system.

- Place a Token on a scene, any scene and any token will do
- Select the token
- Open the Console using the F12 Key
- On the Top Tabs, make sure you are in the Console Tab
- In the console, type \<code\>\_token.actor.system\</code\> and press
  Enter
- You will see some data displayed, click the Expand Arrow to see all
  the data
- Browse the data tree using the Expand arrows to locate the data path
  of your Current\\Max hp.
- Once you have located the data path, right click on the name of the
  property and click "Copy Property Path"
- Paste it in the Splatter Module settings appropriate field.

## NOTICE: FEATURE REQUESTS

I know that this implementation doesen't have all the features BnG had
BUT i feel like it has enough customization for most people. Because the
point of this module is to keep it streamlined to avoid making it
impossible to mantain no feature requests will be implemented. Unless is
something that all the users of this module would greatly benfit from,
please refrain from asking. Thanks for your understanding :)

## FAQ

Blood and guts exists, why make a new one?: Blood and guts was a massive
project and while it was amazing, with a lot of code comes a lot of
issues and it's extremely difficult to mantain and fix. This
implementation is simpler and more streamlined, and while it has less
features, it will be much easier to mantain or adopt if it ever gets
abandoned

## Licensing

The included Splatter font was created by Codin Repsh

Original concept by edzillion

</text>

`     `<sha1>`ef2fcjk8zyvqd5i2dkdeqgyt1wok6pc`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Stochastic Fantastic

</title>

`   `<ns>`0`</ns>  
`   `<id>`99`</id>  
`   `<revision>  
`     `<id>`364`</id>  
`     `<parentid>`355`</parentid>  
`     `<timestamp>`2022-09-03T15:21:16Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<minor/>  
`     `<origin>`364`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="226" sha1="3gymivny87g7wfnwclgst4dtfsouk7u" xml:space="preserve">`This project has been taken over by `[` Eric`` 
 ``Triebe `](https://github.com/etriebe)` (thetreat#9487), please check his `[` GitHub`` 
 ``page `](https://github.com/etriebe/dnd-randomizer)` for help or issues`

</text>

`     `<sha1>`3gymivny87g7wfnwclgst4dtfsouk7u`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Token Z

</title>

`   `<ns>`0`</ns>  
`   `<id>`101`</id>  
`   `<revision>  
`     `<id>`372`</id>  
`     `<parentid>`366`</parentid>  
`     `<timestamp>`2022-09-03T15:28:23Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`372`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="536" sha1="oekgliabo6e3gjva3gfhr82fku1u5g1" xml:space="preserve">` `

Easly manage the Z-Index of tokens ![Z-Index Field](Tzindex.png 'Z-Index Field')

## Auto Sorting:

Token-Z is opinionated and will auto sort based on some parameters:

- Elevation: With a maximum priority
- Size: with a weight of -1 (this means a token that is 2x2 will have
  a -4 zIndex to it)
- Selected: with a weight of 1 (a selected token will have a +1 zIndex
  applied)
- Defeated: with a weight of -1000

## Manual Sorting:

Simply input a z-index value in the new field in the token
config.</text>

`     `<sha1>`oekgliabo6e3gjva3gfhr82fku1u5g1`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Config Presets

</title>

`   `<ns>`0`</ns>  
`   `<id>`103`</id>  
`   `<revision>  
`     `<id>`396`</id>  
`     `<parentid>`368`</parentid>  
`     `<timestamp>`2022-09-06T12:41:03Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`396`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="2941" sha1="famlhy8owe4elikafwrbeopd23li5rb" xml:space="preserve">`Save presets for lights, walls, drawings, and more! Keeps relevant module information and can apply presets to existing objects. The ultimate map making tool.`

![Config Presets button](Cpopen.png 'Config Presets button')

## How to use

### Opening the Config Presets window

To open the Config Presets window, simply click on it's icon in the
scene controls. The list of presets is filtered based on the layer you
are on, for example if you are on the Walls layer, only walls presets
will be shown.

### Creating a preset

![Config Presets Window](Cpwindow.png 'Config Presets Window') To create
a preset, first select an object (for example a wall) then click on the
\<code\>+\</code\> button in the config presets window header.

Note that some placeables cannot be selected, for this reason you will
not be able to select (for example) lights, to do so, it's reccomended
to install the module [Select Tool
Everywhere](https://foundryvtt.com/packages/select-tool-everywhere)

### Editing a preset

After creating a preset, it will appear on the list, from here you can
edit the preset.

#### Editing the name

By default, the name of a preset will be the Id of the object used to
create the preset, to change it, simply right click on the name and it
will become editable. After editing press Enter or Right Click to
confirm your changes.

#### Duplicating

The first icon in the preset will let you duplicate that preset.
![Editing a Preset](Cppresetedit.png 'Editing a Preset')

#### Editing the data of the Preset

If you don't want to keep all the data from that preset (for example you
might only want the flags from the wall, that contain height data from
wall height) you can remove unecessary data by clicking the edit button
located left of the delete button. By clicking the checked icon near to
each data property you can remove it.

Note that by default config presets will exclude some properties from
the presets, such as position, radius and other. If you wish to keep all
properties and manually remove the ones you prefer, you can change this
behaviour in the module settings.

#### Deleting

To remove a preset, simply click the trash can icon. ![Selecting a
Preset](Cpselectpreset.png 'Selecting a Preset')

### Using a preset

To use a preset, first select it by clicking on it, it's background will
turn cyan. Once a preset is selected you have two options:

#### Creating new Objects

With a preset selected, creating new objects will apply the properties
of the preset to that object. For example if your preset is a green
light with an animation, creating lights will make them green with that
animation but it will keep the size of the light as you placed it.

#### Apply a preset to selected objects

With a preset selected and one or more objects selected, click the
button to the Right of the \<code\>+\</code\> button to apply the
selected preset to all selected objects. </text>

`     `<sha1>`famlhy8owe4elikafwrbeopd23li5rb`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Mastercrafted

</title>

`   `<ns>`0`</ns>  
`   `<id>`67`</id>  
`   `<revision>  
`     `<id>`1615`</id>  
`     `<parentid>`1614`</parentid>  
`     `<timestamp>`2022-10-26T11:23:34Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`1615`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="4373" sha1="874bkru6p3kgs2431cgo6cvdv8i03t2" xml:space="preserve">`=== Premade Content ===`

Want to start with some already made recipes and gathering points?
Download the DnD5e [Potion Crafting &
Gathering](https://github.com/action-jay/potion-crafting-gathering)
module by [Action_Jay](http://www.actionjay.com/) using [this
ManifestURL](https://github.com/action-jay/potion-crafting-gathering/releases/latest/download/module.json)\!
The module leverages both the [Mastercrafted](Mastercrafted 'wikilink')
and [Gatherer](Gatherer 'wikilink') modules, make sure you install
both\!

### Creating and Editing Recipes

![The Recipe Manager button located in the Items Sidebar
Tab](Recipemanagerbtn.png 'The Recipe Manager button located in the Items Sidebar Tab') ![The Main
Mastercrafted Window](Mastercraftedwindowedit.png 'The Main Mastercrafted Window')

#### Creating a new Book and Recipe

- To open the Recipe Manager, click the button located in the Items
  Sidebar Tab
- Use the "Add Recipe Book" button to create a new book, configure as
  needed
- Right click a book to add a recipe, left click a book to expand it
- Click the newly created recipe to open it

#### Configuring a recipe

- Drag and Drop ingredients in the **+** panels. Dragging multiple
  ingredients in the same panel will let the player chose which one to
  use from that panel for the crafting
- Having multiple ingredient panels means that at least one item from
  each panel will be required for the crafting.
- You can edit the required quantity in on the top right of the
  ingredient
- Left click an ingridient to inspect, right click to remove it from
  the recipe

![The Recipe panel in Edit Mode](Recipeedit.png 'The Recipe panel in Edit Mode') ![Crafting Button in the Actor Sheet
header](Craftingbutton.png 'Crafting Button in the Actor Sheet header')

#### Creating a crafting result

- Drag and drop items in the result **+** panels
- Having multiple items in a single result panel will award the player
  with all the items when crafting
- If you have multiple result panels, the player will be able to chose
  which panel will be the result of the crafting
- Left click a result to inspect, right click to remove it from the
  recipe

#### Importing\\Exporting

- Right click a recipe or book to export it
- Right click a recipe or book to import from a json and overwrite it

### Community Recipe Books

If you want to share or download Books made by the community, you can do
so here:

[Mastercrafted: Community
Books](Mastercrafted:_Community_Books 'wikilink')

### Crafting

- Open an Actor Sheet
- Click the Crafting button in the window header
- Select a Recipe (Keep in mind that as a GM you will always see all
  recipes, make sure you give the correct permissions to players in
  the book/recipe configuration)
- Left click to inspect ingredients\\results
- Right click to select a different ingredient from an ingredient
  panel
- Left click a result panel to select the desired result
- Click the Craft button on the top right to craft, hold
  \<code\>ctrl\</code\> to skip confirmation

![The crafting window. Ingredients are Red since the Actor does not own
them.|203x203px](Craftwindownoitem.png 'The crafting window. Ingredients are Red since the Actor does not own them.|203x203px')

### Advanced: Adding conditions to crafting

Adding conditions will allow you to add custom checks to crafting, for
example making a strength check in order to make an item (in addition to
other conditions). We will use the DND5E System in this example but it
will work with any system, refer to your system discord channel or macro
polo to know the correct macro commands for checks.

- Create a new script macro, for this example we will call it
  \<code\>StrengthCheck\</code\>
- Edit the recipe and type the exact macro name in the
  \<code\>Condition\</code\> field
- The macro will need to return an object \<code\>{ success: Boolean,
  consume: Boolean }\</code\>
- \<code\>success\</code\> determines if the crafting is successfull
  or not while \<code\>consume\</code\> determines if the ingredients
  are consumed in the event of a failed craft
- In the context of the macro, \<code\>actor\</code\> is the Actor
  doing the crafting.
- You can copy paste this sample macro to use as a template for your
  own
- Note: You can also copy paste the macro code directly in the
  \<code\>Condition\</code\> field, but make sure your lines correctly
  end with \<code\>;\</code\> as the code will be collapsed to a
  single line\!

\<syntaxhighlight lang="javascript" line="1"\> const roll = await
actor.rollAbilityTest("str");

return {

`  success: roll.total > 12,`  
`  consume: true,`

} \</syntaxhighlight\>

</text>

`     `<sha1>`874bkru6p3kgs2431cgo6cvdv8i03t2`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Tile Sort

</title>

`   `<ns>`0`</ns>  
`   `<id>`100`</id>  
`   `<revision>  
`     `<id>`205592`</id>  
`     `<parentid>`370`</parentid>  
`     `<timestamp>`2022-12-03T10:22:58Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205592`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="988" sha1="7tw85x7cvfjp04509lp31xgtqd1gqeg" xml:space="preserve">`Easly sort how tiles are stacked, hide tiles for easier management of stacked tiles and highlight tiles on hover.`

![The Tile Sort Interface](Tsoverview.png 'The Tile Sort Interface')
![The Button to open Tile Sort](Tsbtn.png 'The Button to open Tile Sort')

## How to use

### Sorting Tiles

To sort the tiles, simply drag and drop in the list

### Hiding Tiles

Hovering over the image of the tile in the tile sort window an eye icon
will appear, clicking it will hide the tile until you close the tile
sort window or click the button again. This will allow you to work and
move tiles that are overlapping the hidden tile more easly.

### Opening the tile configuration

Double clicking a tile in the Tile Sort interface will open it's config,
this will allow you to open a tile configuration without moving other
tiles that could overlap it.

### Highlihting

Hovering over a tile in Tile Sort will create a colored highlight of the
tile that will make spotting overlapping tiles easier </text>

`     `<sha1>`7tw85x7cvfjp04509lp31xgtqd1gqeg`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Tile Scroll

</title>

`   `<ns>`0`</ns>  
`   `<id>`184`</id>  
`   `<revision>  
`     `<id>`205593`</id>  
`     `<parentid>`497`</parentid>  
`     `<timestamp>`2022-12-03T10:23:30Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205593`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="1972" sha1="lggi4684sdh7xs0x06q1m9sqm9z6e49" xml:space="preserve">`Scroll, rotate, and repeat tiles over time.`

## How to use

![Tile Configuration](Tsconfiguration.png 'Tile Configuration') You can
set all the tile animation parameters in the Animation tab of the tile
configuration.

### Enable Scroll\\Rotation

Enabling these will enable the animations, you can have both enabled at
the same time or only one of them.

### Direction

The direction in degrees of the scrolling.

### Speed

Speed of the animation, if you want to reverse the animation (for
example rotate in the opposite direction) you can use a negative speed

### Texture Repeat

How many times the texture is tiled. If you wish, you could use Tile
Scroll just for tiling by setting the speed to 0

If you are using rotation, and you don't want the tile to repeat outside
it's bounds, you can set Texture Repeat to 0, keep in mind that due to
how Tile Scroll works you'll need the edge of the texture to be
transparent for the Texture Repeat = 0 to work correctly. This is
unfortunatelly a limitation of the implementation.

### Rotation Pivot

This pivot represents a percentage of the tile. A pivot of 0.5, 0.5 will
rotate the tile along the Center, while a pivot of 0,0 will rotate along
the top left corner, 1,1 along the bottom right and so on.

### Offset

The offset is also percentage based and works with the same logic as the
pivot.

## Parallaxia Fix

If you have a scene that used Parallaxia tiles in V9, chances are that
in v10 that scene will be broken and display as black, simply activate
the scene and run this macro to fix it (refresh after)

You can recognize this problem by the error \<code\>Canvas drawing
failed: this.mesh.setShaderClass is not a
function\</code\>\<syntaxhighlight lang="javascript"\>
canvas.tiles.updateAll({"flags.core.isTilingSprite" : false})
\</syntaxhighlight\>

## Limitations

Tile scroll will not work with tiles with an \<code\>Occlusion
Mode\</code\> of \<code\>Radial\</code\> or \<code\>Vision\</code\>
</text>

`     `<sha1>`lggi4684sdh7xs0x06q1m9sqm9z6e49`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

WTF: What the Flag?

</title>

`   `<ns>`0`</ns>  
`   `<id>`171`</id>  
`   `<revision>  
`     `<id>`205594`</id>  
`     `<parentid>`458`</parentid>  
`     `<timestamp>`2022-12-03T10:23:56Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205594`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="482" sha1="m0dn3lbpl6ysihp2zp245e1iqabqhe4" xml:space="preserve">![`Basic`` 
 ``WTF``   ``Tooltip`](Wtftooltip.png 'Basic WTF Tooltip')

Provides tooltips that indicate which module is adding which option.

## How to use

Simply hover over a setting in an object's configuration window to
display the corresponding module

## Configuration

In the module settings you can chose if you want to enable it for
players as well, the position of the tooltip, and, if you are an
advanced user, you can also show the data path for the flag in the
tooltip. </text>

`     `<sha1>`m0dn3lbpl6ysihp2zp245e1iqabqhe4`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Gatherer

</title>

`   `<ns>`0`</ns>  
`   `<id>`234`</id>  
`   `<revision>  
`     `<id>`205595`</id>  
`     `<parentid>`1616`</parentid>  
`     `<timestamp>`2022-12-03T10:25:08Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205595`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="5272" sha1="gwvifu7k5935izoq7yoo2ltiy053cy4" xml:space="preserve">![`Example`` 
 ``Table`](Gatherertale.png 'Example Table')

## Recommended Modules

- [Simple
  Calendar](https://foundryvtt.com/packages/foundryvtt-simple-calendar)
  will allow the automatic reset of gathering spots depending on time
  passed, without it this feature will not work

### Premade Content

Want to start with some already made recipes and gathering points?
Download the DnD5e [Potion Crafting &
Gathering](https://github.com/action-jay/potion-crafting-gathering)
module by [Action_Jay](http://www.actionjay.com/) using [this
ManifestURL](https://github.com/action-jay/potion-crafting-gathering/releases/latest/download/module.json)\!
The module leverages both the [Mastercrafted](Mastercrafted 'wikilink')
and [Gatherer](Gatherer 'wikilink') modules, make sure you install
both\!

## Creating a Gathering spot

![Selecting the Gatherer Sheet](Gatherersheetselect.png 'Selecting the Gatherer Sheet') ![A Fully setup Gatherer
Sheet](Gatherersheetfilled.png 'A Fully setup Gatherer Sheet')
![Gatherer Sheet in View Mode](Gatherersview.png 'Gatherer Sheet in View Mode') Gatherer works with \<code\>Roll
Tables\</code\>, so before you start create a roll table and drag and
drop the items you want for your Gathering Spot in it. To create a
gathering spot, follow this steps.

- Create a new \<code\>Journal\</code\> and create a new \<code\>Text
  Journal Page\</code\> in it (or add a Text Journal Page in an
  existing Journal)
- In the Page header, click the \<code\>Sheet button\</code\> and in
  \<code\>This Sheet\</code\> select \<code\>Gatherer Sheet\</code\>
- Select a Roll table from the drop down menu.
- Set the extra options you want, for this first tutorial we will use
  just the basics. We will give this gathering spot a 15 hours reset
  time and 10 draws (or pulls).
- The sheet should look like the one in the \<code\>A Fully setup
  Gatherer Sheet\</code\> image
- \<code\>Note\</code\>: Due to a
  [Bug](https://github.com/foundryvtt/foundryvtt/issues/8299) with the
  new V10 Journals, you might need to refresh the browser (F5) after
  your first setup of a Gatherer Sheet
- Once you saved and refreshed (if needed) your Journal Page should
  look like this when in view mode \<code\>Gatherer Sheet in View
  Mode\</code\>

You can now gather from this sheet, remember that you need either a
token selected or a character assigned to gather\! As a GM you can
manually reset a spot with the Reset button\!

## Options

You can configure multiple options for the Gatherer Sheet

### Time

Specify the time in hours after which the timer and draws are reset. For
example, a time of 48 will reset the spot every 2 days. You can use
decimal values.

### Draws

The number of Pulls that can be made from this spot. Draws\\Pulls will
reset automatically with time or when pressing the Reset button.

### Quantity

The amount of items that will be gathered from this spot. This value is
the same for all items and cannot be customized per item. If you wish to
change item chances, you can always weight the table differently.
Quantity also evaluates roll expressions. For example
\<code\>1d6+3\</code\> and \<code\>3\</code\> will both work.

If you want to set per-item quantities, see the Better Rolltables
integration section.

### Require

Specify item requirements for this gathering, the parameters can be a
comma separated list of item names. The actor doing the gathering will
need to have ALL the Required items if multiple are specified. Example
\<code\>Fishing Rod,Bait\</code\> ![Gatherer
Minigame](Gathererminigame.png 'Gatherer Minigame')

### Minigame

The minigame tag will let the user pick the item to gather instead of
leaving it to chance\! When using this tag, instead of a table roll, the
user will be prompted with a window with items appearing in a random
sequence, when the user clicks the button the currently displayed item
will be awarded\! The time is in milliseconds, e.g.
\<code\>800\</code\>.

Remember that the time you chose is then multiplied by the chance an
item has to be drawn from the table, so for example, if an item has 20%
chance of being drawn, it's display timer will be \<code\>800ms\*0.2 =
160ms\</code\> so make sure to pick an appropriate amount of time\!

And remember, the more you wait to pick the item the faster the minigame
will get\!

Note: Leaving this field empty will disable the minigame and use
standard table rolling.

### Expression

A Macro expression that will be evaluated before the gathering. If the
expression resolves to \<code\>false\</code\>, a Pull will be consumed
but no items will be gathered. Example \<code\>const res = await
actor.rollSkill("inv"); return res.total \> 15;\</code\> will roll an
investigation check, if the result is higher than 16 the pull will
succeed.

If you wish to cancel a gathering alltogether, return
\<code\>null\</code\> instead and no pulls will be consumed.

### Checks (DND5E Only)

For the DnD5e system, a dropdown with ability/skill checks and tool
checks are available with corresponding DC\! The tool name is Case
Sensitive\! Failing the check will result in a consumed Pull but no
rewards.

## Better Rolltables Integration

If you have the Better Rolltables module installed, and you set
\<code\>Better Tables Type\</code\> to \<code\>Better Table\</code\> you
will be able to set a \<code\>formula\</code\> for each item. In this
instance, Gatherer will use that formula instead of the quantity
specified in the Gatherer Sheet. </text>

`     `<sha1>`gwvifu7k5935izoq7yoo2ltiy053cy4`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Hover Distance

</title>

`   `<ns>`0`</ns>  
`   `<id>`119`</id>  
`   `<revision>  
`     `<id>`205596`</id>  
`     `<parentid>`405`</parentid>  
`     `<timestamp>`2022-12-03T10:25:27Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205596`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="726" sha1="85bdhoqsapy5dvwtbog1jmnjwvqd7c0" xml:space="preserve">`Show distance to a token when hovering it.`

![Hovering a single token](Hdsingle.png 'Hovering a single token')

## How to use

Hover a token while having a token selected to show the distance to that
token ![Holding ALT to highlight all tokens](Hdmasshighlight.png 'Holding ALT to highlight all tokens') Hold \<code\>ALT\</code\> to
highlight all visible tokens and show the distance to all of them

## Customization

You can decide when the distance is shown (eg. only in combat) and other
smaller tweaks in the module settings.

## Measurements

Keep in mind that due to the calculation beeing not possible, if two
tokens are at a different elevation, the distance mesurement will be
switched from your preferred method to \<code\>Euclidean\</code\>
</text>

`     `<sha1>`85bdhoqsapy5dvwtbog1jmnjwvqd7c0`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Image Context

</title>

`   `<ns>`0`</ns>  
`   `<id>`120`</id>  
`   `<revision>  
`     `<id>`205597`</id>  
`     `<parentid>`408`</parentid>  
`     `<timestamp>`2022-12-03T10:25:44Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205597`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="1377" sha1="qr3k0eqqbs06tf6j20hcand1eajy95b" xml:space="preserve">`Create image popouts of any image.`

## How to use

![Image Context Menu](Icmenu.png 'Image Context Menu')

### Invoking the Image Context Menu

Simply right click on any image in the interface to open the Image
Context Menu, if the item has already a context menu, Right click two
times

This works on any image, this includes:

- Images in sidebar items (Right click two times)
- Images in the file picker
- Images in character, items, journal sheets
- Images in chat messages

#### Show

![Image Context Scene controls button](Icbutton.png 'Image Context Scene controls button') The Show button will popout the
image, from here you can use the regular foundry interactions, such as
show to players

#### Send to chat

This will open a prompt that will let you chose which players can see
the chat message. The image will be posted to chat. Any image created
this way, can be popped out from the chat by left clicking on the image.

#### Copy URL

This will let you copy the image path, to (for example) paste it on a
tile or token image field or anywhere else.

### Chat image parsing

Image context will also parse image URLs posted in chat, so if you send
an image url into chat the image will be shown and it can be popped out
by left clicking.

### URL Parser

The button in the tile layer will let you execute the context menu
operations on a copied URL. </text>

`     `<sha1>`qr3k0eqqbs06tf6j20hcand1eajy95b`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Inactive Tokens

</title>

`   `<ns>`0`</ns>  
`   `<id>`121`</id>  
`   `<revision>  
`     `<id>`205598`</id>  
`     `<parentid>`410`</parentid>  
`     `<timestamp>`2022-12-03T10:26:01Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205598`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="920" sha1="bo8361j3kgkv7m86uoole39l55r828j" xml:space="preserve">`Disable token interactions.`

## How to use

![Lock button in the token HUD](Itbutton.png 'Lock button in the token HUD')

### Setting a token as inactive

To set a token as inactive, right click on the token to open the HUD and
click the lock button, if you have multiple tokens selected they will
all be set as inactive\\active.

### Set defeated to inactive

By default, Inactive Tokens will set defeated tokens to inactive. You
can change this behaviour in the module settings.

## What's the "Inactive" state?

When a token is in the Inactive state the following will apply:

- The token cannot be selected
- The token will not trigger hover events (such as highlighting or
  changing the mouse pointer)
- The token cannot be moved
- The token cannot be targeted

As a gm, you can still right click on the token to disable the inactive
state, but players will not be able to right click (and trigger the HUD)
</text>

`     `<sha1>`bo8361j3kgkv7m86uoole39l55r828j`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Lightswitch

</title>

`   `<ns>`0`</ns>  
`   `<id>`122`</id>  
`   `<revision>  
`     `<id>`205599`</id>  
`     `<parentid>`414`</parentid>  
`     `<timestamp>`2022-12-03T10:26:16Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205599`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="849" sha1="bkb79a1ow7e9jcplw2nm6wpt52d4j4w" xml:space="preserve">`Allow players to turn on and off lights and customize icons for the switches`

![Lightswitch Configuration](Lsconfig.png 'Lightswitch Configuration')

## How to use

### Creating a lightswitch

- Create a light, or open the light configuration of an existing light
- Navigate to the \<code\>Advanced Options\</code\> tab
- Check the \<code\>Is Lightswitch?\</code\> option at the bottom
- If you want, select an image to use as the icon, otherwise the
  default lightbulb will be used.

![Lightswitch with custom icon](Lscustomicon.png 'Lightswitch with custom icon')

### Interacting with the lightswitch

Once you created a lightswitch, **\<u\>select a token\</u\>**, if the
center of the light is in view of the token, you will see the clickable
icon, simply click it to toggle the light

Note: A GM must be connected for players to be able to trigger the
lightswitch </text>

`     `<sha1>`bkb79a1ow7e9jcplw2nm6wpt52d4j4w`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Macro Wheel

</title>

`   `<ns>`0`</ns>  
`   `<id>`114434`</id>  
`   `<revision>  
`     `<id>`205600`</id>  
`     `<parentid>`167482`</parentid>  
`     `<timestamp>`2022-12-03T10:26:32Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205600`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="2271" sha1="6q0x0xt8b2737f1ypcqb0ajcwuj0f9u" xml:space="preserve">`Do you have too many macros? Macro Wheel is for you! Press <code>M</code> or <code>Middle Mouse Button</code> to show an easy to use interface that can hold infinite macros!`

![Macro Wheel in action](Macrowheel.png 'Macro Wheel in action')

## Getting Started

When you enable the module it will be already ready to go, simply press
M to display your macros in the Macro Wheel\! This said, a warning will
be shown prompting you to setup the macro wheel since the
\<code\>MacroWheel\</code\> folder is missing.

If you don't wish to do any specific configuration for Macro Wheel,
simply head into the module settings and enable \<code\>Use Root
Folder\</code\>.

### Basic Configuration

![A sample setup of folders and subfolders](Macrowheelsample.png 'A sample setup of folders and subfolders') If \<code\>Use Root
Folder\</code\> is disabled, Macro Wheel will build the wheel using a
folder named \<code\>MacroWheel\</code\>, let's set it up\!

- Open the \<code\>Macros Directory\</code\>
- Create a folder named exactly \<code\>MacroWheel\</code\>
- Every folder inside the \<code\>MacroWheel\</code\> folder will
  create a \<code\>Wheel\</code\> containing all the macros inside
  that folder, you can check the image to see how a sample setup looks
  like

### Customizing the Wheel

Every \<code\>Wheel\</code\> is a \<code\>macro folder\</code\>, so to
customize it, simply edit the folder. If you prefer, you can open the
edit folder dialog by clicking with the \<code\>right mouse
button\</code\> on a wheel.

You will find 2 extra options

#### Macro Wheel Image

This is the image used for the Wheel, change it to what you prefer\!

#### Condition

Some premade conditions you can use to conditionally show a wheel. For
example selecting \<code\>In Combat\</code\> will only show the wheel if
a combat is active in the scene. Set to \<code\>Custom\</code\> to use
the option below.

#### Custom Condition

This is a condition that will be evaluated to determine if the wheel
should be shown, for example you could use the
\<code\>canvas.activeLayer === canvas.tokens\</code\> condition to have
the specific Wheel display only on the token layer.

### Other Customizations

The module settings contains other customizations that are explained in
the setting itself, such as showing hotbars and customizing the macro
wheel size\! </text>

`     `<sha1>`6q0x0xt8b2737f1ypcqb0ajcwuj0f9u`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Quickdoors

</title>

`   `<ns>`0`</ns>  
`   `<id>`124`</id>  
`   `<revision>  
`     `<id>`205601`</id>  
`     `<parentid>`421`</parentid>  
`     `<timestamp>`2022-12-03T10:27:42Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205601`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="1013" sha1="1zucbv3l6wjj190ygpnvlrr6onhamn7" xml:space="preserve">`Toolkit to make creating doors and windows fast.`

## How to use

![Quick Doors Toggle Button](Qdbtn.png 'Quick Doors Toggle Button')

### Enabling Quick Doors

To enable the Quick Doors mode, click on the Quick Doors toggle in the
scene controls.

### Changing door size

![Doors Size Prompt](Qdsize.png 'Doors Size Prompt') By default doors
will be the size of one grid square, to change it, \<code\>right
click\</code\> on the Quick doors toggle.

## Controls

While in Quick Doors mode, you can use the following controls to quickly
make doors and windows.

Note that you have to click on a wall, or in it's proximity to create a
door on that wall.

| **Control**                                          | **Action**          |
| ---------------------------------------------------- | ------------------- |
| \<code\>Left Click\</code\>                          | Create Door         |
| \<code\>Ctrl\</code\> + \<code\>Right Click\</code\> | Remove Door\\Window |
| \<code\>Ctrl\</code\> + \<code\>Left Click\</code\>  | Create Window       |
| \<code\>Alt\</code\> + \<code\>Left Click\</code\>   | Create Secret Door  |
| \<code\>Shift\</code\>                               | Snap to Grid        |
| \<code\>D\</code\>                                   | Double Size         |

</text>

`     `<sha1>`1zucbv3l6wjj190ygpnvlrr6onhamn7`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Quickdraw

</title>

`   `<ns>`0`</ns>  
`   `<id>`125`</id>  
`   `<revision>  
`     `<id>`205602`</id>  
`     `<parentid>`424`</parentid>  
`     `<timestamp>`2022-12-03T10:28:05Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205602`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="629" sha1="aobc704u44vil7hpstuxh2ync5ot92h" xml:space="preserve">![`Quickdraw`` 
 ``in``   ``action`](Quickdraw.png 'Quickdraw in action')

Create Whiteboard style temporary drawings

## How to use

Simply hold \<code\>Q\</code\> while moving the mouse on the canvas to
draw freehand, the drawing will be in your user color and will be
displayed live to all players.

The drawing will disappear after a set time. ![Quickdraw
Settings](Qdsett.png 'Quickdraw Settings')

## Configuration

In the module settings you can set the time after a drawing fades out.
By default it's 10 Seconds. You can also tweak some other parameters
described in the settings.

It's also possible to rebind the default Quickdraw key. </text>

`     `<sha1>`aobc704u44vil7hpstuxh2ync5ot92h`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

RPG Damage Numbers

</title>

`   `<ns>`0`</ns>  
`   `<id>`126`</id>  
`   `<revision>  
`     `<id>`205603`</id>  
`     `<parentid>`430`</parentid>  
`     `<timestamp>`2022-12-03T10:28:25Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205603`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="656" sha1="kv1ckz3tan5ww46bdljaaqmln4pqgk7" xml:space="preserve">`Damage numbers, with style.`

{{\#evt: service=youtube |id=<https://youtu.be/BTfQKNCP_HM>
|alignment=right }}

## How to use

### With Midi-QoL

If you have Midi-QoL in use, RPG Damage Numbers will automatically show
colored damage numbers whenever a creature is damaged. ![Module
Settings|519x519px](Rdnsettings.png 'Module Settings|519x519px')

### Without Midi-QoL

If you are not using Midi-QoL, RPG Damage numbers will still display
it's own custom animation for status effects and damage numbers, but
color will not be shown for different damage types.

Make sure that \<code\>Override Core Bouncing Text\</code\> is enabled
in the module settings </text>

`     `<sha1>`kv1ckz3tan5ww46bdljaaqmln4pqgk7`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Situational Shortcuts

</title>

`   `<ns>`0`</ns>  
`   `<id>`127`</id>  
`   `<revision>  
`     `<id>`205604`</id>  
`     `<parentid>`435`</parentid>  
`     `<timestamp>`2022-12-03T10:28:44Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205604`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="1440" sha1="90zfash0cs1xx7mqnmvde40fbcj7qhg" xml:space="preserve">`Add quick to use buttons to situational fields`

## How to use

![Module Settings](Sssettings.png 'Module Settings')

### Configuring the Shortcuts

- Head to the module settings
- Click on the configure bonuses button

![Configure Bonuses window](Ssconfigbon.png 'Configure Bonuses window')
Global bonuses will be availeble to all players and the GM while User
bonuses will only be availeble to the user configuring them. You can
login with your players accounts to configure it for them if you wish.

- Click the Add button
- Fill the Name and Bonus fields

The bonus field can contain anything you can have in an item formula.
Composed formulas are also supported, valid bonuses include:

- \<code\>+1d4\</code\> \<code\>-1d4\</code\>
- \<code\>+10\</code\> \<code\>-10\</code\>
- \<code\>+@prof\</code\>
- \<code\>+1d6 + 2d12kh -@prof\*2 + 5\</code\>

### Using the Shortcuts

![Roll Prompt](Ssroll.png 'Roll Prompt') Whenever you make a roll,
buttons will appear that will allow you to use your bonuses

\<code\>Left Click\</code\> a bonus to add it to the roll or
\<code\>Right Click\</code\> to remove it. If you have the
\<code\>Replace\</code\> option enabled in the module settings, Left
clicking a different bonus will replace the current one, otherwise it
will be added\\subtracted

## Supported Systems

The currently supported system are: \<code\>Dungeons & Dragons 5th
edition\</code\> \<code\>Warhammer Fantasy Roleplay 4th edition\</code\>
\<code\>Star Wars 5e\</code\> </text>

`     `<sha1>`90zfash0cs1xx7mqnmvde40fbcj7qhg`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Socket Macros

</title>

`   `<ns>`0`</ns>  
`   `<id>`128`</id>  
`   `<revision>  
`     `<id>`205605`</id>  
`     `<parentid>`437`</parentid>  
`     `<timestamp>`2022-12-03T10:28:56Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205605`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="277" sha1="1nx1mz52qs2wsl9supzu6v8mxpanhs4" xml:space="preserve">`Execute macros on all clients.`

![Socket Macros Checkbox](Smcheck.png 'Socket Macros Checkbox')

## How to use

Simply create your macro, and enable the \<code\>Execute on all
Clients?\</code\> checkbox

When you run the macro, it will run for you and all connected players.
</text>

`     `<sha1>`1nx1mz52qs2wsl9supzu6v8mxpanhs4`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Taskbar

</title>

`   `<ns>`0`</ns>  
`   `<id>`129`</id>  
`   `<revision>  
`     `<id>`205606`</id>  
`     `<parentid>`453`</parentid>  
`     `<timestamp>`2022-12-03T10:29:11Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205606`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="3950" sha1="0vlu1xhwfyrxn12f6gss3orgayrp8eh" xml:space="preserve">`A Windows Style Taskbar to manage windows and shortcuts easly.`

![Taskbar Interface](Taskbarmain.png 'Taskbar Interface')

## How to use

The instructions will follow the refrerence Taskbar Interface image on
this page.

### Start Button

Clicking the start button will bring up all the quick access
functionalities of Taskbar

### Sidebar

Clicking the start button on the top of the sidebar or hovering over any
of the buttons will expand the sidebar giving you some usefull shortcuts
to Foundry functionality

### Quick Items

This list can contain any entity from the Sidebar or Compendiums, simply
drag and drop and entity in the quick items to add it (Tokens, Journals,
Items etc...)

To remove an item click on the \<code\>X\</code\> to the right of the
item

Left Clicking an item will bring up it's Sheet, you can also drag an
item onto the canvas to place it (such as a token)

### Quick Macros

Drag and Drop macros here from ether the hotbar or the macro directory

Left click a macro to execute or Right click to remove it

### Players Button

Clicking this button will bring up the Players list which taskbar will
remove from the main interface to save space (if the setting is enabled
in the module settings)

### Tray Icons

These icons provide shortcuts such as Locking\\Unlocking the taskbar,
Open module settings, Close all windows, or show FPS.

The Arrow pointing up icon will open the Workspaces

### Workspaces

The workspaces are groups of windows that you can save for later use.
Clicking on a workspace will open all windows stored in that workspace.

#### Creating a workspace

To create a workspace, click the \<code\>+\</code\> button, a prompt
will ask for the workspace name. When you create a workspace, all active
windows that represent an entity (Actors, Items, Journals etc...) will
be saved to the workspace.

#### Deleting a workspace

To delete a workspace, right click on it.

### Toggle Windows

Clicking this button will minimize all opened windows and maximize all
minimized windows. ![Minimize Button](Tbmini.png 'Minimize Button')

### Minimizing\\Maximizing windows

To minimize a window, ether click on it's corresponding button in the
Taskbar or click on the Minimize button in the window header

### Customization

You can customize the aspect and behaviour of Taskbar in the module
settings, all options are described in detail there.

### Module Sinergy

![SmallTime Integration](Tssmalltime.png 'SmallTime Integration')

#### SmallTime

If you have [SmallTime](https://foundryvtt.com/packages/smalltime)
Taskbar will embed it in the Tray Icon space, you can enable the option
in the module settings to auto dock small time.

#### GM Screen

If you have [GM Screen](https://foundryvtt.com/packages/gm-screen)
enabled, Taskbar will add a Tray Icon to open\\close GM Screen ![Quick
Inserts Integration](Tbquickinserts.png 'Quick Inserts Integration')

#### Quick Inserts

If you have
\[<https://foundryvtt.com/packages/quick-insert#>:\~:text=Quick%20Insert%20provides%20a%20context,README%20for%20full%20usage%20instructions.
Quick Inserts\] enabled, Taskbar will add a search icon next to the
Start Button to bring up Quick Inserts

## Advanced: Custom Docking

Custom Docking will allow you to dock arbitrary windows to the taskbar,
you can configure it in the module settings. For example, if we want to
dock Monk's tokenbar, the macro bar and token notes we can set the
setting as follows:

\<code\>Hotbar,TokenBar,TokenNotes,AlwaysHP\</code\>

_\<big\>\<u\>This feature is provided as-is and not all applications
will dock correctly\</u\>\</big\>_

| Application      | ID                                                                      |
| ---------------- | ----------------------------------------------------------------------- |
| Core Hotbar      | \<code\>Hotbar\</code\>                                                 |
| Monk's Token Bar | \<code\>TokenBar\</code\>                                               |
| Token Notes      | \<code\>TokenNotes\</code\>                                             |
| Always HP        | \<code\>AlwaysHP\</code\>                                               |
| Alpha Hud        | \<code\>SelectedWidgetApp\</code\> \<code\>CharactersWidgetApp\</code\> |

Known module application ids

\<blockquote\>\</blockquote\> </text>

`     `<sha1>`0vlu1xhwfyrxn12f6gss3orgayrp8eh`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Token Flip

</title>

`   `<ns>`0`</ns>  
`   `<id>`130`</id>  
`   `<revision>  
`     `<id>`205607`</id>  
`     `<parentid>`442`</parentid>  
`     `<timestamp>`2022-12-03T10:29:26Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205607`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="912" sha1="cayretbt75tc8fygnhyel3v5m1glz54" xml:space="preserve">`Switch between different token images and actors on a single token.`

## How to use

![Token Flip Configuration Button](Tfconfig.png 'Token Flip Configuration Button') ![Token Flip Configuration
Window](Tfwindow.png 'Token Flip Configuration Window')

### Configuring the different token faces

- Open the token configuration
- Click on the Configure Token Flip button
- Click the Add new face button to add faces
- Configure image, actor and scale as needed
- Close the window

### Switching between faces

There are two ways to flip to a different face

#### Using the token HUD

![Token Flip button in the token HUD](Tfhud.png 'Token Flip button in the token HUD') Left click on the Token flip
button to cycle to the next face

#### Using the Token Flip menu

![Token Flip HUD Menu](Tfhudmenu.png 'Token Flip HUD Menu') Left click
and hold the left mouse button down on the token flip button to bring up
the token flip menu, then click on the desired face. </text>

`     `<sha1>`cayretbt75tc8fygnhyel3v5m1glz54`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Token Notes

</title>

`   `<ns>`0`</ns>  
`   `<id>`131`</id>  
`   `<revision>  
`     `<id>`205608`</id>  
`     `<parentid>`447`</parentid>  
`     `<timestamp>`2022-12-03T10:29:48Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`205608`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="1265" sha1="jv36d3pdftz43v0qbt2rn8yhruv4rvv" xml:space="preserve">`Take quick notes for combat or other pourpouse on tokens.`

## How to use

![Token Notes button in the Token HUD](Tnhudbtn.png 'Token Notes button in the Token HUD')

### Opening the token notes

If the option to automatically open token notes is enabled in the module
settings, the Token Notes window will automatically open when selecting
a token, otherwise you can open it buy clicking the token notes button
in the token hud

### Editing the notes

![Token Notes window in the top right position](Tnwindow.png 'Token Notes window in the top right position') When opened, the Token
Notes window will appear in the bottom left corner of the screen (or in
another location if you changed it in the module settings) ![Token Notes
Edit mode](Tnedit.png 'Token Notes Edit mode') Click the
\<code\>Edit\</code\> button to edit the notes.

Click the button again to save your changes.

New lines will be separated by a line while not in edit mode.

### Counters

![Number turned into a counter](Tnnumbers.png 'Number turned into a counter') If you type any number in the notes, it
will turn into a counter while not in edit mode. You can use these to
keep track of durations or other effects\!

## Permissions

By default players will not be able to see or edit the notes, if you
wish you can change this behaviour in the module settings. </text>

`     `<sha1>`jv36d3pdftz43v0qbt2rn8yhruv4rvv`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Progress Tracker

</title>

`   `<ns>`0`</ns>  
`   `<id>`123`</id>  
`   `<revision>  
`     `<id>`418`</id>  
`     `<parentid>`383`</parentid>  
`     `<timestamp>`2022-09-06T14:08:19Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`418`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="1317" sha1="mvfgry2fgbq7l8aj3ugj0ynz7a3vj6t" xml:space="preserve">`Create sliders to track progress of various actions or events`

![Progress Tracker buttons](Ptbuttons.png 'Progress Tracker buttons')

## How to use

### Creating a Tracker

- Click the Edit Progress Trackers button, the main Trackers list will
  appear
- In the window, click the \<code\>Add Slider\</code\> button, another
  window will open to configure it

![Main Window](Ptmainwindow.png 'Main Window') ![Tracker
Configuration](Ptsliderconfig.png 'Tracker Configuration')

### Configuring a Tracker

#### Name and Background

The first options will let you set the name and background of the
Tracker you can find some included backgrounds and icons in the
\<code\>modules/progress-tracker/icons\</code\> folder.

Now you can add Sliders and Waypoints

#### Sliders

These icons will be movable by the GM, the name field is only for your
reference and it's not necessary or displayed.

#### Waypoints

These icons will be fixed and placed at a certain percentage on the
Tracker.

Once you are satisfied, save the Tracker.

### Showing a Tracker

Once you created a tracker, click the Eye icon to the right of the
Tracker name in the Main Window. At this point this slider will be
"linked" to this scene. From now on, clicking the Show Progress Tracker
button will show the Tracker. Players can click this button as well to
toggle it.</text>

`     `<sha1>`mvfgry2fgbq7l8aj3ugj0ynz7a3vj6t`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Main Page

</title>

`   `<ns>`0`</ns>  
`   `<id>`1`</id>  
`   `<revision>  
`     `<id>`157601`</id>  
`     `<parentid>`157594`</parentid>  
`     `<timestamp>`2022-11-29T15:02:11Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<origin>`157601`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="1166" sha1="l87az3wngnzsg1l8wzuj7uqpttlymvb" xml:space="preserve">`{| class="wikitable sortable"`

\!Free \!Premium |- |[3D Canvas Mapmaking
Pack](https://github.com/theripper93/canvas3dcompendium) |[3D
Canvas](3D_Canvas 'wikilink') |- |[3D Canvas Token
Compendium](https://github.com/theripper93/canvas3dtokencompendium) |[3D
Portraits](3D_Portraits 'wikilink') |- |[Levels](Levels 'wikilink')
|[Levels - Automatic Cover
Calculator](Automatic_Cover_Calculator 'wikilink') |- |[Argon Combat
HUD](Argon_Combat_HUD 'wikilink') |[Levels - Depth
Blur](Depth_Blur 'wikilink') |- |[Automated
Evocations](Automated_Evocations 'wikilink') |[Levels - Volumetric
Templates](Volumetric_Templates 'wikilink') |- |[Better
Roofs](Better_Roofs 'wikilink') |[Config
Presets](Config_Presets 'wikilink') |- |[Boss Bar](Boss_Bar 'wikilink')
|[Filepicker+](Filepicker+ 'wikilink') |- |[Combat
Booster](Combat_Booster 'wikilink') |[Gatherer](Gatherer 'wikilink') |-
|[Dig Down](Dig_Down 'wikilink') |[Hover
Distance](Hover_Distance 'wikilink') |- |[Hurry Up](Hurry_Up 'wikilink')
|[Image Context](Image_Context 'wikilink') |- |[Maxwell's Manual of
Malicious Maladies](Maxwell's_Manual_of_Malicious_Maladies 'wikilink')
|[Inactive Tokens](Inactive_Tokens 'wikilink') |- |[Module
Hub](Module_Hub 'wikilink') |[Lightswitch](Lightswitch 'wikilink') |-
|[Patrol](Patrol 'wikilink') |[Macro Wheel](Macro_Wheel 'wikilink') |-
|[Smart Target](Smart_Target 'wikilink')
|[Mastercrafted](Mastercrafted 'wikilink') |-
|[Splatter](Splatter 'wikilink') |[Progress
Tracker](Progress_Tracker 'wikilink') |- |[Stochastic
Fantastic](Stochastic_Fantastic 'wikilink')
|[Quickdoors](Quickdoors 'wikilink') |- |[Tile
Sort](Tile_Sort 'wikilink') |[Quickdraw](Quickdraw 'wikilink') |- |[Tile
Scroll](Tile_Scroll 'wikilink') |[RPG Damage
Numbers](RPG_Damage_Numbers 'wikilink') |- |[Token
Z](Token_Z 'wikilink') |[Situational
Shortcuts](Situational_Shortcuts 'wikilink') |- |[Wall
Height](Wall_Height 'wikilink') |[Socket
Macros](Socket_Macros 'wikilink') |- |[WTF: What the
Flag?](WTF:_What_the_Flag? 'wikilink') |[Taskbar](Taskbar 'wikilink') |-
| |[Token Flip](Token_Flip 'wikilink') |- | |[Token
Notes](Token_Notes 'wikilink') |}</text>

`     `<sha1>`l87az3wngnzsg1l8wzuj7uqpttlymvb`</sha1>  
`   `</revision>  
` `</page>  
` `<page>  
`   `

<title>

Townscaper

</title>

`   `<ns>`0`</ns>  
`   `<id>`61`</id>  
`   `<revision>  
`     `<id>`251`</id>  
`     `<parentid>`250`</parentid>  
`     `<timestamp>`2022-08-23T02:49:45Z`</timestamp>  
`     `<contributor>  
`       `<username>`Admin`</username>  
`       `<id>`1`</id>  
`     `</contributor>  
`     `<minor/>  
`     `<comment>`/* Importing & retexturing the .obj model in blender */`</comment>  
`     `<origin>`251`</origin>  
`     `<model>`wikitext`</model>  
`     `<format>`text/x-wiki`</format>  
`     `<text bytes="4303" sha1="1340plc473lr7egickv1m774il7ks66" xml:space="preserve">[`Townscaper`](https://store.steampowered.com/app/1291340/Townscaper/)` is a steam game that can be used to algorithmically create towns with colored blocks of houses on an irregular grid. Towns created using Townscaper can be exported and retextured using Blender for use in `[` 3D`` 
 ``Canvas `](3D_Canvas 'wikilink')`. `

This guide outlines the steps required to do so.

## Creating & exporting a town in Townscaper

Creating a town in Townscaper simply involves selecting a color from the
color palette and clicking on the canvas to place paths and houses. Once
a town has been created, expand the settings by clicking on the cogwheel
in the top-right corner of the screen. Click the "Export .OBJ" button
(only available on PC) to export the town mesh and texture models to a
folder of your choice.

![Townscaper_UI.png](Townscaper_UI.png 'Townscaper_UI.png')

## Importing & retexturing the .obj model in blender

![TownscaperImport.png](TownscaperImport.png 'TownscaperImport.png')

Download & open ![this .blend file](Town.blend 'this .blend file') in
Blender. Once loaded, delete everything in the scene, by clicking on all
the objects in the outliner panel, on the right, and pressing the
\<code\>delete\</code\> key on your keyboard.

Next, import the .obj model you created with Townscaper by navigating to
File \> Import \> Wavefront(.obj).

**When importing your .obj model, expand the Geometry options on the
right-hand pane and check the "Split by Group" checkbox.**

Once your model has been imported, locate and delete the object named
Water from the outliner panel on the right. There are better water
textures & shaders available for use within 3D Canvas and hence this
mesh has not been retextured.

In the original Townscaper game the doors and windows are inset, in
order to get a similar effect do the following:

- Flip the normals of all the windows \[Select Windows (in the
  outliner panel) -\> Go into edit mode (tab) -\> Open the normals
  menu (Alt + N) -\> Click "Flip"\]

<!-- end list -->

- Add a boolean modifier to the House object \[Select House (in the
  outliner panel) -\> Click modifier properties ( {{\#fas:wrench}}
  icon along the right panel) -\> Add Modifier -\> Boolean\], set to
  difference and within the Object field select Windows.

<!-- end list -->

- Press \<code\>Ctrl\</code\> + \<code\>A\</code\> to apply the
  modifier to House

<!-- end list -->

- Delete the windows object.

<!-- end list -->

- You may either want to set the house to shade flat (right-click -\>
  Shade Flat) or add an edge split modifier, your choice.

![TownscaperMaterial.png](TownscaperMaterial.png 'TownscaperMaterial.png')

After correcting the House mesh to include doors and windows, click
through each remaining object (Birds, Fencing, House, Plants, Props,
Sand) in your scene, with the outliner, navigate to the material
properties panel, and replace the material named Town with the one named
TownCombined, as shown in the image.

Once all the objects have been set to the same material, click on the UV
editing tab along the top of your blender window to change your active
workspace. Press \<code\>Tab\</code\> on your keyboard to go into object
mode. Hover your cursor over the 3D viewport on the right and press
\<code\>A\</code\> on your keyboard to select all objects. Then press
\<code\>Tab\</code\> again to toggle back into edit mode, having
selected all remaining meshes in your scene.

Next, hover your cursor on the UV editor panel on the left. Press
\<code\>A\</code\> to select the entire UV unwrap. Press
\<code\>S\</code\> followed by \<code\>X\</code\> and then type 0.0625,
to scale your selection in the X-axis by a factor of 0.0625.

After scaling the UV unwrap it needs to be translated to the correct
position for retexturing. This is the most difficult step as the amount
of translation needed varies from model to model. The steps to do this
involve hovering your cursor on the UV editor panel, pressing
\<code\>A\</code\> to select the entire UV unwrap, press
\<code\>G\</code\> followed by \<code\>X\</code\> and then the necessary
translation amount for your model. The translation amount is always
negative and it varies from model to model, try translating until the
door triangles are all correctly positioned on the leftmost corner of
the texture. This is shown in more detail below:

![TownscaperRetexture.webm](TownscaperRetexture.webm 'TownscaperRetexture.webm')

Your Townscape model is now retextured using Principled BSDF materials.
To use this model in 3D Canvas, go to File \> Export \> glTF 2.0
(.glb/.gltf).</text>

`     `<sha1>`1340plc473lr7egickv1m774il7ks66`</sha1>  
`   `</revision>  
` `</page>

</mediawiki>
