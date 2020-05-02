// import './css/variables.scss';
// import './css/component.scss';
import './css/main.scss';
import _ from 'lodash';
import $ from 'jquery';
import '../raphael-2.3.0';
import 'jquery-mapael';
import 'jquery-mapael/js/maps/world_countries.js';



$(document).ready(function() {
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
        }
        
    });
    
});



