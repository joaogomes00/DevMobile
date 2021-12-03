# João Pedro Gomes de Lemos
# 0050016060
import pymysql.cursors
import json


def listArtBr():
    db_host="database-1.cgom2mgudpia.us-east-1.rds.amazonaws.com"
    db_banco="devmob1"
    
    listaArtBr =[]
    jsonArtBr = {}
    
    
    # Connect to the database
    connection = pymysql.connect(host=db_host,
                                user='admin',
                                password='password',
                                database=db_banco,
                                cursorclass=pymysql.cursors.DictCursor)

    with connection:

        with connection.cursor() as cursor:
            # Read a single record
            sql = "SELECT nome,gols,time FROM artilheirosbr order by gols desc"
            cursor.execute(sql)
            registros = cursor.fetchall()
            for artBr in registros:
                listaArtBr.append(artBr["nome"])
                listaArtBr.append(artBr["gols"])
                listaArtBr.append(artBr["time"])
    
    #monta o json de saida
    jsonArtBr["artilheirosbr"] = listaArtBr
    json_object = json.dumps(jsonArtBr, indent=4 ) 
    
    return json_object