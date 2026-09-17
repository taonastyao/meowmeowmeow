var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_YandexSatellite_1 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://sat04.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}'
            })
        });
var format_tab1_2 = new ol.format.GeoJSON();
var features_tab1_2 = format_tab1_2.readFeatures(json_tab1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tab1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tab1_2.addFeatures(features_tab1_2);
var lyr_tab1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tab1_2, 
                style: style_tab1_2,
                popuplayertitle: 'tab1',
                interactive: true,
                title: '<img src="styles/legend/tab1_2.png" /> tab1'
            });
var format_all_buildingsbuilding_3 = new ol.format.GeoJSON();
var features_all_buildingsbuilding_3 = format_all_buildingsbuilding_3.readFeatures(json_all_buildingsbuilding_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_all_buildingsbuilding_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_all_buildingsbuilding_3.addFeatures(features_all_buildingsbuilding_3);
var lyr_all_buildingsbuilding_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_all_buildingsbuilding_3, 
                style: style_all_buildingsbuilding_3,
                popuplayertitle: 'all_buildings — building',
                interactive: true,
                title: '<img src="styles/legend/all_buildingsbuilding_3.png" /> all_buildings — building'
            });
var format_highway_residential_4 = new ol.format.GeoJSON();
var features_highway_residential_4 = format_highway_residential_4.readFeatures(json_highway_residential_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_residential_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_residential_4.addFeatures(features_highway_residential_4);
var lyr_highway_residential_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_residential_4, 
                style: style_highway_residential_4,
                popuplayertitle: 'highway_residential',
                interactive: true,
                title: '<img src="styles/legend/highway_residential_4.png" /> highway_residential'
            });
var format_highway_road_5 = new ol.format.GeoJSON();
var features_highway_road_5 = format_highway_road_5.readFeatures(json_highway_road_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_road_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_road_5.addFeatures(features_highway_road_5);
var lyr_highway_road_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_road_5, 
                style: style_highway_road_5,
                popuplayertitle: 'highway_road',
                interactive: true,
                title: '<img src="styles/legend/highway_road_5.png" /> highway_road'
            });
var format_highway_service_6 = new ol.format.GeoJSON();
var features_highway_service_6 = format_highway_service_6.readFeatures(json_highway_service_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_service_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_service_6.addFeatures(features_highway_service_6);
var lyr_highway_service_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_service_6, 
                style: style_highway_service_6,
                popuplayertitle: 'highway_service',
                interactive: true,
                title: '<img src="styles/legend/highway_service_6.png" /> highway_service'
            });
var format_highway_tertiary_7 = new ol.format.GeoJSON();
var features_highway_tertiary_7 = format_highway_tertiary_7.readFeatures(json_highway_tertiary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_tertiary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_tertiary_7.addFeatures(features_highway_tertiary_7);
var lyr_highway_tertiary_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_tertiary_7, 
                style: style_highway_tertiary_7,
                popuplayertitle: 'highway_tertiary',
                interactive: true,
                title: '<img src="styles/legend/highway_tertiary_7.png" /> highway_tertiary'
            });
var format_highway_track_8 = new ol.format.GeoJSON();
var features_highway_track_8 = format_highway_track_8.readFeatures(json_highway_track_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_track_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_track_8.addFeatures(features_highway_track_8);
var lyr_highway_track_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_track_8, 
                style: style_highway_track_8,
                popuplayertitle: 'highway_track',
                interactive: true,
                title: '<img src="styles/legend/highway_track_8.png" /> highway_track'
            });
var format_highway_unclassified_9 = new ol.format.GeoJSON();
var features_highway_unclassified_9 = format_highway_unclassified_9.readFeatures(json_highway_unclassified_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_unclassified_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_unclassified_9.addFeatures(features_highway_unclassified_9);
var lyr_highway_unclassified_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_unclassified_9, 
                style: style_highway_unclassified_9,
                popuplayertitle: 'highway_unclassified',
                interactive: true,
                title: '<img src="styles/legend/highway_unclassified_9.png" /> highway_unclassified'
            });

lyr_OSMStandard_0.setVisible(true);lyr_YandexSatellite_1.setVisible(true);lyr_tab1_2.setVisible(true);lyr_all_buildingsbuilding_3.setVisible(true);lyr_highway_residential_4.setVisible(true);lyr_highway_road_5.setVisible(true);lyr_highway_service_6.setVisible(true);lyr_highway_tertiary_7.setVisible(true);lyr_highway_track_8.setVisible(true);lyr_highway_unclassified_9.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_YandexSatellite_1,lyr_tab1_2,lyr_all_buildingsbuilding_3,lyr_highway_residential_4,lyr_highway_road_5,lyr_highway_service_6,lyr_highway_tertiary_7,lyr_highway_track_8,lyr_highway_unclassified_9];
lyr_tab1_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_all_buildingsbuilding_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tourism': 'tourism', 'addr:street': 'addr:street', 'description': 'description', 'religion': 'religion', 'training': 'training', 'sport': 'sport', 'leisure': 'leisure', 'waterway': 'waterway', 'voltage': 'voltage', 'substation': 'substation', 'power': 'power', 'operator': 'operator', 'location': 'location', 'gas_insulated': 'gas_insulated', 'frequency': 'frequency', 'branch': 'branch', 'addr:place': 'addr:place', 'name:ru': 'name:ru', 'amenity': 'amenity', 'shop': 'shop', 'building:levels': 'building:levels', 'type': 'type', 'name': 'name', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'adress': 'adress', });
lyr_highway_residential_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'oneway': 'oneway', 'name': 'name', });
lyr_highway_road_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', });
lyr_highway_service_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'oneway': 'oneway', 'bridge': 'bridge', 'layer': 'layer', 'surface': 'surface', 'railway': 'railway', 'foot': 'foot', 'name': 'name', 'service': 'service', 'tunnel': 'tunnel', });
lyr_highway_tertiary_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'ref': 'ref', 'old_ref': 'old_ref', 'surface': 'surface', 'layer': 'layer', 'bridge': 'bridge', });
lyr_highway_track_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tracktype': 'tracktype', 'surface': 'surface', 'foot': 'foot', 'bicycle': 'bicycle', });
lyr_highway_unclassified_9.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'ford': 'ford', 'depth': 'depth', 'smoothness': 'smoothness', 'surface': 'surface', 'layer': 'layer', 'lanes': 'lanes', 'foot': 'foot', 'bridge': 'bridge', 'bicycle': 'bicycle', 'access': 'access', });
lyr_tab1_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_all_buildingsbuilding_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'tourism': '', 'addr:street': '', 'description': '', 'religion': '', 'training': '', 'sport': '', 'leisure': '', 'waterway': '', 'voltage': '', 'substation': '', 'power': '', 'operator': '', 'location': '', 'gas_insulated': '', 'frequency': '', 'branch': '', 'addr:place': '', 'name:ru': '', 'amenity': '', 'shop': '', 'building:levels': '', 'type': '', 'name': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'adress': '', });
lyr_highway_residential_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'oneway': '', 'name': '', });
lyr_highway_road_5.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', });
lyr_highway_service_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'oneway': '', 'bridge': '', 'layer': '', 'surface': '', 'railway': '', 'foot': '', 'name': '', 'service': '', 'tunnel': '', });
lyr_highway_tertiary_7.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', 'ref': '', 'old_ref': '', 'surface': '', 'layer': '', 'bridge': '', });
lyr_highway_track_8.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'tracktype': '', 'surface': '', 'foot': '', 'bicycle': '', });
lyr_highway_unclassified_9.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'name': '', 'ford': '', 'depth': '', 'smoothness': '', 'surface': '', 'layer': '', 'lanes': '', 'foot': '', 'bridge': '', 'bicycle': '', 'access': '', });
lyr_tab1_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_all_buildingsbuilding_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'tourism': 'no label', 'addr:street': 'no label', 'description': 'no label', 'religion': 'no label', 'training': 'no label', 'sport': 'no label', 'leisure': 'no label', 'waterway': 'no label', 'voltage': 'no label', 'substation': 'no label', 'power': 'no label', 'operator': 'no label', 'location': 'no label', 'gas_insulated': 'no label', 'frequency': 'no label', 'branch': 'no label', 'addr:place': 'no label', 'name:ru': 'no label', 'amenity': 'no label', 'shop': 'no label', 'building:levels': 'no label', 'type': 'no label', 'name': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'adress': 'no label', });
lyr_highway_residential_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'oneway': 'no label', 'name': 'no label', });
lyr_highway_road_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', });
lyr_highway_service_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'layer': 'no label', 'surface': 'no label', 'railway': 'no label', 'foot': 'no label', 'name': 'no label', 'service': 'no label', 'tunnel': 'no label', });
lyr_highway_tertiary_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'ref': 'no label', 'old_ref': 'no label', 'surface': 'no label', 'layer': 'no label', 'bridge': 'no label', });
lyr_highway_track_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tracktype': 'no label', 'surface': 'no label', 'foot': 'no label', 'bicycle': 'no label', });
lyr_highway_unclassified_9.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'ford': 'no label', 'depth': 'no label', 'smoothness': 'no label', 'surface': 'no label', 'layer': 'no label', 'lanes': 'no label', 'foot': 'no label', 'bridge': 'no label', 'bicycle': 'no label', 'access': 'no label', });
lyr_highway_unclassified_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});