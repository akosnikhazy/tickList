# tickList
Small JavaScript todo list solution with cookie support

This is a very small JavaScript todo list solution. 

# How to use
Just put a ```<script>``` tag with the tickList.min.js file somewhere

Basically your checkboxes should look like this:
```<label class="tickList"><input type="checkbox"> Your text</label>```

Then you do a new tickList(); and it instantly hijacks your labeled checkboxes.

For more info see the example.html file's source. It is fully commented
about everything from stylsheet to JavaScript. Also check out the
tickList.js file for a commented version of the code.

Feel free to change / optimize / expand it. For me this started as a 
small and fast solution for a small problem at work, and then as I
enjoyed writing it it grow form collection of functions to this class.

# Potential way to optimize / expand it
After release, an afterthough came to me:
Instead of a cookie per checkbox, it could and should be one cookie per
todo list. A series of 0s and 1s would do the trick. I will not do this. 
But if you are useing this in your project you should consider doing it.

# Also
I made the minimalized file by hand. The reason is this way I could optimize
it more, sadly I couldn't go under 1Kb. So close...

# Also 2
I got the inspiration from IGN's todo lists on their game guide pages. It was
lucky that I had to do something similar.

So I invented the wheel!
