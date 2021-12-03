# João Pedro Gomes de Lemos
# 0050016060
import pymysql.cursors
import json


def listCampLib():
    db_host="database-1.cgom2mgudpia.us-east-1.rds.amazonaws.com"
    db_banco="devmob1"
    
    listaCampLib =[]
    jsonCampLib = {}
    
    
    # Connect to the database
    connection = pymysql.connect(host=db_host,
                                user='admin',
                                password='password',
                                database=db_banco,
                                cursorclass=pymysql.cursors.DictCursor)

    with connection:

        with connection.cursor() as cursor:
            # Read a single record
            sql = "SELECT * FROM campeoeslib order by titulos desc"
            cursor.execute(sql)
            registros = cursor.fetchall()
            for campLib in registros:
                listaCampLib.append(campLib["nome_campeao"])
                listaCampLib.append(campLib["titulos"])
    
    #monta o json de saida
    jsonCampLib["campeoeslib"] = listaCampLib
    json_object = json.dumps(jsonCampLib, indent=4 ) 
    
    return json_object