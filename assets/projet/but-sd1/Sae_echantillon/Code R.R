# SAE : Estimation par échantillonnage, Centre-Val de Loire

# PARTIE 1.1 : ECHANTILLONNAGE ALEATOIRE SIMPLE 

# Importation des données 
# Lecture du fichier CSV (séparateur point-virgule, format français)
df <- read.csv2("population_francaise_communes.csv")

# Sélection des colonnes utiles + filtre sur la région Centre-Val de Loire
donnees <- df[df["Nom.de.la.région"] == "Centre-Val de Loire",
              c("Code.département", "Commune", "Population.totale")]

# Suppression de tous les caractères non numériques (espaces normaux, insécables, etc.)
# [^0-9] supprime tout ce qui n'est pas un chiffre, quel que soit l'encodage
donnees$Population.totale <- as.numeric(gsub("[^0-9]", "", donnees$Population.totale))

# Suppression des lignes avec NA dans Population.totale
donnees <- donnees[!is.na(donnees$Population.totale), ]

# Affichage des 6 premières lignes
head(donnees)

# Population 
# U = ensemble des communes de la région (variable de travail pour le tirage)
U <- donnees$Commune

# N = nombre total de communes dans la région
N <- length(U)
N  # Affiche 1757

# T = nombre exact d'habitants dans la région 
T <- sum(donnees$Population.totale)
T  # Affiche 2 632 683

# Tirage aléatoire simple 
# Tirage sans remise de n = 100 communes parmi les N communes
n <- 100
E <- sample(U, n)  # Échantillon aléatoire de 100 communes
head(E)

# Extraction des données correspondant aux 100 communes tirées
donnees1 <- donnees[donnees$Commune %in% E, ]

# Création d'un sous-tableau avec uniquement commune + population
donnees2 <- subset(donnees1, select = c(Commune, Population.totale))
head(donnees2)

# Estimation de la moyenne 
# Calcul de la moyenne de population sur l'échantillon
xbar <- mean(donnees2$Population.totale)
xbar  # Moyenne des 100 communes tirées

# Intervalle de confiance à 95% pour la moyenne µ (test de Student)
idcmoy <- t.test(donnees2$Population.totale)$conf.int
idcmoy  # Borne inf et borne sup de l'IDC pour µ

# --- Estimation du total T ---
# Estimation de la population totale : T_test = N * xbar
T_test <- N * xbar
T_test  # Population totale estimée

# IDC pour le total T = IDC pour µ multiplié par N
idcT <- idcmoy * N
idcT  # Intervalle de confiance pour T

# Marge d'erreur = demi-largeur de l'IDC
marge <- (idcT[2] - idcT[1]) / 2
marge  # Marge d'erreur associée à l'estimation

# Répétition 10 fois + export Excel 
# Tableau pour stocker les résultats des 10 tirages
resultats_sas <- data.frame(
  Population_Totale   = numeric(10),
  Population_estimee  = numeric(10),
  IDC_inf             = numeric(10),
  IDC_sup             = numeric(10),
  Marge_erreur        = numeric(10)
)

for (i in 1:10) {
  # Nouveau tirage aléatoire simple à chaque itération
  E_i <- sample(U, n)
  d_i <- donnees[donnees$Commune %in% E_i, ]
  d2_i <- subset(d_i, select = c(Commune, Population.totale))
  
  # Calcul des indicateurs pour ce tirage
  xbar_i   <- mean(d2_i$Population.totale)
  idc_i    <- t.test(d2_i$Population.totale)$conf.int
  T_est_i  <- N * xbar_i
  idcT_i   <- idc_i * N
  marge_i  <- (idcT_i[2] - idcT_i[1]) / 2
  
  # Stockage dans le tableau de résultats
  resultats_sas[i, ] <- c(T, round(T_est_i), round(idcT_i[1]), round(idcT_i[2]), round(marge_i))
}

# Affichage du tableau récapitulatif
print(resultats_sas)

# Export du tableau SAS vers Excel (pour construire le graphique dans Excel)
library(writexl)
write_xlsx(resultats_sas, "resultats_sas_CVL.xlsx")
# Ouvrir ce fichier Excel pour créer le graphique des estimations


# PARTIE 1.2 : ECHANTILLONNAGE ALEATOIRE STRATIFIE

# Chargement du package sampling pour le tirage stratifié
library(sampling)

# --- Création des strates ---
# Utilisation des quartiles de Population.totale comme bornes des strates
summary(donnees$Population.totale)  # Q1=272, médiane=537, Q3=1173

# Découpe en 4 strates selon les quartiles :
# Strate 1 : < 272 hab.
# Strate 2 : 272 à 537 hab.
# Strate 3 : 537 à 1173 hab.
# Strate 4 : > 1173 hab.
# CORRECTION : as.character() évite le bug factor dans strata() (rmultinom)
donnees$strate <- as.character(cut(donnees$Population.totale,
                                   breaks = c(0, 272, 537, 1173, Inf),
                                   labels = c("1", "2", "3", "4")))

# Suppression des lignes sans strate (NA éventuels)
donnees <- donnees[!is.na(donnees$strate), ]

# Nouveau data frame avec les colonnes utiles + strate
donneesstrat <- donnees[, c("Commune", "Population.totale", "strate")]
head(donneesstrat)

# Tri par strate pour faciliter le tirage
data <- donneesstrat[order(donneesstrat$strate), ]

# Suppression des lignes sans strate restantes (sécurité)
data <- data[!is.na(data$strate), ]

# Effectif total de chaque strate (Nh)
# factor() avec levels fixes garantit 4 strates même si l'une est vide
Nh <- table(factor(data$strate, levels = c("1", "2", "3", "4")))
Nh

# Taille totale de la population (vérification : doit égaler N)
N <- sum(Nh)
N

# Poids de chaque strate dans la population (gh = Nh/N)
# as.numeric() supprime les noms du table pour éviter les conflits de dimensions
gh <- as.numeric(Nh) / N
gh

# --- Taille des sous-échantillons (allocation proportionnelle) ---
# nh est proportionnel au poids de chaque strate
n <- 100
nh <- round(as.numeric(Nh) * n / N)
# Ajustement si la somme ne fait pas exactement 100 (problème d'arrondi)
nh[4] <- n - sum(nh[1:3])
nh  # Tailles des sous-échantillons par strate

# Taux de sondage dans chaque strate (fh = nh/Nh)
fh <- nh / as.numeric(Nh)
fh

# --- Tirage stratifié ---
# Tirage aléatoire AVEC remise (srswr) dans chaque strate
st <- strata(data, stratanames = c("strate"), size = nh, method = "srswr")
data1 <- getdata(data, st)  # Récupération de l'échantillon final
head(data1)
length(data1$Commune)  # Vérification : doit afficher 100

# --- Calcul des estimateurs stratifiés ---
# Séparation en 4 sous-échantillons correspondant aux 4 strates
ech1 <- data1[data1$strate == "1", ]  # Strate 1 : communes < 272 hab.
ech2 <- data1[data1$strate == "2", ]  # Strate 2 : communes 272-537 hab.
ech3 <- data1[data1$strate == "3", ]  # Strate 3 : communes 537-1173 hab.
ech4 <- data1[data1$strate == "4", ]  # Strate 4 : communes > 1173 hab.

# Moyennes des 4 sous-échantillons (une par strate)
m1 <- mean(ech1$Population.totale)
m2 <- mean(ech2$Population.totale)
m3 <- mean(ech3$Population.totale)
m4 <- mean(ech4$Population.totale)

# Variances des 4 sous-échantillons (variance empirique corrigée)
var1 <- var(ech1$Population.totale)
var2 <- var(ech2$Population.totale)
var3 <- var(ech3$Population.totale)
var4 <- var(ech4$Population.totale)

# Estimation de la moyenne stratifiée X̄st = somme(Nh * mh) / N
Xbarst <- (Nh[1] * m1 + Nh[2] * m2 + Nh[3] * m3 + Nh[4] * m4) / N

# Estimation de la variance de X̄st (formule de l'échantillonnage stratifié)
varXbarst <- (gh[1])^2 * (1 - fh[1]) * var1 / nh[1] +
  (gh[2])^2 * (1 - fh[2]) * var2 / nh[2] +
  (gh[3])^2 * (1 - fh[3]) * var3 / nh[3] +
  (gh[4])^2 * (1 - fh[4]) * var4 / nh[4]

# IDC pour µ à 95% (loi normale asymptotique)
alpha  <- 0.05
binf   <- Xbarst - qnorm(1 - alpha / 2) * sqrt(varXbarst)  # Borne inférieure
bsup   <- Xbarst + qnorm(1 - alpha / 2) * sqrt(varXbarst)  # Borne supérieure
idcmoy <- c(binf, bsup)
idcmoy

# Estimation du total T par l'estimateur stratifié
Tstr <- N * Xbarst
Tstr

# IDC pour le total T
binf_T <- idcmoy[1] * N
bsup_T <- idcmoy[2] * N
idcT   <- c(binf_T, bsup_T)
idcT

# Marge d'erreur pour le total T
marge <- (idcT[2] - idcT[1]) / 2
marge

# --- Répétition 10 fois + export Excel ---
resultats_strat <- data.frame(
  Population_Totale   = numeric(10),
  Population_estimee  = numeric(10),
  IDC_inf             = numeric(10),
  IDC_sup             = numeric(10),
  Marge_erreur        = numeric(10)
)

for (i in 1:10) {
  # Nouveau tirage stratifié à chaque itération
  st_i    <- strata(data, stratanames = c("strate"), size = nh, method = "srswr")
  data1_i <- getdata(data, st_i)
  
  # Séparation en 4 sous-échantillons
  e1_i <- data1_i[data1_i$strate == "1", ]
  e2_i <- data1_i[data1_i$strate == "2", ]
  e3_i <- data1_i[data1_i$strate == "3", ]
  e4_i <- data1_i[data1_i$strate == "4", ]
  
  # Moyennes et variances par strate
  m_i   <- c(mean(e1_i$Population.totale), mean(e2_i$Population.totale),
             mean(e3_i$Population.totale), mean(e4_i$Population.totale))
  var_i <- c(var(e1_i$Population.totale), var(e2_i$Population.totale),
             var(e3_i$Population.totale), var(e4_i$Population.totale))
  
  # Moyenne stratifiée et sa variance
  Xb_i  <- sum(as.numeric(Nh) * m_i) / N
  vXb_i <- sum(gh^2 * (1 - fh) * var_i / nh)
  
  # IDC et marge d'erreur pour T
  b1_i <- (Xb_i - qnorm(0.975) * sqrt(vXb_i)) * N
  b2_i <- (Xb_i + qnorm(0.975) * sqrt(vXb_i)) * N
  resultats_strat[i, ] <- c(T, round(N * Xb_i), round(b1_i), round(b2_i), round((b2_i - b1_i) / 2))
}

print(resultats_strat)

# Export du tableau stratifié vers Excel
write_xlsx(resultats_strat, "resultats_stratifie_CVL.xlsx")
# --> Ouvrir ce fichier Excel pour créer le graphique des estimations stratifiées


# PARTIE 2 : TRAITEMENT DE DONNEES D'ENQUETE

# Chargement du fichier d'enquête (séparateur point-virgule)
donnees_enq <- read.csv2("EnqueteSportEtudiant2024.csv")

# Affichage des 6 premières lignes
head(donnees_enq)
# 375 individus, 76 variables qualitatives

# --- Choix des variables à croiser avec "sport" ---
# Variables retenues : sexe, deptgeo, deptformation, fumer, sante, alimentation, reussite
# Ces variables sont complètes et liées au mode de vie (susceptibles d'influencer la pratique sportive)

# Tableau croisé sport × sexe
TCD_sexe <- table(donnees_enq$sport, donnees_enq$sexe)
TCD_sexe

# Tableau croisé sport × département géographique
TCD_deptgeo <- table(donnees_enq$sport, donnees_enq$deptgeo)

# Tableau croisé sport × département de formation
TCD_deptform <- table(donnees_enq$sport, donnees_enq$deptformation)

# Tableau croisé sport × statut fumeur
TCD_fumer <- table(donnees_enq$sport, donnees_enq$fumer)

# Tableau croisé sport × état de santé
TCD_sante <- table(donnees_enq$sport, donnees_enq$sante)

# Tableau croisé sport × alimentation
TCD_alim <- table(donnees_enq$sport, donnees_enq$alimentation)

# Tableau croisé sport × réussite
TCD_reussite <- table(donnees_enq$sport, donnees_enq$reussite)

# --- Tests du Khi-deux ---
# Test d'indépendance entre sport et chaque variable choisie
khideux_sexe    <- chisq.test(TCD_sexe)
khideux_deptgeo <- chisq.test(TCD_deptgeo)
khideux_deptform<- chisq.test(TCD_deptform)
khideux_fumer   <- chisq.test(TCD_fumer)
khideux_sante   <- chisq.test(TCD_sante)
khideux_alim    <- chisq.test(TCD_alim)
khideux_reussite<- chisq.test(TCD_reussite)

# Récapitulatif des p-valeurs
p_valeurs <- c(
  Sexe         = khideux_sexe$p.value,
  Deptgeo      = khideux_deptgeo$p.value,
  Deptformation= khideux_deptform$p.value,
  Fumer        = khideux_fumer$p.value,
  Sante        = khideux_sante$p.value,
  Alimentation = khideux_alim$p.value,
  Reussite     = khideux_reussite$p.value
)
print(round(p_valeurs, 4))
# Les p-valeurs < 0.01 indiquent une relation significative avec "sport"

# --- V de Cramer pour les variables significatives (p < 0.01) ---
# Formule : V = sqrt(Chi² / (n * (min(r,c) - 1)))
# Calcul du V de Cramer pour les variables significatives
library(vcd)  # Contient la fonction assocstats()

# Fonction utilitaire pour calculer le V de Cramer manuellement
v_cramer <- function(tableau_croise) {
  chi2 <- chisq.test(tableau_croise)$statistic   # Statistique Chi²
  n    <- sum(tableau_croise)                     # Effectif total
  k    <- min(nrow(tableau_croise), ncol(tableau_croise))  # Min(nb lignes, nb colonnes)
  V    <- sqrt(chi2 / (n * (k - 1)))              # Formule du V de Cramer
  return(as.numeric(V))
}

v_sexe     <- v_cramer(TCD_sexe)
v_deptform <- v_cramer(TCD_deptform)
v_alim     <- v_cramer(TCD_alim)

# Tableau récapitulatif final (Chi-deux, p-valeur, V de Cramer)
recap <- data.frame(
  Variable    = c("Sexe", "Deptgeo", "Deptformation", "Fumer", "Sante", "Alimentation", "Reussite"),
  Chi2_obs    = round(c(khideux_sexe$statistic, khideux_deptgeo$statistic,
                        khideux_deptform$statistic, khideux_fumer$statistic,
                        khideux_sante$statistic, khideux_alim$statistic,
                        khideux_reussite$statistic), 4),
  p_valeur    = round(p_valeurs, 6),
  V_de_Cramer = c(v_sexe, NA, v_deptform, NA, NA, v_cramer(TCD_alim), NA)
)
print(recap)
# La relation la plus forte est indiquée par le V de Cramer le plus élevé