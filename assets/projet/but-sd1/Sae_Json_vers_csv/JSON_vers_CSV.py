import csv
import json
import os
from datetime import datetime

# CONFIGURATION
nomdossier = "villes.json"


# LECTURE DU FICHIER JSON
try:
    # Se placer dans le dossier du script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    # Ouvrir et lire le fichier JSON
    fichier = open(nomdossier, "r", encoding="utf-8")
    donnees = json.load(fichier)
    fichier.close()
    print(f'Fichier chargé : {len(donnees)} enregistrements')

except FileNotFoundError:
    print("ERREUR : Fichier introuvable")
    exit()
except json.JSONDecodeError:
    print("ERREUR : Format JSON invalide")
    exit()

# TRAITEMENT DES DONNÉES
lignes_completes = []
lignes_incompletes = 0

# Parcourir chaque enregistrement du JSON
for enregistrement in donnees:
    
    # Récupérer les informations
    fields = enregistrement.get('fields', {})
    geometry = enregistrement.get('geometry', {})
    coordinates = geometry.get('coordinates', [])
    
    # Extraire les valeurs nécessaires
    nom_station = fields.get('nom_station')
    nom_polluant = fields.get('nom_poll')
    valeur = fields.get('valeur')
    unite = fields.get('unite')
    date_debut = fields.get('date_debut')
    
    # Extraire latitude et longitude
    if len(coordinates) >= 2:
        longitude = coordinates[0]
        latitude = coordinates[1]
    else:
        longitude = None
        latitude = None
    
    # Vérifier que tous les champs existent
    if nom_station and latitude and longitude and date_debut and nom_polluant and valeur and unite is not None:
        
        # Convertir la date en format français (JJ/MM/AAAA)
        date_obj = datetime.strptime(date_debut, "%Y-%m-%d")
        date_francaise = date_obj.strftime("%d/%m/%Y")
        
        # Créer la ligne pour le CSV (lignes completes sans défault)
        ligne = [nom_station, latitude, longitude, date_francaise, nom_polluant, valeur, unite]
        lignes_completes.append(ligne)
    
    else:
        # Compter les lignes incomplètes
        lignes_incompletes += 1

# ÉCRITURE DU FICHIER CSV

nom_fichier_csv = nomdossier.replace('.json', '.csv')

# Ouvrir le fichier CSV en écriture
fichier_csv = open(nom_fichier_csv, 'w', newline='', encoding='utf-8-sig')
ecritCSV = csv.writer(fichier_csv, delimiter=';')

# Écrire la ligne d'en-tête
ecritCSV.writerow(['Nom_Station', 'Latitude', 'Longitude', 'Date de prélèvement', 'Nom_Polluant', 'Valeur', 'Unité'])

# Écrire toutes les lignes de données
for ligne in lignes_completes:
    ecritCSV.writerow(ligne)

# Fermer le fichier CSV
fichier_csv.close()

# AFFICHAGE DES RÉSULTATS
print(f'\n--- RÉSULTATS ---')
print(f'Fichier créé : {nom_fichier_csv}')
print(f'Lignes exportées : {len(lignes_completes)}')
print(f'Lignes écartées : {lignes_incompletes}')