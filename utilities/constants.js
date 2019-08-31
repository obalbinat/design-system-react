"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PANEL = exports.NOTIFICATION = exports.MODAL = exports.MENU_PICKLIST = exports.MENU_DROPDOWN_TRIGGER = exports.MENU_DROPDOWN = exports.MEDIA_OBJECT = exports.LOOKUP = exports.LISTBOX_OF_PILL_OPTIONS = exports.LIST_ITEM_LABEL = exports.LIST_ITEM = exports.LIST = exports.ILLUSTRATION = exports.ICON_INPUT = exports.ICON_SETTINGS = exports.ICON = exports.HIGHLIGHTER = exports.GRID = exports.GLOBAL_NAVIGATION_BAR_APP_LAUNCHER = exports.GLOBAL_NAVIGATION_BAR_REGION = exports.GLOBAL_NAVIGATION_BAR_LINK = exports.GLOBAL_NAVIGATION_BAR_LABEL = exports.GLOBAL_NAVIGATION_BAR_DROPDOWN = exports.GLOBAL_NAVIGATION_BAR_BUTTON = exports.GLOBAL_NAVIGATION_BAR = exports.GLOBAL_HEADER_TOOL = exports.GLOBAL_HEADER_TASK = exports.GLOBAL_HEADER_SETUP = exports.GLOBAL_HEADER_SEARCH = exports.GLOBAL_HEADER_PROFILE = exports.GLOBAL_HEADER_NOTIFICATIONS = exports.GLOBAL_HEADER_HELP = exports.GLOBAL_HEADER_FAVORITES = exports.GLOBAL_HEADER_DROPDOWN = exports.GLOBAL_HEADER_BUTTON = exports.GLOBAL_HEADER = exports.SEARCH = exports.TEXTAREA = exports.INPUT = exports.FORMS_INLINE_EDIT = exports.CHECKBOX = exports.FILTER = exports.EXPRESSION_FORMULA = exports.EXPRESSION_CONDITION = exports.EXPRESSION_GROUP = exports.EXPRESSION = exports.EXPANDABLE_SECTION = exports.FILES_ACTIONS = exports.FILES_FIGURE = exports.FILES_MORE = exports.FILES_FILE = exports.FILES = exports.DIALOG = exports.DYNAMIC_ICON = exports.DEPRECATED_WARNING = exports.DATE_PICKER = exports.DATA_TABLE_ROW = exports.DATA_TABLE_ROW_ACTIONS = exports.DATA_TABLE_HEADER_CELL = exports.DATA_TABLE_HEAD = exports.DATA_TABLE_COLUMN = exports.DATA_TABLE_CELL = exports.DATA_TABLE = exports.COMBOBOX = exports.COLOR_PICKER = exports.CAROUSEL_AUTOPLAY_BUTTON = exports.CAROUSEL_NAVIGATORS = exports.CAROUSEL_ITEM = exports.CAROUSEL_INDICATORS = exports.CAROUSEL = exports.CARD_HEADER = exports.CARD_FOOTER = exports.CARD_FILTER = exports.CARD_EMPTY = exports.CARD_BODY = exports.CARD = exports.BUTTON_ICON = exports.BUTTON_STATEFUL = exports.BUTTON_GROUP = exports.BUTTON = exports.BUILDER_HEADER_TOOLBAR = exports.BUILDER_HEADER_NAV_LINK = exports.BUILDER_HEADER_NAV_DROPDOWN = exports.BUILDER_HEADER_NAV = exports.BUILDER_HEADER = exports.BREADCRUMB = exports.BREAD_CRUMB = exports.BRAND_BAND = exports.BADGE = exports.AVATAR = exports.APP_LAUNCHER_HEADER = exports.APP_LAUNCHER_TILE = exports.APP_LAUNCHER_LINK = exports.APP_LAUNCHER_SECTION = exports.APP_LAUNCHER_EXPANDABLE_SECTION = exports.APP_LAUNCHER = exports.ALERT_CONTAINER = exports.ALERT = exports.ACCORDION_PANEL = exports.ACCORDION = void 0;
exports.WELCOME_MAT_BADGE = exports.WELCOME_MAT_TILE = exports.WELCOME_MAT = exports.VISUAL_PICKER_LINK = exports.VISUAL_PICKER = exports.VERTICAL_NAVIGATION_ITEM = exports.VERTICAL_NAVIGATION = exports.TRIAL_BAR_BUTTON = exports.TRIAL_BAR_DROPDOWN = exports.TRIAL_BAR = exports.TREE_ITEM = exports.TREE_BRANCH = exports.TREE = exports.TOAST_CONTAINER = exports.TOAST = exports.TIME_PICKER = exports.TABS_PANEL = exports.TABS_LIST = exports.TABS = exports.TAB_PANEL = exports.TAB_ITEM = exports.TAB = exports.RADIO_BUTTON_GROUP = exports.RADIO_GROUP = exports.RADIO = exports.SPLIT_VIEW_LISTBOX = exports.SPLIT_VIEW_HEADER = exports.SPLIT_VIEW = exports.SPINNER = exports.SLIDER = exports.SCOPED_NOTIFICATION = exports.SETUP_ASSISTANT_STEP = exports.SETUP_ASSISTANT = exports.PROGRESS_BAR = exports.PROGRESS_RING = exports.PROGRESS_INDICATOR_STEP_VERTICAL = exports.PROGRESS_INDICATOR_STEP = exports.PROGRESS_INDICATOR_PROGRESS = exports.PROGRESS_INDICATOR = exports.POPOVER_TOOLTIP = exports.POPOVER_EDIT_DIALOG = exports.POPOVER = exports.PILL_CONTAINER = exports.PILL = exports.PAGE_HEADER_CONTROL = exports.PAGE_HEADER = exports.PANEL_FILTER_LIST_HEADING = exports.PANEL_FILTER_LIST = exports.PANEL_FILTER_GROUP = void 0;
// ## Components
var ACCORDION = 'SLDSAccordion';
exports.ACCORDION = ACCORDION;
var ACCORDION_PANEL = 'SLDSAccordionPanel';
exports.ACCORDION_PANEL = ACCORDION_PANEL;
var ALERT = 'SLDSAlert';
exports.ALERT = ALERT;
var ALERT_CONTAINER = 'SLDSAlertContainer';
exports.ALERT_CONTAINER = ALERT_CONTAINER;
var APP_LAUNCHER = 'SLDSAppLauncher';
exports.APP_LAUNCHER = APP_LAUNCHER;
var APP_LAUNCHER_EXPANDABLE_SECTION = 'SLDSAppLauncherExpandableSection';
/* Remove at next breaking change */

exports.APP_LAUNCHER_EXPANDABLE_SECTION = APP_LAUNCHER_EXPANDABLE_SECTION;
var APP_LAUNCHER_SECTION = 'SLDSAppLauncherSection';
exports.APP_LAUNCHER_SECTION = APP_LAUNCHER_SECTION;
var APP_LAUNCHER_LINK = 'SLDSAppLauncherLink';
exports.APP_LAUNCHER_LINK = APP_LAUNCHER_LINK;
var APP_LAUNCHER_TILE = 'SLDSAppLauncherTile';
exports.APP_LAUNCHER_TILE = APP_LAUNCHER_TILE;
var APP_LAUNCHER_HEADER = 'SLDSAppLauncherHeader';
exports.APP_LAUNCHER_HEADER = APP_LAUNCHER_HEADER;
var AVATAR = 'SLDSAvatar';
exports.AVATAR = AVATAR;
var BADGE = 'SLDSBadge';
exports.BADGE = BADGE;
var BRAND_BAND = 'SLDSBrandBand';
/* Remove at next breaking change */

exports.BRAND_BAND = BRAND_BAND;
var BREAD_CRUMB = 'SLDSBreadcrumb';
exports.BREAD_CRUMB = BREAD_CRUMB;
var BREADCRUMB = 'SLDSBreadcrumb';
exports.BREADCRUMB = BREADCRUMB;
var BUILDER_HEADER = 'SLDSBuilderHeader';
exports.BUILDER_HEADER = BUILDER_HEADER;
var BUILDER_HEADER_NAV = 'SLDSBuilderHeaderNav';
exports.BUILDER_HEADER_NAV = BUILDER_HEADER_NAV;
var BUILDER_HEADER_NAV_DROPDOWN = 'SLDSBuilderHeaderNavDropdown';
exports.BUILDER_HEADER_NAV_DROPDOWN = BUILDER_HEADER_NAV_DROPDOWN;
var BUILDER_HEADER_NAV_LINK = 'SLDSBuilderHeaderNavLink';
exports.BUILDER_HEADER_NAV_LINK = BUILDER_HEADER_NAV_LINK;
var BUILDER_HEADER_TOOLBAR = 'SLDSBuilderHeaderToolbar';
exports.BUILDER_HEADER_TOOLBAR = BUILDER_HEADER_TOOLBAR;
var BUTTON = 'SLDSButton';
exports.BUTTON = BUTTON;
var BUTTON_GROUP = 'SLDSButtonGroup';
exports.BUTTON_GROUP = BUTTON_GROUP;
var BUTTON_STATEFUL = 'SLDSButtonStateful';
exports.BUTTON_STATEFUL = BUTTON_STATEFUL;
var BUTTON_ICON = 'SLDSButtonIcon'; // a non-interctive icon wrapper for SLDSUtilityIcon

exports.BUTTON_ICON = BUTTON_ICON;
var CARD = 'SLDSCard';
exports.CARD = CARD;
var CARD_BODY = 'SLDSCardBody';
exports.CARD_BODY = CARD_BODY;
var CARD_EMPTY = 'SLDSCardEmpty';
exports.CARD_EMPTY = CARD_EMPTY;
var CARD_FILTER = 'SLDSCardFilter';
exports.CARD_FILTER = CARD_FILTER;
var CARD_FOOTER = 'SLDSCardFooter';
exports.CARD_FOOTER = CARD_FOOTER;
var CARD_HEADER = 'SLDSCardHeader';
exports.CARD_HEADER = CARD_HEADER;
var CAROUSEL = 'SLDSCarousel';
exports.CAROUSEL = CAROUSEL;
var CAROUSEL_INDICATORS = 'SLDSCarouselIndicators';
exports.CAROUSEL_INDICATORS = CAROUSEL_INDICATORS;
var CAROUSEL_ITEM = 'SLDSCarouselItem';
exports.CAROUSEL_ITEM = CAROUSEL_ITEM;
var CAROUSEL_NAVIGATORS = 'SLDSCarouselNavigators';
exports.CAROUSEL_NAVIGATORS = CAROUSEL_NAVIGATORS;
var CAROUSEL_AUTOPLAY_BUTTON = 'SLDSCarouselAutoplayButton';
exports.CAROUSEL_AUTOPLAY_BUTTON = CAROUSEL_AUTOPLAY_BUTTON;
var COLOR_PICKER = 'SLDSColorPicker';
exports.COLOR_PICKER = COLOR_PICKER;
var COMBOBOX = 'SLDSCombobox';
exports.COMBOBOX = COMBOBOX;
var DATA_TABLE = 'SLDSDataTable';
exports.DATA_TABLE = DATA_TABLE;
var DATA_TABLE_CELL = 'SLDSDataTableCell';
exports.DATA_TABLE_CELL = DATA_TABLE_CELL;
var DATA_TABLE_COLUMN = 'SLDSDataTableColumn';
exports.DATA_TABLE_COLUMN = DATA_TABLE_COLUMN;
var DATA_TABLE_HEAD = 'SLDSDataTableHead';
exports.DATA_TABLE_HEAD = DATA_TABLE_HEAD;
var DATA_TABLE_HEADER_CELL = 'SLDSDataTableHeaderCell';
exports.DATA_TABLE_HEADER_CELL = DATA_TABLE_HEADER_CELL;
var DATA_TABLE_ROW_ACTIONS = 'SLDSDataTableRowActions';
exports.DATA_TABLE_ROW_ACTIONS = DATA_TABLE_ROW_ACTIONS;
var DATA_TABLE_ROW = 'SLDSDataTableRow';
exports.DATA_TABLE_ROW = DATA_TABLE_ROW;
var DATE_PICKER = 'SLDSDatePicker';
exports.DATE_PICKER = DATE_PICKER;
var DEPRECATED_WARNING = 'SLDSDeprecatedWarning';
exports.DEPRECATED_WARNING = DEPRECATED_WARNING;
var DYNAMIC_ICON = 'SLDSDynamicIcon';
exports.DYNAMIC_ICON = DYNAMIC_ICON;
var DIALOG = 'SLDSDialog';
exports.DIALOG = DIALOG;
var FILES = 'SLDSFiles';
exports.FILES = FILES;
var FILES_FILE = "SLDSFilesFile";
exports.FILES_FILE = FILES_FILE;
var FILES_MORE = "SLDSFilesMore";
exports.FILES_MORE = FILES_MORE;
var FILES_FIGURE = 'SLDSFilesFigure';
exports.FILES_FIGURE = FILES_FIGURE;
var FILES_ACTIONS = 'SLDSFilesActions';
exports.FILES_ACTIONS = FILES_ACTIONS;
var EXPANDABLE_SECTION = 'SLDSExpandableSection';
exports.EXPANDABLE_SECTION = EXPANDABLE_SECTION;
var EXPRESSION = 'SLDSExpression';
exports.EXPRESSION = EXPRESSION;
var EXPRESSION_GROUP = 'SLDSExpressionGroup';
exports.EXPRESSION_GROUP = EXPRESSION_GROUP;
var EXPRESSION_CONDITION = 'SLDSExpressionCondition';
exports.EXPRESSION_CONDITION = EXPRESSION_CONDITION;
var EXPRESSION_FORMULA = 'SLDSExpressionFormula';
exports.EXPRESSION_FORMULA = EXPRESSION_FORMULA;
var FILTER = 'SLDSFilter';
exports.FILTER = FILTER;
var CHECKBOX = 'SLDSCheckbox';
exports.CHECKBOX = CHECKBOX;
var FORMS_INLINE_EDIT = 'SLDSInlineEdit';
exports.FORMS_INLINE_EDIT = FORMS_INLINE_EDIT;
var INPUT = 'SLDSInput';
exports.INPUT = INPUT;
var TEXTAREA = 'SLDSTextarea';
exports.TEXTAREA = TEXTAREA;
var SEARCH = 'SLDSSearch';
exports.SEARCH = SEARCH;
var GLOBAL_HEADER = 'SLDSGlobalHeader';
exports.GLOBAL_HEADER = GLOBAL_HEADER;
var GLOBAL_HEADER_BUTTON = 'SLDSGlobalHeaderButton';
exports.GLOBAL_HEADER_BUTTON = GLOBAL_HEADER_BUTTON;
var GLOBAL_HEADER_DROPDOWN = 'SLDSGlobalHeaderDropdown';
exports.GLOBAL_HEADER_DROPDOWN = GLOBAL_HEADER_DROPDOWN;
var GLOBAL_HEADER_FAVORITES = 'SLDSGlobalHeaderFavorites';
exports.GLOBAL_HEADER_FAVORITES = GLOBAL_HEADER_FAVORITES;
var GLOBAL_HEADER_HELP = 'SLDSGlobalHeaderHelp';
exports.GLOBAL_HEADER_HELP = GLOBAL_HEADER_HELP;
var GLOBAL_HEADER_NOTIFICATIONS = 'SLDSGlobalHeaderNotifications';
exports.GLOBAL_HEADER_NOTIFICATIONS = GLOBAL_HEADER_NOTIFICATIONS;
var GLOBAL_HEADER_PROFILE = 'SLDSGlobalHeaderProfile';
exports.GLOBAL_HEADER_PROFILE = GLOBAL_HEADER_PROFILE;
var GLOBAL_HEADER_SEARCH = 'SLDSGlobalHeaderSearch';
exports.GLOBAL_HEADER_SEARCH = GLOBAL_HEADER_SEARCH;
var GLOBAL_HEADER_SETUP = 'SLDSGlobalHeaderSetup';
exports.GLOBAL_HEADER_SETUP = GLOBAL_HEADER_SETUP;
var GLOBAL_HEADER_TASK = 'SLDSGlobalHeaderTask';
exports.GLOBAL_HEADER_TASK = GLOBAL_HEADER_TASK;
var GLOBAL_HEADER_TOOL = 'SLDSGlobalHeaderTool';
exports.GLOBAL_HEADER_TOOL = GLOBAL_HEADER_TOOL;
var GLOBAL_NAVIGATION_BAR = 'SLDSGlobalNavigationBar';
exports.GLOBAL_NAVIGATION_BAR = GLOBAL_NAVIGATION_BAR;
var GLOBAL_NAVIGATION_BAR_BUTTON = 'SLDSGlobalNavigationBarButton';
exports.GLOBAL_NAVIGATION_BAR_BUTTON = GLOBAL_NAVIGATION_BAR_BUTTON;
var GLOBAL_NAVIGATION_BAR_DROPDOWN = 'SLDSGlobalNavigationBarDropdown';
exports.GLOBAL_NAVIGATION_BAR_DROPDOWN = GLOBAL_NAVIGATION_BAR_DROPDOWN;
var GLOBAL_NAVIGATION_BAR_LABEL = 'SLDSGlobalNavigationBarLabel';
exports.GLOBAL_NAVIGATION_BAR_LABEL = GLOBAL_NAVIGATION_BAR_LABEL;
var GLOBAL_NAVIGATION_BAR_LINK = 'SLDSGlobalNavigationBarLink';
exports.GLOBAL_NAVIGATION_BAR_LINK = GLOBAL_NAVIGATION_BAR_LINK;
var GLOBAL_NAVIGATION_BAR_REGION = 'SLDSGlobalNavigationBarRegion';
exports.GLOBAL_NAVIGATION_BAR_REGION = GLOBAL_NAVIGATION_BAR_REGION;
var GLOBAL_NAVIGATION_BAR_APP_LAUNCHER = 'SLDSGlobalNavigationBarAppLauncher';
exports.GLOBAL_NAVIGATION_BAR_APP_LAUNCHER = GLOBAL_NAVIGATION_BAR_APP_LAUNCHER;
var GRID = 'SLDSGrid';
exports.GRID = GRID;
var HIGHLIGHTER = 'SLDSHighlighter';
exports.HIGHLIGHTER = HIGHLIGHTER;
var ICON = 'SLDSIcon';
exports.ICON = ICON;
var ICON_SETTINGS = 'SLDSIconSettings';
exports.ICON_SETTINGS = ICON_SETTINGS;
var ICON_INPUT = 'SLDSIconInput';
exports.ICON_INPUT = ICON_INPUT;
var ILLUSTRATION = 'SLDSIllustration';
exports.ILLUSTRATION = ILLUSTRATION;
var LIST = 'SLDSList';
exports.LIST = LIST;
var LIST_ITEM = 'SLDSListItem';
exports.LIST_ITEM = LIST_ITEM;
var LIST_ITEM_LABEL = 'SLDSListItemLabel';
exports.LIST_ITEM_LABEL = LIST_ITEM_LABEL;
var LISTBOX_OF_PILL_OPTIONS = 'SLDSListboxOfPillOptions';
exports.LISTBOX_OF_PILL_OPTIONS = LISTBOX_OF_PILL_OPTIONS;
var LOOKUP = 'SLDSLookup';
exports.LOOKUP = LOOKUP;
var MEDIA_OBJECT = 'SLDSMediaObject';
exports.MEDIA_OBJECT = MEDIA_OBJECT;
var MENU_DROPDOWN = 'SLDSMenuDropdown';
exports.MENU_DROPDOWN = MENU_DROPDOWN;
var MENU_DROPDOWN_TRIGGER = 'SLDSMenuDropdownTrigger';
exports.MENU_DROPDOWN_TRIGGER = MENU_DROPDOWN_TRIGGER;
var MENU_PICKLIST = 'SLDSMenuPicklist';
exports.MENU_PICKLIST = MENU_PICKLIST;
var MODAL = 'SLDSModal';
exports.MODAL = MODAL;
var NOTIFICATION = 'SLDSNotification';
exports.NOTIFICATION = NOTIFICATION;
var PANEL = 'SLDSPanel';
exports.PANEL = PANEL;
var PANEL_FILTER_GROUP = 'SLDSFilterGroup';
exports.PANEL_FILTER_GROUP = PANEL_FILTER_GROUP;
var PANEL_FILTER_LIST = 'SLDSFilterList';
exports.PANEL_FILTER_LIST = PANEL_FILTER_LIST;
var PANEL_FILTER_LIST_HEADING = 'SLDSPanelFilterListHeading';
exports.PANEL_FILTER_LIST_HEADING = PANEL_FILTER_LIST_HEADING;
var PAGE_HEADER = 'SLDSPageHeader';
exports.PAGE_HEADER = PAGE_HEADER;
var PAGE_HEADER_CONTROL = 'SLDSPageHeaderControl';
exports.PAGE_HEADER_CONTROL = PAGE_HEADER_CONTROL;
var PILL = 'SLDSPill';
exports.PILL = PILL;
var PILL_CONTAINER = 'SLDSPillContainer';
exports.PILL_CONTAINER = PILL_CONTAINER;
var POPOVER = 'SLDSPopover';
exports.POPOVER = POPOVER;
var POPOVER_EDIT_DIALOG = 'SLDSPopoverEditDialog';
exports.POPOVER_EDIT_DIALOG = POPOVER_EDIT_DIALOG;
var POPOVER_TOOLTIP = 'SLDSPopoverTooltip';
exports.POPOVER_TOOLTIP = POPOVER_TOOLTIP;
var PROGRESS_INDICATOR = 'SLDSProgressIndicator';
exports.PROGRESS_INDICATOR = PROGRESS_INDICATOR;
var PROGRESS_INDICATOR_PROGRESS = 'SLDSProgressIndicatorProgress';
exports.PROGRESS_INDICATOR_PROGRESS = PROGRESS_INDICATOR_PROGRESS;
var PROGRESS_INDICATOR_STEP = 'SLDSProgressIndicatorStep';
exports.PROGRESS_INDICATOR_STEP = PROGRESS_INDICATOR_STEP;
var PROGRESS_INDICATOR_STEP_VERTICAL = 'SLDSProgressIndicatorStepVertical';
exports.PROGRESS_INDICATOR_STEP_VERTICAL = PROGRESS_INDICATOR_STEP_VERTICAL;
var PROGRESS_RING = 'SLDSProgressRing';
exports.PROGRESS_RING = PROGRESS_RING;
var PROGRESS_BAR = 'SLDSProgressBar';
exports.PROGRESS_BAR = PROGRESS_BAR;
var SETUP_ASSISTANT = 'SLDSSetupAssistant';
exports.SETUP_ASSISTANT = SETUP_ASSISTANT;
var SETUP_ASSISTANT_STEP = 'SLDSSetupAssistantStep';
exports.SETUP_ASSISTANT_STEP = SETUP_ASSISTANT_STEP;
var SCOPED_NOTIFICATION = 'SLDSScopedNotification';
exports.SCOPED_NOTIFICATION = SCOPED_NOTIFICATION;
var SLIDER = 'SLDSSlider';
exports.SLIDER = SLIDER;
var SPINNER = 'SLDSSpinner';
exports.SPINNER = SPINNER;
var SPLIT_VIEW = 'SLDSSplitView';
exports.SPLIT_VIEW = SPLIT_VIEW;
var SPLIT_VIEW_HEADER = 'SLDSSplitViewHeader';
exports.SPLIT_VIEW_HEADER = SPLIT_VIEW_HEADER;
var SPLIT_VIEW_LISTBOX = 'SLDSSplitViewListbox';
exports.SPLIT_VIEW_LISTBOX = SPLIT_VIEW_LISTBOX;
var RADIO = 'SLDSRadio';
exports.RADIO = RADIO;
var RADIO_GROUP = 'SLDSRadioGroup';
exports.RADIO_GROUP = RADIO_GROUP;
var RADIO_BUTTON_GROUP = 'SLDSRadioButtonGroup';
exports.RADIO_BUTTON_GROUP = RADIO_BUTTON_GROUP;
var TAB = 'SLDSTab';
exports.TAB = TAB;
var TAB_ITEM = 'SLDSTabItem';
exports.TAB_ITEM = TAB_ITEM;
var TAB_PANEL = 'SLDSTabPanel';
exports.TAB_PANEL = TAB_PANEL;
var TABS = 'SLDSTabs';
exports.TABS = TABS;
var TABS_LIST = 'SLDSTabsList';
exports.TABS_LIST = TABS_LIST;
var TABS_PANEL = 'SLDSTabsPanel';
exports.TABS_PANEL = TABS_PANEL;
var TIME_PICKER = 'SLDSTimepicker';
exports.TIME_PICKER = TIME_PICKER;
var TOAST = 'SLDSToast';
exports.TOAST = TOAST;
var TOAST_CONTAINER = 'SLDSToastContainer';
exports.TOAST_CONTAINER = TOAST_CONTAINER;
var TREE = 'SLDSTree';
exports.TREE = TREE;
var TREE_BRANCH = 'SLDSTreeBranch';
exports.TREE_BRANCH = TREE_BRANCH;
var TREE_ITEM = 'SLDSTreeItem';
exports.TREE_ITEM = TREE_ITEM;
var TRIAL_BAR = 'SLDSTrialBar';
exports.TRIAL_BAR = TRIAL_BAR;
var TRIAL_BAR_DROPDOWN = 'SLDSTrialBarDropdown';
exports.TRIAL_BAR_DROPDOWN = TRIAL_BAR_DROPDOWN;
var TRIAL_BAR_BUTTON = 'SLDSTrialBarButton';
exports.TRIAL_BAR_BUTTON = TRIAL_BAR_BUTTON;
var VERTICAL_NAVIGATION = 'SLDSVerticalNavigation';
exports.VERTICAL_NAVIGATION = VERTICAL_NAVIGATION;
var VERTICAL_NAVIGATION_ITEM = 'SLDSVerticalNavigationItem';
exports.VERTICAL_NAVIGATION_ITEM = VERTICAL_NAVIGATION_ITEM;
var VISUAL_PICKER = 'SLDSVisualPicker';
exports.VISUAL_PICKER = VISUAL_PICKER;
var VISUAL_PICKER_LINK = 'SLDSVisualPickerLink';
exports.VISUAL_PICKER_LINK = VISUAL_PICKER_LINK;
var WELCOME_MAT = 'SLDSWelcomeMat';
exports.WELCOME_MAT = WELCOME_MAT;
var WELCOME_MAT_TILE = 'SLDSWelcomeMatTile';
exports.WELCOME_MAT_TILE = WELCOME_MAT_TILE;
var WELCOME_MAT_BADGE = 'SLDSWelcomeMatBadge';
exports.WELCOME_MAT_BADGE = WELCOME_MAT_BADGE;