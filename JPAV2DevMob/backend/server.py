# João Pedro Gomes de Lemos
# 0050016060
from flask import Flask
from flask_cors import CORS, cross_origin
from artLib import listArtLib
from artBr import listArtBr
from campBr import listCampBr
from campLib import listCampLib


app = Flask(__name__)
CORS(app)

#rota API
@app.route("/artilheirosbr")
def artilheiros_br():
    resultado = listArtBr()
    return resultado

@app.route("/artilheiroslib")
def artilheiros_lib():
    resultado = listArtLib()
    return resultado

@app.route("/campeoesbr")
def campeoes_br():
    resultado = listCampBr()
    return resultado

@app.route("/campeoeslib")
def campeoes_lib():
    resultado = listCampLib()
    return resultado

if __name__ == "__main__":
    app.run(debug=True)

