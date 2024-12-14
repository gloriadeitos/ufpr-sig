var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

// ===== MAPA01:

// DIVISA DE BAIRROS
var format_DIVISA_DE_BAIRROS_1 = new ol.format.GeoJSON();
var features_DIVISA_DE_BAIRROS_1 = format_DIVISA_DE_BAIRROS_1.readFeatures(json_DIVISA_DE_BAIRROS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIVISA_DE_BAIRROS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIVISA_DE_BAIRROS_1.addFeatures(features_DIVISA_DE_BAIRROS_1);
var lyr_DIVISA_DE_BAIRROS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DIVISA_DE_BAIRROS_1, 
                style: style_DIVISA_DE_BAIRROS_1,
                popuplayertitle: "DIVISA_DE_BAIRROS",
                interactive: true,
                title: '<img src="styles/legend/DIVISA_DE_BAIRROS_1.png" /> DIVISA_DE_BAIRROS'
            });

// PRACAS E JARDINETES
var format_PRACAS_E_JARDINETES_2 = new ol.format.GeoJSON();
var features_PRACAS_E_JARDINETES_2 = format_PRACAS_E_JARDINETES_2.readFeatures(json_PRACAS_E_JARDINETES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRACAS_E_JARDINETES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRACAS_E_JARDINETES_2.addFeatures(features_PRACAS_E_JARDINETES_2);
var lyr_PRACAS_E_JARDINETES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRACAS_E_JARDINETES_2, 
                style: style_PRACAS_E_JARDINETES_2,
                popuplayertitle: "PRACAS_E_JARDINETES",
                interactive: true,
                title: '<img src="styles/legend/PRACAS_E_JARDINETES_2.png" /> PRACAS_E_JARDINETES'
            });

// PARQUES E BOSQUES
var format_PARQUES_E_BOSQUES_3 = new ol.format.GeoJSON();
var features_PARQUES_E_BOSQUES_3 = format_PARQUES_E_BOSQUES_3.readFeatures(json_PARQUES_E_BOSQUES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARQUES_E_BOSQUES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUES_E_BOSQUES_3.addFeatures(features_PARQUES_E_BOSQUES_3);
var lyr_PARQUES_E_BOSQUES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUES_E_BOSQUES_3, 
                style: style_PARQUES_E_BOSQUES_3,
                popuplayertitle: "PARQUES_E_BOSQUES",
                interactive: true,
                title: '<img src="styles/legend/PARQUES_E_BOSQUES_3.png" /> PARQUES_E_BOSQUES'
            });

// CICLOVIA
var format_CICLOVIA_OFICIAL_4 = new ol.format.GeoJSON();
var features_CICLOVIA_OFICIAL_4 = format_CICLOVIA_OFICIAL_4.readFeatures(json_CICLOVIA_OFICIAL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CICLOVIA_OFICIAL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CICLOVIA_OFICIAL_4.addFeatures(features_CICLOVIA_OFICIAL_4);
var lyr_CICLOVIA_OFICIAL_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CICLOVIA_OFICIAL_4, 
                style: style_CICLOVIA_OFICIAL_4,
                popuplayertitle: "CICLOVIA_OFICIAL",
                interactive: true,
                title: '<img src="styles/legend/CICLOVIA_OFICIAL_4.png" /> CICLOVIA_OFICIAL'
            });

// TERMINAL VORONOI
var format_terminalvoronoi_5 = new ol.format.GeoJSON();
var features_terminalvoronoi_5 = format_terminalvoronoi_5.readFeatures(json_terminalvoronoi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_terminalvoronoi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_terminalvoronoi_5.addFeatures(features_terminalvoronoi_5);
var lyr_terminalvoronoi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_terminalvoronoi_5, 
                style: style_terminalvoronoi_5,
                popuplayertitle: "terminal-voronoi",
                interactive: true,
                title: '<img src="styles/legend/terminalvoronoi_5.png" /> terminal-voronoi'
            });

// TERMINAL DE ONIBUS
var format_TERMINAL_DE_TRANSPORTE_6 = new ol.format.GeoJSON();
var features_TERMINAL_DE_TRANSPORTE_6 = format_TERMINAL_DE_TRANSPORTE_6.readFeatures(json_TERMINAL_DE_TRANSPORTE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TERMINAL_DE_TRANSPORTE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERMINAL_DE_TRANSPORTE_6.addFeatures(features_TERMINAL_DE_TRANSPORTE_6);
var lyr_TERMINAL_DE_TRANSPORTE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TERMINAL_DE_TRANSPORTE_6, 
                style: style_TERMINAL_DE_TRANSPORTE_6,
                popuplayertitle: "TERMINAL_DE_TRANSPORTE",
                interactive: true,
                title: '<img src="styles/legend/TERMINAL_DE_TRANSPORTE_6.png" /> TERMINAL_DE_TRANSPORTE'
            });

// OCUPACAO IRREGULAR
var format_OCUPACAO_IRREGULAR_2 = new ol.format.GeoJSON();
var features_OCUPACAO_IRREGULAR_2 = format_OCUPACAO_IRREGULAR_2.readFeatures(json_OCUPACAO_IRREGULAR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OCUPACAO_IRREGULAR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OCUPACAO_IRREGULAR_2.addFeatures(features_OCUPACAO_IRREGULAR_2);
var lyr_OCUPACAO_IRREGULAR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OCUPACAO_IRREGULAR_2, 
                style: style_OCUPACAO_IRREGULAR_2,
                popuplayertitle: 'OCUPACAO_IRREGULAR',
                interactive: true,
                title: '<img src="styles/legend/OCUPACAO_IRREGULAR_2.png" /> OCUPACAO_IRREGULAR'
            });

// ===== MAPA02:

// RIOS
var format_HIDRO_RIOS_LN_3 = new ol.format.GeoJSON();
var features_HIDRO_RIOS_LN_3 = format_HIDRO_RIOS_LN_3.readFeatures(json_HIDRO_RIOS_LN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIDRO_RIOS_LN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIDRO_RIOS_LN_3.addFeatures(features_HIDRO_RIOS_LN_3);
var lyr_HIDRO_RIOS_LN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HIDRO_RIOS_LN_3, 
                style: style_HIDRO_RIOS_LN_3,
                popuplayertitle: 'HIDRO_RIOS_LN',
                interactive: true,
                title: '<img src="styles/legend/HIDRO_RIOS_LN_3.png" /> HIDRO_RIOS_LN'
            });

// AREAS INUNDAVEIS
var format_Interseo_4 = new ol.format.GeoJSON();
var features_Interseo_4 = format_Interseo_4.readFeatures(json_Interseo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Interseo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Interseo_4.addFeatures(features_Interseo_4);
var lyr_Interseo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Interseo_4, 
                style: style_Interseo_4,
                popuplayertitle: 'Interseção ',
                interactive: true,
                title: '<img src="styles/legend/Interseo_4.png" /> Interseção '
            });

// ===== MAPA03:

// PORCENTAGEM DE PARQUE E BOSQUE
var format_PARQUEPORCENTAGEM_2 = new ol.format.GeoJSON();
var features_PARQUEPORCENTAGEM_2 = format_PARQUEPORCENTAGEM_2.readFeatures(json_PARQUEPORCENTAGEM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARQUEPORCENTAGEM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUEPORCENTAGEM_2.addFeatures(features_PARQUEPORCENTAGEM_2);

// Add layers to the map
// TODOS OS MAPAS
lyr_GoogleSatellite_0.setVisible(true);
// MAPA01
lyr_DIVISA_DE_BAIRROS_1.setVisible(true);
lyr_PRACAS_E_JARDINETES_2.setVisible(true);
lyr_PARQUES_E_BOSQUES_3.setVisible(true);
lyr_CICLOVIA_OFICIAL_4.setVisible(true);
lyr_terminalvoronoi_5.setVisible(true);
lyr_TERMINAL_DE_TRANSPORTE_6.setVisible(true);
// MAPA02
lyr_OCUPACAO_IRREGULAR_2.setVisible(true);
lyr_HIDRO_RIOS_LN_3.setVisible(true);
lyr_Interseo_4.setVisible(true);
// MAPA03
lyr_PARQUEPORCENTAGEM_2 = new ol.layer.Vector({
    declutter: false,
    source:jsonSource_PARQUEPORCENTAGEM_2, 
    style: style_PARQUEPORCENTAGEM_2,
    popuplayertitle: 'PARQUE-PORCENTAGEM',
    interactive: true,
title: 'PARQUE-PORCENTAGEM<br />\
<img src="styles/legend/PARQUEPORCENTAGEM_2_0.png" /> 0 - 0.3<br />\
<img src="styles/legend/PARQUEPORCENTAGEM_2_1.png" /> 0.3 - 1.62<br />\
<img src="styles/legend/PARQUEPORCENTAGEM_2_2.png" /> 1.62 - 4.51<br />\
<img src="styles/legend/PARQUEPORCENTAGEM_2_3.png" /> 4.51 - 7.22<br />\
<img src="styles/legend/PARQUEPORCENTAGEM_2_4.png" /> 7.22 - 10.13<br />'
});
lyr_PARQUEPORCENTAGEM_2.setVisible(true);

var layersList = [
    // TODOS OS MAPAS
    lyr_GoogleSatellite_0,
    // MAPA01
    lyr_DIVISA_DE_BAIRROS_1,
    lyr_PRACAS_E_JARDINETES_2,
    lyr_PARQUES_E_BOSQUES_3,
    lyr_CICLOVIA_OFICIAL_4,
    lyr_terminalvoronoi_5,
    lyr_TERMINAL_DE_TRANSPORTE_6,
    // MAPA02
    lyr_OCUPACAO_IRREGULAR_2,
    lyr_HIDRO_RIOS_LN_3,
    lyr_Interseo_4,
    // MAPA03
    lyr_PARQUEPORCENTAGEM_2
    ];

// MAPA01 - ALIASES
lyr_DIVISA_DE_BAIRROS_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'TIPO': 'TIPO', 'NOME': 'NOME', 'FONTE': 'FONTE', 'CD_REGIONA': 'CD_REGIONA', 'NM_REGIONA': 'NM_REGIONA', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_PRACAS_E_JARDINETES_2.set('fieldAliases', {'CODIGO': 'CODIGO', 'COD_SMMA': 'COD_SMMA', 'TIPO': 'TIPO', 'NOME': 'NOME', });
lyr_PARQUES_E_BOSQUES_3.set('fieldAliases', {'CODIGO': 'CODIGO', 'CODIGO_SMM': 'CODIGO_SMM', 'TIPO': 'TIPO', 'NOME': 'NOME', 'TEXTO_MAPA': 'TEXTO_MAPA', });
lyr_CICLOVIA_OFICIAL_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'CLASSE': 'CLASSE', 'TIPO': 'TIPO', 'LOCALIZACA': 'LOCALIZACA', 'BAIRRO': 'BAIRRO', 'REGIONAL': 'REGIONAL', 'OBS': 'OBS', 'DATA': 'DATA', 'FONTE': 'FONTE', 'TIPO_2005': 'TIPO_2005', 'PAVIMENTO_': 'PAVIMENTO_', 'SINALIZACA': 'SINALIZACA', 'ILUMINACAO': 'ILUMINACAO', 'LARGURA_20': 'LARGURA_20', 'TIPO_2018': 'TIPO_2018', 'PAVIMENTO1': 'PAVIMENTO1', 'SINALIZA_1': 'SINALIZA_1', 'SINALIZA_2': 'SINALIZA_2', 'ILUMINAC_1': 'ILUMINAC_1', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_terminalvoronoi_5.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'CD_EQUI': 'CD_EQUI', 'CD_LOCAL': 'CD_LOCAL', 'CD_TEMA': 'CD_TEMA', 'TEMA': 'TEMA', 'ID_EQUIP': 'ID_EQUIP', 'EQUIPAMENT': 'EQUIPAMENT', 'CD_TIPO_EQ': 'CD_TIPO_EQ', 'TIPO_EQUI': 'TIPO_EQUI', 'CD_DEP_ADM': 'CD_DEP_ADM', 'DEP_ADMIN': 'DEP_ADMIN', 'NOME_COMPL': 'NOME_COMPL', 'PRE_NOME': 'PRE_NOME', 'NOME': 'NOME', 'SIGLA_EQUI': 'SIGLA_EQUI', 'CONVENIADO': 'CONVENIADO', 'NOME_ABREV': 'NOME_ABREV', 'NOME_MAPA': 'NOME_MAPA', 'CD_RUA': 'CD_RUA', 'NOME_RUA': 'NOME_RUA', 'NOME_RUANO': 'NOME_RUANO', 'NUM_PRED': 'NUM_PRED', 'COMPL_END': 'COMPL_END', 'DIVULGAR_E': 'DIVULGAR_E', 'INDFISCAL': 'INDFISCAL', 'CD_BAIRRO': 'CD_BAIRRO', 'BAIRRO': 'BAIRRO', 'QUADR_EQUI': 'QUADR_EQUI', 'CD_REGIONA': 'CD_REGIONA', 'REGIONAL': 'REGIONAL', 'CD_DISTRIT': 'CD_DISTRIT', 'CD_EQUI_DI': 'CD_EQUI_DI', 'NM_DISTRIT': 'NM_DISTRIT', 'FUNC_MANHA': 'FUNC_MANHA', 'FUNC_TARDE': 'FUNC_TARDE', 'FUNC_NOITE': 'FUNC_NOITE', 'FUNC_24HR': 'FUNC_24HR', 'TELEFONE': 'TELEFONE', 'RAMAL': 'RAMAL', 'EMAIL': 'EMAIL', 'SITE': 'SITE', 'DT_INAUGUR': 'DT_INAUGUR', 'DT_ATUALIZ': 'DT_ATUALIZ', 'OBSERVACAO': 'OBSERVACAO', 'FONTE': 'FONTE', 'CD_MANTENE': 'CD_MANTENE', 'DS_MANTENE': 'DS_MANTENE', 'SIGLA_MANT': 'SIGLA_MANT', 'INATIVO_EQ': 'INATIVO_EQ', 'LAT_SIRGAS': 'LAT_SIRGAS', 'LON_SIRGAS': 'LON_SIRGAS', });
lyr_TERMINAL_DE_TRANSPORTE_6.set('fieldAliases', {'CD_EQUI': 'CD_EQUI', 'CD_LOCAL': 'CD_LOCAL', 'CD_TEMA': 'CD_TEMA', 'TEMA': 'TEMA', 'ID_EQUIP': 'ID_EQUIP', 'EQUIPAMENT': 'EQUIPAMENT', 'CD_TIPO_EQ': 'CD_TIPO_EQ', 'TIPO_EQUI': 'TIPO_EQUI', 'CD_DEP_ADM': 'CD_DEP_ADM', 'DEP_ADMIN': 'DEP_ADMIN', 'NOME_COMPL': 'NOME_COMPL', 'PRE_NOME': 'PRE_NOME', 'NOME': 'NOME', 'SIGLA_EQUI': 'SIGLA_EQUI', 'CONVENIADO': 'CONVENIADO', 'NOME_ABREV': 'NOME_ABREV', 'NOME_MAPA': 'NOME_MAPA', 'CD_RUA': 'CD_RUA', 'NOME_RUA': 'NOME_RUA', 'NOME_RUANO': 'NOME_RUANO', 'NUM_PRED': 'NUM_PRED', 'COMPL_END': 'COMPL_END', 'DIVULGAR_E': 'DIVULGAR_E', 'INDFISCAL': 'INDFISCAL', 'CD_BAIRRO': 'CD_BAIRRO', 'BAIRRO': 'BAIRRO', 'QUADR_EQUI': 'QUADR_EQUI', 'CD_REGIONA': 'CD_REGIONA', 'REGIONAL': 'REGIONAL', 'CD_DISTRIT': 'CD_DISTRIT', 'CD_EQUI_DI': 'CD_EQUI_DI', 'NM_DISTRIT': 'NM_DISTRIT', 'FUNC_MANHA': 'FUNC_MANHA', 'FUNC_TARDE': 'FUNC_TARDE', 'FUNC_NOITE': 'FUNC_NOITE', 'FUNC_24HR': 'FUNC_24HR', 'TELEFONE': 'TELEFONE', 'RAMAL': 'RAMAL', 'EMAIL': 'EMAIL', 'SITE': 'SITE', 'DT_INAUGUR': 'DT_INAUGUR', 'DT_ATUALIZ': 'DT_ATUALIZ', 'OBSERVACAO': 'OBSERVACAO', 'FONTE': 'FONTE', 'CD_MANTENE': 'CD_MANTENE', 'DS_MANTENE': 'DS_MANTENE', 'SIGLA_MANT': 'SIGLA_MANT', 'INATIVO_EQ': 'INATIVO_EQ', 'LAT_SIRGAS': 'LAT_SIRGAS', 'LON_SIRGAS': 'LON_SIRGAS', });

// MAPA02 - ALIASES
lyr_OCUPACAO_IRREGULAR_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'COD_IPPUC': 'COD_IPPUC', 'COD_SISPEH': 'COD_SISPEH', 'NOME': 'NOME', 'NOME_COMPL': 'NOME_COMPL', 'CATEGORIA': 'CATEGORIA', 'BAIRRO': 'BAIRRO', 'REGIONAL': 'REGIONAL', 'QUADRICULA': 'QUADRICULA', 'OBS': 'OBS', 'FONTE': 'FONTE', 'CATEG_2000': 'CATEG_2000', 'CATEG_2005': 'CATEG_2005', 'CATEG_2010': 'CATEG_2010', 'CATEG_2012': 'CATEG_2012', 'CATEG_2014': 'CATEG_2014', 'INFO_EDIT_': 'INFO_EDIT_', 'CATEG_2016': 'CATEG_2016', 'INFO_EDIT1': 'INFO_EDIT1', 'NOME_ANTER': 'NOME_ANTER', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_HIDRO_RIOS_LN_3.set('fieldAliases', {'TIPO': 'TIPO', 'NOME': 'NOME', });
lyr_Interseo_4.set('fieldAliases', {'TIPO': 'TIPO', 'NOME': 'NOME', 'layer': 'layer', 'path': 'path', 'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'COD_IPPUC': 'COD_IPPUC', 'COD_SISPEH': 'COD_SISPEH', 'NOME_2': 'NOME_2', 'NOME_COMPL': 'NOME_COMPL', 'CATEGORIA': 'CATEGORIA', 'BAIRRO': 'BAIRRO', 'REGIONAL': 'REGIONAL', 'QUADRICULA': 'QUADRICULA', 'OBS': 'OBS', 'FONTE': 'FONTE', 'CATEG_2000': 'CATEG_2000', 'CATEG_2005': 'CATEG_2005', 'CATEG_2010': 'CATEG_2010', 'CATEG_2012': 'CATEG_2012', 'CATEG_2014': 'CATEG_2014', 'INFO_EDIT_': 'INFO_EDIT_', 'CATEG_2016': 'CATEG_2016', 'INFO_EDIT1': 'INFO_EDIT1', 'NOME_ANTER': 'NOME_ANTER', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });

// MAPA03 - ALIASES
lyr_PARQUEPORCENTAGEM_2.set('fieldAliases', {'fid': 'fid', 'NOME': 'NOME', 'sum': 'sum', 'min': 'min', 'max': 'max', 'avg': 'avg', 'AREA': 'AREA', '% AREA': '% AREA', });

// MAPA 01 - IMAGES
lyr_DIVISA_DE_BAIRROS_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'TIPO': 'TextEdit', 'NOME': 'TextEdit', 'FONTE': 'TextEdit', 'CD_REGIONA': 'TextEdit', 'NM_REGIONA': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_PRACAS_E_JARDINETES_2.set('fieldImages', {'CODIGO': '', 'COD_SMMA': '', 'TIPO': '', 'NOME': '', });
lyr_PARQUES_E_BOSQUES_3.set('fieldImages', {'CODIGO': 'TextEdit', 'CODIGO_SMM': 'TextEdit', 'TIPO': 'TextEdit', 'NOME': 'TextEdit', 'TEXTO_MAPA': 'TextEdit', });
lyr_CICLOVIA_OFICIAL_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'CLASSE': 'TextEdit', 'TIPO': 'TextEdit', 'LOCALIZACA': 'TextEdit', 'BAIRRO': 'TextEdit', 'REGIONAL': 'TextEdit', 'OBS': 'TextEdit', 'DATA': 'TextEdit', 'FONTE': 'TextEdit', 'TIPO_2005': 'TextEdit', 'PAVIMENTO_': 'TextEdit', 'SINALIZACA': 'TextEdit', 'ILUMINACAO': 'TextEdit', 'LARGURA_20': 'TextEdit', 'TIPO_2018': 'TextEdit', 'PAVIMENTO1': 'TextEdit', 'SINALIZA_1': 'TextEdit', 'SINALIZA_2': 'TextEdit', 'ILUMINAC_1': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_terminalvoronoi_5.set('fieldImages', {'fid': 'TextEdit', 'cat': 'Range', 'CD_EQUI': 'Range', 'CD_LOCAL': 'TextEdit', 'CD_TEMA': 'Range', 'TEMA': 'TextEdit', 'ID_EQUIP': 'Range', 'EQUIPAMENT': 'TextEdit', 'CD_TIPO_EQ': 'Range', 'TIPO_EQUI': 'TextEdit', 'CD_DEP_ADM': 'Range', 'DEP_ADMIN': 'TextEdit', 'NOME_COMPL': 'TextEdit', 'PRE_NOME': 'TextEdit', 'NOME': 'TextEdit', 'SIGLA_EQUI': 'TextEdit', 'CONVENIADO': 'TextEdit', 'NOME_ABREV': 'TextEdit', 'NOME_MAPA': 'TextEdit', 'CD_RUA': 'TextEdit', 'NOME_RUA': 'TextEdit', 'NOME_RUANO': 'TextEdit', 'NUM_PRED': 'TextEdit', 'COMPL_END': 'TextEdit', 'DIVULGAR_E': 'TextEdit', 'INDFISCAL': 'TextEdit', 'CD_BAIRRO': 'Range', 'BAIRRO': 'TextEdit', 'QUADR_EQUI': 'TextEdit', 'CD_REGIONA': 'Range', 'REGIONAL': 'TextEdit', 'CD_DISTRIT': 'Range', 'CD_EQUI_DI': 'Range', 'NM_DISTRIT': 'TextEdit', 'FUNC_MANHA': 'TextEdit', 'FUNC_TARDE': 'TextEdit', 'FUNC_NOITE': 'TextEdit', 'FUNC_24HR': 'TextEdit', 'TELEFONE': 'TextEdit', 'RAMAL': 'TextEdit', 'EMAIL': 'TextEdit', 'SITE': 'TextEdit', 'DT_INAUGUR': 'DateTime', 'DT_ATUALIZ': 'DateTime', 'OBSERVACAO': 'TextEdit', 'FONTE': 'TextEdit', 'CD_MANTENE': 'Range', 'DS_MANTENE': 'TextEdit', 'SIGLA_MANT': 'TextEdit', 'INATIVO_EQ': 'TextEdit', 'LAT_SIRGAS': 'TextEdit', 'LON_SIRGAS': 'TextEdit', });
lyr_TERMINAL_DE_TRANSPORTE_6.set('fieldImages', {'CD_EQUI': 'TextEdit', 'CD_LOCAL': 'TextEdit', 'CD_TEMA': 'TextEdit', 'TEMA': 'TextEdit', 'ID_EQUIP': 'TextEdit', 'EQUIPAMENT': 'TextEdit', 'CD_TIPO_EQ': 'TextEdit', 'TIPO_EQUI': 'TextEdit', 'CD_DEP_ADM': 'TextEdit', 'DEP_ADMIN': 'TextEdit', 'NOME_COMPL': 'TextEdit', 'PRE_NOME': 'TextEdit', 'NOME': 'TextEdit', 'SIGLA_EQUI': 'TextEdit', 'CONVENIADO': 'TextEdit', 'NOME_ABREV': 'TextEdit', 'NOME_MAPA': 'TextEdit', 'CD_RUA': 'TextEdit', 'NOME_RUA': 'TextEdit', 'NOME_RUANO': 'TextEdit', 'NUM_PRED': 'TextEdit', 'COMPL_END': 'TextEdit', 'DIVULGAR_E': 'TextEdit', 'INDFISCAL': 'TextEdit', 'CD_BAIRRO': 'Range', 'BAIRRO': 'TextEdit', 'QUADR_EQUI': 'TextEdit', 'CD_REGIONA': 'Range', 'REGIONAL': 'TextEdit', 'CD_DISTRIT': 'TextEdit', 'CD_EQUI_DI': 'TextEdit', 'NM_DISTRIT': 'TextEdit', 'FUNC_MANHA': 'TextEdit', 'FUNC_TARDE': 'TextEdit', 'FUNC_NOITE': 'TextEdit', 'FUNC_24HR': 'TextEdit', 'TELEFONE': 'TextEdit', 'RAMAL': 'TextEdit', 'EMAIL': 'TextEdit', 'SITE': 'TextEdit', 'DT_INAUGUR': 'DateTime', 'DT_ATUALIZ': 'DateTime', 'OBSERVACAO': 'TextEdit', 'FONTE': 'TextEdit', 'CD_MANTENE': 'TextEdit', 'DS_MANTENE': 'TextEdit', 'SIGLA_MANT': 'TextEdit', 'INATIVO_EQ': 'TextEdit', 'LAT_SIRGAS': 'TextEdit', 'LON_SIRGAS': 'TextEdit', });

// MAPA 02 - IMAGES
lyr_OCUPACAO_IRREGULAR_2.set('fieldImages', {'OBJECTID': '', 'CODIGO': '', 'COD_IPPUC': '', 'COD_SISPEH': '', 'NOME': '', 'NOME_COMPL': '', 'CATEGORIA': '', 'BAIRRO': '', 'REGIONAL': '', 'QUADRICULA': '', 'OBS': '', 'FONTE': '', 'CATEG_2000': '', 'CATEG_2005': '', 'CATEG_2010': '', 'CATEG_2012': '', 'CATEG_2014': '', 'INFO_EDIT_': '', 'CATEG_2016': '', 'INFO_EDIT1': '', 'NOME_ANTER': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_HIDRO_RIOS_LN_3.set('fieldImages', {'TIPO': 'TextEdit', 'NOME': 'TextEdit', });
lyr_Interseo_4.set('fieldImages', {'TIPO': 'TextEdit', 'NOME': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'COD_IPPUC': 'TextEdit', 'COD_SISPEH': 'TextEdit', 'NOME_2': 'TextEdit', 'NOME_COMPL': 'TextEdit', 'CATEGORIA': 'TextEdit', 'BAIRRO': 'TextEdit', 'REGIONAL': 'TextEdit', 'QUADRICULA': 'TextEdit', 'OBS': 'TextEdit', 'FONTE': 'TextEdit', 'CATEG_2000': 'TextEdit', 'CATEG_2005': 'TextEdit', 'CATEG_2010': 'TextEdit', 'CATEG_2012': 'TextEdit', 'CATEG_2014': 'TextEdit', 'INFO_EDIT_': 'TextEdit', 'CATEG_2016': 'TextEdit', 'INFO_EDIT1': 'TextEdit', 'NOME_ANTER': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });

// MAPA 03 - IMAGES
lyr_PARQUEPORCENTAGEM_2.set('fieldImages', {'fid': 'TextEdit', 'NOME': 'TextEdit', 'sum': 'TextEdit', 'min': 'TextEdit', 'max': 'TextEdit', 'avg': 'TextEdit', 'AREA': 'Range', '% AREA': 'TextEdit', });

// MAPA 01 - LABELS
lyr_DIVISA_DE_BAIRROS_1.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'TIPO': 'no label', 'NOME': 'no label', 'FONTE': 'no label', 'CD_REGIONA': 'no label', 'NM_REGIONA': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_PRACAS_E_JARDINETES_2.set('fieldLabels', {'CODIGO': 'no label', 'COD_SMMA': 'no label', 'TIPO': 'no label', 'NOME': 'no label', });
lyr_PARQUES_E_BOSQUES_3.set('fieldLabels', {'CODIGO': 'no label', 'CODIGO_SMM': 'no label', 'TIPO': 'no label', 'NOME': 'no label', 'TEXTO_MAPA': 'no label', });
lyr_CICLOVIA_OFICIAL_4.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'CLASSE': 'no label', 'TIPO': 'no label', 'LOCALIZACA': 'no label', 'BAIRRO': 'no label', 'REGIONAL': 'no label', 'OBS': 'no label', 'DATA': 'no label', 'FONTE': 'no label', 'TIPO_2005': 'no label', 'PAVIMENTO_': 'no label', 'SINALIZACA': 'no label', 'ILUMINACAO': 'no label', 'LARGURA_20': 'no label', 'TIPO_2018': 'no label', 'PAVIMENTO1': 'no label', 'SINALIZA_1': 'no label', 'SINALIZA_2': 'no label', 'ILUMINAC_1': 'no label', 'SHAPE_LEN': 'no label', });
lyr_terminalvoronoi_5.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'CD_EQUI': 'no label', 'CD_LOCAL': 'no label', 'CD_TEMA': 'no label', 'TEMA': 'no label', 'ID_EQUIP': 'no label', 'EQUIPAMENT': 'no label', 'CD_TIPO_EQ': 'no label', 'TIPO_EQUI': 'no label', 'CD_DEP_ADM': 'no label', 'DEP_ADMIN': 'no label', 'NOME_COMPL': 'no label', 'PRE_NOME': 'no label', 'NOME': 'no label', 'SIGLA_EQUI': 'no label', 'CONVENIADO': 'no label', 'NOME_ABREV': 'no label', 'NOME_MAPA': 'no label', 'CD_RUA': 'no label', 'NOME_RUA': 'no label', 'NOME_RUANO': 'no label', 'NUM_PRED': 'no label', 'COMPL_END': 'no label', 'DIVULGAR_E': 'no label', 'INDFISCAL': 'no label', 'CD_BAIRRO': 'no label', 'BAIRRO': 'no label', 'QUADR_EQUI': 'no label', 'CD_REGIONA': 'no label', 'REGIONAL': 'no label', 'CD_DISTRIT': 'no label', 'CD_EQUI_DI': 'no label', 'NM_DISTRIT': 'no label', 'FUNC_MANHA': 'no label', 'FUNC_TARDE': 'no label', 'FUNC_NOITE': 'no label', 'FUNC_24HR': 'no label', 'TELEFONE': 'no label', 'RAMAL': 'no label', 'EMAIL': 'no label', 'SITE': 'no label', 'DT_INAUGUR': 'no label', 'DT_ATUALIZ': 'no label', 'OBSERVACAO': 'no label', 'FONTE': 'no label', 'CD_MANTENE': 'no label', 'DS_MANTENE': 'no label', 'SIGLA_MANT': 'no label', 'INATIVO_EQ': 'no label', 'LAT_SIRGAS': 'no label', 'LON_SIRGAS': 'no label', });
lyr_TERMINAL_DE_TRANSPORTE_6.set('fieldLabels', {'CD_EQUI': 'no label', 'CD_LOCAL': 'no label', 'CD_TEMA': 'no label', 'TEMA': 'no label', 'ID_EQUIP': 'no label', 'EQUIPAMENT': 'no label', 'CD_TIPO_EQ': 'no label', 'TIPO_EQUI': 'no label', 'CD_DEP_ADM': 'no label', 'DEP_ADMIN': 'no label', 'NOME_COMPL': 'no label', 'PRE_NOME': 'no label', 'NOME': 'no label', 'SIGLA_EQUI': 'no label', 'CONVENIADO': 'no label', 'NOME_ABREV': 'no label', 'NOME_MAPA': 'no label', 'CD_RUA': 'no label', 'NOME_RUA': 'no label', 'NOME_RUANO': 'no label', 'NUM_PRED': 'no label', 'COMPL_END': 'no label', 'DIVULGAR_E': 'no label', 'INDFISCAL': 'no label', 'CD_BAIRRO': 'no label', 'BAIRRO': 'no label', 'QUADR_EQUI': 'no label', 'CD_REGIONA': 'no label', 'REGIONAL': 'no label', 'CD_DISTRIT': 'no label', 'CD_EQUI_DI': 'no label', 'NM_DISTRIT': 'no label', 'FUNC_MANHA': 'no label', 'FUNC_TARDE': 'no label', 'FUNC_NOITE': 'no label', 'FUNC_24HR': 'no label', 'TELEFONE': 'no label', 'RAMAL': 'no label', 'EMAIL': 'no label', 'SITE': 'no label', 'DT_INAUGUR': 'no label', 'DT_ATUALIZ': 'no label', 'OBSERVACAO': 'no label', 'FONTE': 'no label', 'CD_MANTENE': 'no label', 'DS_MANTENE': 'no label', 'SIGLA_MANT': 'no label', 'INATIVO_EQ': 'no label', 'LAT_SIRGAS': 'no label', 'LON_SIRGAS': 'no label', });

// MAPA 02 - LABELS
lyr_OCUPACAO_IRREGULAR_2.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'COD_IPPUC': 'no label', 'COD_SISPEH': 'no label', 'NOME': 'no label', 'NOME_COMPL': 'no label', 'CATEGORIA': 'no label', 'BAIRRO': 'no label', 'REGIONAL': 'no label', 'QUADRICULA': 'no label', 'OBS': 'no label', 'FONTE': 'no label', 'CATEG_2000': 'no label', 'CATEG_2005': 'no label', 'CATEG_2010': 'no label', 'CATEG_2012': 'no label', 'CATEG_2014': 'no label', 'INFO_EDIT_': 'no label', 'CATEG_2016': 'no label', 'INFO_EDIT1': 'no label', 'NOME_ANTER': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_HIDRO_RIOS_LN_3.set('fieldLabels', {'TIPO': 'no label', 'NOME': 'no label', });
lyr_Interseo_4.set('fieldLabels', {'TIPO': 'no label', 'NOME': 'no label', 'layer': 'no label', 'path': 'no label', 'OBJECTID': 'no label', 'CODIGO': 'no label', 'COD_IPPUC': 'no label', 'COD_SISPEH': 'no label', 'NOME_2': 'no label', 'NOME_COMPL': 'no label', 'CATEGORIA': 'no label', 'BAIRRO': 'no label', 'REGIONAL': 'no label', 'QUADRICULA': 'no label', 'OBS': 'no label', 'FONTE': 'no label', 'CATEG_2000': 'no label', 'CATEG_2005': 'no label', 'CATEG_2010': 'no label', 'CATEG_2012': 'no label', 'CATEG_2014': 'no label', 'INFO_EDIT_': 'no label', 'CATEG_2016': 'no label', 'INFO_EDIT1': 'no label', 'NOME_ANTER': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });

// MAPA 03 - LABELS
lyr_PARQUEPORCENTAGEM_2.set('fieldLabels', {'fid': 'no label', 'NOME': 'no label', 'sum': 'no label', 'min': 'no label', 'max': 'no label', 'avg': 'no label', 'AREA': 'no label', '% AREA': 'no label', });

// MAPA 01
lyr_TERMINAL_DE_TRANSPORTE_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

// MAPA 02
lyr_Interseo_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

// MAPA 03
lyr_PARQUEPORCENTAGEM_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});