Base code taken and adapted from Ania Kubow's YouTube video, available [here.](https://www.youtube.com/watch?v=tjyDOHzKN0w)

### Bugs/ Issues fixed
* Game was not repeating images - there were 12 different images, which meant the game was unwinnable.
    * Solution - delete half the images, and then copy the remaining six, so there were still twelve images, but there were two of each one.
* Error message showing when two pairs matched and the game tried to continue after pairing: 'assignment to constant variable, checkForMatch' referencing line 91 
    * Changed arrays from const variable to let variable, as was not resetting array correctly after each pair selection.  This resulted in succes.
* When game ends, aesthetic of text "Score: Congratulations..." did not work well.
    * Replaced text in H3 ('Score') with text message, meaning the word 'Score' was overwritten as well, which worked better.