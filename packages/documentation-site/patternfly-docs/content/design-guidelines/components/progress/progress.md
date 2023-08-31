---
id: Progress
section: components
---

## Elements
<img src="./img/progress-bar-callouts.png" alt="A progress bar with arrows pointing to each of its four elements: Its title, track, progress value, and indicator." width="608" />

1. **Title:** Describes the task or process underway.
2. **Track:** Illustrates the path from task start (empty) to task completion (full).
3. **Progress value:** Quantifies progress by sharing a completion percentage or time remaining. For long task sequences, progress value may be used to communicate where a user is in that sequence: “Step 1 of 6.”
4. **Indicator:** Animates the user’s progress toward completion.


## Usage
Use a progress bar to keep users informed about how much effort or time they can expect to allocate for long or ongoing processes like loading or updating an app, submitting a form, or completing a multi-step tutorial.

### When to use
* A user must complete a series of tasks and will want indication that they are making progress.
* A user needs indication that the system is progressing through loading, saving, or downloading.
* A user needs to monitor a background process, especially if that process may take a long time.

Depending on your use case, you might choose between 2 types of loading indicators: Progress bars and [spinners](/components/spinner). Never use a progress bar and spinner together. 

Default to progress bars for processes that take longer than 4 seconds or require more specific information about process completion. If a process takes less than four seconds, use a [spinner](/components/spinner) instead. 

## Variations
<img src="./img/progress_bar_blue_animated.gif" alt="An animated progress bar demonstrates how a progress track fills and progress value increases as a process moves toward completion." width="500" height="300" />

### Determinate progress bar

Whenever possible, use a determinate progress bar to communicate progress with measurable values like time or percentage. 

Use a percentage as a progress value if the process will take less than a minute to complete or a percentage will be more accurate than estimating a task’s duration.

Use a time interval value such as “4 minutes remaining” to communicate progress if the process takes more than one minute to complete. 

### Indeterminate progress bar

Avoid using indeterminate progress bars to communicate progress that can’t be measured. To track progress that can’t be quantified with a percentage, time, or step, use a [spinner](/components/spinner) instead.


Follow these general style guidelines when designing your progress bars. For information about writing progress bar titles for each status type, see the [Content](#content) section.

### In progress

A blue progress bar represents a process that is currently underway.

<img src="./img/progress-bar-in-progress.png" alt="An example of a progress bar in an 'in progress' state, with a blue track and a title that indicates its status: 'Validating account credentials.'" width="560" />

### Error state or failure

A red progress bar represents a process that has failed. Accompany a failed progress bar with a [red danger icon](/design-foundations/icons/#all-icons) to demonstrate that an error occurred in the process.

<img src="./img/progress-bar-error-state.png" alt="An example of a progress bar in an error or failed state, with a red track, optional danger icon, and a title that indicates its status: 'Could not validate account credentials.'" width="560" />

### Complete or success

A green progress bar represents the successful completion of a process. Accompany a complete progress bar with a [green check-circle icon](/design-foundations/icons/#all-icons) to demonstrate that the process has finished with no errors.

<img src="./img/progress-bar-complete.png" alt="An example of a progress bar in a complete or successful state, with a green track, optional check-circle icon, and a title that indicates its status: 'Validated account credentials.'" width="560" />

### In a table

Use a progress bar in a table to communicate the status of processes or tasks within it.

Place a progress bar into a table just as you would other table content. If a progress bar records the progress of multiple line items, group these items in adjoining cells and keep the progress bar in-line with the first item it pertains to. For multi-item progress bars that apply to non-consecutive items, consider adding a progress bar in-line with each individual item.

If your table includes multiple progress bars, designate a “Status” or “Progress” column for each one.


<img src="./img/progress-bar-in-table.png" alt="A visual example of how to successfully place progress bars in a table." width="543" />

### In a dashboard view

Use a progress bar in a dashboard view to track the progress trends within each card component on a page.

<img src="./img/progress-bar-in-dashboard.png" alt="A visual example of how to successfully place progress bars in dashboard views." width="543" />

### During a file download

Use a [toast notification](/components/alert/design-guidelines/#using-toast-alerts) and a progress bar to demonstrate progress during a file download.

<img src="./img/progress-bar-during-file-download.png" alt="A visual example of how to successfully place progress bars in toast alerts to communicate progress during a file download." width="543" />

### In a wizard

**Never** use a progress bar in a wizard to indicate progress through wizard steps, since a wizard’s steps sidebar already communicates this information.

Only use a progress bar in a wizard if its final validation process will take more than a few seconds. As users wait for their changes to be processed, display a progress screen that includes a progress title, progress bar, and an optional 1-2 sentence description to provide more details about the validation step or give users a better idea of how long this process might take.

<img src="./img/progress-bar-in-wizard.png" alt="A visual example of how to successfully place a progress bar in a wizard to express a final validation process." width="543" />

To learn more about using progress bars in wizard validation progress screens, see our [wizard guidelines](/components/wizard/design-guidelines).

## Spacing 

Right-align progress value text when it’s placed above the progress track, in line with the title. 

<img src="./img/progress-bar-right-aligned-progress-value.png" alt="A visual example of a progress bar with right-aligned progress value text above the progress track." width="560" />

Left-align progress value text when it’s placed to the right of the track.

<img src="./img/progress-bar-left-aligned-progress-value.png" alt="A visual example of a progress bar with left-aligned progress value text in line with the progress track." width="616" />

Always set an “outside fixed width measure” for determinate progress bars. This fixed spacing should solve alignment use cases in which stacked progress bar values vary in length. 

## Placement

<img src="./img/progress-bar-do-dont.png" alt="A visual example of how to successfully place a progress bar in your designs, side by side with an example of unsuccessful placement. Never isolate a progress bar above, below, or outside of its corresponding content view — always align it with its relevant content." width="1135"/>

Always place progress bars in alignment with their relevant context, such as the feature, function, or task they reflect. Keep progress bars within the user’s line of sight: Never isolate a progress bar at the top or bottom of a page, or outside of its relevant content view.

Use progress bars to communicate progress in a variety of contexts including:

* [In a table](#in-a-table)
* [In a dashboard view](#in-a-dashboard-view)
* [During a file download](#during-a-file-download)
* [In a wizard](#in-a-wizard)


## Content considerations

Progress bars should be self-explanatory and therefore include minimal written content: A title and an optional progress value. 

In some use cases, longer progress bars might feature multiple lines of copy that change as a process moves through several phases. Default to one title per progress bar, unless your progress bar measures a multi-step process or procedure that isn’t detailed elsewhere.

### Titles

Keep progress bar titles short and specific, between 1-3 words. Use verbs that clearly communicate each process and avoid using generalizations like “This may take a few minutes.” 

Never punctuate progress bar titles, since they consist of fragments, not full sentences. Avoid using ellipses to communicate a loading state — progress bars indicate a process is “in progress” on their own.

<div class="ws-content-table">

| **Do**                      | **Don't**                  |
|:-------------------------------:|:--------------------------:|
| Downloading [application name] | Your application is downloading... | 
| Creating cache | This may take a few minutes... | 
| Validating account credentials | We're validating your account credentials| 

</div> 

In addition to status styling, use verb tense to communicate the state of a process: In progress, failed, or complete.

For **in progress** statuses, write your progress bar title with present participles (—ing) to share that a process is underway. Avoid passive voice by starting each title with the present participle ("-ing") form of your task’s verb.

<div class="ws-content-table">

| **Do**                      | **Don't**                  |
|:-------------------------------:|:--------------------------:|
| Installing cluster | Cluster is installing | 
| Creating cache | Cluster creation in progress | 

</div>

For **failed** statuses, write your progress bar title in past tense. Avoid telling users a process “failed” in favor of providing a more specific description.

<div class="ws-content-table">

| **Do**                      | **Don't**                  |
|:-------------------------------:|:--------------------------:|
| Could not install cluster | Cluster installation failed | 
| Could not validate account credentials | Account validation unsuccessful | 

</div>

For **complete** statuses, write your progress bar title in past tense. Use this brief line to confirm that a process or task succeeded. Avoid using adverbs like “successfully” by simply stating the action happened.

<div class="ws-content-table">

| **Do**                      | **Don't**                  |
|:-------------------------------:|:--------------------------:|
| Cluster installed | Installation is complete | 
| Validated account credentials | Successfully validated account credentials | 

</div>

Progress bars should only use content in their title and progress value. Never write additional content inside the progress track.

### Styling for statuses
Styling for progress bar statuses should follow accessibility guidelines by communicating each state through several messaging types: Color, microcopy, and icons. 
