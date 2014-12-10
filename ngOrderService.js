'use strict';

angular.module('ngOrderService', [])
    .service('OrderService', function () {
        this.findOrderByAgent = function (orderId, agentId) {
            return {
                "start": 1,
                "count": 4,
                "total": 5,
                "results": [
                    {
                        "type": "C&C",
                        "customer": {
                            "customerRef": "ref0001",
                            "name": "Andres Ov",
                            "email": "andres@parcelpoint.com.au",
                            "mobile": "0401111111"
                        },
                        "retailer": {
                            "retailerRef": "Q001",
                            "name": "Quentin's Shop"
                        },
                        "items": [
                            {
                                "orderItemRef": "orderItemID001",
                                "skuRef": "skuRef001",
                                "requestedQty": 2,
                                "skuPrice": 2,
                                "totalPrice": 4
                            },
                            {
                                "orderItemRef": "orderItemID002",
                                "skuRef": "skuRef002",
                                "requestedQty": 4,
                                "skuPrice": 3,
                                "totalPrice": 7
                            }
                        ],
                        "fulfilments": [
                            {
                                "deliveryType": "OVERNIGHT",
                                "consignment": {
                                    "carrierRef": "DHL",
                                    "consignmentRef": "consignment000001",
                                    "externalRef": "extRef001"
                                },
                                "fromLocation": {
                                    "locationRef": "locationRef001",
                                    "storeRef": "storeNum001"
                                },
                                "orderItems": {
                                    "orderItemRef": "orderItemID001",
                                    "skuRef": "prodID001",
                                    "requestedQty": 2,
                                    "skuPrice": 2,
                                    "totalPrice": 4
                                }
                            },
                            {
                                "deliveryType": "STANDARD",
                                "consignment": {
                                    "carrierRef": "TNT",
                                    "consignmentRef": "consignment000002",
                                    "externalRef": "extRef002"
                                },
                                "toLocation": {
                                    "locationRef": "locationRef001",
                                    "storeRef": "storeNum001"
                                },
                                "orderItems": {
                                    "orderItemRef": "orderItemID002",
                                    "skuRef": "prodID002",
                                    "requestedQty": 4,
                                    "skuPrice": 3,
                                    "totalPrice": 7
                                }
                            }
                        ]
                    },
                    {
                        "type": "C&C",
                        "customer": {
                            "customerRef": "ref0001",
                            "name": "Andres Ov",
                            "email": "andres@parcelpoint.com.au",
                            "mobile": "0401111111"
                        },
                        "retailer": {
                            "retailerRef": "Q001",
                            "name": "Quentin's Shop"
                        },
                        "items": [
                            {
                                "orderItemId": "orderItemID001",
                                "skuRef": "prodID001",
                                "requestedQty": 2,
                                "skuPrice": 2,
                                "totalPrice": 4
                            },
                            {
                                "orderItemId": "orderItemID002",
                                "skuRef": "prodID002",
                                "requestedQty": 4,
                                "skuPrice": 3,
                                "totalPrice": 7
                            }
                        ],
                        "fulfilments": [
                            {
                                "deliveryType": "OVERNIGHT",
                                "consignment": {
                                    "carrierRef": "DHL",
                                    "consignmentRef": "consignment000001",
                                    "externalRef": "extRef001"
                                },
                                "fromLocation": {
                                    "locationRef": "locationRef001",
                                    "storeRef": "storeNum001"
                                },
                                "orderItems": {
                                    "orderItemId": "orderItemID001",
                                    "skuRef": "prodID001",
                                    "requestedQty": 2,
                                    "skuPrice": 2,
                                    "totalPrice": 4
                                }
                            },
                            {
                                "deliveryType": "STANDARD",
                                "consignment": {
                                    "carrierRef": "TNT",
                                    "consignmentRef": "consignment000002",
                                    "externalRef": "extRef002"
                                },
                                "toLocation": {
                                    "locationRef": "locationRef001",
                                    "storeRef": "storeNum001"
                                },
                                "orderItems": {
                                    "orderItemId": "orderItemID002",
                                    "skuRef": "prodID002",
                                    "requestedQty": 4,
                                    "skuPrice": 3,
                                    "totalPrice": 7
                                }
                            }
                        ]
                    },
                    {
                        "type": "C&C",
                        "customer": {
                            "customerRef": "ref0001",
                            "name": "Andres Ov",
                            "email": "andres@parcelpoint.com.au",
                            "mobile": "0401111111"
                        },
                        "retailer": {
                            "retailerRef": "Q001",
                            "name": "Quentin's Shop"
                        },
                        "items": [
                            {
                                "orderItemId": "orderItemID001",
                                "skuRef": "prodID001",
                                "requestedQty": 2,
                                "skuPrice": 2,
                                "totalPrice": 4
                            },
                            {
                                "orderItemId": "orderItemID002",
                                "skuRef": "prodID002",
                                "requestedQty": 4,
                                "skuPrice": 3,
                                "totalPrice": 7
                            }
                        ],
                        "fulfilments": [
                            {
                                "deliveryType": "OVERNIGHT",
                                "consignment": {
                                    "carrierRef": "DHL",
                                    "consignmentRef": "consignment000001",
                                    "externalRef": "extRef001"
                                },
                                "fromLocation": {
                                    "locationRef": "locationRef001",
                                    "storeRef": "storeNum001"
                                },
                                "orderItems": {
                                    "orderItemId": "orderItemID001",
                                    "skuRef": "prodID001",
                                    "requestedQty": 2,
                                    "skuPrice": 2,
                                    "totalPrice": 4
                                }
                            },
                            {
                                "deliveryType": "STANDARD",
                                "consignment": {
                                    "carrierRef": "TNT",
                                    "consignmentRef": "consignment000002",
                                    "externalRef": "extRef002"
                                },
                                "toLocation": {
                                    "locationRef": "locationRef001",
                                    "storeRef": "storeNum001"
                                },
                                "orderItems": {
                                    "orderItemId": "orderItemID002",
                                    "skuRef": "prodID002",
                                    "requestedQty": 4,
                                    "skuPrice": 3,
                                    "totalPrice": 7
                                }
                            }
                        ]
                    },
                    {
                        "type": "C&C",
                        "customer": {
                            "customerRef": "ref0001",
                            "name": "Andres Ov",
                            "email": "andres@parcelpoint.com.au",
                            "mobile": "0401111111"
                        },
                        "retailer": {
                            "retailerRef": "Q001",
                            "name": "Quentin's Shop"
                        },
                        "items": [
                            {
                                "orderItemId": "orderItemID001",
                                "skuRef": "prodID001",
                                "requestedQty": 2,
                                "skuPrice": 2,
                                "totalPrice": 4
                            },
                            {
                                "orderItemId": "orderItemID002",
                                "skuRef": "prodID002",
                                "requestedQty": 4,
                                "skuPrice": 3,
                                "totalPrice": 7
                            }
                        ],
                        "fulfilments": [
                            {
                                "deliveryType": "OVERNIGHT",
                                "consignment": {
                                    "carrierRef": "DHL",
                                    "consignmentRef": "consignment000001",
                                    "externalRef": "extRef001"
                                },
                                "fromLocation": {
                                    "locationRef": "locationRef001",
                                    "storeRef": "storeNum001"
                                },
                                "orderItems": {
                                    "orderItemId": "orderItemID001",
                                    "skuRef": "prodID001",
                                    "requestedQty": 2,
                                    "skuPrice": 2,
                                    "totalPrice": 4
                                }
                            },
                            {
                                "deliveryType": "STANDARD",
                                "consignment": {
                                    "carrierRef": "TNT",
                                    "consignmentRef": "consignment000002",
                                    "externalRef": "extRef002"
                                },
                                "toLocation": {
                                    "locationRef": "locationRef001",
                                    "storeRef": "storeNum001"
                                },
                                "orderItems": {
                                    "orderItemId": "orderItemID002",
                                    "skuRef": "prodID002",
                                    "requestedQty": 4,
                                    "skuPrice": 3,
                                    "totalPrice": 7
                                }
                            }
                        ]
                    }
                ]
            }
        };
    });