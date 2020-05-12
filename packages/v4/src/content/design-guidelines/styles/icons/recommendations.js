import React from 'react';

const recommendationsArray = [
  [
    {
      style: "",
      iconName: "angle-up",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "AngleUpIcon"
    },
    {
      style: "fas",
      iconName: "fa-angle-right",
      type: "Framework",
      iconUsage: "Indicates expandable elements such as accordions, progressive disclosures, or expandable lists are currently collapsed. Clicking this will expand the element. It also indicates the ability to navigate to the next page in a multipage data set.",
      iconType: "new",
      reactIcon: "AngleRightIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "fa-arrow-circle-o-down",
      type: "",
      iconUsage: "Not included in Font Awesome Free",
      iconType: "old",
      reactIcon: ""
    },
    {
      style: "fas",
      iconName: "fa-arrow-circle-down",
      type: "Status",
      iconUsage: "Represents status: an item (such as a VM) is down",
      iconType: "new",
      reactIcon: "ArrowCircleDownIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "fa-arrow-circle-o-up",
      type: "",
      iconUsage: "Not included in Font Awesome Free",
      iconType: "old",
      reactIcon: ""
    },
    {
      style: "fas",
      iconName: "fa-arrow-circle-up",
      type: "Status",
      iconUsage: "Represents status: an item (such as a VM) is up",
      iconType: "new",
      reactIcon: "ArrowCircleUpIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "fas fa-sort",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "SortIcon"
    },
    {
      style: "fas",
      iconName: "fa-arrows-alt-v",
      type: "Framework",
      iconUsage: "Indicates the availability of a sorting function in a table header",
      iconType: "new",
      reactIcon: "ArrowsAltVIcon"
    }
  ],
  [
    {
      style: "fas",
      iconName: "fas fa-calendar-alt",
      type: "",
      iconUsage: "Incorrect icon used in react PF component",
      iconType: "old",
      reactIcon: "CalendarAltIcon"
    },
    {
      style: "far",
      iconName: "fa-calendar-alt",
      type: "Framework",
      iconUsage: "Indicates a date picker function is available",
      iconType: "new",
      reactIcon: "OutlinedCalendarAltIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "fa-columns",
      type: "",
      iconUsage: "Not included in Font Awesome Free",
      iconType: "old",
      reactIcon: ""
    },
    {
      style: "fas",
      iconName: "fa-columns",
      type: "Action",
      iconUsage: "Indicates the ability to manage columns for a table view",
      iconType: "new",
      reactIcon: "ColumnsIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "fas fa-plus-square",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "PlusSquareIcon"
    },
    {
      style: "fas",
      iconName: "fa-plus-circle",
      type: "Action",
      iconUsage: "Indicates the ability to create an item",
      iconType: "new",
      reactIcon: "PlusCircleIcon"
    },
    {
      style: "",
      iconName: "pf-icon-add-circle-o",
      type: "Action",
      iconUsage: "Indicates the ability to create an item. Use this if there are many instances of this icon in a UI (data list, table, etc) to reduce visual noise.",
      iconType: "new",
      reactIcon: "AddCircleOIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-rebalance",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "RebalanceIcon"
    },
    {
      style: "fas",
      iconName: "fa-balance-scale",
      type: "Status",
      iconUsage: "Represents status: an item needs rebalancing",
      iconType: "new",
      reactIcon: "BalanceScaleIcon"
    }
  ],
  [
    {
      style: "far",
      iconName: "fa-bell",
      type: "OutlinedBellIcon",
      iconUsage: "Framework",
      iconType: "old",
      reactIcon: "OutlinedBellIcon"
    },
    {
      style: "fas",
      iconName: "fa-bell-slash",
      type: "BellSlashIcon",
      iconUsage: "Status",
      iconType: "old",
      reactIcon: "BellSlashIcon"
    },
    {
      style: "fas",
      iconName: "fa-bell",
      type: "BellIcon",
      iconUsage: "Indicates the ability to open a notification drawer.",
      iconType: "new",
      reactIcon: "BellIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "Sort Down",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "SortDownIcon"
    },
    {
      style: "fas",
      iconName: "fa-caret-down",
      type: "Framework",
      iconUsage: "Indicates the ability to acces options for components like drop-downs, filters and page ranges",
      iconType: "new",
      reactIcon: "CaretDownIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "fa-clock-o",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: ""
    },
    {
      style: "far",
      iconName: "fa-clock",
      type: "Framework",
      iconUsage: "If read-only, paired with a label to indicate a time interval. If interactive, indicates the availability of a time picker control.",
      iconType: "new",
      reactIcon: "OutlinedClockIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "fas fa-caret-down",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "CaretDownIcon"
    },
    {
      style: "",
      iconName: "fas fa-sort-amount-up",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "SortAmountUpIcon"
    },
    {
      style: "",
      iconName: "sort-alpha-down-alt",
      type: "",
      iconUsage: "For ordering a data set alphabetically (Descending)",
      iconType: "old",
      reactIcon: "SortAlphaDownAltIcon"
    },
    {
      style: "",
      iconName: "sort-numeric-down-alt",
      type: "",
      iconUsage: "For ordering a data set numerically (Descending)",
      iconType: "old",
      reactIcon: "SortNumericDownAltIcon"
    },
    {
      style: "fas",
      iconName: "fa-sort-amount-down",
      type: "Action",
      iconUsage: "Represents the largest-to-smallest, highest-to-lowest or last-to-first (descending) sort order for any data type.",
      iconType: "new",
      reactIcon: "SortAmountDownIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "fas fa-caret-up",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "CaretUpIcon"
    },
    {
      style: "",
      iconName: "pf-icon-sort-common-asc",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "PficonSortCommonAscIcon"
    },
    {
      style: "",
      iconName: "sort-alpha-down",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "SortAlphaDownIcon"
    },
    {
      style: "",
      iconName: "sort-numeric-down",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "SortNumericDownIcon"
    },
    {
      style: "fas",
      iconName: "fa-sort-amount-down-alt",
      type: "Action",
      iconUsage: "Represents the smallest-to-largest, lowest-to-highest or first-to-last (ascending) sort order for any data type.",
      iconType: "new",
      reactIcon: "SortAmountDownAltIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-ok",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "OkIcon"
    },
    {
      style: "",
      iconName: "Outlined Check Circle",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "OutlinedCheckCircleIcon"
    },
    {
      style: "fas",
      iconName: "fa-check-circle",
      type: "Status",
      iconUsage: "Represents alert status: success",
      iconType: "new",
      reactIcon: "CheckCircleIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-orders",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "OrdersIcon"
    },
    {
      style: "fas",
      iconName: "fa-clipboard-check",
      type: "Object",
      iconUsage: "Represents orders or tasks",
      iconType: "new",
      reactIcon: "ClipboardCheckIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "fas fa-cogs",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "CogsIcon"
    },
    {
      style: "",
      iconName: "sliders-v (PRO only, NOT free)",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: ""
    },
    {
      style: "",
      iconName: "pficon-settings",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: ""
    },
    {
      style: "fas",
      iconName: "fa-cog",
      type: "Action",
      iconUsage: "Indicates availability of configurable settings",
      iconType: "new",
      reactIcon: "CogIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-chat",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "ChatIcon"
    },
    {
      style: "far",
      iconName: "fa-comments",
      type: "Framework",
      iconUsage: "Indicates availability of commenting",
      iconType: "new",
      reactIcon: "OutlinedCommentsIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-screen",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "ScreenIcon"
    },
    {
      style: "",
      iconName: "TV",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "TvIcon"
    },
    {
      style: "fas",
      iconName: "fa-desktop",
      type: "Object",
      iconUsage: "Represents a desktop, workstation or terminal",
      iconType: "new",
      reactIcon: "DesktopIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: ""
    },
    {
      style: "fas",
      iconName: "fa-exclamation-circle",
      type: "Status",
      iconUsage: "Represents alert status: danger, major error or critical error",
      iconType: "new",
      reactIcon: "ExclamationCircleIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-warning-triangle",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "WarningTriangleIcon"
    },
    {
      style: "fas",
      iconName: "fa-exclamation-triangle",
      type: "Status",
      iconUsage: "Represents alert status: warning",
      iconType: "new",
      reactIcon: "ExclamationTriangleIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon pf-icon-filter",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "FilterAltIcon"
    },
    {
      style: "fas",
      iconName: "fa-filter",
      type: "Action",
      iconUsage: "Indicates the ability to filter search results or datasets",
      iconType: "new",
      reactIcon: "FilterIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-messages",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "MessagesIcon"
    },
    {
      style: "fas",
      iconName: "fa-flag",
      type: "Object",
      iconUsage: "If read-only, paired with a label to represent a message. If interactive, indicates the ability to access messages",
      iconType: "new",
      reactIcon: "FlagIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-folder-close",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "FolderCloseIcon"
    },
    {
      style: "fas",
      iconName: "fa-folder",
      type: "Framework",
      iconUsage: "Represents a collapsed hierarchical group. Indicates the ability to expand the group.",
      iconType: "new",
      reactIcon: "FolderIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-folder-open",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "FolderOpenAltIcon"
    },
    {
      style: "fas",
      iconName: "fa-folder-open",
      type: "Framework",
      iconUsage: "Represents an expanded hierarchical group. Indicates the ability to collapse the group.",
      iconType: "new",
      reactIcon: "FolderOpenIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-container-node",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "ContainerNodeIcon"
    },
    {
      style: "fas",
      iconName: "fa-hdd",
      type: "Object",
      iconUsage: "Represents a single node or host",
      iconType: "new",
      reactIcon: "HddIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon pf-icon-history",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: ""
    },
    {
      style: "fas",
      iconName: "fa-history",
      type: "Status",
      iconUsage: "Represents status: restarting",
      iconType: "new",
      reactIcon: "HistoryIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pficon-history",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "PficonHistoryIcon"
    },
    {
      style: "",
      iconName: "Undo Alt",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "UndoAltIcon"
    },
    {
      style: "fas",
      iconName: "fa-undo",
      type: "Action",
      iconUsage: "Indicates the ability to undo an a step in a historical log",
      iconType: "new",
      reactIcon: "UndoIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon pf-icon-home",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "HomeAltIcon"
    },
    {
      style: "fas",
      iconName: "fa-home",
      type: "Framework",
      iconUsage: "Indicates a link to a default/home page",
      iconType: "new",
      reactIcon: "HomeIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-info",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "InfoAltIcon"
    },
    {
      style: "fas",
      iconName: "fa-info-circle",
      type: "Status",
      iconUsage: "Represents alert status: information",
      iconType: "new",
      reactIcon: "InfoCircleIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pficon-key",
      type: "",
      iconUsage: "Used to reference an SSH key or something similar",
      iconType: "old",
      reactIcon: ""
    },
    {
      style: "fas",
      iconName: "fa-key",
      type: "Object",
      iconUsage: "Represents an SSH key or similar security concepts",
      iconType: "new",
      reactIcon: "KeyIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-locked",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "LockedIcon"
    },
    {
      style: "fas",
      iconName: "fa-lock",
      type: "Status",
      iconUsage: "Represents status: locked",
      iconType: "new",
      reactIcon: "LockIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-unlocked",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "UnlockedIcon"
    },
    {
      style: "fas",
      iconName: "fa-lock-open",
      type: "Status",
      iconUsage: "Represents status: unlocked",
      iconType: "new",
      reactIcon: "LockOpenIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "fa-map-marker",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "MapMarkerAltIcon"
    },
    {
      style: "fas",
      iconName: "fa-map-marker",
      type: "Framework",
      iconUsage: "Represents a locale",
      iconType: "new",
      reactIcon: "MapMarkerIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon pf-icon-memory",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "MemoryAltIcon"
    },
    {
      style: "fas",
      iconName: "fa-memory",
      type: "Object",
      iconUsage: "Represents the memory on a device",
      iconType: "new",
      reactIcon: "MemoryIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-cpu",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "CpuIcon"
    },
    {
      style: "fas",
      iconName: "fa-microchip",
      type: "Object",
      iconUsage: "Represents the CPU of a device",
      iconType: "new",
      reactIcon: "MicrochipIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "Outline Pause Circle",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "OutlinedPauseCircleIcon"
    },
    {
      style: "",
      iconName: "pf-icon-paused",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "PausedIcon"
    },
    {
      style: "fas",
      iconName: "fa-pause-circle",
      type: "Status",
      iconUsage: "Represents status: an interruption and/or stoppage of a process",
      iconType: "new",
      reactIcon: "PauseCircleIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "fas fa-edit",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "EditIcon"
    },
    {
      style: "",
      iconName: "pf-icon pf-icon-edit",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "EditAltIcon"
    },
    {
      style: "fas",
      iconName: "fa-pencil-alt",
      type: "Action",
      iconUsage: "Indicates the ability to edit",
      iconType: "new",
      reactIcon: "PencilAltIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-unplugged",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "UnpluggedIcon"
    },
    {
      style: "",
      iconName: "pf-icon-plugged",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "PluggedIcon"
    },
    {
      style: "",
      iconName: "-",
      type: "",
      iconUsage: "These icons remain the PatternFly font, but their use is now obsolete",
      iconType: "new",
      reactIcon: ""
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-on",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "OnIcon"
    },
    {
      style: "fas",
      iconName: "fa-power-off",
      type: "Status",
      iconUsage: "Represents status: powered on",
      iconType: "new",
      reactIcon: "PowerOffIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon pf-icon-print",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "PrintAltIcon"
    },
    {
      style: "fas",
      iconName: "fa-print",
      type: "Action",
      iconUsage: "Indicates the availability of a print function",
      iconType: "new",
      reactIcon: "PrintIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-help",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "HelpIcon"
    },
    {
      style: "far",
      iconName: "fa-question-circle",
      type: "Framework",
      iconUsage: "Indicates the availability of contextual help or a help system",
      iconType: "new",
      reactIcon: "OutlinedQuestionCircleIcon"
    },
    {
      style: "fas",
      iconName: "fa-question-circle",
      type: "Framework",
      iconUsage: "Indicates the availability of contextual help or a help system",
      iconType: "new",
      reactIcon: "QuestionCircleIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-rebooting",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "RebootingIcon"
    },
    {
      style: "",
      iconName: "pf-icon-spinner2",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "Spinner2Icon"
    },
    {
      style: "fas",
      iconName: "fa-redo",
      type: "Action",
      iconUsage: "Indicates the ability to refresh. Please use the animated spinner to indicate that something is “loading” or in the middle of processing",
      iconType: "new",
      reactIcon: "RedoIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pficon-search",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: ""
    },
    {
      style: "fas",
      iconName: "fa-search",
      type: "Action",
      iconUsage: "Indicates that that user may perform a search",
      iconType: "new",
      reactIcon: "SearchIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "Sync",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "SyncIcon"
    },
    {
      style: "fas",
      iconName: "fa-sync-alt",
      type: "Action",
      iconUsage: "Indicates the availability of a sync action",
      iconType: "new",
      reactIcon: "SyncAltIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "fa-table",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: ""
    },
    {
      style: "fas",
      iconName: "fa-table",
      type: "View Type",
      iconUsage: "Represents data view content in a table format",
      iconType: "new",
      reactIcon: "TableIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "fa-tachometer",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: ""
    },
    {
      style: "fas",
      iconName: "fa-tachometer-alt",
      type: "View Type",
      iconUsage: "Indicates the availability of a dashboard view",
      iconType: "new",
      reactIcon: "TachometerAltIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "fa-th",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: ""
    },
    {
      style: "fas",
      iconName: "fa-th",
      type: "View Type",
      iconUsage: "Represents data view content in a small card format",
      iconType: "new",
      reactIcon: "ThIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "fa-th-large",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: ""
    },
    {
      style: "fas",
      iconName: "fa-th-large",
      type: "View Type",
      iconUsage: "Represents data view content in a large card format",
      iconType: "new",
      reactIcon: "ThLargeIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-thumb-tack",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "ThumbTackIcon"
    },
    {
      style: "fas",
      iconName: "fa-thumbtack",
      type: "Framework",
      iconUsage: "Indicates the ability to pin an item",
      iconType: "new",
      reactIcon: "ThumbtackIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-close",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "CloseIcon"
    },
    {
      style: "fas",
      iconName: "fa-times",
      type: "Action",
      iconUsage: "Indicates the ability to close a modal or other panel",
      iconType: "new",
      reactIcon: "TimesIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-error-circle-o",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "ErrorCircleOIcon"
    },
    {
      style: "fas",
      iconName: "fa-times-circle",
      type: "Action",
      iconUsage: "Indicates the ability to clear existing data, such as filter criteria or tags",
      iconType: "new",
      reactIcon: "TimesCircleIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-delete",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "Remove2Icon"
    },
    {
      style: "fas",
      iconName: "fa-trash",
      type: "Action",
      iconUsage: "Indicates the ability to delete",
      iconType: "new",
      reactIcon: "TrashIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-user",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "UserSecIcon"
    },
    {
      style: "",
      iconName: "User Alt",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "UserAltIcon"
    },
    {
      style: "fas",
      iconName: "fa-user",
      type: "Object",
      iconUsage: "If read-only, represents a user (in a dataset, precedes a username). If interactive, indicates the availability of a user profile (often in the masthead, coupled with a username)",
      iconType: "new",
      reactIcon: "UserIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon pf-icon-users",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "UsersAltIcon"
    },
    {
      style: "",
      iconName: "pf-icon-project",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "ProjectIcon"
    },
    {
      style: "",
      iconName: "fas fa-user-friends",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "UserFriendsIcon"
    },
    {
      style: "fas",
      iconName: "fa-users",
      type: "Object",
      iconUsage: "Represents multiple users, a user grouping or project",
      iconType: "new",
      reactIcon: "UsersIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-maintenance",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "MaintenanceIcon"
    },
    {
      style: "",
      iconName: "Tools",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "ToolsIcon"
    },
    {
      style: "fas",
      iconName: "fa-wrench",
      type: "Status",
      iconUsage: "Represents status: in preparation for maintenance",
      iconType: "new",
      reactIcon: "WrenchIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pficon-arrow",
      type: "",
      iconUsage: "Open in a new tab or window",
      iconType: "old",
      reactIcon: "ArrowIcon"
    },
    {
      style: "",
      iconName: "pficon-applications",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "ApplicationsIcon"
    },
    {
      style: "far",
      iconName: "window-restore",
      type: "Action",
      iconUsage: "Indicates the ability to open link in a new window",
      iconType: "new",
      reactIcon: "OutlinedWindowRestoreIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pficon-arrow",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "ArrowIcon"
    },
    {
      style: "fas",
      iconName: "fas fa-share-square",
      type: "Action",
      iconUsage: "Indicates the ability to share via various methods with others",
      iconType: "new",
      reactIcon: "ShareSquareIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pficon-on-running",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "OnRunningIcon"
    },
    {
      style: "",
      iconName: "pf-icon-running",
      type: "Status",
      iconUsage: "Represents status: an item is running or active",
      iconType: "new",
      reactIcon: ""
    }
  ],
  [
    {
      style: "",
      iconName: "fas fa-save",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "SaveIcon"
    },
    {
      style: "",
      iconName: "pficon-save",
      type: "Action",
      iconUsage: "Indicates the ability to save a file or other object",
      iconType: "new",
      reactIcon: "SaveAltIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pficon-server",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "ServerAltIcon"
    },
    {
      style: "",
      iconName: "pficon-cluster",
      type: "Object",
      iconUsage: "Represents a cluster or server",
      iconType: "new",
      reactIcon: "ClusterIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pficon-dragdrop",
      type: "",
      iconUsage: "Indicates the ability to drag/drop an item",
      iconType: "old",
      reactIcon: "PficonDragdropIcon"
    },
    {
      style: "fas",
      iconName: "grip-horizontal",
      type: "Framework",
      iconUsage: "Indicates the ability to move a vertically-oriented component via drag and drop",
      iconType: "new",
      reactIcon: "GripHorizontalIcon"
    },
    {
      style: "fas",
      iconName: "grip-vertical",
      type: "Framework",
      iconUsage: "Indicates the ability to move a horizontally-oriented component via drag and drop",
      iconType: "new",
      reactIcon: "GripVerticalIcon"
    }
  ],
  [
    {
      style: "",
      iconName: "pf-icon-spinner",
      type: "",
      iconUsage: "",
      iconType: "old",
      reactIcon: "SpinnerAltIcon"
    },
    {
      style: "",
      iconName: "pf-icon-spinner",
      type: "",
      iconUsage: "Indicates data is loading",
      iconType: "old",
      reactIcon: "SpinnerIcon"
    },
    {
      style: "",
      iconName: "Use PF Spinner component",
      type: "",
      iconUsage: "Indicates the ability to move a horizontally-oriented component via drag and drop",
      iconType: "new",
      reactIcon: "n/a"
    }
  ]
];

export const iconRecommendations = recommendationsArray.map(recGroup => (
  recGroup.reduce((acc, cur) => {
    acc[cur.iconType].push({
      name: cur.iconName,
      icon: cur.iconName,
      style: cur.style,
      reactIcon: cur.reactIcon
    });
    if (cur.iconType === 'new') {
      acc['iconUsage'].push(<div>{cur.iconUsage}</div>);
    }
    return acc;
  }, {
    old: [],
    new: [],
    iconUsage: []
  })
))
