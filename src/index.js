// import './css/variables.scss';
// import './css/component.scss';
import './css/main.scss';
import _ from 'lodash';
import $ from 'jquery';
import '../raphael-2.3.0';
import 'jquery-mapael';
import 'jquery-mapael/js/maps/world_countries.js';



$(document).ready(function() {

    var data = {
        "2003": {
            "areas": {
                "AF": {
                    "value": 23811026,
                    "href": "http://en.wikipedia.org/w/index.php?search=Afghanistan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Afghanistan</span><br />Population : 23811026"
                    }
                },
                "ZA": {
                    "value": 43635718,
                    "href": "http://en.wikipedia.org/w/index.php?search=South Africa",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">South Africa</span><br />Population : 43635718"
                    }
                },
                "AL": {
                    "value": 28472433,
                    "href": "http://en.wikipedia.org/w/index.php?search=Albania",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Albania</span><br />Population : 28472433"
                    }
                },
                "DZ": {
                    "value": 7013507,
                    "href": "http://en.wikipedia.org/w/index.php?search=Algeria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Algeria</span><br />Population : 7013507"
                    }
                },
                "DE": {
                    "value": 36848343,
                    "href": "http://en.wikipedia.org/w/index.php?search=Germany",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Germany</span><br />Population : 36848343"
                    }
                },
                "AD": {
                    "value": 30847009,
                    "href": "http://en.wikipedia.org/w/index.php?search=Andorra",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Andorra</span><br />Population : 30847009"
                    }
                },
                "AO": {
                    "value": 971957,
                    "href": "http://en.wikipedia.org/w/index.php?search=Angola",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Angola</span><br />Population : 971957"
                    }
                },
                "AG": {
                    "value": 38155365,
                    "href": "http://en.wikipedia.org/w/index.php?search=Antigua And Barbuda",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Antigua And Barbuda</span><br />Population : 38155365"
                    }
                },
                "SA": {
                    "value": 35729605,
                    "href": "http://en.wikipedia.org/w/index.php?search=Saudi Arabia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Saudi Arabia</span><br />Population : 35729605"
                    }
                },
                "AR": {
                    "value": 32448340,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Population : 32448340"
                    }
                },
                "AM": {
                    "value": 44485739,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Population : 44485739"
                    }
                },
                "AU": {
                    "value": 22851324,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Population : 22851324"
                    }
                },
                "AT": {
                    "value": 3607937,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Population : 3607937"
                    }
                },
                "AZ": {
                    "value": 9130334,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Population : 9130334"
                    }
                }
            },
            "plots": {
                "paris": {
                    "value": 382495,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 382495"
                    }
                },
                "newyork": {
                    "value": 881903,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 881903"
                    }
                },
                "sydney": {
                    "value": 695496,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 695496"
                    }
                },
                "brasilia": {
                    "value": 392706,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 392706"
                    }
                },
                "tokyo": {
                    "value": 1491797,
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 1491797"
                    }
                }
            }

        }
    };
 

    $(".container").mapael({
        map : {
            name : "world_countries",
            defaultArea: {
                attrs: {
                    fill: "#ff69b4",
                    stroke: "#fff",
                    "stroke-width": 0.3
                }
            },
            defaultPlot: {
                text: {
                    attrs: {
                        fill: "#b4b4b4",
                        "font-weight": "normal"
                    },
                    attrsHover: {
                        fill: "#fff",
                        "font-weight": "bold"
                    }
                }
            },
            zoom: {
                enabled: true
                , step: 0.25
                , maxLevel: 20
            }
        },
        legend: {
            area: {
                display: true,
                title: "Country population",
                marginBottom: 7,
                slices: [
                    {
                        max: 5000000,
                        attrs: {
                            fill: "#6ECBD4"
                        },
                        label: "Less than 5M"
                    },
                    {
                        min: 5000000,
                        max: 10000000,
                        attrs: {
                            fill: "#3EC7D4"
                        },
                        label: "Between 5M and 10M"
                    },
                    {
                        min: 10000000,
                        max: 50000000,
                        attrs: {
                            fill: "#028E9B"
                        },
                        label: "Between 10M and 50M"
                    },
                    {
                        min: 50000000,
                        attrs: {
                            fill: "#01565E"
                        },
                        label: "More than 50M"
                    }
                ]
            },
            plot: {
                display: true,
                title: "City population",
                marginBottom: 6,
                slices: [
                    {
                        type: "circle",
                        max: 500000,
                        attrs: {
                            fill: "#FD4851",
                            "stroke-width": 1
                        },
                        attrsHover: {
                            transform: "s1.5",
                            "stroke-width": 1
                        },
                        label: "Less than 500 000",
                        size: 10
                    },
                    {
                        type: "circle",
                        min: 500000,
                        max: 1000000,
                        attrs: {
                            fill: "#FD4851",
                            "stroke-width": 1
                        },
                        attrsHover: {
                            transform: "s1.5",
                            "stroke-width": 1
                        },
                        label: "Between 500 000 and 1M",
                        size: 20
                    },
                    {
                        type: "circle",
                        min: 1000000,
                        attrs: {
                            fill: "#FD4851",
                            "stroke-width": 1
                        },
                        attrsHover: {
                            transform: "s1.5",
                            "stroke-width": 1
                        },
                        label: "More than 1M",
                        size: 30
                    }
                ]
            }
        },
        plots: {
            "paris": {
                "value": 382495,
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Paris</span><br />Population: 382495"
                }
            },
            "newyork": {
                "value": 881903,
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">New-York</span><br />Population: 881903"
                }
            },
            "sydney": {
                "value": 695496,
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Sydney</span><br />Population: 695496"
                }
            },
            "brasilia": {
                "value": 392706,
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Brasilia</span><br />Population: 392706"
                }
            },
            "tokyo": {
                "value": 1491797,
                "tooltip": {
                    "content": "<span style=\"font-weight:bold;\">Tokyo</span><br />Population: 1491797"
                }
            }
        },
        areas: {
            "AR": {
                    "value": 32448340,
                    "href": "http://en.wikipedia.org/w/index.php?search=Argentina",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Argentina</span><br />Population : 32448340"
                    }
                },
                "AM": {
                    "value": 44485739,
                    "href": "http://en.wikipedia.org/w/index.php?search=Armenia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Armenia</span><br />Population : 44485739"
                    }
                },
                "AU": {
                    "value": 22851324,
                    "href": "http://en.wikipedia.org/w/index.php?search=Australia",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Australia</span><br />Population : 22851324"
                    }
                },
                "AT": {
                    "value": 3607937,
                    "href": "http://en.wikipedia.org/w/index.php?search=Austria",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Austria</span><br />Population : 3607937"
                    }
                },
                "AZ": {
                    "value": 9130334,
                    "href": "http://en.wikipedia.org/w/index.php?search=Azerbaijan",
                    "tooltip": {
                        "content": "<span style=\"font-weight:bold;\">Azerbaijan</span><br />Population : 9130334"
                    }
        }
    }
        
    });
    
});



