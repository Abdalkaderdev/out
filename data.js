var APP_DATA = {
  "scenes": [
    {
      "id": "0-back-view",
      "name": "back view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0624400309355986,
          "pitch": 0.04543078903948228,
          "rotation": 0,
          "target": "1-northlight"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-northlight",
      "name": "northlight",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8938690490482841,
          "pitch": 0.05694668197061148,
          "rotation": 0,
          "target": "0-back-view"
        },
        {
          "yaw": 1.1914885233841979,
          "pitch": 0.06320824429169036,
          "rotation": 0,
          "target": "2-street"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-street",
      "name": "street",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8698258510533599,
          "pitch": 0.07488036374183338,
          "rotation": 0,
          "target": "1-northlight"
        },
        {
          "yaw": 2.654347492746597,
          "pitch": 0.025257240489471755,
          "rotation": 0,
          "target": "3-front-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-front-view",
      "name": "front view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3077006080728992,
          "pitch": 0.13109710629717952,
          "rotation": 0,
          "target": "2-street"
        },
        {
          "yaw": 1.7630193546011732,
          "pitch": 0.033488276645302406,
          "rotation": 0,
          "target": "4-barzi"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-barzi",
      "name": "barzi",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6113842325675911,
          "pitch": 0.09339770772234957,
          "rotation": 0,
          "target": "3-front-view"
        },
        {
          "yaw": 1.6312742277556334,
          "pitch": 0.08970074962288876,
          "rotation": 0.7853981633974483,
          "target": "5-street"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-street",
      "name": "street.",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1062584167587595,
          "pitch": 0.08527144662669883,
          "rotation": 5.497787143782138,
          "target": "4-barzi"
        },
        {
          "yaw": -1.3692571717916806,
          "pitch": 0.10423278821573234,
          "rotation": 0,
          "target": "6-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-corner",
      "name": "corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8650540071813175,
          "pitch": 0.10020823409035984,
          "rotation": 0,
          "target": "5-street"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
