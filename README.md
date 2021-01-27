# 05-Third-Party-APIs
9 - 6 work day planner powered by javascript/jquery

The goal of this project was to create a work day scheduler that someone could see open blocks according to the current time, fill in text, and save the text to the local storage. Part of the goal of this project was to also use another javascript library, in this case Luxon. Luxon was created to help format time in javascript. 

* current day and time is displayed at the top of the page, and continues to tick
* Time blocks are shown and are color coded based on the current time of the day.
* when you enter text into the time block and click save, the users input is saved to local storage so when they come back to the page they don't lose their entry.
* the various elements on the page are being dynamicly created using Jquery. 
* the current time is established using luxon, and that contorls the color of the blocks in the main stage of the page. 


![image](https://user-images.githubusercontent.com/9003865/106060602-3e4ba980-60c2-11eb-95c4-6f5cccdc03ce.png)
