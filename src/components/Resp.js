const Resp = {
    "requestParameters": {
        "mode": "TRANSIT,WALK",
        "date": "2022/02/23",
        "fromPlace": "28.66514,77.21097",
        "toPlace": "28.66001,77.20385",
        "numItineraries": "3"
    },
    "plan": {
        "date": 1645590193057,
        "from": {
            "name": "Origin",
            "lon": 77.21097,
            "lat": 28.66514,
            "vertexType": "NORMAL"
        },
        "to": {
            "name": "Destination",
            "lon": 77.20385,
            "lat": 28.66001,
            "vertexType": "NORMAL"
        },
        "itineraries": [
            {
                "duration": 983,
                "startTime": 1645590193000,
                "endTime": 1645591176000,
                "walkTime": 983,
                "transitTime": 0,
                "waitingTime": 0,
                "walkDistance": 1260.7769999999998,
                "walkLimitExceeded": false,
                "generalizedCost": 1917,
                "elevationLost": 0,
                "elevationGained": 0,
                "transfers": 0,
                "fare": {
                    "fare": {},
                    "details": {}
                },
                "legs": [
                    {
                        "startTime": 1645590193000,
                        "endTime": 1645591176000,
                        "departureDelay": 0,
                        "arrivalDelay": 0,
                        "realTime": false,
                        "distance": 1260.7769999999998,
                        "generalizedCost": 1917,
                        "pathway": false,
                        "mode": "WALK",
                        "transitLeg": false,
                        "route": "",
                        "agencyTimeZoneOffset": 19800000,
                        "interlineWithPreviousLeg": false,
                        "from": {
                            "name": "Origin",
                            "lon": 77.21097,
                            "lat": 28.66514,
                            "departure": 1645590193000,
                            "vertexType": "NORMAL"
                        },
                        "to": {
                            "name": "Destination",
                            "lon": 77.20385,
                            "lat": 28.66001,
                            "arrival": 1645591176000,
                            "vertexType": "NORMAL"
                        },
                        "legGeometry": {
                            "points": "{o}mDuegvMiCxKNPPNXLPHFBzAb@jAZb@P\\BJFLDXPPLHHRTLRJPHRL\\Lj@DZBJ@N@L?J?R@L@RBRDPFZHRDJ?D@BDDHLNP\\TdAd@l@VxA`BRX\\f@BB|@dALLZLfAd@fBr@f@LTBLi@w@m@m@Uo@Y[U",
                            "length": 59
                        },
                        "steps": [
                            {
                                "distance": 214.613,
                                "relativeDirection": "DEPART",
                                "streetName": "road",
                                "absoluteDirection": "WEST",
                                "stayOn": false,
                                "area": false,
                                "bogusName": false,
                                "lon": 77.21067862048909,
                                "lat": 28.66446868058138,
                                "elevation": "",
                                "walkingBike": false
                            },
                            {
                                "distance": 177.801,
                                "relativeDirection": "LEFT",
                                "streetName": "Rani Jhansi Flyover",
                                "absoluteDirection": "SOUTHWEST",
                                "stayOn": false,
                                "area": false,
                                "bogusName": false,
                                "lon": 77.208623,
                                "lat": 28.665155600000002,
                                "elevation": "",
                                "walkingBike": false
                            },
                            {
                                "distance": 277.657,
                                "relativeDirection": "CONTINUE",
                                "streetName": "link",
                                "absoluteDirection": "SOUTH",
                                "stayOn": false,
                                "area": false,
                                "bogusName": true,
                                "lon": 77.2079001,
                                "lat": 28.6637023,
                                "elevation": "",
                                "walkingBike": false
                            },
                            {
                                "distance": 454.48799999999994,
                                "relativeDirection": "CONTINUE",
                                "streetName": "Rani Jhansi Road",
                                "absoluteDirection": "SOUTHWEST",
                                "stayOn": false,
                                "area": false,
                                "bogusName": false,
                                "lon": 77.20566120000001,
                                "lat": 28.6624768,
                                "elevation": "",
                                "walkingBike": false
                            },
                            {
                                "distance": 136.21800000000002,
                                "relativeDirection": "LEFT",
                                "streetName": "road",
                                "absoluteDirection": "EAST",
                                "stayOn": false,
                                "area": false,
                                "bogusName": true,
                                "lon": 77.2031395,
                                "lat": 28.659147100000002,
                                "elevation": "",
                                "walkingBike": false
                            }
                        ],
                        "rentedBike": false,
                        "walkingBike": false,
                        "duration": 983
                    }
                ],
                "tooSloped": false,
                "arrivedAtDestinationWithRentedBicycle": false
            },
            {
                "duration": 632,
                "startTime": 1645590284000,
                "endTime": 1645590916000,
                "walkTime": 490,
                "transitTime": 142,
                "waitingTime": 0,
                "walkDistance": 625.972,
                "walkLimitExceeded": false,
                "generalizedCost": 1699,
                "elevationLost": 0,
                "elevationGained": 0,
                "transfers": 0,
                "fare": {
                    "fare": {
                        "regular": {
                            "currency": {
                                "symbol": "???",
                                "currency": "INR",
                                "defaultFractionDigits": 2,
                                "currencyCode": "INR"
                            },
                            "cents": 500
                        }
                    },
                    "details": {
                        "regular": [
                            {
                                "fareId": "1:DIMTS_1014_4145_790",
                                "price": {
                                    "currency": {
                                        "symbol": "???",
                                        "currency": "INR",
                                        "defaultFractionDigits": 2,
                                        "currencyCode": "INR"
                                    },
                                    "cents": 500
                                },
                                "routes": [
                                    "1:1014"
                                ]
                            }
                        ]
                    }
                },
                "legs": [
                    {
                        "startTime": 1645590284000,
                        "endTime": 1645590495000,
                        "departureDelay": 0,
                        "arrivalDelay": 0,
                        "realTime": false,
                        "distance": 271.552,
                        "generalizedCost": 414,
                        "pathway": false,
                        "mode": "WALK",
                        "transitLeg": false,
                        "route": "",
                        "agencyTimeZoneOffset": 19800000,
                        "interlineWithPreviousLeg": false,
                        "from": {
                            "name": "Origin",
                            "lon": 77.21097,
                            "lat": 28.66514,
                            "departure": 1645590284000,
                            "vertexType": "NORMAL"
                        },
                        "to": {
                            "name": "Azad Market",
                            "stopId": "1:4145",
                            "stopCode": "U02398",
                            "lon": 77.2084,
                            "lat": 28.6647,
                            "arrival": 1645590495000,
                            "departure": 1645590495000,
                            "zoneId": "4145",
                            "vertexType": "TRANSIT"
                        },
                        "legGeometry": {
                            "points": "{o}mDuegvMiCxKNPPNXLPHFBBQ",
                            "length": 8
                        },
                        "steps": [
                            {
                                "distance": 214.613,
                                "relativeDirection": "DEPART",
                                "streetName": "road",
                                "absoluteDirection": "WEST",
                                "stayOn": false,
                                "area": false,
                                "bogusName": false,
                                "lon": 77.21067862048909,
                                "lat": 28.66446868058138,
                                "elevation": "",
                                "walkingBike": false
                            },
                            {
                                "distance": 56.93900000000001,
                                "relativeDirection": "LEFT",
                                "streetName": "Rani Jhansi Flyover",
                                "absoluteDirection": "SOUTHWEST",
                                "stayOn": false,
                                "area": false,
                                "bogusName": false,
                                "lon": 77.208623,
                                "lat": 28.665155600000002,
                                "elevation": "",
                                "walkingBike": false
                            }
                        ],
                        "rentedBike": false,
                        "walkingBike": false,
                        "duration": 211
                    },
                    {
                        "startTime": 1645590495000,
                        "endTime": 1645590637000,
                        "departureDelay": 0,
                        "arrivalDelay": 0,
                        "realTime": false,
                        "distance": 594.6739387193659,
                        "generalizedCost": 742,
                        "pathway": false,
                        "mode": "BUS",
                        "transitLeg": true,
                        "route": "236UP",
                        "agencyName": "Delhi Integrated Multi-Modal Transit System Ltd.",
                        "agencyUrl": "https://www.dimts.in/",
                        "agencyTimeZoneOffset": 0,
                        "routeId": "1:1014",
                        "interlineWithPreviousLeg": false,
                        "agencyId": "1:DIMTS",
                        "tripId": "1:1014_09_00",
                        "serviceDate": "2022-02-23",
                        "from": {
                            "name": "Azad Market",
                            "stopId": "1:4145",
                            "stopCode": "U02398",
                            "lon": 77.2084,
                            "lat": 28.6647,
                            "arrival": 1645590495000,
                            "departure": 1645590495000,
                            "zoneId": "4145",
                            "stopIndex": 24,
                            "stopSequence": 24,
                            "vertexType": "TRANSIT"
                        },
                        "to": {
                            "name": "Bara Hindu Rao",
                            "stopId": "1:790",
                            "stopCode": "U02319",
                            "lon": 77.20415,
                            "lat": 28.6608666666667,
                            "arrival": 1645590637000,
                            "departure": 1645590637000,
                            "zoneId": "790",
                            "stopIndex": 25,
                            "stopSequence": 25,
                            "vertexType": "TRANSIT"
                        },
                        "legGeometry": {
                            "points": "kq}mDowfvM~VpY",
                            "length": 2
                        },
                        "steps": [],
                        "routeLongName": "236UP",
                        "duration": 142
                    },
                    {
                        "startTime": 1645590637000,
                        "endTime": 1645590916000,
                        "departureDelay": 0,
                        "arrivalDelay": 0,
                        "realTime": false,
                        "distance": 354.41999999999996,
                        "generalizedCost": 542,
                        "pathway": false,
                        "mode": "WALK",
                        "transitLeg": false,
                        "route": "",
                        "agencyTimeZoneOffset": 19800000,
                        "interlineWithPreviousLeg": false,
                        "from": {
                            "name": "Bara Hindu Rao",
                            "stopId": "1:790",
                            "stopCode": "U02319",
                            "lon": 77.20415,
                            "lat": 28.6608666666667,
                            "arrival": 1645590637000,
                            "departure": 1645590637000,
                            "zoneId": "790",
                            "vertexType": "TRANSIT"
                        },
                        "to": {
                            "name": "Destination",
                            "lon": 77.20385,
                            "lat": 28.66001,
                            "arrival": 1645590916000,
                            "vertexType": "NORMAL"
                        },
                        "legGeometry": {
                            "points": "ky|mD}|evM@A|@dALLZLfAd@fBr@f@LTBLi@w@m@m@Uo@Y[U",
                            "length": 14
                        },
                        "steps": [
                            {
                                "distance": 218.202,
                                "relativeDirection": "DEPART",
                                "streetName": "Rani Jhansi Road",
                                "absoluteDirection": "SOUTHWEST",
                                "stayOn": false,
                                "area": false,
                                "bogusName": false,
                                "lon": 77.20416235719009,
                                "lat": 28.660855970007344,
                                "elevation": "",
                                "walkingBike": false
                            },
                            {
                                "distance": 136.21800000000002,
                                "relativeDirection": "LEFT",
                                "streetName": "road",
                                "absoluteDirection": "EAST",
                                "stayOn": false,
                                "area": false,
                                "bogusName": true,
                                "lon": 77.2031395,
                                "lat": 28.659147100000002,
                                "elevation": "",
                                "walkingBike": false
                            }
                        ],
                        "rentedBike": false,
                        "walkingBike": false,
                        "duration": 279
                    }
                ],
                "tooSloped": false,
                "arrivedAtDestinationWithRentedBicycle": false
            },
            {
                "duration": 632,
                "startTime": 1645590884000,
                "endTime": 1645591516000,
                "walkTime": 490,
                "transitTime": 142,
                "waitingTime": 0,
                "walkDistance": 625.972,
                "walkLimitExceeded": false,
                "generalizedCost": 1699,
                "elevationLost": 0,
                "elevationGained": 0,
                "transfers": 0,
                "fare": {
                    "fare": {
                        "regular": {
                            "currency": {
                                "symbol": "???",
                                "currency": "INR",
                                "defaultFractionDigits": 2,
                                "currencyCode": "INR"
                            },
                            "cents": 500
                        }
                    },
                    "details": {
                        "regular": [
                            {
                                "fareId": "1:DIMTS_1014_4145_790",
                                "price": {
                                    "currency": {
                                        "symbol": "???",
                                        "currency": "INR",
                                        "defaultFractionDigits": 2,
                                        "currencyCode": "INR"
                                    },
                                    "cents": 500
                                },
                                "routes": [
                                    "1:1014"
                                ]
                            }
                        ]
                    }
                },
                "legs": [
                    {
                        "startTime": 1645590884000,
                        "endTime": 1645591095000,
                        "departureDelay": 0,
                        "arrivalDelay": 0,
                        "realTime": false,
                        "distance": 271.552,
                        "generalizedCost": 414,
                        "pathway": false,
                        "mode": "WALK",
                        "transitLeg": false,
                        "route": "",
                        "agencyTimeZoneOffset": 19800000,
                        "interlineWithPreviousLeg": false,
                        "from": {
                            "name": "Origin",
                            "lon": 77.21097,
                            "lat": 28.66514,
                            "departure": 1645590884000,
                            "vertexType": "NORMAL"
                        },
                        "to": {
                            "name": "Azad Market",
                            "stopId": "1:4145",
                            "stopCode": "U02398",
                            "lon": 77.2084,
                            "lat": 28.6647,
                            "arrival": 1645591095000,
                            "departure": 1645591095000,
                            "zoneId": "4145",
                            "vertexType": "TRANSIT"
                        },
                        "legGeometry": {
                            "points": "{o}mDuegvMiCxKNPPNXLPHFBBQ",
                            "length": 8
                        },
                        "steps": [
                            {
                                "distance": 214.613,
                                "relativeDirection": "DEPART",
                                "streetName": "road",
                                "absoluteDirection": "WEST",
                                "stayOn": false,
                                "area": false,
                                "bogusName": false,
                                "lon": 77.21067862048909,
                                "lat": 28.66446868058138,
                                "elevation": "",
                                "walkingBike": false
                            },
                            {
                                "distance": 56.93900000000001,
                                "relativeDirection": "LEFT",
                                "streetName": "Rani Jhansi Flyover",
                                "absoluteDirection": "SOUTHWEST",
                                "stayOn": false,
                                "area": false,
                                "bogusName": false,
                                "lon": 77.208623,
                                "lat": 28.665155600000002,
                                "elevation": "",
                                "walkingBike": false
                            }
                        ],
                        "rentedBike": false,
                        "walkingBike": false,
                        "duration": 211
                    },
                    {
                        "startTime": 1645591095000,
                        "endTime": 1645591237000,
                        "departureDelay": 0,
                        "arrivalDelay": 0,
                        "realTime": false,
                        "distance": 594.6739387193659,
                        "generalizedCost": 742,
                        "pathway": false,
                        "mode": "BUS",
                        "transitLeg": true,
                        "route": "236UP",
                        "agencyName": "Delhi Integrated Multi-Modal Transit System Ltd.",
                        "agencyUrl": "https://www.dimts.in/",
                        "agencyTimeZoneOffset": 0,
                        "routeId": "1:1014",
                        "interlineWithPreviousLeg": false,
                        "agencyId": "1:DIMTS",
                        "tripId": "1:1014_09_10",
                        "serviceDate": "2022-02-23",
                        "from": {
                            "name": "Azad Market",
                            "stopId": "1:4145",
                            "stopCode": "U02398",
                            "lon": 77.2084,
                            "lat": 28.6647,
                            "arrival": 1645591095000,
                            "departure": 1645591095000,
                            "zoneId": "4145",
                            "stopIndex": 24,
                            "stopSequence": 24,
                            "vertexType": "TRANSIT"
                        },
                        "to": {
                            "name": "Bara Hindu Rao",
                            "stopId": "1:790",
                            "stopCode": "U02319",
                            "lon": 77.20415,
                            "lat": 28.6608666666667,
                            "arrival": 1645591237000,
                            "departure": 1645591237000,
                            "zoneId": "790",
                            "stopIndex": 25,
                            "stopSequence": 25,
                            "vertexType": "TRANSIT"
                        },
                        "legGeometry": {
                            "points": "kq}mDowfvM~VpY",
                            "length": 2
                        },
                        "steps": [],
                        "routeLongName": "236UP",
                        "duration": 142
                    },
                    {
                        "startTime": 1645591237000,
                        "endTime": 1645591516000,
                        "departureDelay": 0,
                        "arrivalDelay": 0,
                        "realTime": false,
                        "distance": 354.41999999999996,
                        "generalizedCost": 542,
                        "pathway": false,
                        "mode": "WALK",
                        "transitLeg": false,
                        "route": "",
                        "agencyTimeZoneOffset": 19800000,
                        "interlineWithPreviousLeg": false,
                        "from": {
                            "name": "Bara Hindu Rao",
                            "stopId": "1:790",
                            "stopCode": "U02319",
                            "lon": 77.20415,
                            "lat": 28.6608666666667,
                            "arrival": 1645591237000,
                            "departure": 1645591237000,
                            "zoneId": "790",
                            "vertexType": "TRANSIT"
                        },
                        "to": {
                            "name": "Destination",
                            "lon": 77.20385,
                            "lat": 28.66001,
                            "arrival": 1645591516000,
                            "vertexType": "NORMAL"
                        },
                        "legGeometry": {
                            "points": "ky|mD}|evM@A|@dALLZLfAd@fBr@f@LTBLi@w@m@m@Uo@Y[U",
                            "length": 14
                        },
                        "steps": [
                            {
                                "distance": 218.202,
                                "relativeDirection": "DEPART",
                                "streetName": "Rani Jhansi Road",
                                "absoluteDirection": "SOUTHWEST",
                                "stayOn": false,
                                "area": false,
                                "bogusName": false,
                                "lon": 77.20416235719009,
                                "lat": 28.660855970007344,
                                "elevation": "",
                                "walkingBike": false
                            },
                            {
                                "distance": 136.21800000000002,
                                "relativeDirection": "LEFT",
                                "streetName": "road",
                                "absoluteDirection": "EAST",
                                "stayOn": false,
                                "area": false,
                                "bogusName": true,
                                "lon": 77.2031395,
                                "lat": 28.659147100000002,
                                "elevation": "",
                                "walkingBike": false
                            }
                        ],
                        "rentedBike": false,
                        "walkingBike": false,
                        "duration": 279
                    }
                ],
                "tooSloped": false,
                "arrivedAtDestinationWithRentedBicycle": false
            }
        ]
    },
    "metadata": {
        "searchWindowUsed": 3000,
        "nextDateTime": 1645591440000,
        "prevDateTime": 1645587193057
    },
    "previousPageCursor": "rO0ABXc1AQANUFJFVklPVVNfUEFHRQQJzFGAAAAAAAAJYAAXU1RSRUVUX0FORF9BUlJJVkFMX1RJTUU=",
    "nextPageCursor": "rO0ABXcxAQAJTkVYVF9QQUdFBAnakIAAAAAAAAlgABdTVFJFRVRfQU5EX0FSUklWQUxfVElNRQ==",
    "debugOutput": {
        "precalculationTime": 56448100,
        "directStreetRouterTime": 1024730600,
        "transitRouterTime": 12674454400,
        "filteringTime": 449464200,
        "renderingTime": 642683900,
        "totalTime": 13832385200,
        "transitRouterTimes": {
            "tripPatternFilterTime": 2324408000,
            "accessEgressTime": 267397300,
            "raptorSearchTime": 4886378900,
            "itineraryCreationTime": 5178580100
        }
    },
    "elevationMetadata": {
        "ellipsoidToGeoidDifference": -51.730883728796115,
        "geoidElevation": false
    }
}

export default Resp;