<h1>Mobile Calculator App</h1>
<ul>
    <li> I was set a challenge to create a calculator which had to be responsive and built mobile first, but also work on different screen widths. It had to       accept a minimun of two inputs, perform an operation and display the output WITHOUT using the eval() method.</li>
    <li> I became more familiar and learnt a lot surrounding arrays and loops within the project. Especially the use of them on my plus-minus and percentage 
    button where I reversed the array to amended the last element only. As a result of this, when you click the +/- and % buttons it will only change the   
    last number on the screen.</li>
    <li> Instead of creating media queries to build a desktop version I went the route of showing a different display if you turned your phone landscape. In this version, scientific calculator buttons are added to the display. At this point they do not have any function.</li>
    <li> At first I had separate events for when each button was clicked, but to shorten the code I created two arrays - one for numbers and one for symbols(+-*/). I struggled to get this working at first as when I added 'querySelectorAll' I was getting errors in my event listener. To get around this I used a forEach() loop to apply the same event listener to every element, using 'getAttribute("id")' for each of them.</li>
    <li> The calculator works with three number inputs e.g. (x + y + z), once equals is clicked you will get the result, which you can then do further sums on.    
    </li>
    <li> The max number of characters that the display will show is 12 and after this you can not add anything more to the screen. In the future I would have wanted to be able to have more characters on display if you turned your phone to landscape.</li>
    <li> There is a nightmode applied so that when the time is past 7pm the background goes a dark grey colour.</li>
</ul>
