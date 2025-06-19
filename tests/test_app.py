import os
import sys
import pytest

sys.path.append(os.path.dirname(os.path.dirname(__file__)))
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_home_page(client):
    response = client.get('/')
    assert response.status_code == 200
    assert b'Repositor de Hortifr' in response.data

def test_treinamento_requires_login(client):
    response = client.get('/treinamento.html', follow_redirects=False)
    assert response.status_code in (301, 302)
    assert '/login' in response.headers.get('Location', '')
