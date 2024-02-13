# test_login.py

# Anmeldung auf der Website

def test_successful_login():
    # Testfall für erfolgreiche Anmeldung
    assert login('username', 'password') == True

def test_invalid_credentials():
    # Testfall für ungültige Anmeldeinformationen
    assert login('invalid_username', 'invalid_password') == False

# Beispiel: Funktion für die Anmeldung
def login(username, password):
    # Code für die Anmeldung auf der Website
    # Rückgabe True, wenn die Anmeldung erfolgreich ist, ansonsten False
    return username == 'username' and password == 'password'