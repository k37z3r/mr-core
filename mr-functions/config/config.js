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
	IPL_Blip_Loader: true,
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
    Load_NightClubDancingPedAtNightclub: true,    // Loads dancing Peds to Nightclub
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
};

