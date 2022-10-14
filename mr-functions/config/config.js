export const _CONFIG = {
//discord    
    DISCORD_INVITE_LINK: 'https://discord.gg/UDdY8YJ4b9',
    DISCORD_PREFIX: '+',
    LANGUAGE: 'de',
    WHITELIST: true,
// Log and announce at discord
    LOG_WHITELIST: true,
    LOG_MYSQL: true,
    ANNOUNCE_LOG_IN_OUT: false,
// Phone
    PHONE_NUMBER_STARTING_0: true,
    PHONE_EMAIL_DOMAIN: ["mr-core.de","mr-core.com","mr-core.uk"],
// IPL-Loader
    Load_Graffitis: true,    //    1861.28, 2402.11, 58.53    //    2697.32, 3162.18, 58.1    //    2119.12, 3058.21, 53.25
    Load_Bahamamama: true,    //    -1388.0013, -618.41967, 30.819599
    Load_redCarpet: true,    //    300.5927, 199.7589, 104.3776
    Load_Ufos: true,    //    2490.47729, 3774.84351, 2414.035    //    501.52880000, 5593.86500000, 796.23250000    //    2051.99463, 3237.05835, 1456.97021
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
    Load_MichaelBed: 'default',    //    default / tidy
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
    Load_Simeon: true,    //    -47.16170 -1115.3327 26.5
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
    Load_StripClub: true,
    Load_StripClubMess: true,    // A bit of mess in the office
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
	Load_Nightclub: true,    //    -1569.6395 -3016.800 -74.4139
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
	Load_NightClubDancingPedAtNightclub: true,    // Loads dancing Peds to Nightclub
    //˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄˄//
    //                     Nightclubs Settings End                            //
    //˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅˄˅//
};

