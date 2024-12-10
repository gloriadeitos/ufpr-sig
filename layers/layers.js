var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
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

lyr_GoogleSatellite_0.setVisible(true);lyr_DIVISA_DE_BAIRROS_1.setVisible(true);lyr_PRACAS_E_JARDINETES_2.setVisible(true);lyr_PARQUES_E_BOSQUES_3.setVisible(true);lyr_CICLOVIA_OFICIAL_4.setVisible(true);lyr_terminalvoronoi_5.setVisible(true);lyr_TERMINAL_DE_TRANSPORTE_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DIVISA_DE_BAIRROS_1,lyr_PRACAS_E_JARDINETES_2,lyr_PARQUES_E_BOSQUES_3,lyr_CICLOVIA_OFICIAL_4,lyr_terminalvoronoi_5,lyr_TERMINAL_DE_TRANSPORTE_6];
lyr_DIVISA_DE_BAIRROS_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'TIPO': 'TIPO', 'NOME': 'NOME', 'FONTE': 'FONTE', 'CD_REGIONA': 'CD_REGIONA', 'NM_REGIONA': 'NM_REGIONA', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_PRACAS_E_JARDINETES_2.set('fieldAliases', {'CODIGO': 'CODIGO', 'COD_SMMA': 'COD_SMMA', 'TIPO': 'TIPO', 'NOME': 'NOME', });
lyr_PARQUES_E_BOSQUES_3.set('fieldAliases', {'CODIGO': 'CODIGO', 'CODIGO_SMM': 'CODIGO_SMM', 'TIPO': 'TIPO', 'NOME': 'NOME', 'TEXTO_MAPA': 'TEXTO_MAPA', });
lyr_CICLOVIA_OFICIAL_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODIGO': 'CODIGO', 'CLASSE': 'CLASSE', 'TIPO': 'TIPO', 'LOCALIZACA': 'LOCALIZACA', 'BAIRRO': 'BAIRRO', 'REGIONAL': 'REGIONAL', 'OBS': 'OBS', 'DATA': 'DATA', 'FONTE': 'FONTE', 'TIPO_2005': 'TIPO_2005', 'PAVIMENTO_': 'PAVIMENTO_', 'SINALIZACA': 'SINALIZACA', 'ILUMINACAO': 'ILUMINACAO', 'LARGURA_20': 'LARGURA_20', 'TIPO_2018': 'TIPO_2018', 'PAVIMENTO1': 'PAVIMENTO1', 'SINALIZA_1': 'SINALIZA_1', 'SINALIZA_2': 'SINALIZA_2', 'ILUMINAC_1': 'ILUMINAC_1', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_terminalvoronoi_5.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'CD_EQUI': 'CD_EQUI', 'CD_LOCAL': 'CD_LOCAL', 'CD_TEMA': 'CD_TEMA', 'TEMA': 'TEMA', 'ID_EQUIP': 'ID_EQUIP', 'EQUIPAMENT': 'EQUIPAMENT', 'CD_TIPO_EQ': 'CD_TIPO_EQ', 'TIPO_EQUI': 'TIPO_EQUI', 'CD_DEP_ADM': 'CD_DEP_ADM', 'DEP_ADMIN': 'DEP_ADMIN', 'NOME_COMPL': 'NOME_COMPL', 'PRE_NOME': 'PRE_NOME', 'NOME': 'NOME', 'SIGLA_EQUI': 'SIGLA_EQUI', 'CONVENIADO': 'CONVENIADO', 'NOME_ABREV': 'NOME_ABREV', 'NOME_MAPA': 'NOME_MAPA', 'CD_RUA': 'CD_RUA', 'NOME_RUA': 'NOME_RUA', 'NOME_RUANO': 'NOME_RUANO', 'NUM_PRED': 'NUM_PRED', 'COMPL_END': 'COMPL_END', 'DIVULGAR_E': 'DIVULGAR_E', 'INDFISCAL': 'INDFISCAL', 'CD_BAIRRO': 'CD_BAIRRO', 'BAIRRO': 'BAIRRO', 'QUADR_EQUI': 'QUADR_EQUI', 'CD_REGIONA': 'CD_REGIONA', 'REGIONAL': 'REGIONAL', 'CD_DISTRIT': 'CD_DISTRIT', 'CD_EQUI_DI': 'CD_EQUI_DI', 'NM_DISTRIT': 'NM_DISTRIT', 'FUNC_MANHA': 'FUNC_MANHA', 'FUNC_TARDE': 'FUNC_TARDE', 'FUNC_NOITE': 'FUNC_NOITE', 'FUNC_24HR': 'FUNC_24HR', 'TELEFONE': 'TELEFONE', 'RAMAL': 'RAMAL', 'EMAIL': 'EMAIL', 'SITE': 'SITE', 'DT_INAUGUR': 'DT_INAUGUR', 'DT_ATUALIZ': 'DT_ATUALIZ', 'OBSERVACAO': 'OBSERVACAO', 'FONTE': 'FONTE', 'CD_MANTENE': 'CD_MANTENE', 'DS_MANTENE': 'DS_MANTENE', 'SIGLA_MANT': 'SIGLA_MANT', 'INATIVO_EQ': 'INATIVO_EQ', 'LAT_SIRGAS': 'LAT_SIRGAS', 'LON_SIRGAS': 'LON_SIRGAS', });
lyr_TERMINAL_DE_TRANSPORTE_6.set('fieldAliases', {'CD_EQUI': 'CD_EQUI', 'CD_LOCAL': 'CD_LOCAL', 'CD_TEMA': 'CD_TEMA', 'TEMA': 'TEMA', 'ID_EQUIP': 'ID_EQUIP', 'EQUIPAMENT': 'EQUIPAMENT', 'CD_TIPO_EQ': 'CD_TIPO_EQ', 'TIPO_EQUI': 'TIPO_EQUI', 'CD_DEP_ADM': 'CD_DEP_ADM', 'DEP_ADMIN': 'DEP_ADMIN', 'NOME_COMPL': 'NOME_COMPL', 'PRE_NOME': 'PRE_NOME', 'NOME': 'NOME', 'SIGLA_EQUI': 'SIGLA_EQUI', 'CONVENIADO': 'CONVENIADO', 'NOME_ABREV': 'NOME_ABREV', 'NOME_MAPA': 'NOME_MAPA', 'CD_RUA': 'CD_RUA', 'NOME_RUA': 'NOME_RUA', 'NOME_RUANO': 'NOME_RUANO', 'NUM_PRED': 'NUM_PRED', 'COMPL_END': 'COMPL_END', 'DIVULGAR_E': 'DIVULGAR_E', 'INDFISCAL': 'INDFISCAL', 'CD_BAIRRO': 'CD_BAIRRO', 'BAIRRO': 'BAIRRO', 'QUADR_EQUI': 'QUADR_EQUI', 'CD_REGIONA': 'CD_REGIONA', 'REGIONAL': 'REGIONAL', 'CD_DISTRIT': 'CD_DISTRIT', 'CD_EQUI_DI': 'CD_EQUI_DI', 'NM_DISTRIT': 'NM_DISTRIT', 'FUNC_MANHA': 'FUNC_MANHA', 'FUNC_TARDE': 'FUNC_TARDE', 'FUNC_NOITE': 'FUNC_NOITE', 'FUNC_24HR': 'FUNC_24HR', 'TELEFONE': 'TELEFONE', 'RAMAL': 'RAMAL', 'EMAIL': 'EMAIL', 'SITE': 'SITE', 'DT_INAUGUR': 'DT_INAUGUR', 'DT_ATUALIZ': 'DT_ATUALIZ', 'OBSERVACAO': 'OBSERVACAO', 'FONTE': 'FONTE', 'CD_MANTENE': 'CD_MANTENE', 'DS_MANTENE': 'DS_MANTENE', 'SIGLA_MANT': 'SIGLA_MANT', 'INATIVO_EQ': 'INATIVO_EQ', 'LAT_SIRGAS': 'LAT_SIRGAS', 'LON_SIRGAS': 'LON_SIRGAS', });
lyr_DIVISA_DE_BAIRROS_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'TIPO': 'TextEdit', 'NOME': 'TextEdit', 'FONTE': 'TextEdit', 'CD_REGIONA': 'TextEdit', 'NM_REGIONA': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_PRACAS_E_JARDINETES_2.set('fieldImages', {'CODIGO': '', 'COD_SMMA': '', 'TIPO': '', 'NOME': '', });
lyr_PARQUES_E_BOSQUES_3.set('fieldImages', {'CODIGO': 'TextEdit', 'CODIGO_SMM': 'TextEdit', 'TIPO': 'TextEdit', 'NOME': 'TextEdit', 'TEXTO_MAPA': 'TextEdit', });
lyr_CICLOVIA_OFICIAL_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODIGO': 'TextEdit', 'CLASSE': 'TextEdit', 'TIPO': 'TextEdit', 'LOCALIZACA': 'TextEdit', 'BAIRRO': 'TextEdit', 'REGIONAL': 'TextEdit', 'OBS': 'TextEdit', 'DATA': 'TextEdit', 'FONTE': 'TextEdit', 'TIPO_2005': 'TextEdit', 'PAVIMENTO_': 'TextEdit', 'SINALIZACA': 'TextEdit', 'ILUMINACAO': 'TextEdit', 'LARGURA_20': 'TextEdit', 'TIPO_2018': 'TextEdit', 'PAVIMENTO1': 'TextEdit', 'SINALIZA_1': 'TextEdit', 'SINALIZA_2': 'TextEdit', 'ILUMINAC_1': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_terminalvoronoi_5.set('fieldImages', {'fid': 'TextEdit', 'cat': 'Range', 'CD_EQUI': 'Range', 'CD_LOCAL': 'TextEdit', 'CD_TEMA': 'Range', 'TEMA': 'TextEdit', 'ID_EQUIP': 'Range', 'EQUIPAMENT': 'TextEdit', 'CD_TIPO_EQ': 'Range', 'TIPO_EQUI': 'TextEdit', 'CD_DEP_ADM': 'Range', 'DEP_ADMIN': 'TextEdit', 'NOME_COMPL': 'TextEdit', 'PRE_NOME': 'TextEdit', 'NOME': 'TextEdit', 'SIGLA_EQUI': 'TextEdit', 'CONVENIADO': 'TextEdit', 'NOME_ABREV': 'TextEdit', 'NOME_MAPA': 'TextEdit', 'CD_RUA': 'TextEdit', 'NOME_RUA': 'TextEdit', 'NOME_RUANO': 'TextEdit', 'NUM_PRED': 'TextEdit', 'COMPL_END': 'TextEdit', 'DIVULGAR_E': 'TextEdit', 'INDFISCAL': 'TextEdit', 'CD_BAIRRO': 'Range', 'BAIRRO': 'TextEdit', 'QUADR_EQUI': 'TextEdit', 'CD_REGIONA': 'Range', 'REGIONAL': 'TextEdit', 'CD_DISTRIT': 'Range', 'CD_EQUI_DI': 'Range', 'NM_DISTRIT': 'TextEdit', 'FUNC_MANHA': 'TextEdit', 'FUNC_TARDE': 'TextEdit', 'FUNC_NOITE': 'TextEdit', 'FUNC_24HR': 'TextEdit', 'TELEFONE': 'TextEdit', 'RAMAL': 'TextEdit', 'EMAIL': 'TextEdit', 'SITE': 'TextEdit', 'DT_INAUGUR': 'DateTime', 'DT_ATUALIZ': 'DateTime', 'OBSERVACAO': 'TextEdit', 'FONTE': 'TextEdit', 'CD_MANTENE': 'Range', 'DS_MANTENE': 'TextEdit', 'SIGLA_MANT': 'TextEdit', 'INATIVO_EQ': 'TextEdit', 'LAT_SIRGAS': 'TextEdit', 'LON_SIRGAS': 'TextEdit', });
lyr_TERMINAL_DE_TRANSPORTE_6.set('fieldImages', {'CD_EQUI': 'TextEdit', 'CD_LOCAL': 'TextEdit', 'CD_TEMA': 'TextEdit', 'TEMA': 'TextEdit', 'ID_EQUIP': 'TextEdit', 'EQUIPAMENT': 'TextEdit', 'CD_TIPO_EQ': 'TextEdit', 'TIPO_EQUI': 'TextEdit', 'CD_DEP_ADM': 'TextEdit', 'DEP_ADMIN': 'TextEdit', 'NOME_COMPL': 'TextEdit', 'PRE_NOME': 'TextEdit', 'NOME': 'TextEdit', 'SIGLA_EQUI': 'TextEdit', 'CONVENIADO': 'TextEdit', 'NOME_ABREV': 'TextEdit', 'NOME_MAPA': 'TextEdit', 'CD_RUA': 'TextEdit', 'NOME_RUA': 'TextEdit', 'NOME_RUANO': 'TextEdit', 'NUM_PRED': 'TextEdit', 'COMPL_END': 'TextEdit', 'DIVULGAR_E': 'TextEdit', 'INDFISCAL': 'TextEdit', 'CD_BAIRRO': 'Range', 'BAIRRO': 'TextEdit', 'QUADR_EQUI': 'TextEdit', 'CD_REGIONA': 'Range', 'REGIONAL': 'TextEdit', 'CD_DISTRIT': 'TextEdit', 'CD_EQUI_DI': 'TextEdit', 'NM_DISTRIT': 'TextEdit', 'FUNC_MANHA': 'TextEdit', 'FUNC_TARDE': 'TextEdit', 'FUNC_NOITE': 'TextEdit', 'FUNC_24HR': 'TextEdit', 'TELEFONE': 'TextEdit', 'RAMAL': 'TextEdit', 'EMAIL': 'TextEdit', 'SITE': 'TextEdit', 'DT_INAUGUR': 'DateTime', 'DT_ATUALIZ': 'DateTime', 'OBSERVACAO': 'TextEdit', 'FONTE': 'TextEdit', 'CD_MANTENE': 'TextEdit', 'DS_MANTENE': 'TextEdit', 'SIGLA_MANT': 'TextEdit', 'INATIVO_EQ': 'TextEdit', 'LAT_SIRGAS': 'TextEdit', 'LON_SIRGAS': 'TextEdit', });
lyr_DIVISA_DE_BAIRROS_1.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'TIPO': 'no label', 'NOME': 'no label', 'FONTE': 'no label', 'CD_REGIONA': 'no label', 'NM_REGIONA': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_PRACAS_E_JARDINETES_2.set('fieldLabels', {'CODIGO': 'no label', 'COD_SMMA': 'no label', 'TIPO': 'no label', 'NOME': 'no label', });
lyr_PARQUES_E_BOSQUES_3.set('fieldLabels', {'CODIGO': 'no label', 'CODIGO_SMM': 'no label', 'TIPO': 'no label', 'NOME': 'no label', 'TEXTO_MAPA': 'no label', });
lyr_CICLOVIA_OFICIAL_4.set('fieldLabels', {'OBJECTID': 'no label', 'CODIGO': 'no label', 'CLASSE': 'no label', 'TIPO': 'no label', 'LOCALIZACA': 'no label', 'BAIRRO': 'no label', 'REGIONAL': 'no label', 'OBS': 'no label', 'DATA': 'no label', 'FONTE': 'no label', 'TIPO_2005': 'no label', 'PAVIMENTO_': 'no label', 'SINALIZACA': 'no label', 'ILUMINACAO': 'no label', 'LARGURA_20': 'no label', 'TIPO_2018': 'no label', 'PAVIMENTO1': 'no label', 'SINALIZA_1': 'no label', 'SINALIZA_2': 'no label', 'ILUMINAC_1': 'no label', 'SHAPE_LEN': 'no label', });
lyr_terminalvoronoi_5.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'CD_EQUI': 'no label', 'CD_LOCAL': 'no label', 'CD_TEMA': 'no label', 'TEMA': 'no label', 'ID_EQUIP': 'no label', 'EQUIPAMENT': 'no label', 'CD_TIPO_EQ': 'no label', 'TIPO_EQUI': 'no label', 'CD_DEP_ADM': 'no label', 'DEP_ADMIN': 'no label', 'NOME_COMPL': 'no label', 'PRE_NOME': 'no label', 'NOME': 'no label', 'SIGLA_EQUI': 'no label', 'CONVENIADO': 'no label', 'NOME_ABREV': 'no label', 'NOME_MAPA': 'no label', 'CD_RUA': 'no label', 'NOME_RUA': 'no label', 'NOME_RUANO': 'no label', 'NUM_PRED': 'no label', 'COMPL_END': 'no label', 'DIVULGAR_E': 'no label', 'INDFISCAL': 'no label', 'CD_BAIRRO': 'no label', 'BAIRRO': 'no label', 'QUADR_EQUI': 'no label', 'CD_REGIONA': 'no label', 'REGIONAL': 'no label', 'CD_DISTRIT': 'no label', 'CD_EQUI_DI': 'no label', 'NM_DISTRIT': 'no label', 'FUNC_MANHA': 'no label', 'FUNC_TARDE': 'no label', 'FUNC_NOITE': 'no label', 'FUNC_24HR': 'no label', 'TELEFONE': 'no label', 'RAMAL': 'no label', 'EMAIL': 'no label', 'SITE': 'no label', 'DT_INAUGUR': 'no label', 'DT_ATUALIZ': 'no label', 'OBSERVACAO': 'no label', 'FONTE': 'no label', 'CD_MANTENE': 'no label', 'DS_MANTENE': 'no label', 'SIGLA_MANT': 'no label', 'INATIVO_EQ': 'no label', 'LAT_SIRGAS': 'no label', 'LON_SIRGAS': 'no label', });
lyr_TERMINAL_DE_TRANSPORTE_6.set('fieldLabels', {'CD_EQUI': 'no label', 'CD_LOCAL': 'no label', 'CD_TEMA': 'no label', 'TEMA': 'no label', 'ID_EQUIP': 'no label', 'EQUIPAMENT': 'no label', 'CD_TIPO_EQ': 'no label', 'TIPO_EQUI': 'no label', 'CD_DEP_ADM': 'no label', 'DEP_ADMIN': 'no label', 'NOME_COMPL': 'no label', 'PRE_NOME': 'no label', 'NOME': 'no label', 'SIGLA_EQUI': 'no label', 'CONVENIADO': 'no label', 'NOME_ABREV': 'no label', 'NOME_MAPA': 'no label', 'CD_RUA': 'no label', 'NOME_RUA': 'no label', 'NOME_RUANO': 'no label', 'NUM_PRED': 'no label', 'COMPL_END': 'no label', 'DIVULGAR_E': 'no label', 'INDFISCAL': 'no label', 'CD_BAIRRO': 'no label', 'BAIRRO': 'no label', 'QUADR_EQUI': 'no label', 'CD_REGIONA': 'no label', 'REGIONAL': 'no label', 'CD_DISTRIT': 'no label', 'CD_EQUI_DI': 'no label', 'NM_DISTRIT': 'no label', 'FUNC_MANHA': 'no label', 'FUNC_TARDE': 'no label', 'FUNC_NOITE': 'no label', 'FUNC_24HR': 'no label', 'TELEFONE': 'no label', 'RAMAL': 'no label', 'EMAIL': 'no label', 'SITE': 'no label', 'DT_INAUGUR': 'no label', 'DT_ATUALIZ': 'no label', 'OBSERVACAO': 'no label', 'FONTE': 'no label', 'CD_MANTENE': 'no label', 'DS_MANTENE': 'no label', 'SIGLA_MANT': 'no label', 'INATIVO_EQ': 'no label', 'LAT_SIRGAS': 'no label', 'LON_SIRGAS': 'no label', });
lyr_TERMINAL_DE_TRANSPORTE_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});