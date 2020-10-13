---
id: Error messages
section: UX writing
---
A user typically sees an error message when they attempt to perform an action but cannot continue because something isn’t right. 

Make your error messages brief yet descriptive. A useful pattern to follow is Description, Reason, and Resolution:
- **Description**: What happened? (Example: The user's login failed.)
- **Reason**: Why did it happen? (Example: SSH key isn't allowing auto-login.)
- **Resolution**: How can it be resolved? (Example: Manually log in to the host.)

Combined, these parts create this error message:  

_**Login failed**_ 

_The SSH key for auto-login is either not available, is unauthorized, or is password protected._

_To manually log in to the host, click **Log in.**_

Keep these best practices in mind when crafting error messages:

**Don’t blame users**. A user should never feel like the error is their fault. Avoid language like “You did something wrong.” Depending on your message, you may need to use the passive voice instead of the active voice so that you don't assign blame to the user.   

<div class="ws-content-table">

| **Before**                      | **After**                  |
|:-------------------------------:|:--------------------------:|
| You did not provide your authentication credentials. | Authentication credentials weren't provided.| 

</div> 
<br /> 

**Give users a next step**: A user should never feel stuck. If they’re hit with an error, give them the information they need to continue with their task. 

<div class="ws-content-table">

| **Before**                      | **After**                  |
|:-------------------------------:|:--------------------------:|
| Your list already has the maximum number of items. You are not able to continue customizing. | Your list has the maximum number of items. To continue customizing, remove an item.|

</div>
<br /> 

**Avoid jargon**: Error messages are frustrating enough without technical terms that users might not understand. Avoid jargon and use terms that are familiar to your users. 

<div class="ws-content-table">

| **Before**                      | **After**                  |
|:-------------------------------:|:--------------------------:|
| Error code 5959: Outdated version information. Task termination pending. | Your task is outdated. To keep it active, update its version.|

</div>
<br />

**Include the right amount of description**: Tell your user what is wrong. An error without an explanation can add to their frustration and prevent them from finding a solution.  

<div class="ws-content-table">

| **Before**                      | **After**                  |
|:-------------------------------:|:--------------------------:|
| An error occurred. The email cannot be sent. | To send this email, turn on your email permissions in user settings.|

</div>
<br />

However, don’t include too much information. The user doesn’t need to know exactly what is going on behind the scenes. Only give them information about what went wrong and what they can do next.  

<div class="ws-content-table"> 

| **Before**                      | **After**                  |
|:-------------------------------:|:--------------------------:|
| Your information cannot be saved. Our system is currently designed to accommodate 1 record per user. The system memory is unable to store more at this time. | Only 1 record can be saved. To continue, remove one of your records.|

</div> 
<br /> 


**Lead with the benefit**. When providing users with a resolution, start the sentence with their goal ("the benefit"), followed by what they need to do to continue.  

<div class="ws-content-table"> 

| **Before**                      | **After**                  |
|:-------------------------------:|:--------------------------:|
| Click **Log in** to manually log in. | To manually log in, click **Log in.**| 

</div>