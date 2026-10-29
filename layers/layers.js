var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.750000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_floods_20240522_1 = new ol.format.GeoJSON();
var features_floods_20240522_1 = format_floods_20240522_1.readFeatures(json_floods_20240522_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_floods_20240522_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_floods_20240522_1.addFeatures(features_floods_20240522_1);
var lyr_floods_20240522_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_floods_20240522_1, 
                style: style_floods_20240522_1,
                popuplayertitle: 'floods_20240522',
                interactive: false,
                title: '<img src="styles/legend/floods_20240522_1.png" /> floods_20240522'
            });
var format_flooded_20230922_2 = new ol.format.GeoJSON();
var features_flooded_20230922_2 = format_flooded_20230922_2.readFeatures(json_flooded_20230922_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flooded_20230922_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flooded_20230922_2.addFeatures(features_flooded_20230922_2);
var lyr_flooded_20230922_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_flooded_20230922_2, 
                style: style_flooded_20230922_2,
                popuplayertitle: 'flooded_20230922',
                interactive: false,
                title: '<img src="styles/legend/flooded_20230922_2.png" /> flooded_20230922'
            });
var format_flood_cop_20230919_3 = new ol.format.GeoJSON();
var features_flood_cop_20230919_3 = format_flood_cop_20230919_3.readFeatures(json_flood_cop_20230919_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flood_cop_20230919_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flood_cop_20230919_3.addFeatures(features_flood_cop_20230919_3);
var lyr_flood_cop_20230919_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_flood_cop_20230919_3, 
                style: style_flood_cop_20230919_3,
                popuplayertitle: 'flood_cop_20230919',
                interactive: false,
                title: '<img src="styles/legend/flood_cop_20230919_3.png" /> flood_cop_20230919'
            });
var format_flood_cop_20230917_4 = new ol.format.GeoJSON();
var features_flood_cop_20230917_4 = format_flood_cop_20230917_4.readFeatures(json_flood_cop_20230917_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flood_cop_20230917_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flood_cop_20230917_4.addFeatures(features_flood_cop_20230917_4);
var lyr_flood_cop_20230917_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_flood_cop_20230917_4, 
                style: style_flood_cop_20230917_4,
                popuplayertitle: 'flood_cop_20230917',
                interactive: false,
                title: '<img src="styles/legend/flood_cop_20230917_4.png" /> flood_cop_20230917'
            });
var format_flood_cop_20230914_5 = new ol.format.GeoJSON();
var features_flood_cop_20230914_5 = format_flood_cop_20230914_5.readFeatures(json_flood_cop_20230914_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flood_cop_20230914_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flood_cop_20230914_5.addFeatures(features_flood_cop_20230914_5);
var lyr_flood_cop_20230914_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_flood_cop_20230914_5, 
                style: style_flood_cop_20230914_5,
                popuplayertitle: 'flood_cop_20230914',
                interactive: false,
                title: '<img src="styles/legend/flood_cop_20230914_5.png" /> flood_cop_20230914'
            });
var format_flood_cop_20230912_6 = new ol.format.GeoJSON();
var features_flood_cop_20230912_6 = format_flood_cop_20230912_6.readFeatures(json_flood_cop_20230912_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flood_cop_20230912_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flood_cop_20230912_6.addFeatures(features_flood_cop_20230912_6);
var lyr_flood_cop_20230912_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_flood_cop_20230912_6, 
                style: style_flood_cop_20230912_6,
                popuplayertitle: 'flood_cop_20230912',
                interactive: false,
                title: '<img src="styles/legend/flood_cop_20230912_6.png" /> flood_cop_20230912'
            });
var format_flood_cop_20230910_7 = new ol.format.GeoJSON();
var features_flood_cop_20230910_7 = format_flood_cop_20230910_7.readFeatures(json_flood_cop_20230910_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flood_cop_20230910_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flood_cop_20230910_7.addFeatures(features_flood_cop_20230910_7);
var lyr_flood_cop_20230910_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_flood_cop_20230910_7, 
                style: style_flood_cop_20230910_7,
                popuplayertitle: 'flood_cop_20230910',
                interactive: false,
                title: '<img src="styles/legend/flood_cop_20230910_7.png" /> flood_cop_20230910'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_floods_20240522_1.setVisible(false);lyr_flooded_20230922_2.setVisible(false);lyr_flood_cop_20230919_3.setVisible(false);lyr_flood_cop_20230917_4.setVisible(false);lyr_flood_cop_20230914_5.setVisible(false);lyr_flood_cop_20230912_6.setVisible(false);lyr_flood_cop_20230910_7.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_floods_20240522_1,lyr_flooded_20230922_2,lyr_flood_cop_20230919_3,lyr_flood_cop_20230917_4,lyr_flood_cop_20230914_5,lyr_flood_cop_20230912_6,lyr_flood_cop_20230910_7];
lyr_floods_20240522_1.set('fieldAliases', {'fid': 'fid', 'area': 'area', });
lyr_flooded_20230922_2.set('fieldAliases', {'fid': 'fid', 'event_type': 'event_type', 'obj_desc': 'obj_desc', 'det_method': 'det_method', 'notation': 'notation', 'dmg_src_id': 'dmg_src_id', 'area': 'area', 'layer': 'layer', 'path': 'path', });
lyr_flood_cop_20230919_3.set('fieldAliases', {'fid': 'fid', 'event_type': 'event_type', 'obj_desc': 'obj_desc', 'det_method': 'det_method', 'notation': 'notation', 'dmg_src_id': 'dmg_src_id', 'area': 'area', 'layer': 'layer', 'path': 'path', 'area2': 'area2', });
lyr_flood_cop_20230917_4.set('fieldAliases', {'fid': 'fid', 'event_type': 'event_type', 'obj_desc': 'obj_desc', 'det_method': 'det_method', 'notation': 'notation', 'dmg_src_id': 'dmg_src_id', 'area': 'area', 'layer': 'layer', 'path': 'path', });
lyr_flood_cop_20230914_5.set('fieldAliases', {'fid': 'fid', 'event_type': 'event_type', 'obj_desc': 'obj_desc', 'det_method': 'det_method', 'notation': 'notation', 'dmg_src_id': 'dmg_src_id', 'area': 'area', 'layer': 'layer', 'path': 'path', });
lyr_flood_cop_20230912_6.set('fieldAliases', {'fid': 'fid', 'event_type': 'event_type', 'obj_desc': 'obj_desc', 'det_method': 'det_method', 'notation': 'notation', 'dmg_src_id': 'dmg_src_id', 'area': 'area', 'AREA_M2': 'AREA_M2', 'layer': 'layer', 'path': 'path', });
lyr_flood_cop_20230910_7.set('fieldAliases', {'fid': 'fid', 'event_type': 'event_type', 'obj_desc': 'obj_desc', 'det_method': 'det_method', 'notation': 'notation', 'dmg_src_id': 'dmg_src_id', 'area': 'area', 'layer': 'layer', 'path': 'path', });
lyr_floods_20240522_1.set('fieldImages', {'fid': 'TextEdit', 'area': 'TextEdit', });
lyr_flooded_20230922_2.set('fieldImages', {'fid': 'TextEdit', 'event_type': 'TextEdit', 'obj_desc': 'TextEdit', 'det_method': 'TextEdit', 'notation': 'TextEdit', 'dmg_src_id': 'TextEdit', 'area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_flood_cop_20230919_3.set('fieldImages', {'fid': 'TextEdit', 'event_type': 'TextEdit', 'obj_desc': 'TextEdit', 'det_method': 'TextEdit', 'notation': 'TextEdit', 'dmg_src_id': 'TextEdit', 'area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'area2': '', });
lyr_flood_cop_20230917_4.set('fieldImages', {'fid': 'TextEdit', 'event_type': 'TextEdit', 'obj_desc': 'TextEdit', 'det_method': 'TextEdit', 'notation': 'TextEdit', 'dmg_src_id': 'TextEdit', 'area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_flood_cop_20230914_5.set('fieldImages', {'fid': 'TextEdit', 'event_type': 'TextEdit', 'obj_desc': 'TextEdit', 'det_method': 'TextEdit', 'notation': 'TextEdit', 'dmg_src_id': 'TextEdit', 'area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_flood_cop_20230912_6.set('fieldImages', {'fid': 'TextEdit', 'event_type': 'TextEdit', 'obj_desc': 'TextEdit', 'det_method': 'TextEdit', 'notation': 'TextEdit', 'dmg_src_id': 'TextEdit', 'area': 'TextEdit', 'AREA_M2': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_flood_cop_20230910_7.set('fieldImages', {'fid': 'TextEdit', 'event_type': 'TextEdit', 'obj_desc': 'TextEdit', 'det_method': 'TextEdit', 'notation': 'TextEdit', 'dmg_src_id': 'TextEdit', 'area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_floods_20240522_1.set('fieldLabels', {'fid': 'no label', 'area': 'no label', });
lyr_flooded_20230922_2.set('fieldLabels', {'fid': 'no label', 'event_type': 'no label', 'obj_desc': 'no label', 'det_method': 'no label', 'notation': 'no label', 'dmg_src_id': 'no label', 'area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_flood_cop_20230919_3.set('fieldLabels', {'fid': 'no label', 'event_type': 'no label', 'obj_desc': 'no label', 'det_method': 'no label', 'notation': 'no label', 'dmg_src_id': 'no label', 'area': 'no label', 'layer': 'no label', 'path': 'no label', 'area2': 'no label', });
lyr_flood_cop_20230917_4.set('fieldLabels', {'fid': 'no label', 'event_type': 'no label', 'obj_desc': 'no label', 'det_method': 'no label', 'notation': 'no label', 'dmg_src_id': 'no label', 'area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_flood_cop_20230914_5.set('fieldLabels', {'fid': 'no label', 'event_type': 'no label', 'obj_desc': 'no label', 'det_method': 'no label', 'notation': 'no label', 'dmg_src_id': 'no label', 'area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_flood_cop_20230912_6.set('fieldLabels', {'fid': 'no label', 'event_type': 'no label', 'obj_desc': 'no label', 'det_method': 'no label', 'notation': 'no label', 'dmg_src_id': 'no label', 'area': 'no label', 'AREA_M2': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_flood_cop_20230910_7.set('fieldLabels', {'fid': 'no label', 'event_type': 'no label', 'obj_desc': 'no label', 'det_method': 'no label', 'notation': 'no label', 'dmg_src_id': 'no label', 'area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_flood_cop_20230910_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});