# João Pedro Gomes de Lemos
# 0050016060
import pymysql.cursors
import json


def listArtLib():
    db_host="database-1.cgom2mgudpia.us-east-1.rds.amazonaws.com"
    db_banco="devmob1"
    
    listaArtLib =[]
    jsonArtLib = {}
    
    
    # Connect to the database
    connection = pymysql.connect(host=db_host,
                                user='admin',
                                password='password',
                                database=db_banco,
                                cursorclass=pymysql.cursors.DictCursor)

    with connection:

        with connection.cursor() as cursor:
            # Read a single record
            sql = "SELECT nome,gols,time FROM artilheiroslib order by gols desc"
            cursor.execute(sql)
            registros = cursor.fetchall()
            for artLib in registros:
                listaArtLib.append(artLib["nome"])
                listaArtLib.append(artLib["gols"])
                listaArtLib.append(artLib["time"])
    
    #monta o json de saida
    jsonArtLib["artilheiroslib"] = listaArtLib
    json_object = json.dumps(jsonArtLib, indent=4 ) 
    
    return json_object