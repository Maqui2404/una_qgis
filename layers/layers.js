var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Finesi_1 = new ol.format.GeoJSON();
var features_Finesi_1 = format_Finesi_1.readFeatures(json_Finesi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Finesi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Finesi_1.addFeatures(features_Finesi_1);
var lyr_Finesi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Finesi_1, 
                style: style_Finesi_1,
                interactive: true,
                title: '<img src="styles/legend/Finesi_1.png" /> Finesi'
            });
var format_Administracin_2 = new ol.format.GeoJSON();
var features_Administracin_2 = format_Administracin_2.readFeatures(json_Administracin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administracin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administracin_2.addFeatures(features_Administracin_2);
var lyr_Administracin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Administracin_2, 
                style: style_Administracin_2,
                interactive: true,
                title: '<img src="styles/legend/Administracin_2.png" /> Administración'
            });
var format_Sistemas_3 = new ol.format.GeoJSON();
var features_Sistemas_3 = format_Sistemas_3.readFeatures(json_Sistemas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sistemas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sistemas_3.addFeatures(features_Sistemas_3);
var lyr_Sistemas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sistemas_3, 
                style: style_Sistemas_3,
                interactive: true,
                title: '<img src="styles/legend/Sistemas_3.png" /> Sistemas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Finesi_1.setVisible(true);lyr_Administracin_2.setVisible(true);lyr_Sistemas_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Finesi_1,lyr_Administracin_2,lyr_Sistemas_3];
lyr_Finesi_1.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Administracin_2.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Sistemas_3.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Finesi_1.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Administracin_2.set('fieldImages', {'begin': '', 'end': '', });
lyr_Sistemas_3.set('fieldImages', {'begin': '', 'end': '', });
lyr_Finesi_1.set('fieldLabels', {'begin': 'header label', 'end': 'no label', });
lyr_Administracin_2.set('fieldLabels', {'begin': 'header label', 'end': 'no label', });
lyr_Sistemas_3.set('fieldLabels', {'begin': 'no label', 'end': 'no label', });
lyr_Sistemas_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});