export interface IMpcCommand {
    value: number;
    info: string;
}

export interface IMpcCommandsList {
    SET_VOLUME: IMpcCommand
    SEEK: IMpcCommand;
    QUICK_OPEN_FILE: IMpcCommand;
    OPEN_FILE: IMpcCommand;
    OPEN_DVD_BD: IMpcCommand;
    OPEN_DEVICE: IMpcCommand;
    REOPEN_FILE: IMpcCommand;
    MOVE_TO_RECYCLE_BIN: IMpcCommand;
    SAVE_A_COPY: IMpcCommand;
    SAVE_IMAGE: IMpcCommand;
    SAVE_IMAGE_AUTO: IMpcCommand;
    SAVE_THUMBNAILS: IMpcCommand;
    LOAD_SUBTITLE: IMpcCommand;
    SAVE_SUBTITLE: IMpcCommand;
    CLOSE: IMpcCommand;
    PROPERTIES: IMpcCommand;
    EXIT: IMpcCommand;
    PLAY_PAUSE: IMpcCommand;
    PLAY: IMpcCommand;
    PAUSE: IMpcCommand;
    STOP: IMpcCommand;
    FRAMESTEP: IMpcCommand;
    FRAMESTEP_BACK: IMpcCommand;
    GO_TO: IMpcCommand;
    INCREASE_RATE: IMpcCommand;
    DECREASE_RATE: IMpcCommand;
    RESET_RATE: IMpcCommand;
    AUDIO_DELAY_PLUS_10_MS: IMpcCommand;
    AUDIO_DELAY_MINUS_10_MS: IMpcCommand;
    JUMP_FORWARD_SMALL: IMpcCommand;
    JUMP_BACKWARD_SMALL: IMpcCommand;
    JUMP_FORWARD_MEDIUM: IMpcCommand;
    JUMP_BACKWARD_MEDIUM: IMpcCommand;
    JUMP_FORWARD_LARGE: IMpcCommand;
    JUMP_BACKWARD_LARGE: IMpcCommand;
    JUMP_FORWARD_KEYFRAME: IMpcCommand;
    JUMP_BACKWARD_KEYFRAME: IMpcCommand;
    JUMP_TO_BEGINNING: IMpcCommand;
    NEXT: IMpcCommand;
    PREVIOUS: IMpcCommand;
    NEXT_FILE: IMpcCommand;
    PREVIOUS_FILE: IMpcCommand;
    TUNER_SCAN: IMpcCommand;
    QUICK_ADD_FAVORITE: IMpcCommand;
    TOGGLE_CAPTION_AND_MENU: IMpcCommand;
    TOGGLE_SEEKER: IMpcCommand;
    TOGGLE_CONTROLS: IMpcCommand;
    TOGGLE_INFORMATION: IMpcCommand;
    TOGGLE_STATISTICS: IMpcCommand;
    TOGGLE_STATUS: IMpcCommand;
    TOGGLE_SUBRESYNC_BAR: IMpcCommand;
    TOGGLE_PLAYLIST_BAR: IMpcCommand;
    TOGGLE_CAPTURE_BAR: IMpcCommand;
    TOGGLE_NAVIGATION_BAR: IMpcCommand;
    TOGGLE_DEBUG_SHADERS: IMpcCommand;
    VIEW_MINIMAL: IMpcCommand;
    VIEW_COMPACT: IMpcCommand;
    VIEW_NORMAL: IMpcCommand;
    FULLSCREEN: IMpcCommand;
    FULLSCREEN_WITHOUT_RES_CHANGE: IMpcCommand;
    ZOOM_50: IMpcCommand;
    ZOOM_100: IMpcCommand;
    ZOOM_200: IMpcCommand;
    ZOOM_AUTO_FIT: IMpcCommand;
    ZOOM_AUTO_FIT_LARGER_ONLY: IMpcCommand;
    NEXT_AR_PRESET: IMpcCommand;
    VIDFRM_HALF: IMpcCommand;
    VIDFRM_NORMAL: IMpcCommand;
    VIDFRM_DOUBLE: IMpcCommand;
    VIDFRM_STRETCH: IMpcCommand;
    VIDFRM_INSIDE: IMpcCommand;
    VIDFRM_ZOOM_1: IMpcCommand;
    VIDFRM_ZOOM_2: IMpcCommand;
    VIDFRM_OUTSIDE: IMpcCommand;
    VIDFRM_SWITCH_ZOOM: IMpcCommand;
    ALWAYS_ON_TOP: IMpcCommand;
    PNS_RESET: IMpcCommand;
    PNS_INC_SIZE: IMpcCommand;
    PNS_INC_WIDTH: IMpcCommand;
    PNS_INC_HEIGHT: IMpcCommand;
    PNS_DEC_SIZE: IMpcCommand;
    PNS_DEC_WIDTH: IMpcCommand;
    PNS_DEC_HEIGHT: IMpcCommand;
    PNS_CENTER: IMpcCommand;
    PNS_LEFT: IMpcCommand;
    PNS_RIGHT: IMpcCommand;
    PNS_UP: IMpcCommand;
    PNS_DOWN: IMpcCommand;
    PNS_UP_LEFT: IMpcCommand;
    PNS_UP_RIGHT: IMpcCommand;
    PNS_DOWN_LEFT: IMpcCommand;
    PNS_DOWN_RIGHT: IMpcCommand;
    PNS_ROTATE_X_PLUS: IMpcCommand;
    PNS_ROTATE_X_MINUS: IMpcCommand;
    PNS_ROTATE_Y_PLUS: IMpcCommand;
    PNS_ROTATE_Y_MINUS: IMpcCommand;
    PNS_ROTATE_Z_PLUS: IMpcCommand;
    PNS_ROTATE_Z_MINUS: IMpcCommand;
    VOLUME_UP: IMpcCommand;
    VOLUME_DOWN: IMpcCommand;
    VOLUME_MUTE: IMpcCommand;
    VOLUME_BOOST_INCREASE: IMpcCommand;
    VOLUME_BOOST_DECREASE: IMpcCommand;
    VOLUME_BOOST_MIN: IMpcCommand;
    VOLUME_BOOST_MAX: IMpcCommand;
    TOGGLE_CUSTOM_CHANNEL_MAPPING: IMpcCommand;
    TOGGLE_NORMALIZATION: IMpcCommand;
    TOGGLE_REGAIN_VOLUME: IMpcCommand;
    BRIGHTNESS_INCREASE: IMpcCommand;
    BRIGHTNESS_DECREASE: IMpcCommand;
    CONTRAST_INCREASE: IMpcCommand;
    CONTRAST_DECREASE: IMpcCommand;
    HUE_INCREASE: IMpcCommand;
    HUE_DECREASE: IMpcCommand;
    SATURATION_INCREASE: IMpcCommand;
    SATURATION_DECREASE: IMpcCommand;
    RESET_COLOR_SETTINGS: IMpcCommand;
    DVD_TITLE_MENU: IMpcCommand;
    DVD_ROOT_MENU: IMpcCommand;
    DVD_SUBTITLE_MENU: IMpcCommand;
    DVD_AUDIO_MENU: IMpcCommand;
    DVD_ANGLE_MENU: IMpcCommand;
    DVD_CHAPTER_MENU: IMpcCommand;
    DVD_MENU_LEFT: IMpcCommand;
    DVD_MENU_RIGHT: IMpcCommand;
    DVD_MENU_UP: IMpcCommand;
    DVD_MENU_DOWN: IMpcCommand;
    DVD_MENU_ACTIVATE: IMpcCommand;
    DVD_MENU_BACK: IMpcCommand;
    DVD_MENU_LEAVE: IMpcCommand;
    BOSS_KEY: IMpcCommand;
    PLAYER_MENU_SHORT: IMpcCommand;
    PLAYER_MENU_LONG: IMpcCommand;
    FILTERS_MENU: IMpcCommand;
    OPTIONS: IMpcCommand;
    NEXT_AUDIO: IMpcCommand;
    PREV_AUDIO: IMpcCommand;
    NEXT_SUBTITLE: IMpcCommand;
    PREV_SUBTITLE: IMpcCommand;
    ON_OFF_SUBTITLE: IMpcCommand;
    RELOAD_SUBTITLES: IMpcCommand;
    DOWNLOAD_SUBTITLES: IMpcCommand;
    NEXT_AUDIO_OGM: IMpcCommand;
    PREV_AUDIO_OGM: IMpcCommand;
    NEXT_SUBTITLE_OGM: IMpcCommand;
    PREV_SUBTITLE_OGM: IMpcCommand;
    NEXT_ANGLE_DVD: IMpcCommand;
    PREV_ANGLE_DVD: IMpcCommand;
    NEXT_AUDIO_DVD: IMpcCommand;
    PREV_AUDIO_DVD: IMpcCommand;
    NEXT_SUBTITLE_DVD: IMpcCommand;
    PREV_SUBTITLE_DVD: IMpcCommand;
    ON_OFF_SUBTITLE_DVD: IMpcCommand;
    TEARING_TEST: IMpcCommand;
    REMAINING_TIME: IMpcCommand;
    NEXT_SHADER_PRESET: IMpcCommand;
    PREV_SHADER_PRESET: IMpcCommand;
    TOGGLE_DIRECT3D_FULLSCREEN: IMpcCommand;
    GOTO_PREV_SUBTITLE: IMpcCommand;
    GOTO_NEXT_SUBTITLE: IMpcCommand;
    SHIFT_SUBTITLE_LEFT: IMpcCommand;
    SHIFT_SUBTITLE_RIGHT: IMpcCommand;
    DISPLAY_STATS: IMpcCommand;
    RESET_DISPLAY_STATS: IMpcCommand;
    VSYNC: IMpcCommand;
    ENABLE_FRAME_TIME_CORRECTION: IMpcCommand;
    ACCURATE_VSYNC: IMpcCommand;
    DECREASE_VSYNC_OFFSET: IMpcCommand;
    INCREASE_VSYNC_OFFSET: IMpcCommand;
    SUBTITLE_DELAY_MINUS: IMpcCommand;
    SUBTITLE_DELAY_PLUS: IMpcCommand;
    AFTER_PLAYBACK_EXIT: IMpcCommand;
    AFTER_PLAYBACK_STAND_BY: IMpcCommand;
    AFTER_PLAYBACK_HIBERNATE: IMpcCommand;
    AFTER_PLAYBACK_SHUTDOWN: IMpcCommand;
    AFTER_PLAYBACK_LOG_OFF: IMpcCommand;
    AFTER_PLAYBACK_LOCK: IMpcCommand;
    AFTER_PLAYBACK_TURN_OFF_THE_MONITOR: IMpcCommand;
    AFTER_PLAYBACK_PLAY_NEXT_FILE_IN_THE_FOLDER: IMpcCommand;
    TOGGLE_EDL_WINDOW: IMpcCommand;
    EDL_SET_IN: IMpcCommand;
    EDL_SET_OUT: IMpcCommand;
    EDL_NEW_CLIP: IMpcCommand;
    EDL_SAVE: IMpcCommand;
}

export const MpcCommandsList: IMpcCommandsList = {
    SET_VOLUME: {
        value: -2,
        info: "Set Volume"
    },
    SEEK: {
        value: -1,
        info: "Seek"
    },
    QUICK_OPEN_FILE: {
        value: 969,
        info: "Quick Open File"
    },
    OPEN_FILE: {
        value: 800,
        info: "Open File"
    },
    OPEN_DVD_BD: {
        value: 801,
        info: "Open DVD/BD"
    },
    OPEN_DEVICE: {
        value: 802,
        info: "Open Device"
    },
    REOPEN_FILE: {
        value: 976,
        info: "Reopen File"
    },
    MOVE_TO_RECYCLE_BIN: {
        value: 24044,
        info: "Move to Recycle Bin"
    },
    SAVE_A_COPY: {
        value: 805,
        info: "Save a Copy"
    },
    SAVE_IMAGE: {
        value: 806,
        info: "Save Image"
    },
    SAVE_IMAGE_AUTO: {
        value: 807,
        info: "Save Image (auto)"
    },
    SAVE_THUMBNAILS: {
        value: 808,
        info: "Save thumbnails"
    },
    LOAD_SUBTITLE: {
        value: 809,
        info: "Load Subtitle"
    },
    SAVE_SUBTITLE: {
        value: 810,
        info: "Save Subtitle"
    },
    CLOSE: {
        value: 804,
        info: "Close"
    },
    PROPERTIES: {
        value: 814,
        info: "Properties"
    },
    EXIT: {
        value: 816,
        info: "Exit"
    },
    PLAY_PAUSE: {
        value: 889,
        info: "Play/Pause"
    },
    PLAY: {
        value: 887,
        info: "Play"
    },
    PAUSE: {
        value: 888,
        info: "Pause"
    },
    STOP: {
        value: 890,
        info: "Stop"
    },
    FRAMESTEP: {
        value: 891,
        info: "Framestep"
    },
    FRAMESTEP_BACK: {
        value: 892,
        info: "Framestep back"
    },
    GO_TO: {
        value: 893,
        info: "Go To"
    },
    INCREASE_RATE: {
        value: 895,
        info: "Increase Rate"
    },
    DECREASE_RATE: {
        value: 894,
        info: "Decrease Rate"
    },
    RESET_RATE: {
        value: 896,
        info: "Reset Rate"
    },
    AUDIO_DELAY_PLUS_10_MS: {
        value: 905,
        info: "Audio Delay +10 ms"
    },
    AUDIO_DELAY_MINUS_10_MS: {
        value: 906,
        info: "Audio Delay -10 ms"
    },
    JUMP_FORWARD_SMALL: {
        value: 900,
        info: "Jump Forward (small)"
    },
    JUMP_BACKWARD_SMALL: {
        value: 899,
        info: "Jump Backward (small)"
    },
    JUMP_FORWARD_MEDIUM: {
        value: 902,
        info: "Jump Forward (medium)"
    },
    JUMP_BACKWARD_MEDIUM: {
        value: 901,
        info: "Jump Backward (medium)"
    },
    JUMP_FORWARD_LARGE: {
        value: 904,
        info: "Jump Forward (large)"
    },
    JUMP_BACKWARD_LARGE: {
        value: 903,
        info: "Jump Backward (large)"
    },
    JUMP_FORWARD_KEYFRAME: {
        value: 898,
        info: "Jump Forward (keyframe)"
    },
    JUMP_BACKWARD_KEYFRAME: {
        value: 897,
        info: "Jump Backward (keyframe)"
    },
    JUMP_TO_BEGINNING: {
        value: 996,
        info: "Jump to Beginning"
    },
    NEXT: {
        value: 922,
        info: "Next"
    },
    PREVIOUS: {
        value: 921,
        info: "Previous"
    },
    NEXT_FILE: {
        value: 920,
        info: "Next File"
    },
    PREVIOUS_FILE: {
        value: 919,
        info: "Previous File"
    },
    TUNER_SCAN: {
        value: 974,
        info: "Tuner scan"
    },
    QUICK_ADD_FAVORITE: {
        value: 975,
        info: "Quick add favorite"
    },
    TOGGLE_CAPTION_AND_MENU: {
        value: 817,
        info: "Toggle Caption&Menu"
    },
    TOGGLE_SEEKER: {
        value: 818,
        info: "Toggle Seeker"
    },
    TOGGLE_CONTROLS: {
        value: 819,
        info: "Toggle Controls"
    },
    TOGGLE_INFORMATION: {
        value: 820,
        info: "Toggle Information"
    },
    TOGGLE_STATISTICS: {
        value: 821,
        info: "Toggle Statistics"
    },
    TOGGLE_STATUS: {
        value: 822,
        info: "Toggle Status"
    },
    TOGGLE_SUBRESYNC_BAR: {
        value: 823,
        info: "Toggle Subresync Bar"
    },
    TOGGLE_PLAYLIST_BAR: {
        value: 824,
        info: "Toggle Playlist Bar"
    },
    TOGGLE_CAPTURE_BAR: {
        value: 825,
        info: "Toggle Capture Bar"
    },
    TOGGLE_NAVIGATION_BAR: {
        value: 33415,
        info: "Toggle Navigation Bar"
    },
    TOGGLE_DEBUG_SHADERS: {
        value: 826,
        info: "Toggle Debug Shaders"
    },
    VIEW_MINIMAL: {
        value: 827,
        info: "View Minimal"
    },
    VIEW_COMPACT: {
        value: 828,
        info: "View Compact"
    },
    VIEW_NORMAL: {
        value: 829,
        info: "View Normal"
    },
    FULLSCREEN: {
        value: 830,
        info: "Fullscreen"
    },
    FULLSCREEN_WITHOUT_RES_CHANGE: {
        value: 831,
        info: "Fullscreen (w/o res.change)"
    },
    ZOOM_50: {
        value: 832,
        info: "Zoom 50%"
    },
    ZOOM_100: {
        value: 833,
        info: "Zoom 100%"
    },
    ZOOM_200: {
        value: 834,
        info: "Zoom 200%"
    },
    ZOOM_AUTO_FIT: {
        value: 968,
        info: "Zoom Auto Fit"
    },
    ZOOM_AUTO_FIT_LARGER_ONLY: {
        value: 4900,
        info: "Zoom Auto Fit (Larger Only)"
    },
    NEXT_AR_PRESET: {
        value: 859,
        info: "Next AR Preset"
    },
    VIDFRM_HALF: {
        value: 835,
        info: "VidFrm Half"
    },
    VIDFRM_NORMAL: {
        value: 836,
        info: "VidFrm Normal"
    },
    VIDFRM_DOUBLE: {
        value: 837,
        info: "VidFrm Double"
    },
    VIDFRM_STRETCH: {
        value: 838,
        info: "VidFrm Stretch"
    },
    VIDFRM_INSIDE: {
        value: 839,
        info: "VidFrm Inside"
    },
    VIDFRM_ZOOM_1: {
        value: 841,
        info: "VidFrm Zoom 1"
    },
    VIDFRM_ZOOM_2: {
        value: 842,
        info: "VidFrm Zoom 2"
    },
    VIDFRM_OUTSIDE: {
        value: 840,
        info: "VidFrm Outside"
    },
    VIDFRM_SWITCH_ZOOM: {
        value: 843,
        info: "VidFrm Switch Zoom"
    },
    ALWAYS_ON_TOP: {
        value: 884,
        info: "Always On Top"
    },
    PNS_RESET: {
        value: 861,
        info: "PnS Reset"
    },
    PNS_INC_SIZE: {
        value: 862,
        info: "PnS Inc Size"
    },
    PNS_INC_WIDTH: {
        value: 864,
        info: "PnS Inc Width"
    },
    PNS_INC_HEIGHT: {
        value: 866,
        info: "PnS Inc Height"
    },
    PNS_DEC_SIZE: {
        value: 863,
        info: "PnS Dec Size"
    },
    PNS_DEC_WIDTH: {
        value: 865,
        info: "PnS Dec Width"
    },
    PNS_DEC_HEIGHT: {
        value: 867,
        info: "PnS Dec Height"
    },
    PNS_CENTER: {
        value: 876,
        info: "PnS Center"
    },
    PNS_LEFT: {
        value: 868,
        info: "PnS Left"
    },
    PNS_RIGHT: {
        value: 869,
        info: "PnS Right"
    },
    PNS_UP: {
        value: 870,
        info: "PnS Up"
    },
    PNS_DOWN: {
        value: 871,
        info: "PnS Down"
    },
    PNS_UP_LEFT: {
        value: 872,
        info: "PnS Up/Left"
    },
    PNS_UP_RIGHT: {
        value: 873,
        info: "PnS Up/Right"
    },
    PNS_DOWN_LEFT: {
        value: 874,
        info: "PnS Down/Left"
    },
    PNS_DOWN_RIGHT: {
        value: 875,
        info: "PnS Down/Right"
    },
    PNS_ROTATE_X_PLUS: {
        value: 877,
        info: "PnS Rotate X+"
    },
    PNS_ROTATE_X_MINUS: {
        value: 878,
        info: "PnS Rotate X-"
    },
    PNS_ROTATE_Y_PLUS: {
        value: 879,
        info: "PnS Rotate Y+"
    },
    PNS_ROTATE_Y_MINUS: {
        value: 880,
        info: "PnS Rotate Y-"
    },
    PNS_ROTATE_Z_PLUS: {
        value: 881,
        info: "PnS Rotate Z+"
    },
    PNS_ROTATE_Z_MINUS: {
        value: 882,
        info: "PnS Rotate Z-"
    },
    VOLUME_UP: {
        value: 907,
        info: "Volume Up"
    },
    VOLUME_DOWN: {
        value: 908,
        info: "Volume Down"
    },
    VOLUME_MUTE: {
        value: 909,
        info: "Volume Mute"
    },
    VOLUME_BOOST_INCREASE: {
        value: 970,
        info: "Volume boost increase"
    },
    VOLUME_BOOST_DECREASE: {
        value: 971,
        info: "Volume boost decrease"
    },
    VOLUME_BOOST_MIN: {
        value: 972,
        info: "Volume boost Min"
    },
    VOLUME_BOOST_MAX: {
        value: 973,
        info: "Volume boost Max"
    },
    TOGGLE_CUSTOM_CHANNEL_MAPPING: {
        value: 993,
        info: "Toggle custom channel mapping"
    },
    TOGGLE_NORMALIZATION: {
        value: 994,
        info: "Toggle normalization"
    },
    TOGGLE_REGAIN_VOLUME: {
        value: 995,
        info: "Toggle regain volume"
    },
    BRIGHTNESS_INCREASE: {
        value: 984,
        info: "Brightness increase"
    },
    BRIGHTNESS_DECREASE: {
        value: 985,
        info: "Brightness decrease"
    },
    CONTRAST_INCREASE: {
        value: 986,
        info: "Contrast increase"
    },
    CONTRAST_DECREASE: {
        value: 987,
        info: "Contrast decrease"
    },
    HUE_INCREASE: {
        value: 988,
        info: "Hue increase"
    },
    HUE_DECREASE: {
        value: 989,
        info: "Hue decrease"
    },
    SATURATION_INCREASE: {
        value: 990,
        info: "Saturation increase"
    },
    SATURATION_DECREASE: {
        value: 991,
        info: "Saturation decrease"
    },
    RESET_COLOR_SETTINGS: {
        value: 992,
        info: "Reset color settings"
    },
    DVD_TITLE_MENU: {
        value: 923,
        info: "DVD Title Menu"
    },
    DVD_ROOT_MENU: {
        value: 924,
        info: "DVD Root Menu"
    },
    DVD_SUBTITLE_MENU: {
        value: 925,
        info: "DVD Subtitle Menu"
    },
    DVD_AUDIO_MENU: {
        value: 926,
        info: "DVD Audio Menu"
    },
    DVD_ANGLE_MENU: {
        value: 927,
        info: "DVD Angle Menu"
    },
    DVD_CHAPTER_MENU: {
        value: 928,
        info: "DVD Chapter Menu"
    },
    DVD_MENU_LEFT: {
        value: 929,
        info: "DVD Menu Left"
    },
    DVD_MENU_RIGHT: {
        value: 930,
        info: "DVD Menu Right"
    },
    DVD_MENU_UP: {
        value: 931,
        info: "DVD Menu Up"
    },
    DVD_MENU_DOWN: {
        value: 932,
        info: "DVD Menu Down"
    },
    DVD_MENU_ACTIVATE: {
        value: 933,
        info: "DVD Menu Activate"
    },
    DVD_MENU_BACK: {
        value: 934,
        info: "DVD Menu Back"
    },
    DVD_MENU_LEAVE: {
        value: 935,
        info: "DVD Menu Leave"
    },
    BOSS_KEY: {
        value: 944,
        info: "Boss key"
    },
    PLAYER_MENU_SHORT: {
        value: 949,
        info: "Player Menu (short)"
    },
    PLAYER_MENU_LONG: {
        value: 950,
        info: "Player Menu (long)"
    },
    FILTERS_MENU: {
        value: 951,
        info: "Filters Menu"
    },
    OPTIONS: {
        value: 815,
        info: "Options"
    },
    NEXT_AUDIO: {
        value: 952,
        info: "Next Audio"
    },
    PREV_AUDIO: {
        value: 953,
        info: "Prev Audio"
    },
    NEXT_SUBTITLE: {
        value: 954,
        info: "Next Subtitle"
    },
    PREV_SUBTITLE: {
        value: 955,
        info: "Prev Subtitle"
    },
    ON_OFF_SUBTITLE: {
        value: 956,
        info: "On/Off Subtitle"
    },
    RELOAD_SUBTITLES: {
        value: 2302,
        info: "Reload Subtitles"
    },
    DOWNLOAD_SUBTITLES: {
        value: 812,
        info: "Download subtitles"
    },
    NEXT_AUDIO_OGM: {
        value: 957,
        info: "Next Audio (OGM)"
    },
    PREV_AUDIO_OGM: {
        value: 958,
        info: "Prev Audio (OGM)"
    },
    NEXT_SUBTITLE_OGM: {
        value: 959,
        info: "Next Subtitle (OGM)"
    },
    PREV_SUBTITLE_OGM: {
        value: 960,
        info: "Prev Subtitle (OGM)"
    },
    NEXT_ANGLE_DVD: {
        value: 961,
        info: "Next Angle (DVD)"
    },
    PREV_ANGLE_DVD: {
        value: 962,
        info: "Prev Angle (DVD)"
    },
    NEXT_AUDIO_DVD: {
        value: 963,
        info: "Next Audio (DVD)"
    },
    PREV_AUDIO_DVD: {
        value: 964,
        info: "Prev Audio (DVD)"
    },
    NEXT_SUBTITLE_DVD: {
        value: 965,
        info: "Next Subtitle (DVD)"
    },
    PREV_SUBTITLE_DVD: {
        value: 966,
        info: "Prev Subtitle (DVD)"
    },
    ON_OFF_SUBTITLE_DVD: {
        value: 967,
        info: "On/Off Subtitle (DVD)"
    },
    TEARING_TEST: {
        value: 32769,
        info: "Tearing Test"
    },
    REMAINING_TIME: {
        value: 32778,
        info: "Remaining Time"
    },
    NEXT_SHADER_PRESET: {
        value: 57382,
        info: "Next Shader Preset"
    },
    PREV_SHADER_PRESET: {
        value: 57384,
        info: "Prev Shader Preset"
    },
    TOGGLE_DIRECT3D_FULLSCREEN: {
        value: 32779,
        info: "Toggle Direct3D fullscreen"
    },
    GOTO_PREV_SUBTITLE: {
        value: 32780,
        info: "Goto Prev Subtitle"
    },
    GOTO_NEXT_SUBTITLE: {
        value: 32781,
        info: "Goto Next Subtitle"
    },
    SHIFT_SUBTITLE_LEFT: {
        value: 32782,
        info: "Shift Subtitle Left"
    },
    SHIFT_SUBTITLE_RIGHT: {
        value: 32783,
        info: "Shift Subtitle Right"
    },
    DISPLAY_STATS: {
        value: 32784,
        info: "Display Stats"
    },
    RESET_DISPLAY_STATS: {
        value: 33405,
        info: "Reset Display Stats"
    },
    VSYNC: {
        value: 33243,
        info: "VSync"
    },
    ENABLE_FRAME_TIME_CORRECTION: {
        value: 33265,
        info: "Enable Frame Time Correction"
    },
    ACCURATE_VSYNC: {
        value: 33260,
        info: "Accurate VSync"
    },
    DECREASE_VSYNC_OFFSET: {
        value: 33246,
        info: "Decrease VSync Offset"
    },
    INCREASE_VSYNC_OFFSET: {
        value: 33247,
        info: "Increase VSync Offset"
    },
    SUBTITLE_DELAY_MINUS: {
        value: 24000,
        info: "Subtitle Delay -"
    },
    SUBTITLE_DELAY_PLUS: {
        value: 24001,
        info: "Subtitle Delay +"
    },
    AFTER_PLAYBACK_EXIT: {
        value: 912,
        info: "After Playback: Exit"
    },
    AFTER_PLAYBACK_STAND_BY: {
        value: 913,
        info: "After Playback: Stand By"
    },
    AFTER_PLAYBACK_HIBERNATE: {
        value: 914,
        info: "After Playback: Hibernate"
    },
    AFTER_PLAYBACK_SHUTDOWN: {
        value: 915,
        info: "After Playback: Shutdown"
    },
    AFTER_PLAYBACK_LOG_OFF: {
        value: 916,
        info: "After Playback: Log Off"
    },
    AFTER_PLAYBACK_LOCK: {
        value: 917,
        info: "After Playback: Lock"
    },
    AFTER_PLAYBACK_TURN_OFF_THE_MONITOR: {
        value: 918,
        info: "After Playback: Turn off the monitor"
    },
    AFTER_PLAYBACK_PLAY_NEXT_FILE_IN_THE_FOLDER: {
        value: 947,
        info: "After Playback: Play next file in the folder"
    },
    TOGGLE_EDL_WINDOW: {
        value: 846,
        info: "Toggle EDL window"
    },
    EDL_SET_IN: {
        value: 847,
        info: "EDL set In"
    },
    EDL_SET_OUT: {
        value: 848,
        info: "EDL set Out"
    },
    EDL_NEW_CLIP: {
        value: 849,
        info: "EDL new clip"
    },
    EDL_SAVE: {
        value: 860,
        info: "EDL save"
    }
}

export type MpcCommands = keyof IMpcCommandsList;
