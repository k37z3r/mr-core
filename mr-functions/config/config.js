export const _CONFIG = {
    LANGUAGE: 'de',
    HELP: {
        "HUD":[
          {"button":"[73]", "description":"OPEN_HUD"},
          {"button":"[73]", "description":"CLOSE_HUD"}
        ],
        "HANDY":[
          {"button":"[77]", "description": "OPEN_HANDY"},
          {"button":"[27]", "description": "CLOSE_HANDY"},
        ],
        "DISCORD":[
          {"button":"[84]", "description": "OPEN_DISCORD"},
          {"button":"[27]", "description": "CLOSE_DISCORD"},
        ],
        "CONSOLE":[
          {"button":"[119]", "description": "OPEN_CONSOLE"},
          {"button":"[119]", "description": "CLOSE_CONSOLE"},
        ],
        "HELP":[
          {"button":"[121]", "description": "OPEN_HELP"},
          {"button":"[121]", "description": "CLOSE_HELP"},
        ],
        "CAR_CONTROL":[
          {"button":"[74]", "description": "LEFT_INDICATOR"},
          {"button":"[76]", "description": "RIGHT_INDICATOR"},
          {"button":"[75]", "description": "WARNING_LIGHTS"},
          {"button":"[85]", "description": "ENGINE_ON_OFF"},
        ]
    },
// HUD
    STATUS_INTERVAL: 5,    //    how often to check hud in seconds
    HUD_OPEN_CLOSE: 73,
// Vehiclecontrol
    VEHICLECONTROL_LEFT_INDICATOR: 74,    // keyCode for left indicator (List: https://gta-spot.com/keycode.json)
    VEHICLECONTROL_RIGHT_INDICATOR: 76,    // keyCode for rigth indicator (List: https://gta-spot.com/keycode.json)
    VEHICLECONTROL_HAZARD: 75,    // keyCode for hazard (List: https://gta-spot.com/keycode.json)
    VEHICLECONTROL_ENGINE_ON_OFF: 85,    // keyCode for engine on/off (List: https://gta-spot.com/keycode.json)
    VEHICLECONTROL_SPEED: "kmh",    // kmh or mph
    VEHICLECONTROL_COMPACTS_RPM: 5000,    // RPM for Compacts
    VEHICLECONTROL_SEDANS_RPM: 7000,    // RPM for Sedans
    VEHICLECONTROL_SUVS_RPM: 6500,    // RPM for SUVs
    VEHICLECONTROL_COUPES_RPM: 9000,    // RPM for Coupes
    VEHICLECONTROL_MUSCLE_RPM: 8500,    // RPM for Muscle
    VEHICLECONTROL_SPORTSCLASSIC_RPM: 4500,    // RPM for Sportsclassic
    VEHICLECONTROL_SPORTS_RPM: 12000,    // RPM for Sports
    VEHICLECONTROL_SUPER_RPM: 18000,    // RPM for Super
    VEHICLECONTROL_CAR_OFFROAD_RPM: 9500,    // RPM for Off-Road Car
    VEHICLECONTROL_CAR_INDUSTRIAL_RPM: 1500,    // RPM for Industrial Car
    VEHICLECONTROL_CAR_UTILITY_RPM: 1500,    // RPM for Utility Car
    VEHICLECONTROL_VANS_RPM: 2500,    // RPM for Vans
    VEHICLECONTROL_CAR_SERVICE_RPM: 2500,    // RPM for Service Car
    VEHICLECONTROL_CAR_EMERGENCY_RPM: 2500,    // RPM for Emergency Car
    VEHICLECONTROL_CAR_MILITARY_RPM: 2500,    // RPM for Military Car
    VEHICLECONTROL_CAR_COMMERCIAL_RPM: 2500,    // RPM for Commercial Car
// Phone
    PHONE_NUMBER_STARTING_0: true,
    PHONE_EMAIL_DOMAIN: ["mr-core.de","mr-core.com","mr-core.uk"],
    PHONE_OPEN_BUTTON: 77,    // keyCode for open Phone (List: https://gta-spot.com/keycode.json)
    PHONE_CLOSE_BUTTON: 27,    // keyCode for close Phone (List: https://gta-spot.com/keycode.json)
// Discord-Chat
    DISCORD_OPEN_CHAT: 84,    // keyCode for open Discord (List: https://gta-spot.com/keycode.json)
    DISCORD_CLOSE_CHAT: 27,    // keyCode for close Phone (List: https://gta-spot.com/keycode.json)
// IPL-Loader
    IPL_Blip_Loader: true,
    Load_Graffitis: true,    //    1861.28, 2402.11, 58.53    //    2697.32, 3162.18, 58.1    //    2119.12, 3058.21, 53.25
    Load_Bahamamama: true,    //    -1388.0013, -618.41967, 30.819599
    Load_redCarpet: true,    //    300.5927, 199.7589, 104.3776
    Load_Ufos: true,    //    2490.47729, 3774.84351, 2414.035    //    501.5288, 5593.865, 796.2325    //    2051.99463, 3237.05835, 1456.97021
    Load_northYankton: false,    //    3217.697, -4834.826, 111.8152
    Load_cayoPerico: true,    // 3084.73, -4770.709, 15.26167
    Load_heistCarrier: true,    //    3084.73, -4770.709, 15.26167
    Load_Gun_Yacht: true,    //    -1363.724, 6734.108, 2.44598
    Load_Yacht: true,    //    -2043.974,-1031.582, 11.981
    Load_ZancudoGates: true,    //    -1600.301, 2806.731, 18.79683
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                          Bunker Setting begin                          //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_Bunkers: true,    //    848.6175, 2996.567, 45.81612    //    2126.785, 3335.04, 48.21422    //    2493.654, 3140.399, 51.28789    //    481.0465, 2995.135, 43.96672    //    -391.3216, 4363.728, 58.65862    //    1823.961, 4708.14, 42.4991    //    1570.372, 2254.549, 78.89397    //    -783.0755, 5934.686, 24.31475    //    24.43542, 2959.705, 58.35517    //    -3058.714, 3329.19, 12.5844    //    -3180.466, 1374.192, 19.9597
    Load_BunkersStyle: 'default',    //    default / blue / yellow
    Load_BunkersTier: 'default',    //    default / upgrade
    Load_BunkersSecurity: 'default',    //    default / upgrade
    Load_BunkersOffice: true,    // Office interior
    Load_BunkersOfficeLocked: false,    // Metal door blocking access to the office
    Load_BunkersLocker: true,    // Locker next to the office door
    Load_BunkersRangeLights: true,    // Lights next to the shooting range
    Load_BunkersRangeWall: false,    // Wall blocking access to the shooting range
    Load_BunkersRangeLocked: false,    // Metal door blocking access to the shooting range
    Load_BunkersSchematic: true,    // Gun schematic on the table and whiteboard
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                          Bunker Settings End                           //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                         Michael Setting begin                          //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_Michael: true,    //    -802.311, 175.056, 72.8446
    Load_MichaelStyle: 'default',    //    default / moved
    Load_MichaelMoviePoster: true,    // Meltdown movie poster
    Load_MichaelFameShamePoster: true,    // Next to Tracey's bed
    Load_MichaelPlaneTicket: true,    // Plane ticket
    Load_MichaelSpyGlasses: true,    // On the shelf inside Michael's bedroom
    Load_MichaelBurgerShot: true,    // Bag and cup in the kitchen, next to the sink
    Load_MichaelGarage: true,    // Scuba diver gear
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                         Michael Settings End                           //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                         Simeon Setting begin                           //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_Simeon: true,    //    -47.16170, -1115.3327, 26.5
    Load_SimeonStyle: 'default',    //    default / noGlass / destroyed / fixed
    Load_SimeonShutter: 'opened',    //    opened / closed / none
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                         Simeon Settings End                            //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                    Franklin's Aunt Setting begin                       //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_FranklinAunt: true,    //    -9.96562, -1438.54, 31.1015
    Load_FranklinAuntStyle: 'stuff',    //    stuff / left / none
    Load_FranklinAuntBandana: true,    // Bandana on the bed
    Load_FranklinAuntBag: true,    // Bag in the closet
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                    Franklin's Aunt Settings End                        //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                       Franklin Setting begin                           //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_Franklin: true,    //    3.199463, 529.7808, 169.6262
    Load_FranklinStyle: 'settled',    //    unpacking / settled / cardboxes / none
    Load_FranklinGlassDoor: 'unlocked',    //    unlocked / locked
    Load_FranklinProgressFlyer: true,    // Mountain flyer on the kitchen counter
    Load_FranklinProgressTux: true,    // Tuxedo suit in the wardrobe
    Load_FranklinProgressTshirt: true,    // "I <3 LS" tshirt on the bed
    Load_FranklinBongAndWine: true,    // Bong on the table
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                       Franklin Settings End                            //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                         Floyd Setting begin                            //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_Floyd: true,    // -1150.703, -1520.713, 10.633
    Load_FloydStyle: 'messedup',    //    default / messedup
    Load_FloydMrJam: 'jammedontable',    //    default / jammed / jammedontable
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                         Floyd Settings End                             //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                   Trevors Trailer Setting begin                        //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_TrevorsTrailer: true,    //    1985.48132, 3828.76757, 32.5
    Load_TrevorsTrailerStyle: 'trash',    //    default / trash
    Load_TrevorsTrailerCopHelmet: true,    // Cop helmet in the closet
    Load_TrevorsTrailerBriefCase: true,    // Briefcase in the main room
    Load_TrevorsTrailerMichaelStuff: true,    // Michael's suit hanging on the window
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                   Trevors Trailer Settings End                         //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                  Lester's Factory Setting begin                        //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_LesterFactory: true,    //    716.84, -962.05, 31.59
    Load_LesterFactoryBluePrint: true,    // Blueprint on the office desk
    Load_LesterFactoryKitBag: true,    // Bag under the office desk
    Load_LesterFactoryFireman: true,    // Firemans helmets in the office
    Load_LesterFactoryArmour: true,    // Body armor in storage
    Load_LesterFactoryGasMask: true,    // Gas mask and suit in storage
    Load_LesterFactoryAgency: true,    // Janitor stuff in the storage
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                  Lester's Factory Settings End                         //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                     Strip Club Setting begin                           //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_StripClub: true,    // 130.71, -1301.89, 29.23
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                     Strip Club Settings End                            //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                    Ammunations Setting begin                           //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_Ammunations: true,    //    249.8, -47.1, 70.0    //    844.0, -1031.5, 28.2    //    -664.0, -939.2, 21.8    //    -1308.7, -391.5, 36.7    //    -3170.0, 1085.0, 20.8    //    -1116.0, 2694.1, 18.6    //    1695.2, 3756.0, 34.7    //    -328.7, 6079.0, 31.5    //    2569.8, 297.8, 108.7    //    19.1, -1110.0, 29.8    //    811.0, -2152.0, 29.6
    Load_AmmunationsGunStore: true,
    Load_AmmunationsGunClub: true,
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                    Ammunations Settings End                            //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                     Nightclubs Setting begin                           //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_NightclubBlips_Blips: true,
    Load_NightclubBlips_Blip: 121,
    Load_NightclubBlips_Scale: 1.0,
    Load_NightclubBlips_Color: 7,
    Load_NightclubBlips_SecondColor: true,
    Load_NightclubBlips_SecondRolor_RGB: {r: 156, g: 110, b: 175},
    Load_NightclubBlips_Name: 'Nightclub',
    Load_NightclubDJandDancer: true,    // Loads dancing Peds and DJ to Nightclub
    Load_Nightclub: true,    //    -1569.6395, -3016.800, -74.4139
    Load_NightclubStyle: 'trad',    //    trad / edgy / glam
    Load_NightclubName: 'technologie',    //    galaxy / studio / omega / technologie / gefangnis / maisonette / tony / palace / paradise
    Load_NightclubPodiumStyle: 'trad',    //    trad / edgy / glam / none
    Load_NightclubSpeaker: 'basic',    //    basic / upgrade / none
    Load_NightclubSecurity: true,
    Load_NightclubLights: 'droplets_yellow',    //    droplets_yellow / Droplets_green / Droplets_white / Droplets_purple / Neons_yellow / Neons_white / Neons_purple / Neons_cyan / Bands_yellow / Bands_green / Bands_white / Bands_cyan / Laser_yellow / Laser_green / Laser_white / Laser_purple
    Load_TurnTables: true,
    Load_TurnTablesStyle: 'style3',    //    style1 / style2 / style3 / style4
    Load_NightclubBar: true,
    Load_NightclubBooze: true,
    Load_NightclubTrophy: true,
    Load_NightclubTrophyColor: 'gold',    //    gold / silver / bronze
    Load_NightclubTrophyStyle: 'dancer',    //    dancer / battler / number1
    Load_NightclubDryIce: true,    // Dry ice machines
    Load_NightClubClutter: false,    // Clutter and graffitis
    Load_NightClubWorkLamps: false,    // Work lamps + trash
    Load_NightClubTruck: false,    // Truck parked in the garage
    Load_NightClubLightRigsOff: false,    // All light rigs at once but turned off
    Load_NightClubRoofLightsOff: false,    // Fake lights
    Load_NightClubFloorTradLights: false,    // Floor lights meant to go with the trad style
    Load_NightClubChest: false,    // Chest on the VIP desk
    Load_NightClubVaultAmmunations: false,    // (inside vault) Ammunations
    Load_NightClubVaultMeth: false,    // (inside vault) Meth bag
    Load_NightClubVaultFakeID: false,    // (inside vault) Fake ID
    Load_NightClubVaultWeed: false,    // (inside vault) Opened weed bag
    Load_NightClubVaultCoke: false,    // (inside vault) Coke doll
    Load_NightClubVaultCash: false,    // (inside vault) Scrunched fake money
    Load_NightClubMesaBarrier: true,
    Load_NightClubMesaPosters: 'maddona',    //    madonna / dixon / forsale / solomun / taleofus
    Load_NightClubMissionRowBarrier: true,
    Load_NightClubMissionRowPosters: 'dixon',    //    madonna / dixon / forsale / solomun / taleofus
    Load_NightClubStrawBerryBarrier: true,
    Load_NightClubStrawBerryPosters: 'forsale',    //    madonna / dixon / forsale / solomun / taleofus
    Load_NightClubVineWoodWestBarrier: true,
    Load_NightClubVineWoodWestPosters: 'solomun',    //    madonna / dixon / forsale / solomun / taleofus
    Load_NightClubCypressBarrier: true,
    Load_NightClubCypressPosters: 'taleofus',    //    madonna / dixon / forsale / solomun / taleofus
    Load_NightClubDelPerroBarrier: true,
    Load_NightClubDelPerroPosters: 'dixon',    //    madonna / dixon / forsale / solomun / taleofus
    Load_NightClubAirPortBarrier: true,
    Load_NightClubAirPortPosters: 'solomun',    //    madonna / dixon / forsale / solomun / taleofus
    Load_NightClubElysianBarrier: true,
    Load_NightClubElysianPosters: 'madonna',    //    madonna / dixon / forsale / solomun / taleofus
    Load_NightClubVineWoodBarrier: true,
    Load_NightClubVineWoodPosters: 'forsale',    //    madonna / dixon / forsale / solomun / taleofus
    Load_NightClubVespucciBarrier: true,
    Load_NightClubVespucciPosters: 'taleofus',    //    madonna / dixon / forsale / solomun / taleofus
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                     Nightclubs Settings End                            //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                   Biker Club 1 Setting begin                           //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_BikerClubhouse1: true,    // 1107.04, -3157.399, -37.51859
    Load_BikerClubhouse1_WallsStyle: "walls1",    //    walls1 / walls2
    Load_BikerClubhouse1_WallColor: "orange",    //    sable / yellowgray / red / brown / yellow / lightyellow / lightyellowgray / lightgray / orange / gray
    Load_BikerClubhouse1_Furnitures: "furnishings2",    //    furnishings1 / furnishings2
    Load_BikerClubhouse1_Furniturescolor: "yellowgray",    //    sable / yellowgray / red / brown / yellow / lightyellow / lightyellowgray / lightgray / orange / gray
    Load_BikerClubhouse1_Decoration: "decorative1",    //    decorative1 / decorative2
    Load_BikerClubhouse1_Mural: "rideforeever",    //    ridefree / mods / brave / fist / forest / mods2 / rideForever / heart / route68 / none
    Load_BikerClubhouse1_GunLocker: "on",    //    on / off / none
    Load_BikerClubhouse1_ModBooth: "off",    //    on / off / none
    Load_BikerClubhouse1_Meth: "stage1",    //    stage1 / stage2 / stage3 / none
    Load_BikerClubhouse1_Cash: "none",    //    stage1 / stage2 / stage3 / none
    Load_BikerClubhouse1_Weed: "stage2",    //    stage1 / stage2 / stage3 / none
    Load_BikerClubhouse1_Coke: "stage1",    //    stage1 / stage2 / stage3 / none
    Load_BikerClubhouse1_Counterfeit: "none",    //    stage1 / stage2 / stage3 / none
    Load_BikerClubhouse1_Documents: "stage3",    //    stage1 / stage2 / stage3 / none
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                    Biker Club 1 Setting end                            //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                   Biker Club 2 Setting begin                           //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_BikerClubhouse2: true,    // 998.4809, -3164.711, -38.90733
    Load_BikerClubhouse2_WallsStyle: "walls2",    //    walls1 / walls2
    Load_BikerClubhouse2_WallColor: "multicolor",    //    gray / greengray / multicolor / orangegray / blue / lightbluesable / greenred / yellowgray / red / fuchsiangray
    Load_BikerClubhouse2_LowerWallscolor: "blue",    //    gray / greengray / multicolor / orangegray / blue / lightbluesable / greenred / yellowgray / red / fuchsiangray
    Load_BikerClubhouse2_Furnitures: "furnishings2",    //    furnishings1 / furnishings2
    Load_BikerClubhouse2_Furniturescolor: "red2",    //    turquoise / darkBrown / brown / turquoise2 / brown2 / gray / red / darkGray / black / red2
    Load_BikerClubhouse2_Decoration: "decorative2",    //    decorative1 / decorative2
    Load_BikerClubhouse2_Mural: "graffitis",    //    death1 / citycolor1 / death2 / citycolor2 / graffitis / citycolor3 / citycolor4 / cityblack / death3
    Load_BikerClubhouse2_GunLocker: "off",    //    on / off / none
    Load_BikerClubhouse2_ModBooth: "on",    //    on / off / none
    Load_BikerClubhouse2_Meth: "stage3",    //    stage1 / stage2 / stage3 / none
    Load_BikerClubhouse2_Cash: "stage1",    //    stage1 / stage2 / stage3 / none
    Load_BikerClubhouse2_Weed: "stage2",    //    stage1 / stage2 / stage3 / none
    Load_BikerClubhouse2_Coke: "stage3",    //    stage1 / stage2 / stage3 / none
    Load_BikerClubhouse2_Counterfeit: "none",    //    stage1 / stage2 / stage3 / none
    Load_BikerClubhouse2_Documents: "none",    //    stage1 / stage2 / stage3 / none
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                    Biker Club 2 Setting end                            //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                    Counterfeit Setting begin                           //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_Counterfeit: true,    // 1121.897, -3195.338, -40.4025
    Load_CounterfeitPrinter: 'basicProduction', //    upgradeProduction / upgrade / basicProduction / basic / none
    Load_CounterfeitSecurity: 'upgrade',    //    basic / upgrade
    Load_CounterfeitDryer1: 'open',    //    open / on / off / none
    Load_CounterfeitDryer2: 'on',    //    open / on / off / none
    Load_CounterfeitDryer3: 'off',    //    open / on / off / none
    Load_CounterfeitDryer4: 'open',    //    open / on / off / none
    Load_CounterfeitCash: 20,    //    10 / 20 / 100
    Load_CounterfeitChairs: true,    // Brown chairs at the end of the room
    Load_CounterfeitCutter: false,    // Money cutting machine
    Load_CounterfeitFurnitures: true,    // Paper, counting machines, cups
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                    Counterfeit Setting end                             //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                  Cocaine Lockup Setting begin                          //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_Cocaine: true,    // 1093.6, -3196.6, -38.99841
    Load_CocaineStyle: 'upgrade',    //    basic / upgrade
    Load_CocaineSecurity: 'basic',    //    basic / upgrade / none
    Load_CocaineCoke1: true,    // Cocaine on the basic tables
    Load_CocaineCoke2: false,    // Cocaine on the basic tables
    Load_CocaineCoke3: true,    // Cocaine on the basic tables
    Load_CocaineCoke4: true,    // Cocaine on the upgraded tables
    Load_CocaineCoke5: false,    // Cocaine on the upgraded tables
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                   Cocaine Lockup Setting end                           //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                 Document forgery Setting begin                         //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_BikerDocumentForgery: true,    // 1165, -3196.6, -39.01306
    Load_BikerDocumentForgeryStyle: 'basic',        //    basic / upgrade
    Load_BikerDocumentForgeryEquipment: 'basic',    //    basic / upgrade / none
    Load_BikerDocumentForgerySecurity: 'upgrade',    //    basic / upgrade
    Load_BikerDocumentForgeryChairs: true,    // Chairs
    Load_BikerDocumentForgeryProduction: false,    // Papers & Pencils
    Load_BikerDocumentForgeryFurnitures: false,    // Printers & Shredders
    Load_BikerDocumentForgeryClutter: true,    // Pizza boxes & Cups
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                  Document forgery Setting end                          //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                     Meth lab Setting begin                             //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_BikerMethLab: true,    // 1009.5, -3196.6, -38.99682
    Load_BikerMethLabStyle: 'upgrade',    //    empty / basic / upgrade / none
    Load_BikerMethLabSecurity: false,
    Load_BikerMethLabProduction: false,
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                      Meth lab Setting end                              //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                    Weed farm Setting begin                             //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_BikerWeedFarm: true,    // 1051.491, -3196.536, -39.14842
    Load_BikerWeedFarmStyle: 'upgrade',    //    basic / upgrade
    Load_BikerWeedFarmSecurity: 'basic',    //    basic / upgrade
    Load_BikerWeedFarmPlant1Stage: 'small',    //    small / medium / full
    Load_BikerWeedFarmPlant1Light: 'upgrade',    //    basic / upgrade
    Load_BikerWeedFarmPlant2Stage: 'medium',    //    small / medium / full
    Load_BikerWeedFarmPlant2Light: 'basic',    //    basic / upgrade
    Load_BikerWeedFarmPlant3Stage: 'full',    //    small / medium / full
    Load_BikerWeedFarmPlant3Light: 'upgrade',    //    basic / upgrade
    Load_BikerWeedFarmPlant4Stage: 'small',    //    small / medium / full
    Load_BikerWeedFarmPlant4Light: 'basic',    //    basic / upgrade
    Load_BikerWeedFarmPlant5Stage: 'medium',    //    small / medium / full
    Load_BikerWeedFarmPlant5Light: 'upgrade',    //    basic / upgrade
    Load_BikerWeedFarmPlant6Stage: 'full',    //    small / medium / full
    Load_BikerWeedFarmPlant6Light: 'basic',    //    basic / upgrade
    Load_BikerWeedFarmPlant7Stage: 'small',    //    small / medium / full
    Load_BikerWeedFarmPlant7Light: 'upgrade',    //    basic / upgrade
    Load_BikerWeedFarmPlant8Stage: 'medium',    //    small / medium / full
    Load_BikerWeedFarmPlant8Light: 'basic',    //    basic / upgrade
    Load_BikerWeedFarmPlant9Stage: 'full',    //    small / medium / full
    Load_BikerWeedFarmPlant9Light: 'upgrade',    //    basic / upgrade
    Load_BikerWeedFarmProduction: true,    // Weed on the tables
    Load_BikerWeedFarmFans: true,    // Fans & mold buckets
    Load_BikerWeedFarmDrying: true,    // Drying weed hooked to the ceiling
    Load_BikerWeedFarmChairs: true,    // Chairs at the tables
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                     Weed farm Setting end                              //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                Doomsday Facility Setting begin                         //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_DoomsdayFacility: true,    // 345, 4842, -60 / 1286.924, 2846.06, 49.39426 / 18.633, 2610.834, 86.0 / 2768.574, 3919.924, 45.82 / 3406.90, 5504.77, 26.28 / 1.90, 6832.18, 15.82 / -2231.53, 2418.42, 12.18 / -6.92, 3327.0, 41.63 / 2073.62, 1748.77, 104.51 / 1874.35, 284.34, 164.31 / 2050.85, 2950.0, 47.75
    Load_DoomsdayFacilityStyle: 'utility',    // utility / expertise / altitude / power / authority / influence / order / empire / supremacy
    Load_DoomsdayFacilityDecal: 'decal_06',    // decal_01 / decal_02 / decal_03 / decal_04 / decal_05 / decal_06 / decal_07 / decal_08 / decal_09 / none
    Load_DoomsdayFacilityLounge: 'prestige',    // utility / prestige / premier
    Load_DoomsdayFacilitySleeping: 'premier',    // utility / prestige / premier / none
    Load_DoomsdayFacilitySecurity: 'on',        // on / off
    Load_DoomsdayFacilityCanon: 'on',        // on / off
    Load_DoomsdayFacilityBedroom_Control: true,
    Load_DoomsdayFacilityLounge_Control:  true,
    Load_DoomsdayFacilityParts: 'set2',    // set1 / set2 / set3
    Load_DoomsdayFacilityClutterStyle: 'set3',    // set1 / set2 / set3 / set4 / set5 / set6 / set7 / set8 / set9
    Load_DoomsdayFacilitycrewEmblem: true,
    Load_DoomsdayFacilityOutfits: true,
    Load_DoomsdayFacilityTrophy: true,
    Load_DoomsdayFacilityTrophyStyle: 'iaa',    // eagle / submarine / iaa
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                 Doomsday Facility Setting end                          //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //              Executive Apartments Setting begin                        //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_ExecutiveApartmentBlips: true,
    Load_ExecutiveApartmentBlips_Blip: 475,
    Load_ExecutiveApartmentBlips_Scale: 1.0,
    Load_ExecutiveApartmentBlips_Color: 27,
    Load_ExecutiveApartmentBlips_SecondColor: false,
    Load_ExecutiveApartmentBlips_SecondRolor_RGB: {r: 0, g: 0, b: 0},
    Load_ExecutiveApartmentBlips_Name: "Executive Apartment",
    Load_ExecutiveApartment1: true,    // -787.7805, 334.92320, 215.8384
    Load_ExecutiveApartment1Style: 'modern',    // modern / moody / vibrant / sharp / monochrome / seductive / regal / aqua
    Load_ExecutiveApartment1Strip: 'set2',    // set1 / set2 / set3
    Load_ExecutiveApartment1Booze: 'set3',    // set1 / set2 / set3
    Load_ExecutiveApartment1Smoke: 'none',    // stage1 / stage2 / stage3 / none
    Load_ExecutiveApartment2: true,    // -773.2258, 322.8252, 194.8862
    Load_ExecutiveApartment2Style: 'sharp',    // modern / moody / vibrant / sharp / monochrome / seductive / regal / aqua
    Load_ExecutiveApartment2Strip: 'set1',    // set1 / set2 / set3
    Load_ExecutiveApartment2Booze: 'set1',    // set1 / set2 / set3
    Load_ExecutiveApartment2Smoke: 'stage3',    // stage1 / stage2 / stage3 / none
    Load_ExecutiveApartment3: true,    // -787.7805, 334.9232, 186.1134
    Load_ExecutiveApartment3Style: 'aqua',    // modern / moody / vibrant / sharp / monochrome / seductive / regal / aqua
    Load_ExecutiveApartment3Strip: 'set3',    // set1 / set2 / set3
    Load_ExecutiveApartment3Booze: 'set2',    // set1 / set2 / set3
    Load_ExecutiveApartment3Smoke: 'stage1',    // stage1 / stage2 / stage3 / none
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //               Executive Apartments Setting end                         //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //              High Life Apartments Setting begin                        //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_HighLifeApartmentBlips: true,
    Load_HighLifeApartmentBlips_Blip: 475,
    Load_HighLifeApartmentBlips_Scale: 1.0,
    Load_HighLifeApartmentBlips_Color: 47,
    Load_HighLifeApartmentBlips_SecondColor: false,
    Load_HighLifeApartmentBlips_SecondRolor_RGB: {r: 0, g: 0, b: 0},
    Load_HighLifeApartmentBlips_Name: "High Life Apartment",
    Load_HighLifeApartment1: true,    // -1462.281, -539.6276, 72.44434
    Load_HighLifeApartment1Strip: 'set2',    // set1 / set2 / set3
    Load_HighLifeApartment1Booze: 'set3',    // set1 / set2 / set3
    Load_HighLifeApartment1Smoke: 'stage1',    // stage1 / stage2 / stage3
    Load_HighLifeApartment2: true,    // -914.9026, -374.8731, 112.6748
    Load_HighLifeApartment2Strip: 'set2',    // set1 / set2 / set3
    Load_HighLifeApartment2Booze: 'set3',    // set1 / set2 / set3
    Load_HighLifeApartment2Smoke: 'stage1',    // stage1 / stage2 / stage3
    Load_HighLifeApartment3: true,    // -609.5669, 51.28212, 96.60023
    Load_HighLifeApartment3Strip: 'set2',    // set1 / set2 / set3
    Load_HighLifeApartment3Booze: 'set3',    // set1 / set2 / set3
    Load_HighLifeApartment3Smoke: 'stage1',    // stage1 / stage2 / stage3
    Load_HighLifeApartment4: true,    // -778.5061, 331.316, 210.3972
    Load_HighLifeApartment4Strip: 'set2',    // set1 / set2 / set3
    Load_HighLifeApartment4Booze: 'set3',    // set1 / set2 / set3
    Load_HighLifeApartment4Smoke: 'stage1',    // stage1 / stage2 / stage3
    Load_HighLifeApartment5: true,    // -22.61353, -590.1432, 78.43091
    Load_HighLifeApartment5Strip: 'set2',    // set1 / set2 / set3
    Load_HighLifeApartment5Booze: 'set3',    // set1 / set2 / set3
    Load_HighLifeApartment5Smoke: 'stage1',    // stage1 / stage2 / stage3
    Load_HighLifeApartment6: true,    // -609.5669, 51.28212, -183.9808
    Load_HighLifeApartment6Strip: 'set2',    // set1 / set2 / set3
    Load_HighLifeApartment6Booze: 'set3',    // set1 / set2 / set3
    Load_HighLifeApartment6Smoke: 'stage1',    // stage1 / stage2 / stage3
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //               High Life Apartments Setting end                         //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //               High End Apartments Setting begin                        //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_HighEndApartmentBlips: true,
    Load_HighEndApartmentBlips_Blip: 475,
    Load_HighEndApartmentBlips_Scale: 1.0,
    Load_HighEndApartmentBlips_Color: 33,
    Load_HighEndApartmentBlips_SecondColor: false,
    Load_HighEndApartmentBlips_SecondRolor_RGB: {r: 0, g: 0, b: 0},
    Load_HighEndApartmentBlips_Name: "High End Apartment",
    Load_HighEndApartment1: true,    // -35.31277, -580.4199, 88.71221
    Load_HighEndApartment1Strip: 'set2',    // set1 / set2 / set3
    Load_HighEndApartment1Booze: 'set3',    // set1 / set2 / set3
    Load_HighEndApartment1Smoke: 'stage1',    // stage1 / stage2 / stage3
    Load_HighEndApartment2: true,    // -1477.14, -538.7499, 55.5264
    Load_HighEndApartment2Strip: 'set2',    // set1 / set2 / set3
    Load_HighEndApartment2Booze: 'set3',    // set1 / set2 / set3
    Load_HighEndApartment2Smoke: 'stage1',    // stage1 / stage2 / stage3
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                High end Apartments Setting end                         //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //               Low End Penthouses Setting begin                         //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_MidEndHouseBlips: true,
    Load_MidEndHouseBlips_Blip: 475,
    Load_MidEndHouseBlips_Scale: 1.0,
    Load_MidEndHouseBlips_Color: 3,
    Load_MidEndHouseBlips_SecondColor: false,
    Load_MidEndHouseBlips_SecondRolor_RGB: {r: 0, g: 0, b: 0},
    Load_MidEndHouseBlips_Name: "Low End Penthouse",
    Load_LowEndHouse: true,    // 261.4586, -998.8196, -99.00863
    Load_LowEndHouseStrip: 'set3',    // set1 / set2 / set3
    Load_LowEndHouseBooze: 'set2',    // set1 / set2 / set3
    Load_LowEndHouseSmoke: 'stage2',    // stage1 / stage2 / stage3 / none
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                Low End Penthouses Setting end                          //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //             Middle End Penthouses Setting begin                        //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_MidEndHouseBlips: true,
    Load_MidEndHouseBlips_Blip: 475,
    Load_MidEndHouseBlips_Scale: 1.0,
    Load_MidEndHouseBlips_Color: 5,
    Load_MidEndHouseBlips_SecondColor: false,
    Load_MidEndHouseBlips_SecondRolor_RGB: {r: 0, g: 0, b: 0},
    Load_MidEndHouseBlips_Name: "Middle End Penthouse",
    Load_MidEndHouse: true,    // 347.2686, -999.2955, -99.19622
    Load_MidEndHouseStrip: 'set1',    // set1 / set2 / set3
    Load_MidEndHouseBooze: 'set1',    // set1 / set2 / set3
    Load_MidEndHouseSmoke: 'stage3',    // stage1 / stage2 / stage3 / none
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //              Middle End Penthouses Setting end                         //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                High End Houses Setting begin                           //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_HighEndHouseBlips: true,
    Load_HighEndHouseBlips_Blip: 475,
    Load_HighEndHouseBlips_Scale: 1.0,
    Load_HighEndHouseBlips_Color: 46,
    Load_HighEndHouseBlips_SecondColor: false,
    Load_HighEndHouseBlips_SecondRolor_RGB: 0,
    Load_HighEndHouseBlips_Name: "High End Houses",
    Load_HighEndHouse1: true,    // -169.286, 486.4938, 137.4436
    Load_HighEndHouse1Strip: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse1Booze: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse1Smoke: 'stage3',    // stage1 / stage2 / stage3
    Load_HighEndHouse2: true,    // 340.9412, 437.1798, 149.3925
    Load_HighEndHouse2Strip: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse2Booze: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse2Smoke: 'stage3',    // stage1 / stage2 / stage3
    Load_HighEndHouse3: true,    // 373.023, 416.105, 145.7006
    Load_HighEndHouse3Strip: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse3Booze: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse3Smoke: 'stage3',    // stage1 / stage2 / stage3
    Load_HighEndHouse4: true,    // -676.127, 588.612, 145.1698
    Load_HighEndHouse4Strip: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse4Booze: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse4Smoke: 'stage3',    // stage1 / stage2 / stage3
    Load_HighEndHouse5: true,    // -763.107, 615.906, 144.1401
    Load_HighEndHouse5Strip: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse5Booze: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse5Smoke: 'stage3',    // stage1 / stage2 / stage3
    Load_HighEndHouse6: true,    // -857.798, 682.563, 152.6529
    Load_HighEndHouse6Strip: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse6Booze: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse6Smoke: 'stage3',    // stage1 / stage2 / stage3
    Load_HighEndHouse7: true,    // 120.5, 549.952, 184.097
    Load_HighEndHouse7Strip: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse7Booze: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse7Smoke: 'stage3',    // stage1 / stage2 / stage3
    Load_HighEndHouse8: true,    // -1288, 440.748, 97.69459
    Load_HighEndHouse8Strip: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse8Booze: 'set1',    // set1 / set2 / set3
    Load_HighEndHouse8Smoke: 'stage3',    // stage1 / stage2 / stage3
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                 High End Houses Setting end                            //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                Finance Office Setting begin                            //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_FinanceOffice1: true,    // -141.1987, -620.913, 168.8205
    Load_FinanceOffice1Style: 'warm',    // warm / classical / vintage / contrast / rich / cool / ice / conservative / polished
    Load_FinanceOffice1Cash: 'set15',    // set1 / set2 / set3 / set4 / set5 / set6 / set7 / set8 / set9 / set10 / set11 / set12 / set13 / set14 / set15 / set16 / set17 / set18 / set19 / set20 / set21 / set22 / set23 / set24 / none
    Load_FinanceOffice1Cigs: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice1Counterfeit: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice1DrugBags: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice1DrugStatue: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice1Electronic: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice1FurCoats: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice1Gems: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice1Guns: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice1Ivory: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice1JewelWatch: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice1Med: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice1Art: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice1Pills: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice1Silver: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice1Chairs: true,
    Load_FinanceOffice1Booze: true,
    Load_FinanceOffice2: true,    // -75.8466, -826.9893, 243.3859
    Load_FinanceOffice2Style: 'warm',    // warm / classical / vintage / contrast / rich / cool / ice / conservative / polished
    Load_FinanceOffice2Cash: 'set15',    // set1 / set2 / set3 / set4 / set5 / set6 / set7 / set8 / set9 / set10 / set11 / set12 / set13 / set14 / set15 / set16 / set17 / set18 / set19 / set20 / set21 / set22 / set23 / set24 / none
    Load_FinanceOffice2Cigs: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice2Counterfeit: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice2DrugBags: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice2DrugStatue: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice2Electronic: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice2FurCoats: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice2Gems: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice2Guns: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice2Ivory: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice2JewelWatch: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice2Med: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice2Art: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice2Pills: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice2Silver: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice2Chairs: true,
    Load_FinanceOffice2Booze: true,
    Load_FinanceOffice3: true,    // -1579.756, -565.0661, 108.523
    Load_FinanceOffice3Style: 'warm',    // warm / classical / vintage / contrast / rich / cool / ice / conservative / polished
    Load_FinanceOffice3Cash: 'set15',    // set1 / set2 / set3 / set4 / set5 / set6 / set7 / set8 / set9 / set10 / set11 / set12 / set13 / set14 / set15 / set16 / set17 / set18 / set19 / set20 / set21 / set22 / set23 / set24 / none
    Load_FinanceOffice3Cigs: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice3Counterfeit: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice3DrugBags: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice3DrugStatue: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice3Electronic: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice3FurCoats: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice3Gems: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice3Guns: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice3Ivory: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice3JewelWatch: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice3Med: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice3Art: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice3Pills: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice3Silver: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice3Chairs: true,
    Load_FinanceOffice3Booze: true,
    Load_FinanceOffice4: true,    // -1392.667, -480.4736, 72.04217 / (if this true then make sure that Load_Garage4Part is set to garage2)
    Load_FinanceOffice4Style: 'warm',    // warm / classical / vintage / contrast / rich / cool / ice / conservative / polished
    Load_FinanceOffice4Cash: 'set15',    // set1 / set2 / set3 / set4 / set5 / set6 / set7 / set8 / set9 / set10 / set11 / set12 / set13 / set14 / set15 / set16 / set17 / set18 / set19 / set20 / set21 / set22 / set23 / set24 / none
    Load_FinanceOffice4Cigs: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice4Counterfeit: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice4DrugBags: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice4DrugStatue: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice4Electronic: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice4FurCoats: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice4Gems: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice4Guns: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice4Ivory: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice4JewelWatch: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice4Med: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice4Art: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice4Pills: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice4Silver: 'none',    // set1 / set2 / set3 / none
    Load_FinanceOffice4Chairs: true,
    Load_FinanceOffice4Booze: true,
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                 Finance Office Setting end                             //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                    Garage Setting begin                                //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_Garage1: true,    // -191.0133, -579.1428, 135.0 / -117.4989, -568.1132, 135.0 / -136.0780, -630.1852, 135.0 / -146.6166, -596.6301, 166.0
    Load_Garage1Part: 'garage2',     // garage1 / garage2 / garage3
    Load_Garage1Style: 'set3',    // set1 / set2 / set3 / set4
    Load_Garage1LevelNums: 'set23',    // set1 / set2 / set3 / set4 / set5 / set6 / set7 / set8 / set9 / set10 / set11 / set12 / set13 / set14 / set15 / set16 / set17 / set18 / set19 / set20 / set21 / set22 / set23 / set24 / set25 / set26 / set27 / none
    Load_Garage1Lightning: 'set5',    // set1 / set2 / set3 / set4 / set5 / set6 / set7 / set8 / set9 / none
    Load_Garage1floor: "aliens",    // city / seabed / aliens / clouds / money / zebra / blackwhite / barcode / paintbrushbw / grid / splashes / squares / mosaic / paintbrushcolor / curvescolor / marblebrown / marbleblue / marblebw / maze / none
    Load_Garage2: true,    // -84.2193, -823.0851, 221.0 / -69.8627, -824.7498, 221.0 / -80.4318, -813.2536, 221.0 / -73.9039, -821.6204, 284.0
    Load_Garage2Part: 'garage2',     // garage1 / garage2 / garage3
    Load_Garage2Style: 'set3',    // set1 / set2 / set3 / set4
    Load_Garage2LevelNums: 'set23',    // set1 / set2 / set3 / set4 / set5 / set6 / set7 / set8 / set9 / set10 / set11 / set12 / set13 / set14 / set15 / set16 / set17 / set18 / set19 / set20 / set21 / set22 / set23 / set24 / set25 / set26 / set27 / none
    Load_Garage2Lightning: 'set5',    // set1 / set2 / set3 / set4 / set5 / set6 / set7 / set8 / set9 / none
    Load_Garage2floor: "aliens",    // city / seabed / aliens / clouds / money / zebra / blackwhite / barcode / paintbrushbw / grid / splashes / squares / mosaic / paintbrushcolor / curvescolor / marblebrown / marbleblue / marblebw / maze / none
    Load_Garage3: true,    // -1581.1120, -567.2450, 85.5 / -1568.7390, -562.0455, 85.5 / -1563.5570, -574.4314, 85.5 / -1578.0230, -576.4251, 104.2000
    Load_Garage3Part: 'garage2',     // garage1 / garage2 / garage3
    Load_Garage3Style: 'set3',    // set1 / set2 / set3 / set4
    Load_Garage3LevelNums: 'set23',    // set1 / set2 / set3 / set4 / set5 / set6 / set7 / set8 / set9 / set10 / set11 / set12 / set13 / set14 / set15 / set16 / set17 / set18 / set19 / set20 / set21 / set22 / set23 / set24 / set25 / set26 / set27 / none
    Load_Garage3Lightning: 'set5',    // set1 / set2 / set3 / set4 / set5 / set6 / set7 / set8 / set9 / none
    Load_Garage3floor: "aliens",    // city / seabed / aliens / clouds / money / zebra / blackwhite / barcode / paintbrushbw / grid / splashes / squares / mosaic / paintbrushcolor / curvescolor / marblebrown / marbleblue / marblebw / maze / none
    Load_Garage4: true,    // -1388.8400, -478.7402, 56.1 / -1388.8600, -478.7574, 48.1 / -1374.6820, -474.3586, 56.1 / -1391.2450, -473.9638, 77.2
    Load_Garage4Part: 'garage2',     // garage1 / garage2 / garage3 (if you would like to set garage1 or garage3 make sure that Load_FinanceOffice4 is set to false)
    Load_Garage4Style: 'set3',    // set1 / set2 / set3 / set4
    Load_Garage4LevelNums: 'set23',    // set1 / set2 / set3 / set4 / set5 / set6 / set7 / set8 / set9 / set10 / set11 / set12 / set13 / set14 / set15 / set16 / set17 / set18 / set19 / set20 / set21 / set22 / set23 / set24 / set25 / set26 / set27 / none
    Load_Garage4Lightning: 'set5',    // set1 / set2 / set3 / set4 / set5 / set6 / set7 / set8 / set9 / none
    Load_Garage4floor: "aliens",    // city / seabed / aliens / clouds / money / zebra / blackwhite / barcode / paintbrushbw / grid / splashes / squares / mosaic / paintbrushcolor / curvescolor / marblebrown / marbleblue / marblebw / maze / none
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                     Garage Setting end                                 //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //               Vehicle Warehouse Setting begin                          //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_VehicleWarehouse: true,    // 994.5925, -3002.594, -39.64699 / 969.5376, -3000.411, -48.64689
    Load_VehicleWarehouseStyle: 'branded',    // basic / branded / urban
    Load_VehicleWarehousefloorHatch: true,
    Load_VehicleWarehousedoorBlocker: false,
    Load_VehicleWarehousePump: 'set4',    // set1 / set2 / set3 / set4 / set5 / set6 / set7 / set8 
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                Vehicle Warehouse Setting end                           //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                  MP Security Setting begin                             //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_SecurityBillboards: true,    // -592.6896, 273.1052, 116.302444
    Load_SecurityGarage: true,    // -1071.4387, -77.033875, -93.525505
    Load_SecurityGarageWorkshopWallpaper1: true,
    Load_SecurityGarageWorkshopWallpaper2: false,
    Load_SecurityGarageWorkshopWallpaper3: false,
    Load_SecurityGarageWorkshopWallpaper4: false,
    Load_SecurityGarageWorkshopWallpaper5: false,
    Load_SecurityGarageWorkshopWallpaper6: false,
    Load_SecurityGarageWorkshopWallpaper7: false,
    Load_SecurityGarageWorkshopWallpaper8: false,
    Load_SecurityGarageWorkshopWallpaper9: false,
    Load_SecurityGarageArt1: false,
    Load_SecurityGarageArt2: true, 
    Load_SecurityGarageArt3: false, 
    Load_SecurityGarageArt4: false,
    Load_SecurityGarageArt5: false,
    Load_SecurityGarageArt6: true,
    Load_SecurityGarageWorkshopWall: false,
    Load_SecurityGaragetints: true,
    Load_SecurityWorkshopLights: true,
    Load_SecuritySecurityMusicRoofTop: true,    // -592.6896, 273.1052, 116.302444
    Load_SecurityOffice1: true,    // -1021.86084, -427.74564, 68.95764
    Load_SecurityOffice1Wallpaper1: false,
    Load_SecurityOffice1Wallpaper2: false,
    Load_SecurityOffice1Wallpaper3: false,
    Load_SecurityOffice1Wallpaper4: false,
    Load_SecurityOffice1Wallpaper5: false,
    Load_SecurityOffice1Wallpaper6: false,
    Load_SecurityOffice1Wallpaper7: false,
    Load_SecurityOffice1Wallpaper8: true,
    Load_SecurityOffice1Wallpaper9: false,
    Load_SecurityOffice1Trip1: true,
    Load_SecurityOffice1Trip2: true,
    Load_SecurityOffice1Trip3: true,
    Load_SecurityOffice1Disc1: true,
    Load_SecurityOffice1Disc2: false,
    Load_SecurityOffice1Disc3: false,
    Load_SecurityOffice1Disc4: false,
    Load_SecurityOffice1Disc5: false,
    Load_SecurityOffice1Disc6: false,
    Load_SecurityOffice1Art1: true,
    Load_SecurityOffice1Art2: false,
    Load_SecurityOffice1Art3: false,
    Load_SecurityOffice1Moving: true,
    Load_SecurityOffice1TintAG: true,
    Load_SecurityOffice1SpareSeats: true,
    Load_SecurityOffice1PlayerSeats: true,
    Load_SecurityOffice1PlayerDesk: true,
    Load_SecurityOffice1GolfIntro: true,
    Load_SecurityOffice1Setup: true,
    Load_SecurityOffice1Nightclub: true,
    Load_SecurityOffice1Yacht: true,
    Load_SecurityOffice1Promoter: true,
    Load_SecurityOffice1LimoPhoto: true,
    Load_SecurityOffice1LimoWallet: true,
    Load_SecurityOffice1TheWay: true,
    Load_SecurityOffice1Billionaire: true,
    Load_SecurityOffice1Families: true,
    Load_SecurityOffice1Ballas: true,
    Load_SecurityOffice1Hood: true,
    Load_SecurityOffice1FireBooth: true,
    Load_SecurityOffice150: true,
    Load_SecurityOffice1Taxi: true,
    Load_SecurityOffice1GoneGolfing: true,
    Load_SecurityOffice1Motel: true,
    Load_SecurityOffice1Construction: true,
    Load_SecurityOffice1HitList: true,
    Load_SecurityOffice1Tuner: true,
    Load_SecurityOffice1Attack: true,
    Load_SecurityOffice1Vehicles: true,
    Load_SecurityOffice1Armoury: false,
    Load_SecurityOffice1StandardOffice: true,
    Load_SecurityOffice1Blocker: false,
    Load_SecurityOffice2: true,    // 383.4156, -59.878227, 108.4595
    Load_SecurityOffice2Wallpaper1: false,
    Load_SecurityOffice2Wallpaper2: false,
    Load_SecurityOffice2Wallpaper3: false,
    Load_SecurityOffice2Wallpaper4: false,
    Load_SecurityOffice2Wallpaper5: false,
    Load_SecurityOffice2Wallpaper6: false,
    Load_SecurityOffice2Wallpaper7: false,
    Load_SecurityOffice2Wallpaper8: true,
    Load_SecurityOffice2Wallpaper9: false,
    Load_SecurityOffice2Trip1: true,
    Load_SecurityOffice2Trip2: true,
    Load_SecurityOffice2Trip3: true,
    Load_SecurityOffice2Disc1: true,
    Load_SecurityOffice2Disc2: false,
    Load_SecurityOffice2Disc3: false,
    Load_SecurityOffice2Disc4: false,
    Load_SecurityOffice2Disc5: false,
    Load_SecurityOffice2Disc6: false,
    Load_SecurityOffice2Art1: true,
    Load_SecurityOffice2Art2: false,
    Load_SecurityOffice2Art3: false,
    Load_SecurityOffice2Moving: true,
    Load_SecurityOffice2TintAG: true,
    Load_SecurityOffice2SpareSeats: true,
    Load_SecurityOffice2PlayerSeats: true,
    Load_SecurityOffice2PlayerDesk: true,
    Load_SecurityOffice2GolfIntro: true,
    Load_SecurityOffice2Setup: true,
    Load_SecurityOffice2Nightclub: true,
    Load_SecurityOffice2Yacht: true,
    Load_SecurityOffice2Promoter: true,
    Load_SecurityOffice2LimoPhoto: true,
    Load_SecurityOffice2LimoWallet: true,
    Load_SecurityOffice2TheWay: true,
    Load_SecurityOffice2Billionaire: true,
    Load_SecurityOffice2Families: true,
    Load_SecurityOffice2Ballas: true,
    Load_SecurityOffice2Hood: true,
    Load_SecurityOffice2FireBooth: true,
    Load_SecurityOffice250: true,
    Load_SecurityOffice2Taxi: true,
    Load_SecurityOffice2GoneGolfing: true,
    Load_SecurityOffice2Motel: true,
    Load_SecurityOffice2Construction: true,
    Load_SecurityOffice2HitList: true,
    Load_SecurityOffice2Tuner: true,
    Load_SecurityOffice2Attack: true,
    Load_SecurityOffice2Vehicles: true,
    Load_SecurityOffice2Armoury: false,
    Load_SecurityOffice2StandardOffice: true,
    Load_SecurityOffice2Blocker: false,
    Load_SecurityOffice3: true,    // -1004.23035, -761.2084, 66.99069
    Load_SecurityOffice3Wallpaper1: false,
    Load_SecurityOffice3Wallpaper2: false,
    Load_SecurityOffice3Wallpaper3: false,
    Load_SecurityOffice3Wallpaper4: false,
    Load_SecurityOffice3Wallpaper5: false,
    Load_SecurityOffice3Wallpaper6: false,
    Load_SecurityOffice3Wallpaper7: false,
    Load_SecurityOffice3Wallpaper8: true,
    Load_SecurityOffice3Wallpaper9: false,
    Load_SecurityOffice3Trip1: true,
    Load_SecurityOffice3Trip2: true,
    Load_SecurityOffice3Trip3: true,
    Load_SecurityOffice3Disc1: true,
    Load_SecurityOffice3Disc2: false,
    Load_SecurityOffice3Disc3: false,
    Load_SecurityOffice3Disc4: false,
    Load_SecurityOffice3Disc5: false,
    Load_SecurityOffice3Disc6: false,
    Load_SecurityOffice3Art1: true,
    Load_SecurityOffice3Art2: false,
    Load_SecurityOffice3Art3: false,
    Load_SecurityOffice3Moving: true,
    Load_SecurityOffice3TintAG: true,
    Load_SecurityOffice3SpareSeats: true,
    Load_SecurityOffice3PlayerSeats: true,
    Load_SecurityOffice3PlayerDesk: true,
    Load_SecurityOffice3GolfIntro: true,
    Load_SecurityOffice3Setup: true,
    Load_SecurityOffice3Nightclub: true,
    Load_SecurityOffice3Yacht: true,
    Load_SecurityOffice3Promoter: true,
    Load_SecurityOffice3LimoPhoto: true,
    Load_SecurityOffice3LimoWallet: true,
    Load_SecurityOffice3TheWay: true,
    Load_SecurityOffice3Billionaire: true,
    Load_SecurityOffice3Families: true,
    Load_SecurityOffice3Ballas: true,
    Load_SecurityOffice3Hood: true,
    Load_SecurityOffice3FireBooth: true,
    Load_SecurityOffice350: true,
    Load_SecurityOffice3Taxi: true,
    Load_SecurityOffice3GoneGolfing: true,
    Load_SecurityOffice3Motel: true,
    Load_SecurityOffice3Construction: true,
    Load_SecurityOffice3HitList: true,
    Load_SecurityOffice3Tuner: true,
    Load_SecurityOffice3Attack: true,
    Load_SecurityOffice3Vehicles: true,
    Load_SecurityOffice3Armoury: false,
    Load_SecurityOffice3StandardOffice: true,
    Load_SecurityOffice3Blocker: false,
    Load_SecurityOffice4: true,    // -587.87213, -716.84937, 118.10156
    Load_SecurityOffice4Wallpaper1: false,
    Load_SecurityOffice4Wallpaper2: false,
    Load_SecurityOffice4Wallpaper3: false,
    Load_SecurityOffice4Wallpaper4: false,
    Load_SecurityOffice4Wallpaper5: false,
    Load_SecurityOffice4Wallpaper6: false,
    Load_SecurityOffice4Wallpaper7: false,
    Load_SecurityOffice4Wallpaper8: true,
    Load_SecurityOffice4Wallpaper9: false,
    Load_SecurityOffice4Trip1: true,
    Load_SecurityOffice4Trip2: true,
    Load_SecurityOffice4Trip3: true,
    Load_SecurityOffice4Disc1: true,
    Load_SecurityOffice4Disc2: false,
    Load_SecurityOffice4Disc3: false,
    Load_SecurityOffice4Disc4: false,
    Load_SecurityOffice4Disc5: false,
    Load_SecurityOffice4Disc6: false,
    Load_SecurityOffice4Art1: true,
    Load_SecurityOffice4Art2: false,
    Load_SecurityOffice4Art3: false,
    Load_SecurityOffice4Moving: true,
    Load_SecurityOffice4TintAG: true,
    Load_SecurityOffice4SpareSeats: true,
    Load_SecurityOffice4PlayerSeats: true,
    Load_SecurityOffice4PlayerDesk: true,
    Load_SecurityOffice4GolfIntro: true,
    Load_SecurityOffice4Setup: true,
    Load_SecurityOffice4Nightclub: true,
    Load_SecurityOffice4Yacht: true,
    Load_SecurityOffice4Promoter: true,
    Load_SecurityOffice4LimoPhoto: true,
    Load_SecurityOffice4LimoWallet: true,
    Load_SecurityOffice4TheWay: true,
    Load_SecurityOffice4Billionaire: true,
    Load_SecurityOffice4Families: true,
    Load_SecurityOffice4Ballas: true,
    Load_SecurityOffice4Hood: true,
    Load_SecurityOffice4FireBooth: true,
    Load_SecurityOffice450: true,
    Load_SecurityOffice4Taxi: true,
    Load_SecurityOffice4GoneGolfing: true,
    Load_SecurityOffice4Motel: true,
    Load_SecurityOffice4Construction: true,
    Load_SecurityOffice4HitList: true,
    Load_SecurityOffice4Tuner: true,
    Load_SecurityOffice4Attack: true,
    Load_SecurityOffice4Vehicles: true,
    Load_SecurityOffice4Armoury: false,
    Load_SecurityOffice4StandardOffice: true,
    Load_SecurityOffice4Blocker: false,
    Load_SecurityStudio: true,    // -1000.7252, -70.559875, -98.10669
    Load_SecurityStudioP3A1: false,
    Load_SecurityStudioP2: false,
    Load_SecurityStudioP1: false,
    Load_SecurityStudioFire: true,
    Load_SecurityStudiodefault: true,
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                   MP Security Setting end                              //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                     Hangar Setting begin                               //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_Hangar: true,    // -1267.0 -3013.135 -49.5
    Load_HangarWallColor: "grayorange",    // sablered / whiteblue / grayorange / grayblue / graylightgray / yellowgray / lightblackwhite / darkblackwhite / sablegray
    Load_HangarFloorStyle: "plain",    // raw / plain
    Load_HangarDecals: "decal4",    // decal1 / decal2 / decal3 / decal4 / decal5 / decal6 / decal7 / decal8 / decal9
    Load_HangarCranes: "on",    // on / off
    Load_HangarModArea: "on",    //on / off
    Load_HangarOffice: "traditional",    // basic / modern / traditional
    Load_HangarBedroomStyle: "traditional",    // modern / traditional / none
    Load_HangarBedroomBlinds: "opened",    // opened / closed / none
    Load_HangarBedroomFakeLights: "blue",    // yellow / blue / white / none
    Load_HangarBedroomCeiling: "blue",    // yellow / blue / white / none
    Load_HangarBedroomWalls: "white",    // neutral / blue / orange / lightyellow / lightyellow2 / dimmed / strongyellow / white / lightgreen / yellow / none
    Load_HangarBedroomClutter: true,
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                      Hangar Setting end                                //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                      Tuner Setting begin                               //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_Tunergarage: true,    // -1350.0, 160.0, -100.0
    Load_TunergarageBedroom: true,
    Load_TunergarageBedroomempty: false,
    Load_TunergarageBombs: true,
    Load_TunergarageClutter: false,
    Load_TunergarageCabinets: false,
    Load_TunergarageCutscene: true,
    Load_TunergarageLiftdefault: true,
    Load_TunergarageLiftpurchase: true,
    Load_TunergarageChalkboard: false,
    Load_TunergarageContainer: false,
    Load_TunergarageSeats: false,
    Load_TunergarageDeftable: false,
    Load_TunergarageDrive: true,
    Load_TunergarageEcu: true,
    Load_TunergarageIaa: true,
    Load_TunergarageJammers: true,
    Load_TunergarageLaptop: true,
    Load_TunergarageLightbox: true,
    Load_TunergarageMethlab: false,
    Load_TunergaragePlate: true,
    Load_TunergarageScope: true,
    Load_TunergarageStyle1: false,
    Load_TunergarageStyle2: false,
    Load_TunergarageStyle3: false,
    Load_TunergarageStyle4: false,
    Load_TunergarageStyle5: false,
    Load_TunergarageStyle6: false,
    Load_TunergarageStyle7: false,
    Load_TunergarageStyle8: false,
    Load_TunergarageStyle9: true,
    Load_TunergarageTable: false,
    Load_TunergarageThermal: true,
    Load_TunergarageTints: true,
    Load_TunergarageTrain: true,
    Load_TunergarageVirus: true,
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                       Tuner Setting end                                //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                     Meetup Setting begin                               //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_TunerMeetup: true,    // -2000.0, 1113.211, -25.36243
    Load_TunerMeetupCrew: true,
    Load_TunerMeetupLights: true,
    Load_TunerMeetupLightsCheap: true,
    Load_TunerMeetupPlayer: true,
    Load_TunerMeetupTestCrew: false,
    Load_TunerMeetupTestLights: true,
    Load_TunerMeetupTestLightsCheap: true,
    Load_TunerMeetupTrial: true,
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                      Meetup Setting end                                //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                     Methlab Setting begin                              //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    TunerMethLab: true,    // 981.9999, -143.0, -50.0
    TunerMethLabWalls: true,
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                      Methlab Setting end                               //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//

    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                     Warehouse Setting begin                            //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_Warehouse: true,    // 849.1047, -3000.209, -45.974354
    Load_WarehouseStyle1: false,
    Load_WarehouseStyle2: false,
    Load_WarehouseStyle3: false,
    Load_WarehouseStyle4: true,
    Load_WarehouseStyle5: false,
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                      Warehouse Setting end                             //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
    //                     Drug Wars Setting begin                            //
    //˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅˅//
    Load_Drug_Wars: true,
    Load_Train_Crash: false,
    Load_RV_VAN: true,    // 485.0, -2626.0, -50.0
    Load_Garage5: true,    // 520, -2625, -50
    Garage5_Color_ID: 7,    // 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9
    Load_Freak_Show_Gang: true,    // 570.0, -415.0, -70.0
    Freak_Show_Door: "close",
    Load_New_Morgue: true,
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                      Drug Wars Setting end                             //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
};