# João Pedro Gomes de Lemos
# 0050016060
import pymysql.cursors
import json


def listCampBr():
    db_host="database-1.cgom2mgudpia.us-east-1.rds.amazonaws.com"
    db_banco="devmob1"
    
    listaCampBr =[]
    jsonCampBr = {}
    
    
    # Connect to the database
    connection = pymysql.connect(host=db_host,
                                user='admin',
                                password='password',
                                database=db_banco,
                                cursorclass=pymysql.cursors.DictCursor)

    with connection:

        with connection.cursor() as cursor:
            # Read a single record
            sql = "SELECT * FROM campeoesbr order by titulos desc"
            cursor.execute(sql)
            registros = cursor.fetchall()
            for campBr in registros:
                listaCampBr.append(campBr["nome_campeao"])
                listaCampBr.append(campBr["titulos"])
    
    #monta o json de saida
    jsonCampBr["campeoesbr"] = listaCampBr
    json_object = json.dumps(jsonCampBr, indent=4 ) 
    
    return json_object