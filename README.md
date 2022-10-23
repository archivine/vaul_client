##### The way I modify the client is retarded and should not ever be repeated unless you are brain damaged.

# How it works

The only thing it really does is just applying the specified css file by modifying discord's core asar.  <br>

# The backstory behind this literal abnormality <br>
I got genuinely mad over the recent patches and since neither BD or Powercord weren't really working, I decided to take the matter into my own hands, which as you can see I utterly failed.

# Compatibility  <br>
Stable/PTB/Development are not supported. Use Canary.  
Linux only.
I mean you can always try porting it to windows, GL.

# Installation <br>
* `cd ~/`
* `git clone https://github.com/archivine/vaul_client`
* `cd vaul_client`
* `sudo node main.js`  
#### !! DO NOT MOVE THE FOLDER OUTSIDE OF HOME DIRECTORY

# Theming  <br>
* Place your desired css file into the themes folder
* Edit config.json
* Change `current_theme` value to the name of your file (just the name, ignore the file extension)
* Restart your discord client.
* ** You can overwrite your theme without leaving the client by using the `overwriteTheme()` function
<img alt="dvt" src="https://files.hyper.pics/hyper/GNlF7KAIRu.png">

