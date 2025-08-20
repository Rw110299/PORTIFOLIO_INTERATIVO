from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# Atualizar progresso
@app.route('/api/progresso', methods=['POST'])
def progresso():
    dados = request.json
    with open('dados/usuarios.json', 'r+') as f:
        usuarios = json.load(f)
        for u in usuarios:
            if u['email'] == dados['email']:
                u['progresso'][dados['projeto']] = dados['status']
        f.seek(0)
        json.dump(usuarios, f, indent=2)
        f.truncate()
    return jsonify({'status': 'ok'})
