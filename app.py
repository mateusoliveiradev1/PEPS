import os
import json
from functools import wraps
from flask import Flask, render_template, request, redirect, url_for, session, send_from_directory
from werkzeug.security import generate_password_hash, check_password_hash

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
USERS_FILE = os.path.join(BASE_DIR, 'users.json')

app = Flask(__name__, static_folder=None)
app.secret_key = os.environ.get('SECRET_KEY', 'change-this-secret')


def load_users():
    if os.path.exists(USERS_FILE):
        with open(USERS_FILE, 'r') as f:
            return json.load(f)
    return {}


def save_users(users):
    with open(USERS_FILE, 'w') as f:
        json.dump(users, f)


def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if 'user' not in session:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated


@app.route('/')
def home():
    return render_template('index.html', user=session.get('user'))


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        users = load_users()
        if username in users:
            return render_template('signup.html', error='Usuário já existe.')
        users[username] = generate_password_hash(password)
        save_users(users)
        session['user'] = username
        return redirect(url_for('protected'))
    return render_template('signup.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        users = load_users()
        if username in users and check_password_hash(users[username], password):
            session['user'] = username
            return redirect(url_for('protected'))
        return render_template('login.html', error='Credenciais inválidas.')
    return render_template('login.html')


@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect(url_for('home'))


@app.route('/treinamento.html')
@login_required
def treinamento():
    return send_from_directory(BASE_DIR, 'treinamento.html')


@app.route('/<path:filename>')
def static_files(filename):
    # Protege a página de treinamento
    if filename == 'treinamento.html' and 'user' not in session:
        return redirect(url_for('login'))
    file_path = os.path.join(BASE_DIR, filename)
    if os.path.isfile(file_path):
        return send_from_directory(BASE_DIR, filename)
    return 'Arquivo não encontrado', 404


@app.route('/protected')
@login_required
def protected():
    return f'Você está logado como {session["user"]}'


if __name__ == '__main__':
    app.run(debug=True)
