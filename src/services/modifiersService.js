rosApp.factory("modifiersFactory", function($http, $q, $rootScope) {

    // json
    // var modifiers = {
    //         "modifiers": [
    //             {
    //                 "id": "zRcEkcj8",
    //                 "name": "Overcooked",
    //                 "open": false,
    //                 "price_levels": [
    //                     {
    //                         "id": "REiAoiq7",
    //                         "price": 0
    //                     }
    //                 ],
    //                 "price_per_unit": 0
    //
    //             },
    //             {
    //                 "id": "E5cpac84",
    //                 "name": "Tomato",
    //                 "open": false,
    //                 "price_levels": [
    //                     {
    //                         "id": "Rzi98iRR",
    //                         "price": 0
    //                     }
    //                 ],
    //                 "price_per_unit": 0
    //
    //             },
    //             {
    //                 "id": "E5ip4i84",
    //                 "name": "Bleeding",
    //                 "open": false,
    //                 "price_levels": [
    //                     {
    //                         "id": "rgTxpTRk",
    //                         "price": 0
    //                     }
    //                 ],
    //                 "price_per_unit": 0
    //
    //             },
    //             {
    //                 "id": "pAia8ioe",
    //                 "name": "Almost burnt",
    //                 "open": false,
    //                 "price_levels": [
    //                     {
    //                         "id": "AoTpRTdk",
    //                         "price": 0
    //                     }
    //                 ],
    //                 "price_per_unit": 0
    //
    //             },
    //             {
    //                 "id": "GkiREiyL",
    //                 "name": "Cheese",
    //                 "open": false,
    //                 "price_levels": [
    //                     {
    //                         "id": "aoT55T4B",
    //                         "price": 100
    //                     }
    //                 ],
    //                 "price_per_unit": 100
    //
    //             },
    //             {
    //                 "id": "8kT9KTX7",
    //                 "name": "Perfect",
    //                 "open": false,
    //                 "price_levels": [
    //                     {
    //                         "id": "nAceac8B",
    //                         "price": 0
    //                     }
    //                 ],
    //                 "price_per_unit": 0
    //
    //             },
    //             {
    //                 "id": "4GT5XTze",
    //                 "name": "Burnt",
    //                 "open": false,
    //                 "price_levels": [
    //                     {
    //                         "id": "nGcLkcrx",
    //                         "price": 0
    //                     }
    //                 ],
    //                 "price_per_unit": 0
    //
    //             }
    //         ]
    //
    // };
    var modifierGroup = {



            "modifier_groups": [
                {
                    "id": "eMiy4iR4",
                    "maximum": 1,
                    "minimum": 1,
                    "name": "Temperature",
                    "required": false,


                        "options": [
                            {
                                "id": "4GT5XTze",
                                "name": "Burnt",
                                "open": false,
                                "price_levels": [
                                    {
                                        "id": "nGcLkcrx",
                                        "price": 0
                                    }
                                ],
                                "price_per_unit": 0

                            },
                            {
                                "id": "E5ip4i84",
                                "name": "Bleeding",
                                "open": false,
                                "price_levels": [
                                    {
                                        "id": "rgTxpTRk",
                                        "price": 0
                                    }
                                ],
                                "price_per_unit": 0

                            },
                            {
                                "id": "8kT9KTX7",
                                "name": "Perfect",
                                "open": false,
                                "price_levels": [
                                    {
                                        "id": "nAceac8B",
                                        "price": 0
                                    }
                                ],
                                "price_per_unit": 0

                            },
                            {
                                "id": "zRcEkcj8",
                                "name": "Overcooked",
                                "open": false,
                                "price_levels": [
                                    {
                                        "id": "REiAoiq7",
                                        "price": 0
                                    }
                                ],
                                "price_per_unit": 0

                            },
                            {
                                "id": "pAia8ioe",
                                "name": "Almost burnt",
                                "open": false,
                                "price_levels": [
                                    {
                                        "id": "AoTpRTdk",
                                        "price": 0
                                    }
                                ],
                                "price_per_unit": 0

                            }
                        ]

                },
                {
                    "id": "kMT85Tay",
                    "maximum": null,
                    "minimum": 1,
                    "name": "Toppings",
                    "required": false,


                        "options": [
                            {
                                "id": "E5cpac84",
                                "name": "Tomato",
                                "open": false,
                                "price_levels": [
                                    {
                                        "id": "Rzi98iRR",
                                        "price": 0
                                    }
                                ],
                                "price_per_unit": 0

                            },
                            {
                                "id": "GkiREiyL",
                                "name": "Cheese",
                                "open": false,
                                "price_levels": [
                                    {
                                        "id": "aoT55T4B",
                                        "price": 100
                                    }
                                ],
                                "price_per_unit": 100

                            }
                        ]

                }
            ]

    };

    // functions
    return {
        getModifiersGroup: function() {
            return modifierGroup.modifier_groups;
        },
        setModifiersGroup: function(modifier_groups) {
            modifierGroup.modifier_groups = modifier_groups;
        },

    }
});
